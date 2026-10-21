# Type Course Quiz

A browser-based multiple-choice quiz for helicopter type-course training, built for one cockpit: mine. Three aircraft, zero backend, and a question bank that remembers every answer you've ever gotten wrong.

**[mattclarke873.github.io/S92](https://mattclarke873.github.io/S92/)**

> **Heads up:** this is a personal training aid, not an official reference. Question accuracy hasn't been independently verified — always cross-check anything you're unsure about.

## 4,114 questions, three type ratings

| Aircraft | Questions |
|---|---|
| S-92 | 1,018 |
| H175 | 1,823 |
| AW139 | 1,273 |
| **Total** | **4,114** |

Each aircraft is split into weekly quizzes that mirror the type course itself, filterable by ATA chapter and question count: S-92 (5 weeks), H175 (4 weeks plus a final exam), AW139 (4 weeks).

## Features

**Adaptive weighting.** Get a question wrong and it comes back sooner; answer it correctly three times running and it backs off, but never fully leaves you alone. Logic lives in `js/progress.js`.

**Progress tracking.** A "Your Progress" panel shows tracked, mastered, and due-for-review counts plus accuracy, stored in `localStorage` per browser — your phone and laptop keep separate scores.

**Report an issue.** Spot a wrong answer? One click sends the question, all three options, and the marked-correct answer to a Formspree inbox.

**Live "last updated" stamp.** Pulled from this repo's latest commit via the GitHub API, so it can't drift the way a cached page would.

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

Hosted via GitHub Pages from this repo. Pushing to the default branch updates the live site (propagation plus Pages caching can take a few minutes to show up).
