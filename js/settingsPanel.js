// Settings cog + panel, injected into every quiz/landing page. Currently
// holds the Dropbox sync section; built so more tools can be added as
// additional .settings-section blocks later.

import {
    isConnected,
    getSavedAppKey,
    getCallbackUrl,
    connectToDropbox,
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
            1. Go to <a href="https://www.dropbox.com/developers/apps" target="_blank" rel="noopener">dropbox.com/developers/apps</a>
            and create an app.<br>
            2. Choose <strong>Scoped access</strong> &rarr; <strong>App folder</strong>.<br>
            3. In the app's <strong>Permissions</strong> tab, enable
            <code>files.content.write</code> and <code>files.content.read</code>.<br>
            4. In the <strong>Settings</strong> tab, add this exact Redirect URI:<br>
            <code class="settings-redirect-uri">${getCallbackUrl()}</code><br><br>
            5. Copy the <strong>App key</strong> and paste it below.`;

        const appKeyInput = document.createElement('input');
        appKeyInput.type = 'text';
        appKeyInput.className = 'settings-input';
        appKeyInput.placeholder = 'Dropbox App Key';
        appKeyInput.value = getSavedAppKey();

        const connectBtn = document.createElement('button');
        connectBtn.type = 'button';
        connectBtn.className = 'settings-btn';
        connectBtn.innerText = 'Connect to Dropbox';
        connectBtn.addEventListener('click', async () => {
            const key = appKeyInput.value.trim();
            if (!key) {
                status.innerText = 'Paste your Dropbox App Key first.';
                return;
            }
            status.innerText = 'Redirecting to Dropbox...';
            try {
                await connectToDropbox(key);
            } catch (err) {
                status.innerText = `Could not start Dropbox login: ${err.message}`;
            }
        });

        section.appendChild(helpText);
        section.appendChild(appKeyInput);
        section.appendChild(connectBtn);
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
