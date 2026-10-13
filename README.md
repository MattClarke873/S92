# Type Course Quiz

A personal, browser-based multiple-choice quiz for helicopter type-course training (S-92, H175, AW139). Static site, no backend — hosted on GitHub Pages at [mattclarke873.github.io/S92](https://mattclarke873.github.io/S92/).

> This is a personal training aid, not an official reference. Question accuracy hasn't been independently verified — always cross-check anything you're unsure about.

## Features

- **Per-aircraft, per-week quizzes** — S-92 (5 weeks), H175 (4 weeks + a final exam), AW139 (4 weeks), each filterable by ATA chapter and question count.
- **Adaptive question weighting** — questions you get wrong show up more often; questions you answer correctly several times in a row ease out of rotation (without ever fully disappearing). See `js/progress.js`.
- **Per-browser progress tracking** — a "Your Progress" panel on every quiz page shows tracked / mastered / due-for-review counts and accuracy. Stored in `localStorage`, so it's per-browser and doesn't sync across devices.
- **Report an issue** — every question has a "Report an issue" link that submits the question text, all 3 answer options, the marked-correct answer, and a free-text description to a Formspree form.
- **"Last updated" timestamp** — the aircraft landing pages show the date/time of the most recent commit to this repo (via the GitHub API), rather than the visitor's own clock.

## Project structure

```
index.html                           Landing page — pick an aircraft

html/
  S92.html, H175.html, AW139.html    Aircraft landing pages (week picker + disclaimer popup)
  S92Week1-5.html                    S-92 quizzes
  H175Week1-4.html, H175Final.html   H175 quizzes
  AW139Week1-4.html                  AW139 quizzes
  Admin.html                         Question-bank browser/filter table + link to report submissions
                                        (not linked from site nav — open directly when needed)
  404.html, dummy.html               Experiments, not wired into the live site

css/
  styles.css                         Shared styles — buttons, cards, popup, progress panel, report form
  home.css                           Bottom nav button base styles
  nav.Start.css / nav.css / navEnd.css   Nav button corner-rounding for first/middle/last page in a week sequence

js/
  script.js            Main quiz logic — question generation, scoring, answer highlighting
  questionBank.js       All question data: array of { id, Aircraft, Category, question, options, correct }
  progress.js           Adaptive weighting + localStorage progress tracking
  reportQuestion.js     "Report an issue" control attached to each question
  config.js             Formspree endpoint used by the report feature (see Configuration)
  updateTime.js         Fetches the latest commit date from GitHub for the "Last updated" line
  popAcknowledge.js     Training-aid disclaimer popup shown on the aircraft landing pages

support_Documents/     Background photos and question-bank images

tools/                 Offline authoring scripts (not part of the live site) — Excel ⇄ questionBank.js converters
```

## Configuration

`js/config.js` holds the Formspree endpoint for the "Report an issue" feature (`REPORT_FORM_ENDPOINT`). To redirect reports somewhere else, create a new form at [formspree.io](https://formspree.io) and swap in its endpoint URL.

`js/updateTime.js` hardcodes the GitHub repo (`mattclarke873/S92`) it checks for the "Last updated" timestamp — update this if the repo is ever renamed.

## Content tools

`tools/` contains local Python/Node scripts used to maintain `questionBank.js` from a spreadsheet — they aren't run by the website itself, just used locally when adding questions:

- `excel_to_js.py` / `import_testexcel_to_js.py` — convert an Excel question sheet into `questionBank.js` entries
- `exportQuestions.js` — reformats `questionBank.js` for CommonJS and exports it to `QuestionBank.xlsx`
- `removeQuotes.py` — strips quotes from object keys for cleaner output

`html/Admin.html` is a browser-based table view of the full question bank (filterable by ID / Aircraft / Category) with a link to the Formspree submissions inbox for reported questions.

## Deployment

Hosted via GitHub Pages from this repo. Pushing to the default branch updates the live site (propagation + Pages caching can take a few minutes to show up).
