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

## Phase 2 Frontend Development

- Started Phase 2 frontend development.
- Refactored Home page architecture.
- Moved homepage sections into:
  - `src/sections/home/`

Created reusable UI components:

- Card
- Container
- SectionTitle

Built homepage sections:

- Hero
- About
- Features
- Statistics
- Latest Research
- Events
- Join Section
- Footer


## Research Hub Frontend V1

- Started Research Hub frontend development.
- Created Research Hub architecture following the same modular structure as Home.

Added planning documentation:

- `docs/09-research-hub-plan.md`

Implemented Research Hub sections:

- ResearchHero
- SearchResearch
- ResearchCategories
- FeaturedProjects
- RecentPublications
- ResearchStats


## Platform Architecture Foundation

- Created initial shared folder structure.
- Created User module structure:

```

components
pages
hooks
services
store
types
utils

```

Developed Profile system:

- ProfilePage
- ProfileHeader
- AboutCard
- SkillsCard
- EducationCard
- ExperienceCard
- AchievementsCard
- ProjectsCard
- OrganizationsCard
- PublicationsCard
- ActivityTimeline


## Mock Data System

- Created centralized mock data structure.
- Moved user data into:

```

src/mock/users.js

```

- Updated user components to consume centralized mock data.


## Shared UI Foundation

Added shared layout foundation:

- Container
- PageHeader
- Section

Created reusable structure for future modules.


## User Module Architecture

Added module export boundary:

```

src/modules/user/index.js

```

Connected ProfilePage with:

- User module exports
- Shared layout components


## Architecture Improvements

Established scalable frontend structure:

```

Page
|
└── Sections
|
└── Components

```

and:

```

Module
|
├── Pages
├── Components
├── Services
├── Store
└── Utils

```

This structure prepares the platform for future:

- User profiles
- Projects
- Organizations
- Publications
- Database integration
- Backend API connection


### Problems / Notes

- Improved understanding of separating:
  - Pages
  - Sections
  - Components
  - Layouts
  - Modules

- Learned the importance of centralized data management.

- Prepared frontend architecture for future backend migration.


### Current Status

Completed:

✅ Homepage V1 architecture  
✅ Research Hub frontend foundation  
✅ User profile system foundation  
✅ Shared component foundation  
✅ Module architecture foundation  
✅ Mock data foundation  


### Next Session

- Build global application layout:
  - AppLayout
  - Navbar
  - Footer

- Improve global UI consistency.

- Continue platform module development.


## 2026-08-01

### Completed

## Profile System Design Improvement

Improved the profile system from a simple portfolio layout into a more structured knowledge-based interface.

Updated design approach:

- About section:
  - Elegant text presentation
  - Research interest entities

- Skills section:
  - Changed from simple skill list to field/domain-based structure.
  - Introduced separation between:
    - Field
    - Domain
    - Skill Type

- Projects section:
  - Improved project cards with glass-style design.
  - Added entity-based visualization for:
    - Technologies
    - Research Areas
    - Organizations

- Organizations section:
  - Started adapting organization data into richer entity cards.


## UI Component System Improvements

Created new semantic UI components:

- `EntityChip`
  - Used for knowledge entities:
    - Skills
    - Technologies
    - Research Areas
    - Organizations

- `StatusBadge`
  - Used for state information:
    - Completed
    - Running
    - In Progress

- `PeriodDisplay`
  - Used for timeline information:
    - Education duration
    - Experience duration
    - Project periods


## Data Architecture Improvements

Improved mock data structure to better prepare for future database integration.

Changes:

- Separated domain data into individual mock modules:

```

src/mock/

users/
organizations/
projects/
publications/
technologies/
skills/
research/

```

- Components now consume structured data instead of large combined objects.

- Mock data is being treated as a temporary API replacement.


## Design Decisions

Established information visualization rules:

- Entities should look interactive.
- Status should look like state indicators.
- Time periods should use timeline visuals.

Avoid mixing these concepts into one component.


## Lessons Learned

- Good UI requires correct information hierarchy.
- Not every piece of data should behave like a clickable node.
- Component design should consider future database relationships.
- Visual consistency is easier when data semantics are clear.


## Problems / Notes

- Some early sections used the same visual treatment for different data types.
- Refactored education design to separate:
  - Field
  - Status
  - Timeline


## Current Status

Completed:

✅ Glass-style profile cards  
✅ Entity-based project visualization  
✅ Skill domain structure foundation  
✅ Semantic UI components  
✅ Improved mock data organization  


In Progress:

- Education visual refinement
- Experience section redesign
- Organization card improvement
- Publication system


## Next Session

- Complete Education card design.
- Build Experience module using the same design language.
- Refactor Achievements and Publications.
```

