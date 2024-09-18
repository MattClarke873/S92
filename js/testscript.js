import { questions as questionBank } from './questionBank.js';

document.addEventListener('DOMContentLoaded', function () {
    const questionCountSelect = document.getElementById('questionCount');
    const questionsContainer = document.getElementById('questions-container');
    const finishBtn = document.getElementById('finishBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultContainer = document.getElementById('result-container');
    const filterBtn = document.getElementById('filterBtn');
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
    const selectAllCheckbox = document.getElementById('selectAll');
    const aircraftInput = document.getElementById('aircraftType'); // Get aircraft type from hidden input

    const aircraftType = aircraftInput ? aircraftInput.value : undefined; // Change undefined as required to set default
    let selectedQuestions = [];
    let filteredQuestions = [];

    // Function to generate random questions
    function generateRandomQuestions(count, questions) {
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        return shuffledQuestions.slice(0, count);
    }

    // Function to display the questions
    function displayQuestions() {
        questionsContainer.innerHTML = '';

        selectedQuestions.forEach((question) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question-container');
            questionElement.innerHTML = `<p>${question.question}</p>`;

            const optionsList = document.createElement('ul');
            optionsList.classList.add('options-list');

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

            questionElement.appendChild(optionsList);
            questionsContainer.appendChild(questionElement);
        });
    }

    // Function to handle option click
    function handleOptionClick() {
        const questionId = parseInt(this.getAttribute('data-question'), 10);
        const optionSelected = this.getAttribute('data-option');

        const otherOptionBtns = document.querySelectorAll(`button[data-question="${questionId}"]`);
        otherOptionBtns.forEach((btn) => {
            btn.classList.remove('selected');
        });

        this.classList.add('selected');
    }

    // Function to highlight the correct and wrong answers
    function highlightAnswers() {
        selectedQuestions.forEach((question) => {
            const questionId = question.id;
            const selectedOptionBtn = document.querySelector(`button[data-question="${questionId}"].selected`);

            // Highlight all correct answers in green
            const correctOptionBtn = document.querySelector(`button[data-question="${questionId}"][data-option="${question.correct}"]`);
            if (correctOptionBtn) {
                correctOptionBtn.style.backgroundColor = 'green';
                correctOptionBtn.style.color = 'white';
            }

            // Highlight the selected wrong answer in red
            if (selectedOptionBtn && selectedOptionBtn.getAttribute('data-option') !== question.correct) {
                selectedOptionBtn.style.backgroundColor = 'red';
                selectedOptionBtn.style.color = 'white';
            }
        });
    }

    // Function to calculate the score and display results
    function calculateScore() {
        let correctCount = 0;

        selectedQuestions.forEach((question) => {
            const questionId = question.id;
            const selectedOptionBtn = document.querySelector(`button[data-question="${questionId}"].selected`);

            if (selectedOptionBtn) {
                const selectedOption = selectedOptionBtn.getAttribute('data-option');
                if (selectedOption === question.correct) {
                    correctCount++;
                }
            }
        });

        const score = correctCount;
        const percentage = (correctCount / selectedQuestions.length) * 100;

        const scoreText = document.createElement('p');
        scoreText.innerHTML = `Score: ${score} / ${selectedQuestions.length}, Percentage: ${percentage.toFixed(2)}%`;
        resultContainer.innerHTML = '';
        resultContainer.appendChild(scoreText);
    }

    // Function to reset the quiz
    function resetQuiz() {
        selectedQuestions = [];
        questionsContainer.innerHTML = '';
        resultContainer.innerHTML = '';
        finishBtn.style.display = 'inline-block';
    }

    // Function to get selected categories
    function getSelectedCategories() {
        const selectedCategories = [];
        categoryCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.value);
            }
        });
        return selectedCategories;
    }

    // Function to apply filters and select questions
    function applyFilters() {
        const selectedCount = parseInt(questionCountSelect.value, 10);
        const selectedCategories = getSelectedCategories();

        filteredQuestions = questionBank.filter((question) => {
            return question.Aircraft === aircraftType && selectedCategories.includes(question.Category);
        });

        filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

        selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);

        displayQuestions();
    }

    // Event listeners
    filterBtn.addEventListener('click', function () {
        applyFilters();
    });

    selectAllCheckbox.addEventListener('change', function () {
        categoryCheckboxes.forEach((checkbox) => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    questionCountSelect.addEventListener('change', function () {
        const selectedCount = parseInt(this.value, 10);
        selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);
        displayQuestions();
    });

    // Event listener for finish button to show correct and wrong answers
    finishBtn.addEventListener('click', function () {
        highlightAnswers();
        calculateScore();
    });

    resetBtn.addEventListener('click', function () {
        resetQuiz();
    });
});
