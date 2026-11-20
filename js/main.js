// Shared script for every page: mobile menu, footer year and project cards.

document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  setUpNavToggle();
  fillYear();
  renderProjects();
});

function setUpNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
}

function fillYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

// Project cards come from data/projects.json; each links to projects/<slug>.html.
async function renderProjects() {
  const list = document.querySelector("[data-projects]");
  if (!list) return;

  try {
    const response = await fetch("data/projects.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const projects = await response.json();
    list.replaceChildren(...projects.map(createProjectCard));
  } catch (error) {
    console.error("Couldn't load projects:", error);
    const item = document.createElement("li");
    item.className = "project-grid__status";
    item.textContent = location.protocol === "file:"
      ? "Projects can't load from a file. Serve the folder over HTTP (see CLAUDE.md)."
      : "Projects couldn't load. Try refreshing the page.";
    list.replaceChildren(item);
  }
}

function createProjectCard(project) {
  const item = document.createElement("li");

  const link = document.createElement("a");
  link.className = "project-card";
  link.href = `projects/${project.slug}.html`;

  const media = document.createElement("div");
  media.className = "project-card__media";
  if (project.thumbnail) {
    const img = document.createElement("img");
    img.src = project.thumbnail;
    img.alt = "";
    img.loading = "lazy";
    media.append(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder";
    placeholder.textContent = "[Thumbnail]";
    media.append(placeholder);
  }

  const body = document.createElement("div");
  body.className = "project-card__body";
  body.append(
    createElement("h3", "project-card__title", project.title),
    createElement("p", "project-card__pitch", project.pitch),
  );

  if (project.tags?.length) {
    const tags = document.createElement("ul");
    tags.className = "tags";
    tags.setAttribute("aria-label", "Tags");
    project.tags.forEach((tag) => tags.append(createElement("li", "", tag)));
    body.append(tags);
  }

  if (project.role) {
    body.append(createElement("p", "project-card__role", project.role));
  }

  link.append(media, body);
  item.append(link);
  return item;
}

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = text ?? "";
  return el;
}
