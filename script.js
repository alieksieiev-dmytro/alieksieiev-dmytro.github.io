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

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".header-title");
  header.classList.add("animate-underline");
});


