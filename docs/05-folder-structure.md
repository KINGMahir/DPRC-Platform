# DPRC Platform Folder Structure

---

# Purpose

The project follows a feature-oriented, scalable folder structure. Every directory has a clear responsibility, making the platform easier to maintain and expand as new features are added.

---

# Root Structure

```
dprc-platform/
│
├── docs/
├── management/
├── public/
├── src/
├── package.json
├── README.md
└── ...
```

---

# Source Structure

```
src/
│
├── app/
├── assets/
├── components/
├── features/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── styles/
├── utils/
├── main.jsx
└── App.jsx
```

---

# Folder Responsibilities

## app/

Application configuration, providers and global initialization.

---

## assets/

Static assets such as images, icons, logos and fonts.

---

## components/

Reusable UI components shared throughout the application.

Examples:

- Button
- Card
- Modal
- Input
- Navbar
- Footer

---

## features/

Business features organized into independent modules.

Examples:

- Authentication
- Members
- Research
- Projects
- Publications
- Events

Each feature may contain:

- Components
- Pages
- Hooks
- Services
- Types

---

## hooks/

Reusable custom React hooks.

---

## layouts/

Application layouts.

Examples:

- MainLayout
- DashboardLayout
- AuthLayout

---

## pages/

Top-level pages mapped to routes.

Examples:

- Home
- About
- Research
- Contact
- NotFound

---

## routes/

Routing configuration and protected routes.

---

## services/

Communication with backend APIs.

Examples:

- Authentication API
- Member API
- Research API

---

## styles/

Global styles, theme configuration and design tokens.

---

## utils/

Utility functions and helper methods.

---

# Organization Principle

Every file should have a single responsibility.

When a feature grows too large, create a dedicated folder rather than placing unrelated files together.

---

# Naming Convention

- Components → PascalCase
- Pages → PascalCase
- Hooks → camelCase beginning with `use`
- Utilities → camelCase
- Files → descriptive names

Examples:

```
ResearchCard.jsx
MainLayout.jsx
useAuth.js
formatDate.js
```

---

# Guiding Philosophy

Keep the structure simple.

Organize by responsibility rather than convenience.

A clean folder structure makes the project easier to understand, maintain and extend as new contributors join.
