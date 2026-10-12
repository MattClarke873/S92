import { REPORT_FORM_ENDPOINT } from './config.js';

// Renders a question's answer options as "a: ... | b: ... | c: ..." for
// inclusion in a report, so the reviewer can see all choices at a glance.
function formatOptions(question) {
    return Object.entries(question.options)
        .map(([key, text]) => `${key}: ${text}`)
        .join(' | ');
}

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

        try {
            const response = await fetch(REPORT_FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    aircraft,
                    questionId: question.id,
                    ataCode: question.Category,
                    question: question.question,
                    answerOptions: formatOptions(question),
                    markedCorrect: question.options[question.correct],
                    details,
                    page: window.location.href
                })
            });

            if (response.ok) {
                status.innerText = 'Thanks — your report was sent.';
                textarea.value = '';
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
