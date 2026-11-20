# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
This is a personal portfolio for a Unity Developer.

## Tech Stack
- GitHub Pages
- HTML5
- CSS
- JavaScript

## Structure

Layout: a one-page home (`index.html`). Projects are cards on that page; there is no separate page per project.

- `index.html`: home page sections in order: intro, 01 projects, 02 skills, 03 experience and education, 04 about, 05 workshop (optional extras), 06 contact.
- `data/projects.json`: project cards on the home page, rendered by `js/main.js`. Fields: `title`, `pitch`, `genre`, `tags[]`, `team` (team size, e.g. "~8 people"), `role`, `thumbnail`, `thumbnailPosition` (optional crop focus, e.g. "50% 65%"), `preview` (animated loop shown on hover/focus), `links` (`android` Google Play, `ios` App Store, `web` browser build, `github` source code; an empty value hides its button), `featured` (one project, shown full width first).
- `css/style.css`: all styles, ordered tokens → base → components → layout → home sections → 404 → motion.
- `js/main.js`: shared script (mobile menu, footer year, project cards, section reveal).
- `assets/icons.svg`: icon sprite, used as `<svg class="icon" aria-hidden="true"><use href="assets/icons.svg#i-mail"></use></svg>`.
- `assets/placeholders/`: stand-in images and animated SVG "GIFs". Real media replaces them; don't add real content here.
- `assets/cv/`, `assets/images/`, `assets/projects/<project>/`: CV PDF, site images, per-project media (card thumbnails and previews).
- `404.html`: GitHub Pages' not-found page; uses root-absolute links.
- `.nojekyll`: stops GitHub Pages from running Jekyll, which would hide `_`-prefixed files.

Placeholder text is in `[square brackets]`, written at roughly the real length; content guidance lives in `PORTFOLIO_CONTENT.md`.

## Visual identity ("playful arcade")

- One dark theme. Colors are tokens on `:root` in `css/style.css`: deep violet base (`--c-bg`), pink accent (`--c-pink`) for actions and links, mint (`--c-mint`) for metrics and the "Strong" skill tier, yellow (`--c-yellow`) sparingly for stickers and focus rings.
- Fonts: Rubik 700/800 for headings and stickers, Nunito 400/700 for text (Google Fonts).
- Motifs: flat (untilted) `.sticker` labels, `.pixel-corners` ornaments, chunky offset shadows (`--shadow-chunky`), `.starfield` backgrounds, bouncy hover on `.card--hover`.
- Motion rule: every animation sits in `@media (prefers-reduced-motion: no-preference)`. Animated images go in a `<picture>` with a still `<source media="(prefers-reduced-motion: reduce)">`; the card preview swap in `js/main.js` checks the same setting.
- Keep text/background pairs at WCAG AA contrast when changing tokens.

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
