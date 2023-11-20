
  document.addEventListener('DOMContentLoaded', function () {
      // Show the pop-up when the page loads
      showPopup();
  });

  function showPopup() {
      var popupContainer = document.getElementById('popup-container');
      popupContainer.style.display = 'flex';
  }

  function closePopup() {
      var popupContainer = document.getElementById('popup-container');
      popupContainer.style.display = 'none';
  }

  function checkPassword() {
      var passwordInput = document.getElementById('password');
      var password = passwordInput.value;

      // Replace 'yourSecretPassword' with your actual password
      if (password === 'Boobs') {
          closePopup();
      } else {
          alert('Incorrect password. Please try again.');
          // Clear the input field for the next attempt
          passwordInput.value = '';
      }
  }
