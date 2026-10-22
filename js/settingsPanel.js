// Settings cog + panel, injected into every quiz/landing page. Currently
// holds the Dropbox sync section; built so more tools can be added as
// additional .settings-section blocks later.

import {
    isConnected,
    getSavedAppKey,
    connectToDropbox,
    finishDropboxConnection,
    disconnectDropbox,
    getAccountLabel,
    uploadProgressToDropbox,
    downloadProgressFromDropbox
} from './dropboxSync.js';

function buildDropboxSection() {
    const section = document.createElement('div');
    section.className = 'settings-section';

    const heading = document.createElement('h3');
    heading.innerText = 'Dropbox Sync';

    const status = document.createElement('p');
    status.className = 'settings-status';

    function render() {
        section.innerHTML = '';
        section.appendChild(heading);
        status.innerText = '';
        section.appendChild(status);

        if (isConnected()) {
            renderConnected();
        } else {
            renderDisconnected();
        }
    }

    function renderDisconnected() {
        const helpText = document.createElement('p');
        helpText.className = 'settings-help';
        helpText.innerHTML = `Each person connects their own Dropbox account using their own free
            Dropbox app — nothing goes through any server this site runs.<br><br>
            <strong>1. Open the Dropbox App Console</strong><br>
            Go to <a href="https://www.dropbox.com/developers/apps" target="_blank" rel="noopener">dropbox.com/developers/apps</a>
            and sign in.<br><br>
            <strong>2. Create an app</strong><br>
            Choose <strong>Scoped access</strong>, then <strong>App folder</strong>, give it a name
            nobody else will have used (e.g. "Your Name Quiz Progress"), and create it.<br><br>
            <strong>3. Turn on file permissions</strong><br>
            In the <strong>Permissions</strong> tab, tick these two, then Submit — do this before
            connecting, or sync won't be allowed to save:<br>
            <code>files.content.write</code> <code>files.content.read</code><br><br>
            <strong>4. Copy the App key</strong><br>
            Back on the <strong>Settings</strong> tab, copy the <strong>App key</strong>. Don't use
            the App secret, and leave the redirect URIs empty.<br><br>
            <strong>5. Paste the key below and tap Connect Dropbox</strong><br>
            Dropbox opens in a new tab.<br><br>
            <strong>6. Allow, then paste the code</strong><br>
            Tap Allow. Dropbox shows a code — copy it, come back to this tab, paste it below, and
            tap Finish connecting.`;

        const appKeyInput = document.createElement('input');
        appKeyInput.type = 'text';
        appKeyInput.className = 'settings-input';
        appKeyInput.placeholder = 'Dropbox App Key';
        appKeyInput.value = getSavedAppKey();

        const connectBtn = document.createElement('button');
        connectBtn.type = 'button';
        connectBtn.className = 'settings-btn';
        connectBtn.innerText = 'Connect to Dropbox';

        const codeInput = document.createElement('input');
        codeInput.type = 'text';
        codeInput.className = 'settings-input';
        codeInput.placeholder = 'Paste the code Dropbox gave you';
        codeInput.style.display = 'none';

        const finishBtn = document.createElement('button');
        finishBtn.type = 'button';
        finishBtn.className = 'settings-btn';
        finishBtn.innerText = 'Finish connecting';
        finishBtn.style.display = 'none';

        connectBtn.addEventListener('click', async () => {
            const key = appKeyInput.value.trim();
            if (!key) {
                status.innerText = 'Paste your Dropbox App Key first.';
                return;
            }

            // Open the tab right here, synchronously, before any awaiting —
            // Safari blocks window.open() once it happens after an await,
            // even a fast one. We navigate this already-open tab below.
            const authWindow = window.open('', '_blank');

            status.innerText = 'Opening Dropbox in a new tab...';
            try {
                await connectToDropbox(key, authWindow);
                codeInput.style.display = '';
                finishBtn.style.display = '';
                status.innerText = 'Allow access in the new tab, then paste the code here.';
            } catch (err) {
                status.innerText = `Could not start Dropbox login: ${err.message}`;
                if (authWindow) authWindow.close();
            }
        });

        finishBtn.addEventListener('click', async () => {
            status.innerText = 'Connecting...';
            const result = await finishDropboxConnection(codeInput.value);
            if (result.ok) {
                render();
            } else {
                status.innerText = result.error;
            }
        });

        section.appendChild(helpText);
        section.appendChild(appKeyInput);
        section.appendChild(connectBtn);
        section.appendChild(codeInput);
        section.appendChild(finishBtn);
    }

    function renderConnected() {
        const accountLabel = document.createElement('p');
        accountLabel.className = 'settings-account';
        accountLabel.innerText = 'Connected to Dropbox';
        getAccountLabel()
            .then((label) => {
                accountLabel.innerText = `Connected as ${label}`;
            })
            .catch(() => {
                // Keep the generic label — account lookup failing doesn't affect sync itself.
            });

        const fileNote = document.createElement('p');
        fileNote.className = 'settings-help';
        fileNote.innerHTML = 'Your progress is saved as <code>Apps/&lt;app name&gt;/progress.json</code>. To sync another device, connect it the same way with the same App key.';

        const saveBtn = document.createElement('button');
        saveBtn.type = 'button';
        saveBtn.className = 'settings-btn';
        saveBtn.innerText = 'Save progress to Dropbox';
        saveBtn.addEventListener('click', async () => {
            status.innerText = 'Saving...';
            try {
                await uploadProgressToDropbox();
                status.innerText = 'Saved to Dropbox.';
            } catch (err) {
                status.innerText = `Save failed: ${err.message}`;
            }
        });

        const loadBtn = document.createElement('button');
        loadBtn.type = 'button';
        loadBtn.className = 'settings-btn';
        loadBtn.innerText = 'Load progress from Dropbox';
        loadBtn.addEventListener('click', async () => {
            const confirmed = confirm(
                'This replaces your progress on THIS device with whatever is saved in Dropbox. Continue?'
            );
            if (!confirmed) return;

            status.innerText = 'Loading...';
            try {
                await downloadProgressFromDropbox();
                status.innerText = 'Loaded — reloading page...';
                setTimeout(() => window.location.reload(), 800);
            } catch (err) {
                status.innerText = `Load failed: ${err.message}`;
            }
        });

        const disconnectBtn = document.createElement('button');
        disconnectBtn.type = 'button';
        disconnectBtn.className = 'settings-btn settings-btn-secondary';
        disconnectBtn.innerText = 'Disconnect';
        disconnectBtn.addEventListener('click', () => {
            disconnectDropbox();
            render();
        });

        section.appendChild(accountLabel);
        section.appendChild(fileNote);
        section.appendChild(saveBtn);
        section.appendChild(loadBtn);
        section.appendChild(disconnectBtn);
    }

    render();
    return section;
}

function injectSettingsUI() {
    const cog = document.createElement('button');
    cog.type = 'button';
    cog.id = 'settingsCog';
    cog.className = 'settings-cog';
    cog.innerText = '⚙️';
    cog.title = 'Settings';

    const overlay = document.createElement('div');
    overlay.id = 'settingsOverlay';
    overlay.className = 'settings-overlay';

    const panel = document.createElement('div');
    panel.className = 'settings-panel';

    const header = document.createElement('div');
    header.className = 'settings-panel-header';

    const title = document.createElement('h2');
    title.innerText = 'Settings';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'settings-close';
    closeBtn.innerText = '✕';
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    header.appendChild(title);
    header.appendChild(closeBtn);

    panel.appendChild(header);
    panel.appendChild(buildDropboxSection());

    overlay.appendChild(panel);
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    cog.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    document.body.appendChild(cog);
    document.body.appendChild(overlay);
}

document.addEventListener('DOMContentLoaded', injectSettingsUI);
