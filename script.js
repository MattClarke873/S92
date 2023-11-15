document.addEventListener('DOMContentLoaded', function () {
  const questionCountSelect = document.getElementById('questionCount');
  const questionsContainer = document.getElementById('questions-container');
  const finishBtn = document.getElementById('finishBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultContainer = document.getElementById('result-container');
  const filterBtn = document.getElementById('filterBtn');
  const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
  const selectAllCheckbox = document.getElementById('selectAll');

  let selectedQuestions = [];

  function generateRandomQuestions(count, questions) {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, count);
  }

  function displayQuestions() {
    questionsContainer.innerHTML = '';

    selectedQuestions.forEach((question) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question-container');
      questionElement.innerHTML = `<p>${question.category} - ${question.question}</p>`;

      const optionsList = document.createElement('ul');
      optionsList.classList.add('options-list');

      for (const option in question.options) {
        const optionBtn = document.createElement('button');
        optionBtn.innerText = question.options[option];
        optionBtn.setAttribute('data-question', question.id);
        optionBtn.setAttribute('data-option', option);
        optionBtn.addEventListener('click', handleOptionClick);

        const optionListItem = document.createElement('li');
        optionListItem.appendChild(optionBtn);
        optionsList.appendChild(optionListItem);
      }

      questionElement.appendChild(optionsList);
      questionsContainer.appendChild(questionElement);
    });
  }

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

    const scoreText = document.createElement('p');
    scoreText.innerHTML = `Score: ${score} / ${selectedQuestions.length}, Percentage: ${percentage.toFixed(2)}%`;
    resultContainer.appendChild(scoreText);

    // Hide answered questions, display review section
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

    // Filter questions based on selected categories
    let filteredQuestions = questionBank.filter((question) => {
      return selectedCategories.includes(question.category);
    });

    // Shuffle the filtered questions
    filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

    // Select the specified number of questions
    selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);

    // Display the selected questions
    displayQuestions(selectedQuestions);
  }

  filterBtn.addEventListener('click', function () {
    applyFilters();
  });

  selectAllCheckbox.addEventListener('change', function () {
    // Update the state of all category checkboxes based on the "Select All" checkbox
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  });

  questionCountSelect.addEventListener('change', function () {
    const selectedCount = parseInt(this.value, 10);
    selectedQuestions = generateRandomQuestions(selectedCount, filteredQuestions);
    displayQuestions(selectedQuestions);
  });

  finishBtn.addEventListener('click', function () {
    calculateScore();
  });

  resetBtn.addEventListener('click', function () {
    resetQuiz();
  });
});

