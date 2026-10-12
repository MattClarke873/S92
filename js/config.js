// Endpoint used by the "Report an issue" button on each question.
//
// To enable it:
//   1. Go to https://formspree.io and sign up (free).
//   2. Create a new form (name it anything, e.g. "S92 Question Reports").
//   3. Copy the form's endpoint URL — it looks like
//      'https://formspree.io/f/xxxxxxxx' — and paste it below.
// Until this is set, the report button will tell users reporting isn't
// configured yet instead of trying (and failing) to send anything.
export const REPORT_FORM_ENDPOINT = 'https://formspree.io/f/mqpednqw';
