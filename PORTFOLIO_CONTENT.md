# Unity Developer Portfolio: Content Guide

What a Unity game developer portfolio should contain: the sections, the information in each, and the media types that support it. It doesn't cover visual design or page layout.

---

## Overview of sections

| # | Section | Purpose | Priority |
|---|---------|---------|----------|
| 1 | Introduction | Who you are and what you do, in seconds | Essential |
| 2 | Projects | Proof of ability; the core of the portfolio | Essential |
| 3 | Skills | Scannable summary of your technical stack | Essential |
| 4 | Experience & education | Professional and learning background | Essential |
| 5 | About | Personality, motivation, what you're looking for | Recommended |
| 6 | Contact | How to reach you | Essential |
| 7 | Extras | Devlogs, jams, testimonials, published tools | Optional |

General principles:
- **Quality over quantity.** Show 3–6 strong projects, best first.
- **Show, don't tell.** Use moving media (video, GIFs, playable builds) wherever possible.
- **Be specific.** Use concrete systems, numbers and outcomes instead of general claims.
- **Be honest.** List only what you can discuss confidently in an interview.

---

## 1. Introduction

**Information**
- Full name
- Specific role title, e.g. "Unity Developer: gameplay systems & mobile" (avoid a generic "Game Developer")
- 1–2 sentence summary of strengths and the kind of work you're seeking
- Availability: full-time, contract or freelance; remote or on-site; open to relocation

**Media**
- Showreel video, 30–60 seconds of gameplay clips from your best projects (optional but high impact)
- Professional photo (optional)
- Downloadable CV (PDF)

---

## 2. Projects

The most important section. On this site each project is a card, so pick the fields below that say most in a few words: what the game is, and what you personally built.

### Per-project information

| Field | Description | Example |
|-------|-------------|---------|
| Title | Project name | — |
| Pitch | One-line description of the game | "A physics-based co-op puzzle game about two robots" |
| Genre | Game genre(s) | Puzzle, platformer |
| Platform(s) | Target platforms | PC, Android, WebGL, VR |
| Unity version & pipeline | Engine version and render pipeline | Unity 6, URP |
| Context | Origin of the project | Commercial, personal, game jam, university, client |
| Team size | Number of people involved | Solo / 4 people |
| Duration | Development time | 48 hours / 6 weeks / 1 year |
| Your role | What **you** personally built (critical for team projects) | "Implemented the inventory, save system and enemy AI" |
| Technical highlights | Interesting problems and how you solved them | See list below |
| Results & metrics | Measurable outcomes | "Reduced draw calls from 900 to 150"; "60 fps on mid-range Android"; downloads, ratings, jam ranking |
| Challenges & lessons | What was hard and what you learned (optional, but shows how you think) | — |
| Links | Where to play, see, or read more | Store page, itch.io, playable build, public GitHub repository, devlog |

### Technical highlight topics (pick what applies)
- Custom character controllers and movement systems
- Gameplay systems: inventory, combat, quests, dialogue, progression
- Save/load and data persistence
- AI: NavMesh, state machines, behaviour trees, utility AI
- Procedural generation
- Shaders and visual effects (Shader Graph, HLSL, VFX Graph)
- Performance optimization: pooling, batching, LODs, Jobs/Burst, DOTS/ECS
- Multiplayer and networking
- Editor tools and pipeline automation
- UI systems
- Platform-specific work: mobile, VR/XR, console
- Monetization and live services: IAP, ads, analytics, remote config

### Media per project

| Media type | Purpose | Notes |
|------------|---------|-------|
| Gameplay video | Shows the game in motion | 30 s – 2 min; trimmed, no long intros |
| GIFs / short loops | Quick preview of specific mechanics or features | 3–10 s each; one per highlighted system |
| Screenshots | Visual quality and variety | 3–6 per project; different scenes and moments |
| Key art / thumbnail | Project identity | One representative image |
| Playable build | Lets reviewers try it instantly | Web build, itch.io, or store link |
| Technical visuals | Prove depth of technical work | Profiler captures (before/after), architecture diagrams, editor tool screenshots, shader graphs, debug visualizations |
| Source code link | Backs up technical claims and shows code quality | Public GitHub repository with a clear README; optionally deep links to key scripts |

### What to avoid
- Unmodified tutorial projects (unless substantially extended — then explain what you added)
- Broken links or builds that don't run
- Team projects without a clear statement of your personal contribution
- Uncompressed, oversized media

---

## 3. Skills

### Categories and content

**Unity engine**
- Rendering: URP / HDRP / Built-in, Shader Graph, VFX Graph, lighting and baking, post-processing
- Gameplay: Input System, Physics (2D/3D), Animator / Animation Rigging, Cinemachine, Timeline, AI Navigation
- UI: uGUI, UI Toolkit, TextMeshPro
- Content & architecture: ScriptableObjects, Addressables, Prefab workflows, editor scripting (custom inspectors, editor windows, tools)
- Performance: Profiler, Frame Debugger, Memory Profiler, object pooling, batching, Jobs + Burst, DOTS/ECS
- Platforms: PC, Android, iOS, WebGL, consoles, XR (OpenXR, XR Interaction Toolkit)
- Services: Unity Gaming Services (Authentication, Cloud Save, Remote Config, Analytics), IAP, ads mediation

**Programming**
- C#, with depth indicators: LINQ, async/await, generics, events/delegates
- Architecture & patterns: SOLID, State, Observer, Command, MVC/MVP, dependency injection (Zenject, VContainer)
- HLSL and any other languages (C++, Python for tooling)
- Testing: Unity Test Framework, NUnit

