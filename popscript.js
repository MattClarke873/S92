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
