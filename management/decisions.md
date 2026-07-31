# Technical Decisions

## 2026-07-25

### Git

Decision:
Use Git from the beginning.

Reason:
Maintain version history and allow rollback.

---

### Frontend Framework

Decision:
React + Vite

Reason:
Fast development, modern ecosystem, scalable.

---

### Styling

Decision:
Tailwind CSS

Reason:
Rapid UI development and consistent design.

---

### Architecture

Decision:
Separate Layout, Navbar and Router.

Reason:
Improves maintainability and reusability.


## 2026-07-31

### Decision: Separate Pages, Sections and Components

Decision:
Homepage content will be organized using:

- Pages → route-level screens
- Sections → page-specific blocks
- Components → reusable UI elements
- Layouts → shared application structure

Reason:
Improves scalability and maintainability as the platform grows.