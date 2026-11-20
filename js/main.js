// Shared script: mobile menu, footer year, project cards and section reveal.

document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("DOMContentLoaded", () => {
  setUpNavToggle();
  fillYear();
  renderProjects();
  setUpReveal();
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
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

function fillYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

// ---------- Project cards ----------
// Cards come from data/projects.json.
// Fields: title, pitch, genre, tags[], team, role, links{android, ios, web, github}, thumbnail, thumbnailPosition, preview, featured.

const PROJECT_LINKS = [
  { key: "android", label: "Google Play", iconId: "i-android" },
  { key: "ios", label: "App Store", iconId: "i-apple" },
  { key: "web", label: "Play in browser", iconId: "i-play" },
  { key: "github", label: "Source code", iconId: "i-github" },
];

// Tags with these exact names get a platform icon.
const PLATFORM_ICONS = { Android: "i-android", iOS: "i-apple", Windows: "i-windows", Browser: "i-globe", WebGL: "i-globe" };

async function renderProjects() {
  const list = document.querySelector("[data-projects]");
  if (!list) return;

  try {
    // "no-cache" revalidates with the server each time, so edited cards show on a normal reload.
    const response = await fetch("data/projects.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const projects = await response.json();
    // The featured project goes first so it spans the top row.
    projects.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    list.replaceChildren(...projects.map(createProjectCard));
  } catch (error) {
    console.error("Couldn't load projects:", error);
    const item = createElement("li", "project-list__status",
      location.protocol === "file:"
        ? "Projects can't load from a file. Serve the folder over HTTP (see CLAUDE.md)."
        : "Projects couldn't load. Try refreshing the page.");
    list.replaceChildren(item);
  }
}

function createProjectCard(project) {
  const card = createElement("li", "card card--hover project-card");
  if (project.featured) card.classList.add("project-card--featured", "pixel-corners");

  // Media: static thumbnail, swapped for the animated preview on hover or focus.
  const media = createElement("div", "media-frame");
  const img = document.createElement("img");
  img.src = project.thumbnail || "assets/placeholders/thumb-1.svg";
  img.alt = "";
  // Optional crop focus for images that aren't 16:9, e.g. "50% 65%" (CSS object-position).
  if (project.thumbnailPosition) img.style.objectPosition = project.thumbnailPosition;
  img.width = 640;
  img.height = 360;
  img.loading = "lazy";
  media.append(img);
  if (project.preview) setUpPreviewSwap(card, img, project.preview);

  const body = createElement("div", "project-card__body");
  if (project.genre) body.append(createElement("span", "sticker", project.genre));

  body.append(
    createElement("h3", "project-card__title", project.title),
    createElement("p", "project-card__pitch", project.pitch),
  );

  if (project.tags?.length) {
    const tags = createElement("ul", "chips");
    tags.setAttribute("aria-label", "Tags");
    project.tags.forEach((tag) => {
      const chip = createElement("li", "chip", tag);
      if (PLATFORM_ICONS[tag]) chip.prepend(icon(PLATFORM_ICONS[tag]));
      tags.append(chip);
    });
    body.append(tags);
  }

  // Labelled lines: "Team: …" and "My role: …".
  [["Team: ", project.team], ["My role: ", project.role]].forEach(([label, value]) => {
    if (!value) return;
    const line = createElement("p", "project-card__fact");
    line.append(createElement("strong", "", label), value);
    body.append(line);
  });

  // One button per non-empty link; the card shows no button row if all are empty.
  const linkButtons = PROJECT_LINKS.filter(({ key }) => project.links?.[key]).map(({ key, label, iconId }) => {
    const button = createElement("a", "button button--small button--secondary", label);
    button.href = project.links[key];
    button.target = "_blank";
    button.rel = "noopener";
    button.prepend(icon(iconId));
    button.setAttribute("aria-label", `${project.title}: ${label} (opens in a new tab)`);
    return button;
  });
  if (linkButtons.length) {
    const actions = createElement("div", "project-card__actions");
    actions.append(...linkButtons);
    body.append(actions);
  }

  card.append(media, body);
  return card;
}

function setUpPreviewSwap(card, img, previewSrc) {
  const stillSrc = img.src;
  const show = () => {
    if (!reducedMotion.matches) img.src = previewSrc;
  };
  const hide = () => {
    img.src = stillSrc;
  };
  card.addEventListener("pointerenter", show);
  card.addEventListener("pointerleave", hide);
  card.addEventListener("focusin", show);
  card.addEventListener("focusout", (event) => {
    if (!card.contains(event.relatedTarget)) hide();
  });
}

// ---------- Section reveal ----------
// Sections marked data-reveal fade in once. CSS hides them only under html.reveal-on,
// which is set after the observer has proven it works, so content can't get stuck hidden.

function setUpReveal() {
  const sections = document.querySelectorAll("[data-reveal]");
  if (!sections.length || reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const root = document.documentElement;
  let reported = false;
  const observer = new IntersectionObserver((entries) => {
    if (!reported) {
      reported = true;
      root.classList.add("reveal-on");
    }
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  sections.forEach((section) => observer.observe(section));
}

// ---------- Helpers ----------

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function icon(id) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS(ns, "use");
  use.setAttribute("href", `assets/icons.svg#${id}`);
  svg.append(use);
  return svg;
}
