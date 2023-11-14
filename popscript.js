document.addEventListener("DOMContentLoaded", function() {
    // Display the pop-up when the page loads
    openPopup();
});

function openPopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "flex"; // Use flex to center the content
}

function closePopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "none";
}
