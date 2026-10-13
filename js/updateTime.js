// Repo whose latest commit date is shown as the "last updated" timestamp.
const REPO = 'mattclarke873/S92';

// Function to format date and time
function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Fetches the most recent commit on the repo and shows when it was made,
// so the timestamp reflects when the site was last updated rather than
// the time the visitor happens to load the page.
async function updateLastSave() {
  const lastSaveElement = document.getElementById('lastSave');
  if (!lastSaveElement) return;

  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}/commits?per_page=1`);
    if (!response.ok) throw new Error('GitHub API request failed');

    const [latestCommit] = await response.json();
    const commitDate = new Date(latestCommit.commit.committer.date);
    lastSaveElement.textContent = `Last updated: ${formatDateTime(commitDate)}`;
  } catch {
    lastSaveElement.textContent = 'Last updated: unavailable';
  }
}

// Call the updateLastSave function when the script loads
document.addEventListener('DOMContentLoaded', updateLastSave);
