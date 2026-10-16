import { REPORT_FORM_ENDPOINT } from './config.js';

// Renders a question's answer options as "a: ... | b: ... | c: ..." for
// inclusion in a report, so the reviewer can see all choices at a glance.
function formatOptions(question) {
    return Object.entries(question.options)
        .map(([key, text]) => `${key}: ${text}`)
        .join(' | ');
}

// Best-effort device location lookup. This triggers the browser's own
// permission prompt — if the reporter denies it, it's unsupported, or it
// times out, this resolves to 'unavailable' rather than blocking the report.
function getLocation(timeoutMs = 5000) {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve('unavailable');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
            },
            () => resolve('unavailable'),
            { timeout: timeoutMs }
        );
    });
}

// Request location once, as soon as this module loads (i.e. as soon as the
// page loads, before any quiz has even been generated) rather than at
// report time. Every "Submit Report" click on this page reuses this same
// result instead of prompting/looking it up again.
const locationPromise = getLocation();

// Adds a collapsible "Report an issue" control to a question element,
// wired to submit the question's details plus a free-text description
// to the configured Formspree endpoint.
export function attachReportControl(questionElement, question, aircraft) {
    const reportToggle = document.createElement('button');
    reportToggle.type = 'button';
    reportToggle.className = 'report-toggle';
    reportToggle.innerText = 'Report an issue';

    const reportForm = document.createElement('div');
    reportForm.className = 'report-form';
    reportForm.style.display = 'none';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'report-name';
    nameInput.placeholder = 'Your name (optional)';

    const textarea = document.createElement('textarea');
    textarea.className = 'report-textarea';
    textarea.placeholder = "What's wrong with this question? (e.g. wrong answer marked correct, typo, unclear wording)";
    textarea.rows = 3;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.className = 'report-submit';
    submitBtn.innerText = 'Submit Report';

    const status = document.createElement('p');
    status.className = 'report-status';

    reportForm.appendChild(nameInput);
    reportForm.appendChild(textarea);
    reportForm.appendChild(submitBtn);
    reportForm.appendChild(status);

    reportToggle.addEventListener('click', () => {
        const isOpen = reportForm.style.display !== 'none';
        reportForm.style.display = isOpen ? 'none' : 'block';
    });

    submitBtn.addEventListener('click', async () => {
        const details = textarea.value.trim();
        if (!details) {
            status.innerText = 'Please describe the issue before submitting.';
            return;
        }

        if (REPORT_FORM_ENDPOINT.includes('REPLACE_ME')) {
            status.innerText = 'Reporting isn\'t configured yet — nothing was sent.';
            return;
        }

        submitBtn.disabled = true;
        status.innerText = 'Sending...';

        // Best-effort — if the IP lookup fails (offline, blocked by an ad
        // blocker, etc.) the report still goes through, just without it.
        let reporterIp = 'unavailable';
        try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            ({ ip: reporterIp } = await ipResponse.json());
        } catch {
            // leave reporterIp as 'unavailable'
        }

        const reporterLocation = await locationPromise;

        try {
            const response = await fetch(REPORT_FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Date: new Date().toLocaleString(),
                    Aircraft: aircraft,
                    ATA_Code: question.Category,
                    Question_Id: question.id,
                    Question: question.question,
                    Answer_Options: formatOptions(question),
                    Marked_Correct: question.options[question.correct],
                    Details: details,
                    Reporter_Name: nameInput.value.trim() || 'anonymous',
                    Reporter_Ip: reporterIp,
                    Reporter_Location: reporterLocation
                })
            });

            if (response.ok) {
                status.innerText = 'Thanks — your report was sent.';
                textarea.value = '';
                nameInput.value = '';
            } else {
                status.innerText = 'Something went wrong. Please try again later.';
                submitBtn.disabled = false;
            }
        } catch {
            status.innerText = 'Network error — please try again later.';
            submitBtn.disabled = false;
        }
    });

    questionElement.appendChild(reportToggle);
    questionElement.appendChild(reportForm);
}
