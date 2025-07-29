function loadHTML(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

loadHTML("header", "header.html");
loadHTML("main", "main.html");
loadHTML("footer", "footer.html");

// Load default first tab content
document.addEventListener("DOMContentLoaded", function () {
  loadTabContent("tab1");
});

function showTab(tabName) {
  // Remove active class from all buttons
  document.querySelectorAll(".tab-buttons button").forEach(btn => btn.classList.remove("active"));
  // Add active class to clicked button
  document.getElementById(`${tabName}-btn`).classList.add("active");
  // Load content
  loadTabContent(tabName);
}

function loadTabContent(tabName) {
  loadHTML("tab-content", `${tabName}.html`);
}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.copy-trigger').forEach(box => {
    box.addEventListener('click', () => {
      const text = box.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text)
        .then(() => {
          alert(`Copied: ${text}`);
        })
        .catch((err) => {
          console.error('Clipboard copy failed:', err);
          alert('Failed to copy.');
        });
    });
  });
});
