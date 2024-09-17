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
    let percentageHistory = [];
    let filteredQuestions = [];

    function generateRandomQuestions(count, questions) {
        const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        return shuffledQuestions.slice(0, count);
    }

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

            // Create a new div to hold the question ID
            const questionIdElement = document.createElement('div');
            questionIdElement.classList.add('question-id');
            questionIdElement.innerText = `Question ID: ${question.id}`;

            questionElement.appendChild(optionsList);
            questionElement.appendChild(questionIdElement); // Append the question ID element
            questionsContainer.appendChild(questionElement);
        });
    }

    function handleOptionClick() {
        const questionId = parseInt(this.getAttribute('data-question'), 10);
        const optionSelected = this.getAttribute('data-option');

        const otherOptionBtns = document.querySelectorAll(`button[data-question="${questionId}"]`);
        otherOptionBtns.forEach((btn) => {
            btn.classList.remove('selected');
        });

        this.classList.add('selected');
    }

    function calculateScore() {
        let correctCount = 0;

        resultContainer.innerHTML = '';

        selectedQuestions.forEach((question) => {
            const questionId = question.id;
            const selectedOptionBtn = document.querySelector(`button[data-question="${questionId}"].selected`);

            const resultText = document.createElement('p');

            if (selectedOptionBtn) {
                const selectedOption = selectedOptionBtn.getAttribute('data-option');
                resultText.innerHTML = `
                    ${question.question} 
                    <br>
                    <br> - Your Answer: ${question.options[selectedOption]},
                    <br> - Correct Answer: ${question.options[question.correct]}
                    <br>
                    <br> ------- 
                    <br> ${question.id}
                    `;

                if (selectedOption === question.correct) {
                    resultText.style.color = 'green';
                    correctCount++;
                } else {
                    resultText.style.color = 'red';
                }
            } else {
                resultText.innerHTML = `
                    ${question.id} - ${question.question} 
                    <br>
                    <br> - Your Answer: Not attempted, 
                    <br> - Correct Answer: ${question.options[question.correct]}
                    <br>
                    <br> ------- 
                    <br> ${question.id}`;

                resultText.style.color = 'red';
            }

            resultContainer.appendChild(resultText);
        });

        const score = correctCount;
        const percentage = (correctCount / selectedQuestions.length) * 100;
        percentageHistory.push(percentage);

        const scoreText = document.createElement('p');
        scoreText.innerHTML = `Score: ${score} / ${selectedQuestions.length}, Percentage: ${percentage.toFixed(2)}%`;
        resultContainer.appendChild(scoreText);

        const lastFivePercentages = percentageHistory.slice(Math.max(percentageHistory.length - 5, 0));
        const percentageHistoryText = document.createElement('p');
        percentageHistoryText.innerHTML = `Last 5 Scores: ${lastFivePercentages.map(p => p.toFixed(2)).join('%, ')}%`;
        resultContainer.appendChild(percentageHistoryText);

        finishBtn.style.display = 'none';
        questionsContainer.style.display = 'none';
        resultContainer.style.display = 'block';
    }

    function resetQuiz() {
        selectedQuestions = [];
        questionsContainer.innerHTML = '';
        resultContainer.innerHTML = '';
        questionsContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        questionCountSelect.selectedIndex = 0;

        finishBtn.style.display = 'inline-block';
    }

    function getSelectedCategories() {
        const selectedCategories = [];
        categoryCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.value);
            }
        });
        return selectedCategories;
    }

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

    finishBtn.addEventListener('click', function () {
        calculateScore();
    });

    resetBtn.addEventListener('click', function () {
        resetQuiz();
    });
});
