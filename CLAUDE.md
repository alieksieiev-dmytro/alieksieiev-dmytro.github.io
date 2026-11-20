# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
This is a personal portfolio for a Unity Developer.

## Tech Stack
- GitHub Pages
- HTML5
- CSS
- JavaScript

## Structure

Layout: a one-page home (`index.html`) whose project cards link to a separate case-study page per project.

- `index.html`: home page sections in order: intro, projects, skills, experience and education, about, contact.
- `projects/<slug>.html`: one case study per project. Copy `projects/project-template.html` to start one.
- `data/projects.json`: project cards on the home page, rendered by `js/main.js`. Each entry's `slug` must match its page in `projects/`.
- `css/style.css`: all styles; colors, fonts and spacing are tokens on `:root`.
- `js/main.js`: shared script (mobile menu, footer year, project cards).
- `assets/cv/`, `assets/images/`, `assets/projects/<slug>/`: CV PDF, site images, per-project media.
- `404.html`: GitHub Pages' not-found page; uses root-absolute links.
- `.nojekyll`: stops GitHub Pages from running Jekyll, which would hide `_`-prefixed files.

Placeholder text is in `[square brackets]`; content guidance lives in `PORTFOLIO_CONTENT.md`.

## Git Workflow

- `main` is production: GitHub Pages serves the root of `main` as-is (no build step), so every push or merge to `main` goes live at https://alieksieiev-dmytro.github.io within minutes. Don't push to `main` without the user's explicit go-ahead.
- Do work on short-lived branches (`feature/<name>`, `fix/<name>`) and merge into `main` when it's ready to ship.
- Commit messages: short imperative subject ("Add projects section", not "last changes"), under ~72 characters, with a body explaining *why* when the change isn't obvious.
- Never force-push `main` or rewrite its history. The previous portfolio site is kept in history before commit `a118074` in case parts need to be recovered.

## Running locally

Open `index.html` directly, or, once pages load other files with `fetch()` (which fails over `file://`), serve the folder over HTTP:

```powershell
python -m http.server 8000
```

Then browse to http://localhost:8000.
