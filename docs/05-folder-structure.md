# DPRC Platform — Folder Structure

> **Document Version:** 2.0  
> **Status:** Planned Project Structure  
> **Project:** DPRC Platform

---

# 1. Purpose

The DPRC Platform follows a feature-oriented and modular folder structure designed to support maintainability, scalability and clear separation of responsibilities.

Each directory should have a defined purpose. Related functionality should remain grouped together, while shared components and application-wide services should be organized separately.

The structure should remain simple during early development and evolve as the application grows.

This document describes the intended frontend project structure. Backend and additional client application structures may be defined separately when those components are introduced.

---

# 2. Root Directory Structure

The following structure represents the planned repository organization.

```text
dprc-platform/
│
├── docs/
│   ├── 00-master_architecture.md
│   ├── 01-vision.md
│   ├── 02-roadmap.md
│   ├── 03-architecture.md
│   ├── 04-tech_stack.md
│   └── 05-folder-structure.md
│
├── management/
│
├── public/
│
├── src/
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── ...
```

**Note:** This is a conceptual root structure. The actual repository may contain additional configuration, testing, build and development files.

---

# 3. Frontend Source Structure

The following is the intended structure for the React frontend.

```text
src/
│
├── app/
│   ├── providers/
│   ├── config/
│   └── ...
│
├── assets/
│
├── components/
│   ├── ui/
│   └── shared/
│
├── features/
│   ├── auth/
│   ├── members/
│   ├── research/
│   ├── projects/
│   ├── publications/
│   └── events/
│
├── hooks/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── services/
│   └── api/
│
├── styles/
│
├── utils/
│
├── App.jsx
└── main.jsx
```

The structure may be adjusted as actual implementation requirements become clearer.

---

# 4. Folder Responsibilities

## 4.1 app/

Contains application-level configuration and initialization.

**Responsibilities:**

- Application configuration
- Global providers
- Application initialization
- Shared application setup

Examples:

- Theme provider
- Authentication provider
- Global configuration

## 4.2 assets/

Contains static assets used by the frontend.

**Examples:**

- Images
- Icons
- Logos
- Fonts
- Illustrations

Assets should be organized into subdirectories when necessary.

## 4.3 components/

Contains reusable interface components shared across multiple parts of the application.

**Suggested subdirectories:**

- `ui/` — General-purpose interface components.
- `shared/` — Application-specific components shared by multiple features.

**Examples:**

- Button
- Card
- Modal
- Input
- Navbar
- Footer

Feature-specific components should generally remain inside their respective feature directories.

## 4.4 features/

Contains feature-oriented application modules.

Each feature should group together the code directly associated with its functionality.

**Examples:**

- Authentication
- Members
- Research
- Projects
- Publications
- Events

A feature may contain:

- Components
- Pages
- Hooks
- Services
- Feature-specific utilities
- Types, when applicable

Example:

```text
features/
│
└── research/
    ├── components/
    ├── hooks/
    ├── pages/
    ├── services/
    └── ...
```

Not every feature needs every subdirectory. Create folders when the feature actually requires them.

## 4.5 hooks/

Contains reusable custom React hooks shared across different features.

Feature-specific hooks should generally remain inside their corresponding feature directories.

**Examples:**

- `useTheme.js`
- `useDebounce.js`
- `useMediaQuery.js`

## 4.6 layouts/

Contains reusable application-level layouts.

**Examples:**

- MainLayout
- DashboardLayout
- AuthLayout

Layouts define shared page structures and may include navigation, headers, sidebars and other common interface elements.

## 4.7 pages/

Contains top-level pages that are not exclusively owned by a particular feature.

**Examples:**

- Home
- About
- Contact
- NotFound

Pages closely associated with a specific feature should generally be organized inside that feature.

## 4.8 routes/

Contains application routing configuration.

**Responsibilities:**

- Route definitions
- Route grouping
- Layout-based routing
- Protected route integration
- Navigation configuration

Route protection must work with backend authorization rather than relying only on frontend checks.

## 4.9 services/

Contains shared application services and communication interfaces.

**Suggested subdirectories:**

- `api/` — API client and shared request configuration.

Feature-specific API operations should generally remain inside their respective feature directories.

## 4.10 styles/

Contains application-wide styling and design configuration.

**Examples:**

- Global CSS
- Theme styles
- Design tokens
- Shared styling utilities

Component-specific styling should remain close to the relevant component when appropriate.

## 4.11 utils/

Contains general-purpose utility functions that can be reused across different parts of the application.

**Examples:**

- Date formatting
- String formatting
- Validation helpers
- Data transformation utilities

Feature-specific helper functions should remain within their feature directories.

---

# 5. Organization Principles

The folder structure should follow these principles:

## 5.1 Single Responsibility

Each file and module should have a clear responsibility.

Unrelated functionality should not be combined merely for convenience.

## 5.2 Feature Ownership

Code that belongs exclusively to a feature should generally remain inside that feature's directory.

This helps keep related functionality together and reduces unnecessary dependencies.

## 5.3 Shared Functionality

Components, hooks and services used across multiple features should be placed in appropriate shared directories.

Avoid duplicating common functionality across features.

## 5.4 Controlled Growth

Do not create unnecessary folders or abstraction layers before they are needed.

When a feature becomes larger, introduce additional internal organization based on its actual requirements.

## 5.5 Clear Dependencies

Application-wide components and shared services should avoid unnecessary dependencies on individual feature implementations.

Feature modules should use clearly defined interfaces when interacting with shared application functionality.

---

# 6. Naming Conventions

Consistent naming makes the project easier to navigate and maintain.

| Item | Convention | Example |
|---|---|---|
| React components | PascalCase | `ResearchCard.jsx` |
| Layouts | PascalCase | `MainLayout.jsx` |
| Custom hooks | camelCase with `use` prefix | `useAuth.js` |
| Utility functions | camelCase | `formatDate.js` |
| Variables | camelCase | `currentUser` |
| Constants | UPPER_SNAKE_CASE where appropriate | `API_BASE_URL` |
| Feature directories | lowercase | `research/` |
| Shared directories | lowercase | `components/` |

File names should be descriptive and consistent with the responsibility of their contents.

---

# 7. Future Structure Expansion

As the platform evolves, additional source directories may be introduced for other application environments and infrastructure.

Potential future areas include:

- Backend application
- Database migrations and schema management
- Desktop application
- Mobile application
- AI integration services
- Testing infrastructure
- Deployment and automation configuration

These should be introduced when their corresponding implementation stages begin.

They should not be added to the active source structure merely because they appear in the long-term roadmap.

---

# 8. Guiding Philosophy

**Keep the structure simple. Organize by responsibility. Group by feature. Reuse shared functionality.**

A clean folder structure should make the codebase easier to understand, test, maintain and extend.

The objective is to establish an organization that supports the platform's current development needs without creating unnecessary complexity or restricting future growth.

