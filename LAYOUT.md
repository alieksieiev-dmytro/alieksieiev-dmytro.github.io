# Site layout

What each section of the portfolio contains, where it lives, and what to put in it. For *why* each piece of content matters, see `PORTFOLIO_CONTENT.md`; for the visual identity and file structure, see `CLAUDE.md`.

The site has two pages. Projects are cards on the home page; there is no separate page per project.

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | One scrolling page: who you are, best projects, skills, background, contact |
| Not found | `404.html` | Shown by GitHub Pages for any missing URL |

Placeholder text is in `[square brackets]`, written at roughly the length the real text should be. Placeholder images live in `assets/placeholders/` and should all be replaced.

---

## Shared across pages

### Header
Sticky bar at the top of every page.

| Element | Content |
|---------|---------|
| Logo badge | Your initials (`[XX]`) in a pink badge with pixel corners |
| Name | `[Full name]`, links to the top of the home page |
| Navigation | Projects · Skills · Experience · About · Contact |
| CV button | Shown on wide screens; downloads `assets/cv/cv.pdf` |

On phones the home navigation collapses into a **Menu** button (closes on link click or Esc).

### Footer
| Element | Content |
|---------|---------|
| Copyright | `© <current year> [Full name]` (year fills in automatically) plus an optional one-liner |
| Link | "Back to top" |

---

## Home page (`index.html`)

Sections run top to bottom in this order. Each numbered section starts with the same **section header**: a sticker ("01 · Projects"), a large heading, and a one-line description. Sections alternate between the base and a slightly lighter background so groups read clearly.

### Intro (hero)
**Goal:** role and specialization clear within seconds.
Layout: text on the left, showreel on the right (stacked on phones), over a starfield background.

| Element | Content | Notes |
|---------|---------|-------|
| Role sticker | `[Role title]`, e.g. "Unity Developer · gameplay and mobile" | Keep it short; it's uppercase |
| Name | `[Full name]` | Page's main heading |
| Summary | 1–2 sentences, ~30 words | Strengths and the role you want |
| Availability chips | e.g. Full-time · Remote · Open to relocation | 2–4 chips |
| Buttons | "View projects" (jumps to Projects), "Download CV" | |
| Quick stats | Two or three tiles: number + label | Columns adapt to the number of tiles. e.g. years of experience, projects worked on |
| Showreel | 30–60 s gameplay video, 16:9 | Replace the `<picture>` with a `<video>` or YouTube embed |

### 01 · Projects
**Goal:** proof of ability — the core of the portfolio.
Cards are generated from `data/projects.json`; you don't edit HTML here.

| Element | Content | Notes |
|---------|---------|-------|
| Featured card | The project marked `"featured": true` | Full width; media left and details right from 1200 px wide, stacked below that so the thumbnail stays close to 16:9 |
| Project cards | All other projects, in a responsive grid | 3–6 projects total, best first |

Each card shows:

| Part | JSON field | Notes |
|------|-----------|-------|
| Thumbnail | `thumbnail` | 16:9 still image |
| Crop focus | `thumbnailPosition` (optional) | Which part of a non-16:9 image stays visible, as CSS `object-position`, e.g. "50% 65%" shows more of the lower half |
| Hover preview | `preview` | Short animated loop shown on hover/focus; skipped if the visitor prefers reduced motion |
| Genre sticker | `genre` | |
| Title | `title` | Plain text; the card doesn't link anywhere |
| Pitch | `pitch` | One line, ~12–15 words |
| Tags | `tags[]` | Platform, context (Unity version is optional). "Android", "iOS", "Windows", "Browser" and "WebGL" get a platform icon |
| Team | `team` | "Team: …", e.g. "~8 people" |
| Role | `role` | "My role: …", ~10 words |
| Link buttons | `links.android`, `links.ios`, `links.web`, `links.github` | "Google Play", "App Store", "Play in browser", "Source code"; each opens in a new tab and is hidden when its value is empty |

### 02 · Skills
**Goal:** a scannable, honest summary of your stack.

| Element | Content | Notes |
|---------|---------|-------|
| Tier legend | Strong · Experienced · Familiar, with their meaning | Fixed text |
| Skill group cards | Five cards: Unity engine, Programming, Graphics, Platforms, Tools and workflow | Each has an icon and a heading |
| Skill chips | One chip per skill, styled by tier | Mint = Strong, pink outline = Experienced, dashed = Familiar. Use exact names ("Shader Graph", not "shaders") |
| "Used in" line | Names of projects that prove the group | Optional per group |
| Currently learning | Animated progress bar + 1–3 technology chips | |

### 03 · Experience
**Goal:** professional and learning background.
A vertical timeline; each entry is a card with a coloured node (pink = work, mint = education).

| Element | Content | Notes |
|---------|---------|-------|
| Work entries | Position · Company, date range and type chips, 2–4 bullet points, "Shipped:" links | Newest first; bullets with metrics where possible |
| Education | Degree or program · Institution, years, relevant courses | Separate sub-group below work |
| Certification chips | Certifications and notable courses | Highlight a Unity certification as a mint chip |

### 04 · About
**Goal:** personality, motivation, what you're looking for.
Layout: photo on the left, text on the right (stacked on phones).

| Element | Content | Notes |
|---------|---------|-------|
| Photo | Professional headshot, square | Shown in a tilted white frame with a "Player 1" sticker |
| Paragraphs | Three: who you are (~45 words), what drives you (~40), what you want next (~30) | First paragraph is larger |
| Fact chips | Languages · City, Country · Time zone | |
| Games I love | Four small square covers with titles | Optional; replace or remove |

### 05 · Workshop (optional extras)
**Goal:** devlogs, jam entries and tools that show initiative.
Three cards in a grid; each whole card links out. Delete the whole section if you have nothing for it yet; it isn't in the navigation, so nothing else needs changing.

| Card | Sticker | Content |
|------|---------|---------|
| Devlog | Devlog | Article title + ~25-word summary, link to the article |
| Game jam | Game jam | Entry title + jam name · theme · duration · team · ranking, link to itch.io |
| Tool | Tool | Tool or package name + ~25-word description, link to repo or store |

### 06 · Contact
**Goal:** make reaching you effortless.
One large panel with a starfield background and pixel corners.

| Element | Content |
|---------|---------|
| Heading | e.g. "Let's make something together" |
| Text | 1–2 inviting sentences, ~25 words |
| Buttons | Email (`mailto:`), CV (PDF) |
| Profile links | LinkedIn, GitHub, itch.io — add or remove as needed |

---

## 404 page (`404.html`)

"Game over" screen: an "Error 404" sticker, "Game over" heading, "This level doesn't exist. Continue?" and a button back to the home page. Links are root-absolute (`/…`) because GitHub Pages serves this page at whatever URL was missing.

---

## Media reference

Current placeholders are SVG; real media will mostly be raster images and video.

| Slot | Shape | Replace with | Notes |
|------|-------|-------------|-------|
| Showreel | 16:9 | MP4/WebM or YouTube embed | 30–60 s |
| Project thumbnail | 16:9 | WebP/JPG, ~1280×720 | Consistent framing across projects |
| Hover preview | 16:9 | MP4/WebM loop (muted), 3–10 s | Prefer video over GIF for size; provide a still for reduced motion |
| Photo | Square | WebP/JPG, ~800×800 | |
| Game covers | Square | WebP/JPG, ~400×400 | |
| Workshop images | 16:9 | WebP/JPG, ~1280×720 | |
| CV | — | PDF at `assets/cv/cv.pdf` | 1–2 pages |

Frames crop images to fit (`object-fit: cover`), so keep the important part of each image near the centre.
