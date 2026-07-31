# DPRC Development Log

> Note:
> Development of the DPRC Platform began before this log was created.
> Early work included learning React, Vite, Tailwind CSS and building an initial prototype.
> This log records development from the point where the project adopted formal documentation, Git version control and a structured architecture.

## 2026-07-25

### Completed
- Initialized the project structure.
- Created the `docs` and `management` directories.
- Added initial documentation files.
- Learned the basics of Markdown (`.md`) files.
- Initialized the local Git repository.
- Created the first Git commit.
- Updated the project README.
- Completed the Vision, Roadmap, System Architecture, Tech Stack and Folder Structure documents.

### Problems
- Learned how Git works without a GitHub account.
- Configured Git username and email.
- Understood `.gitignore` and why `node_modules` and `dist` are ignored.

### Lessons Learned
- Git repositories are local by default.
- Documentation should evolve alongside the project.
- Small, meaningful commits make the project history easier to understand.

### Next Session
- Refactor the React project architecture.
- Improve routing and layout structure.

---

## 2026-07-26

### Completed
- Refactored React project architecture.
- Created `AppRouter`.
- Extracted the Navbar into a reusable component.
- Learned to inspect changes with `git diff`.
- Used `git restore` to discard unintended changes.
- Created clean commits for architectural changes.

### Problems
- Duplicate `AnimatedButton.jsx` file.
- Accidentally modified `Home.jsx` and `ResearchHub.jsx`, then restored them.

### Lessons Learned
- Review every change before committing.
- Keep components focused on a single responsibility.

### Next Session
- Build the homepage sections.

## 2026-07-31

### Completed

- Started Phase 2 frontend development
- Refactored Home page architecture
- Moved homepage sections into src/sections/home/
- Created reusable UI components:
  - Card
  - Container
  - SectionTitle
- Built homepage sections:
  - Hero
  - About
  - Features
  - Statistics
  - Latest Research
  - Events
  - Join Section
  - Footer
- Expanded platform documentation:
  - Platform Vision
  - Data Model
  - System Workflow
- Created Git milestone commit:
  - feat: build homepage v1 and expand platform documentation

### Problems / Notes

- Learned importance of separating:
  - Pages
  - Sections
  - Components
  - Layouts
- Improved understanding of React architecture.

### Next Session

- Review homepage design
- Plan Research Hub architecture
- Improve reusable components