// Import the questionBank module
import { questionBank } from './questionBank.js';

// This event listener ensures that the JavaScript code runs after the HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get references to various HTML elements using their IDs
  const questionCountSelect = document.getElementById('questionCount');
  const questionsContainer = document.getElementById('questions-container');
  const finishBtn = document.getElementById('finishBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultContainer = document.getElementById('result-container');
  const filterBtn = document.getElementById('filterBtn');
  const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
  const selectAllCheckbox = document.getElementById('selectAll');

  // Initialize variables to store quiz data
  let selectedQuestions = [];
  let percentageHistory = [];
  let filteredQuestions = [];

  // Function to generate a random selection of questions
  function generateRandomQuestions(count, questions) {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, count);
  }

  // Function to display questions in the UI
  function displayQuestions() {
    questionsContainer.innerHTML = '';

    selectedQuestions.forEach((question) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question-container');
      questionElement.innerHTML = `<p>${question.category} - ${question.question}</p>`;

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

  // Function to handle option clicks
  function handleOptionClick() {
    const questionId = parseInt(this.getAttribute('data-question'), 10);
    const optionSelected = this.getAttribute('data-option');

    // Deselect other options in the same question
    const otherOptionBtns = document.querySelectorAll(`button[data-question="${questionId}"]`);
    otherOptionBtns.forEach((btn) => {
      btn.classList.remove('selected');
    });

    // Select the clicked option
    this.classList.add('selected');
  }

  // Function to calculate and display the quiz score
  function calculateScore() {
    let correctCount = 0;

    resultContainer.innerHTML = ''; // Clear previous results

    selectedQuestions.forEach((question) => {
      const questionId = question.id;
      const selectedOptionBtn = document.querySelector(`button[data-question="${questionId}"].selected`);

      const resultText = document.createElement('p');

      if (selectedOptionBtn) {
        const selectedOption = selectedOptionBtn.getAttribute('data-option');
        resultText.innerHTML = `
          ${question.category}-${question.id} - ${question.question} 
          <br>
          <br> - Your Answer: ${question.options[selectedOption]},
          <br> - Correct Answer: ${question.options[question.correct]}
          <br>
          <br> ------- `;

        if (selectedOption === question.correct) {
          resultText.style.color = 'green';
          correctCount++;
        } else {
          resultText.style.color = 'red';
        }
      } else {
        resultText.innerHTML = `
          ${question.category}-${question.id} - ${question.question} 
          <br>
          <br> - Your Answer: Not attempted, 
          <br> - Correct Answer: ${question.options[question.correct]}
          <br>
          <br> ------- `;

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

    // Display the last 5 percentages
    const lastFivePercentages = percentageHistory.slice(Math.max(percentageHistory.length - 5, 0));
    const percentageHistoryText = document.createElement('p');
    percentageHistoryText.innerHTML = `Last 5 Scores: ${lastFivePercentages.map(p => p.toFixed(2)).join('%, ')}%`;
    resultContainer.appendChild(percentageHistoryText);

    // Apply blur effect to result container
    resultContainer.classList.add('blur-background');
    resultContainer.classList.add('result-container');
    // Hide the Finish button
    finishBtn.style.display = 'none';

    // Hide answered questions, display review section
    questionsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }

  // Function to reset the quiz
  function resetQuiz() {
    selectedQuestions = [];
    questionsContainer.innerHTML = '';
    resultContainer.innerHTML = '';
    questionsContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    questionCountSelect.selectedIndex = 0;

    // Remove blur effect from result container
    resultContainer.classList.remove('blur-background');
    resultContainer.classList.remove('result-container');

    // Show the Finish button
    finishBtn.style.display = 'inline-block';
  }

  // Function to get selected categories from checkboxes
  function getSelectedCategories() {
    const selectedCategories = [];
    categoryCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedCategories.push(checkbox.value);
      }
    });
    return selectedCategories;
  }

  // Function to apply filters based on selected categories
  function applyFilters() {
    const selectedCount = parseInt(questionCountSelect.value, 10);
    const selectedCategories = getSelectedCategories();

    // Filter questions based on selected categories
    filteredQuestions = questionBank.filter((question) => {
      return selectedCategories.includes(question.category);
    });

    // Shuffle the filtered questions
    filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

    // Select the specified number of questions
    selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);

    // Display the selected questions
    displayQuestions();
  }

  // Event listener for filter button click
  filterBtn.addEventListener('click', function () {
    applyFilters();
  });

  // Event listener for select all checkbox change
  selectAllCheckbox.addEventListener('change', function () {
    // Update the state of all category checkboxes based on the "Select All" checkbox
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  // Event listener for question count select change
  questionCountSelect.addEventListener('change', function () {
    const selectedCount = parseInt(this.value, 10);
    selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);
    displayQuestions();
  });

  // Event listener for finish button click
  finishBtn.addEventListener('click', function () {
    calculateScore();
  });

  // Event listener for reset button click
  resetBtn.addEventListener('click', function () {
    resetQuiz();
  });
});
