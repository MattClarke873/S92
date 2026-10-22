// Tracks per-question performance in localStorage so quizzes can show
// frequently-missed questions more often and ease off ones you've mastered.

const STORAGE_KEY = 'quizProgress.v1';

// A correct streak of this length or more is considered "mastered".
const MASTERED_STREAK = 3;

function loadStore() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function saveStore(store) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function keyFor(aircraft, id) {
    return `${aircraft}-${id}`;
}

// Records the outcome of one answered question.
export function recordResult(aircraft, id, wasCorrect) {
    const store = loadStore();
    const key = keyFor(aircraft, id);
    const entry = store[key] || { seen: 0, correct: 0, wrong: 0, streak: 0 };

    entry.seen += 1;
    if (wasCorrect) {
        entry.correct += 1;
        entry.streak += 1;
    } else {
        entry.wrong += 1;
        entry.streak = 0;
    }

    store[key] = entry;
    saveStore(store);
}

// Weight used for weighted-random question selection.
// Unseen questions get the baseline weight of 1. Each wrong answer raises
// the weight so the question surfaces more often; each answer in a current
// correct streak lowers it (down to a floor) so mastered questions fade out
// without disappearing entirely.
export function getWeight(aircraft, id) {
    const store = loadStore();
    const entry = store[keyFor(aircraft, id)];
    if (!entry) return 1;

    const weight = 1 + entry.wrong * 1.5 - Math.min(entry.streak, 5) * 0.3;
    return Math.max(weight, 0.15);
}

// Picks `count` questions from `questions` without replacement, biased by
// getWeight() so harder/missed questions are more likely to be picked.
export function weightedSample(questions, count, aircraft) {
    const pool = questions.map((q) => ({ q, w: getWeight(aircraft, q.id) }));
    const result = [];
    const n = Math.min(count, pool.length);

    for (let i = 0; i < n; i++) {
        const totalWeight = pool.reduce((sum, item) => sum + item.w, 0);
        let r = Math.random() * totalWeight;
        let idx = 0;
        for (; idx < pool.length - 1; idx++) {
            r -= pool[idx].w;
            if (r <= 0) break;
        }
        result.push(pool[idx].q);
        pool.splice(idx, 1);
    }

    return result;
}

// Aggregate stats for one aircraft type, for the progress panel.
export function getOverallStats(aircraft) {
    const store = loadStore();
    const prefix = `${aircraft}-`;
    let tracked = 0;
    let seen = 0;
    let correct = 0;
    let mastered = 0;
    let dueForReview = 0;

    Object.entries(store).forEach(([key, entry]) => {
        if (!key.startsWith(prefix)) return;
        tracked += 1;
        seen += entry.seen;
        correct += entry.correct;
        if (entry.streak >= MASTERED_STREAK) mastered += 1;
        if (entry.wrong > 0 && entry.streak < MASTERED_STREAK) dueForReview += 1;
    });

    const accuracy = seen > 0 ? (correct / seen) * 100 : 0;
    return { tracked, seen, correct, mastered, dueForReview, accuracy };
}

// Clears ALL tracked progress, across every aircraft. Used by the single
// "Reset Progress" control in the settings panel.
export function resetAllProgress() {
    localStorage.removeItem(STORAGE_KEY);
}
