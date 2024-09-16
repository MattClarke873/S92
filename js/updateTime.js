// Function to format date and time
function formatDateTime(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  
  // Function to update the last save time
  function updateLastSave() {
    const lastSaveElement = document.getElementById('lastSave');
    const now = new Date();
    lastSaveElement.textContent = `Last save: ${formatDateTime(now)}`;
  }
  
  // Call the updateLastSave function when the script loads
  document.addEventListener('DOMContentLoaded', updateLastSave);
  