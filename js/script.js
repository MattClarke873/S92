import { questions as questionBank } from './questionBank.js';
import { recordResult, weightedSample, getOverallStats } from './progress.js';
import { attachReportControl } from './reportQuestion.js';
import { isConnected, uploadProgressToDropbox, downloadProgressFromDropbox } from './dropboxSync.js';

document.addEventListener('DOMContentLoaded', function () {
    // Cache DOM elements for later use
    const questionCountSelect = document.getElementById('questionCount');
    const questionsContainer = document.getElementById('questions-container');
    const finishBtn = document.getElementById('finishBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultContainer = document.getElementById('result-container');
    const filterBtn = document.getElementById('filterBtn');
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    const selectAllCheckbox = document.getElementById('selectAll');
    const aircraftInput = document.getElementById('aircraftType'); // Get aircraft type from hidden input

    resultContainer.style.display = 'none';

    // Get the value of the aircraft type from the hidden input
    const aircraftType = aircraftInput ? aircraftInput.value : undefined;
    let selectedQuestions = [];
    let filteredQuestions = [];

    // Function to pick a specified number of questions from the given questions array,
    // weighted so questions you've gotten wrong more often show up more often, and
    // questions you've answered correctly several times in a row show up less often.
    function generateRandomQuestions(count, questions) {
        return weightedSample(questions, count, aircraftType);
    }

    // Function to display the selected questions and their options
    function displayQuestions() {
        questionsContainer.innerHTML = '';

        selectedQuestions.forEach((question) => {
            // Create a container for the question
            const questionElement = document.createElement('div');
            questionElement.classList.add('question-container');

            // Add a paragraph with the question text
            const questionText = document.createElement('p');
            questionText.innerText = question.question;

            // Add an element to display the question ID with a class for CSS styling
            const questionId = document.createElement('span');
            questionId.classList.add('question-id');
            questionId.innerText = `ATA ${question.Category}                   Question ID: ${question.id}`;
            
            // Append the question text and ID to the question container
            questionElement.appendChild(questionText);
            questionElement.appendChild(questionId);

            // Create a list for options
            const optionsList = document.createElement('ul');
            optionsList.classList.add('options-list');
            
            // Create buttons for each option
            for (const option in question.options) {
                if (question.options.hasOwnProperty(option)) {
                    const optionBtn = document.createElement('button');
                    optionBtn.innerText = question.options[option];
                    optionBtn.setAttribute('data-question', question.id);
                    optionBtn.setAttribute('data-option', option);
                    optionBtn.addEventListener('click', handleOptionClick);

                    const optionListItem = document.createElement('li');
                    optionListItem.appendChild(optionBtn);
                    optionsList.appendChild(optionListItem);
                }
            }

            // Append the options list to the question container
            questionElement.appendChild(optionsList);

            // Let users flag a problem with this specific question
            attachReportControl(questionElement, question, aircraftType);

            questionsContainer.appendChild(questionElement);
        });
    }

    // Function to handle the click event on an option button
    function handleOptionClick() {
        const questionId = parseInt(this.getAttribute('data-question'), 10);
        const optionSelected = this.getAttribute('data-option');

        // Deselect other options for this question
        const otherOptionBtns = document.querySelectorAll(`button[data-question="${questionId}"]`);
        otherOptionBtns.forEach((btn) => {
            btn.classList.remove('selected');
        });

        // Mark the clicked option as selected
        this.classList.add('selected');
    }

    // Function to highlight correct and incorrect answers after finishing the quiz
    function highlightAnswers() {
        // Remove shadow from all buttons
        document.querySelectorAll('button').forEach(button => {
            button.style.boxShadow = 'none';
        });

        selectedQuestions.forEach((question) => {
            const questionId = question.id;
            const selectedOptionBtn = document.querySelector(`button[data-question="${questionId}"].selected`);

            // Get all option buttons for this question
            const optionBtns = document.querySelectorAll(`button[data-question="${questionId}"]`);
            
            // Highlight correct and incorrect answers
            optionBtns.forEach(btn => {
                const option = btn.getAttribute('data-option');
                if (option === question.correct) {
                    // Highlight correct option in green
                    btn.style.backgroundColor = 'green';
                    btn.style.color = 'white';
                } else if (selectedOptionBtn && selectedOptionBtn.getAttribute('data-option') === option) {
                    // Highlight the selected incorrect option in red
                    btn.style.backgroundColor = 'red';
                    btn.style.color = 'white';
                } else {
                    // Default style for unselected incorrect options
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }
            });

            // Check if no option has been selected
            if (!selectedOptionBtn) {
                optionBtns.forEach(btn => {
                    const option = btn.getAttribute('data-option');
                    if (option === question.correct) {
                        // Highlight correct option in green
                        btn.style.backgroundColor = 'green';
                        btn.style.color = 'white';
                    } else {
                        // Highlight incorrect options in red
                        btn.style.backgroundColor = 'red';
                        btn.style.color = 'white';
                    }
                });
            }
        });

        // Remove the shadow from the finish button
        finishBtn.style.boxShadow = 'none';
    }

    // Function to calculate the quiz score, display it, and record each
    // question's outcome so future quizzes can adapt to it.
    function calculateScore() {
        let correctCount = 0;

        selectedQuestions.forEach((question) => {
            const questionId = question.id;
            const selectedOptionBtn = document.querySelector(`button[data-question="${questionId}"].selected`);

            // Check if the selected option is correct
            const selectedOption = selectedOptionBtn ? selectedOptionBtn.getAttribute('data-option') : null;
            const wasCorrect = selectedOption === question.correct;
            if (wasCorrect) {
                correctCount++;
            }

            recordResult(aircraftType, questionId, wasCorrect);
        });

        // Calculate and display the score and percentage
        const score = correctCount;
        const percentage = (correctCount / selectedQuestions.length) * 100;

        const scoreText = document.createElement('p');
        scoreText.innerHTML = `Score: ${score} / ${selectedQuestions.length}, Percentage: ${percentage.toFixed(2)}%`;
        resultContainer.innerHTML = '';
        resultContainer.appendChild(scoreText);

        renderProgressPanel();
        syncProgressToDropboxIfConnected();
    }

    // Function to reset the quiz to its initial state
    function resetQuiz() {
        selectedQuestions = [];
        questionsContainer.innerHTML = '';
        resultContainer.innerHTML = '';
        finishBtn.style.display = 'inline-block';
        finishBtn.style.boxShadow = ''; // Reset the shadow style on reset
        resultContainer.style.display = 'none'; // Ensure result container is hidden
    }

    // Progress panel showing adaptive-learning stats for this aircraft type.
    // Created once here and inserted above the questions container so it
    // doesn't require touching every quiz page's HTML.
    const progressPanel = document.createElement('div');
    progressPanel.id = 'progress-panel';
    progressPanel.className = 'progress-panel';
    questionsContainer.parentNode.insertBefore(progressPanel, questionsContainer);

    function renderProgressPanel() {
        if (!aircraftType) return;
        const stats = getOverallStats(aircraftType);

        progressPanel.innerHTML = '';

        const heading = document.createElement('p');
        heading.className = 'progress-heading';
        heading.innerText = 'Your Progress';
        progressPanel.appendChild(heading);

        const summary = document.createElement('p');
        summary.className = 'progress-summary';
        summary.innerText = stats.tracked === 0
            ? 'No history yet — finish a quiz to start tracking.'
            : `Tracked: ${stats.tracked} | Accuracy: ${stats.accuracy.toFixed(0)}% | Mastered: ${stats.mastered} | Due for review: ${stats.dueForReview}`;
        progressPanel.appendChild(summary);
    }

    // Best-effort — if Dropbox isn't connected this stays silent. If it is,
    // this fires automatically every time a quiz is finished, so progress
    // never needs the manual "Save to Dropbox" button in normal use. A
    // failed sync (network, expired tokens, etc.) doesn't block the score
    // from showing; it's just noted so it's clear it didn't happen.
    function syncProgressToDropboxIfConnected() {
        if (!isConnected()) return;

        const syncNote = document.createElement('p');
        syncNote.className = 'dropbox-sync-note';
        syncNote.innerText = 'Syncing to Dropbox...';
        resultContainer.appendChild(syncNote);

        uploadProgressToDropbox()
            .then(() => {
                syncNote.innerText = 'Synced to Dropbox.';
            })
            .catch((err) => {
                syncNote.innerText = `Dropbox sync failed: ${err.message}`;
            });
    }

    renderProgressPanel();

    // If connected to Dropbox, pull down the latest progress as soon as the
    // page loads, before anything else touches it — so progress made on
    // another device shows up here too. Best effort: silent if it fails,
    // the page works fine off whatever was already stored locally.
    if (isConnected()) {
        downloadProgressFromDropbox()
            .then(() => {
                renderProgressPanel();
            })
            .catch(() => {
                // Local progress is still perfectly usable; nothing to show the user here.
            });
    }

    // Function to get the currently selected categories from the checkboxes
    function getSelectedCategories() {
        const selectedCategories = [];
        categoryCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.value);
            }
        });
        return selectedCategories;
    }

    // Function to filter questions based on selected categories and aircraft type, and then select a random set.
    // Pages with no category checkboxes at all (e.g. a "whole database" exam
    // page) skip category filtering entirely and match every category.
    function applyFilters() {
        const selectedCount = parseInt(questionCountSelect.value, 10);
        const selectedCategories = getSelectedCategories();
        const hasCategoryFilter = categoryCheckboxes.length > 0;

        filteredQuestions = questionBank.filter((question) => {
            if (question.Aircraft !== aircraftType) return false;
            return hasCategoryFilter ? selectedCategories.includes(question.Category) : true;
        });

        filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

        selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);

        displayQuestions();
    }

    // Event listeners
    filterBtn.addEventListener('click', function () {
        applyFilters(); // Apply filters and update questions when filter button is clicked
        resultContainer.style.display = 'none'; // Hide result container when generating quiz
    });

    // Pages with no category checkboxes (e.g. a "whole database" exam page) don't have this control either.
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function () {
            // Check or uncheck all category checkboxes based on the select all checkbox
            categoryCheckboxes.forEach((checkbox) => {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });
    }

    questionCountSelect.addEventListener('change', function () {
        // Update the number of displayed questions when the question count is changed
        const selectedCount = parseInt(this.value, 10);
        selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);
        displayQuestions();
    });

    finishBtn.addEventListener('click', function () {
        // Show the correct and wrong answers and calculate the score when finish button is clicked
        highlightAnswers();
        calculateScore();
        resultContainer.style.display = 'block'; // Show result container
    });

    resetBtn.addEventListener('click', function () {
        resetQuiz(); // Reset the quiz when reset button is clicked
    });
});
