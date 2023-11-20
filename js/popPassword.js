document.addEventListener('DOMContentLoaded', function () {
    // Focus on the password input when the page loads
    document.getElementById('password').focus();

    // Add event listener to the password input for Enter key
    document.getElementById('password').addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        checkPassword();
      }
    });
  });

  function checkPassword() {
    // Get the entered password
    var enteredPassword = document.getElementById('password').value;

    // Check if the password is correct
    if (enteredPassword === "Boobs") {
      // Show the pop-up when the password is correct
      showPopup();
    } else {
      // Handle incorrect password (you can customize this part)
      alert("Incorrect password. Access denied.");
    }
  }

  function showPopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'flex';
  }

  function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
  }