**Networking** (if relevant)
- Frameworks: Netcode for GameObjects, Mirror, Photon (PUN / Fusion), FishNet
- Concepts: client-side prediction, lag compensation, authority models

**Tools & workflow**
- Version control: Git (+ LFS), Unity Version Control (Plastic SCM), Perforce
- IDEs: Rider, Visual Studio
- CI/CD: GitHub Actions, GameCI, Unity Build Automation
- Task tracking: Jira, Trello, Notion
- Adjacent software: Blender, Photoshop, Aseprite, FMOD / Wwise

**Soft skills**
- Keep to one or two lines at most, or demonstrate them through project descriptions instead ("led a 4-person jam team")

**Currently learning**
- One honest line listing technologies in progress (e.g. DOTS/ECS, HLSL)

### Presentation principles
1. **Group by category.** Use 4–6 groups, not one long list.
2. **Show proficiency with tiers, not percentages.**
   - **Strong:** used daily, could teach it
   - **Experienced:** shipped with it
   - **Familiar:** used in one or two projects
3. **Link skills to proof.** Associate each key skill with the project(s) where it was used.
4. **Use exact, searchable names**: "Shader Graph", "Addressables", "Netcode for GameObjects" rather than "shaders" or "multiplayer".
5. **Only list what you'd be comfortable being interviewed on.**

### Example

```
Core        C# · Unity (6, 2022 LTS) · OOP & SOLID · ScriptableObject architecture
Gameplay    Input System · Physics · Cinemachine · NavMesh AI · State machines
Graphics    URP · Shader Graph · Particle System / VFX Graph · Post-processing
Performance Profiler · Object pooling · Addressables · Mobile optimization
Platforms   Android · iOS · WebGL · PC
Tools       Git + LFS · Rider · GitHub Actions (GameCI) · Jira · Blender (basic)
Learning    DOTS/ECS · HLSL
```

**Media**
- Plain text (preferred: scannable, searchable, accessible)
- Small technology icons (optional; supplement the text rather than replace it)

---

## 4. Experience & education

**Information, per work entry**
- Company / client name
- Position title
- Dates (start – end)
- Employment type: full-time, part-time, freelance, internship
- 2–4 bullet points of responsibilities and achievements, with metrics where possible
- Shipped titles, with links

**Information, per education entry**
- Institution, degree or program, dates
- Relevant courses, certifications (e.g. Unity Certified Programmer), or online courses

**Media**
- Downloadable CV (PDF) with the full details
- Company or title logos (optional)
- Certificate links (optional)

---

## 5. About

**Information**
- Short personal paragraph (3–5 sentences)
- What kinds of games you enjoy making and playing
- What drives you as a developer
- What you're looking for next (role type, studio type, remote or relocation)
- Languages spoken
- Location / time zone (optional)

**Media**
- Professional photo

---

## 6. Contact

**Information**
- Email address
- LinkedIn
- GitHub
- itch.io
- Optional: ArtStation, YouTube, X/Bluesky, Steam developer page, Unity Asset Store publisher page
- Downloadable CV (PDF)

**Media**
- Platform icons with links
- Contact form (optional)

---

## 7. Extras (optional)

| Item | Information | Media |
|------|-------------|-------|
| Devlogs / technical articles | "How I built X" write-ups explaining problems and solutions | Text, code snippets, diagrams, GIFs, videos |
| Game jam entries | Jam name, theme, duration, team, ranking | Screenshots, GIFs, playable build links |
| Testimonials | Quotes from teammates, leads, or clients, with name and role | Text, optional photo |
| Published tools & assets | Asset Store packages, open-source libraries, editor tools | Screenshots, demo videos, repository and store links |
| Talks & community | Meetup talks, workshops, mentoring, forum contributions | Slides, recordings, links |
| Awards & recognition | Competitions, festivals, featured placements | Badges, links, certificates |

---

## Media checklist

| Media type | Where used | Format guidance |
|------------|------------|-----------------|
| Showreel video | Introduction | 30–60 s, MP4 or hosted (YouTube/Vimeo) |
| Gameplay videos | Projects | 30 s – 2 min per project |
| GIFs / short loops | Projects, devlogs | 3–10 s; prefer MP4/WebM loops over GIF for file size |
| Screenshots | Projects, jams | 3–6 per project; WebP/PNG/JPG, compressed |
| Key art / thumbnails | Projects | One per project, consistent aspect ratio |
| Playable builds | Projects | Web build or external platform (itch.io, store) |
| Technical visuals | Projects, devlogs | Profiler captures, diagrams, editor tool screenshots |
| Source code links | Projects | Public GitHub repositories with READMEs |
| Professional photo | Introduction or About | One clear, friendly headshot |
| CV | Introduction, Experience, Contact | PDF, 1–2 pages, kept up to date |
| Icons | Skills, Contact | Small, consistent style; always paired with text |

---

## Final quality checklist

- [ ] Role and specialization are clear within seconds
- [ ] 3–6 projects, strongest first
- [ ] Every project states your personal role and contribution
- [ ] Every project has moving media (video or GIF)
- [ ] At least one playable build
- [ ] Linked project repositories are public, clean, and have READMEs
- [ ] Skills are grouped, tiered, and linked to projects
- [ ] All links and builds work
- [ ] Media is compressed and loads quickly
- [ ] CV is current and downloadable
- [ ] Contact information is easy to find
