// Dropbox sync for quiz progress.
//
// Each visitor connects their OWN Dropbox app (their own App Key, created
// free at https://www.dropbox.com/developers/apps) rather than one shared
// app owned by the site. That keeps every person's progress file in their
// own Dropbox account, with nothing passing through or stored on any
// server we run — this site has no backend at all.
//
// Auth uses OAuth2 "Authorization Code with PKCE", the flow designed for
// public clients (browser apps, mobile apps) that can't keep a secret.
// No client secret is ever needed or stored.

const APP_KEY_STORAGE = 'dropboxSync.appKey';
const TOKEN_STORAGE = 'dropboxSync.tokens';
const VERIFIER_STORAGE = 'dropboxSync.pkceVerifier';
const RETURN_TO_STORAGE = 'dropboxSync.returnTo';
const PROGRESS_STORAGE_KEY = 'quizProgress.v1';
const PROGRESS_FILE_PATH = '/progress.json';

function base64UrlEncode(bytes) {
    let str = '';
    bytes.forEach((b) => {
        str += String.fromCharCode(b);
    });
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function generateRandomString(length) {
    const bytes = crypto.getRandomValues(new Uint8Array(length));
    return base64UrlEncode(bytes).slice(0, length);
}

async function sha256(input) {
    const data = new TextEncoder().encode(input);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return base64UrlEncode(new Uint8Array(digest));
}

// Dropbox requires an exact, pre-registered redirect URI. Rather than ask
// each person to register every single quiz page, every page redirects
// through this one fixed callback page — computed from the current URL so
// it works the same on GitHub Pages or a local test server.
export function getCallbackUrl() {
    const href = window.location.href;
    const inHtmlDir = window.location.pathname.includes('/html/');
    const base = inHtmlDir
        ? href.replace(/\/html\/[^/?#]*(?:[?#].*)?$/, '')
        : href.replace(/\/[^/?#]*(?:[?#].*)?$/, '');
    return `${base}/html/dropbox-callback.html`;
}

function getTokens() {
    try {
        return JSON.parse(localStorage.getItem(TOKEN_STORAGE));
    } catch {
        return null;
    }
}

function saveTokens(tokens) {
    localStorage.setItem(TOKEN_STORAGE, JSON.stringify(tokens));
}

export function isConnected() {
    return !!getTokens();
}

export function getSavedAppKey() {
    return localStorage.getItem(APP_KEY_STORAGE) || '';
}

export function disconnectDropbox() {
    localStorage.removeItem(TOKEN_STORAGE);
}

// Kicks off the login — saves the app key, builds the PKCE challenge, and
// sends the browser to Dropbox's own login/consent page.
export async function connectToDropbox(appKey) {
    localStorage.setItem(APP_KEY_STORAGE, appKey);

    const verifier = generateRandomString(64);
    sessionStorage.setItem(VERIFIER_STORAGE, verifier);
    sessionStorage.setItem(RETURN_TO_STORAGE, window.location.href);

    const challenge = await sha256(verifier);

    const authUrl = new URL('https://www.dropbox.com/oauth2/authorize');
    authUrl.searchParams.set('client_id', appKey);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('code_challenge', challenge);
    authUrl.searchParams.set('code_challenge_method', 'S256');
    authUrl.searchParams.set('redirect_uri', getCallbackUrl());
    authUrl.searchParams.set('token_access_type', 'offline');

    window.location.href = authUrl.toString();
}

// Called from dropbox-callback.html once Dropbox redirects back with a code.
// Exchanges it for an access token + refresh token.
export async function completeDropboxConnection() {
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get('error');
    if (errorParam) {
        return { ok: false, error: params.get('error_description') || errorParam };
    }

    const code = params.get('code');
    if (!code) {
        return { ok: false, error: 'No authorization code in the redirect URL.' };
    }

    const appKey = localStorage.getItem(APP_KEY_STORAGE);
    const verifier = sessionStorage.getItem(VERIFIER_STORAGE);
    if (!appKey || !verifier) {
        return { ok: false, error: "Missing app key or login session — please try connecting again." };
    }

    const body = new URLSearchParams({
        code,
        grant_type: 'authorization_code',
        client_id: appKey,
        code_verifier: verifier,
        redirect_uri: getCallbackUrl()
    });

    let response;
    try {
        response = await fetch('https://api.dropboxapi.com/oauth2/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body
        });
    } catch {
        return { ok: false, error: 'Network error contacting Dropbox.' };
    }

    if (!response.ok) {
        const text = await response.text();
        return { ok: false, error: `Dropbox rejected the request (${response.status}): ${text}` };
    }

    const data = await response.json();
    saveTokens({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresAt: Date.now() + data.expires_in * 1000
    });

    sessionStorage.removeItem(VERIFIER_STORAGE);
    const returnTo = sessionStorage.getItem(RETURN_TO_STORAGE) || '../index.html';
    sessionStorage.removeItem(RETURN_TO_STORAGE);

    return { ok: true, returnTo };
}

async function refreshAccessToken() {
    const tokens = getTokens();
    const appKey = localStorage.getItem(APP_KEY_STORAGE);
    if (!tokens || !tokens.refreshToken || !appKey) {
        throw new Error('Not connected to Dropbox.');
    }

    const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: tokens.refreshToken,
        client_id: appKey
    });

    const response = await fetch('https://api.dropboxapi.com/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
    });

    if (!response.ok) {
        throw new Error(`Could not refresh Dropbox access (status ${response.status}).`);
    }

    const data = await response.json();
    const updated = {
        ...tokens,
        accessToken: data.access_token,
        expiresAt: Date.now() + data.expires_in * 1000
    };
    saveTokens(updated);
    return updated.accessToken;
}

async function getValidAccessToken() {
    const tokens = getTokens();
    if (!tokens) {
        throw new Error('Not connected to Dropbox.');
    }
    // Refresh a little early so a slow request doesn't land after expiry.
    if (Date.now() > tokens.expiresAt - 60000) {
        return refreshAccessToken();
    }
    return tokens.accessToken;
}

// Returns an identifying label (email, or display name) for the connected
// Dropbox account, for showing "Connected as ..." in the settings panel.
export async function getAccountLabel() {
    const accessToken = await getValidAccessToken();
    const response = await fetch('https://api.dropboxapi.com/2/users/get_current_account', {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (!response.ok) {
        throw new Error('Could not fetch Dropbox account info.');
    }
    const data = await response.json();
    return data.email || (data.name && data.name.display_name) || 'Connected';
}

// Uploads the current browser's quiz progress to the connected Dropbox
// account's App Folder, overwriting whatever was there before.
export async function uploadProgressToDropbox() {
    const accessToken = await getValidAccessToken();
    const progressData = localStorage.getItem(PROGRESS_STORAGE_KEY) || '{}';

    const response = await fetch('https://content.dropboxapi.com/2/files/upload', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/octet-stream',
            'Dropbox-API-Arg': JSON.stringify({
                path: PROGRESS_FILE_PATH,
                mode: 'overwrite',
                mute: true
            })
        },
        body: progressData
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Upload failed (${response.status}): ${text}`);
    }
}

// Downloads progress.json from the connected Dropbox account and
// overwrites this browser's local progress with it.
export async function downloadProgressFromDropbox() {
    const accessToken = await getValidAccessToken();

    const response = await fetch('https://content.dropboxapi.com/2/files/download', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Dropbox-API-Arg': JSON.stringify({ path: PROGRESS_FILE_PATH })
        }
    });

    if (response.status === 409) {
        throw new Error('No progress file in Dropbox yet — use "Save to Dropbox" first.');
    }
    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Download failed (${response.status}): ${text}`);
    }

    const text = await response.text();
    localStorage.setItem(PROGRESS_STORAGE_KEY, text);
}
