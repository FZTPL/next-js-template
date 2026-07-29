#  Next.js Feature-Based Boilerplate

A scalable, feature-based boilerplate built with **Next.js App Router** and **TypeScript**. This template follows a modular architecture that keeps features isolated, promotes code reusability, and makes projects easier to maintain as they grow.

Whether you're building a landing page, dashboard, blog system, CMS, or SaaS application, this template provides a clean foundation.

---

##  Features

- Next.js App Router
-  Feature-based architecture
-  TypeScript support
-  Tailwind CSS ready
-  Reusable component structure
-  Modular folder organization
-  API route ready
-  Custom hooks support
-  Environment configuration
-  Production-ready structure
-  Responsive development ready

---

#  Project Structure

```
template-next-js
│
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│
├── constants/
│   ├── ENV.ts
│   └── ROUTES.ts
│
├── features/
│   ├── about/
│   └── homepage/
│       ├── components/
│       ├── constants/
│       ├── hooks/
│       ├── types/
│       └── index.tsx
│
├── hooks/
│
├── lib/
│
├── providers/
│
├── public/
│
├── types/
│
├── utils/
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

# Folder Explanation

## app/

Contains the application's routing using the **Next.js App Router**.

Example:

```
app/
    page.tsx
    layout.tsx
    dashboard/
    api/
```

This folder should only contain:

- Pages
- Layouts
- Route Handlers
- Loading UI
- Error Pages

Avoid writing business logic here.

---

## features/

The **heart of the project**.

Each feature contains everything related to itself.

Example:

```
features/
    homepage/
```

Inside every feature:

```
homepage/

components/

hooks/

constants/

types/

index.tsx
```

This keeps features completely independent.

---

## components/

Contains reusable UI shared across the application.

Examples

```
Button

Input

Navbar

Footer

Card

Modal

Loader
```

If a component belongs only to one feature, place it inside that feature instead.

---

## constants/

Application-wide constants.

Example:

```
ENV.ts

ROUTES.ts
```

Use this folder to store:

- Route names
- Environment variables
- Static values
- Application configuration

---

## hooks/

Reusable custom hooks used across multiple features.

Example

```
useDebounce

useLocalStorage

useWindowSize
```

---

## lib/

Contains project-wide utilities and integrations.

Examples

```
axios.ts

fetch.ts

auth.ts

database.ts

api.ts
```

---

## providers/

Application Providers.

Example

```
ThemeProvider

AuthProvider

QueryProvider
```

These are usually wrapped inside `layout.tsx`.

---

## public/

Stores static assets.

```
images/

icons/

fonts/

logo.svg
```

---

## types/

Global TypeScript types.

Example

```
User.ts

Api.ts

Common.ts
```

Feature-specific types should stay inside their respective feature folders.

---

## utils/

Reusable helper functions.

Example

```
formatDate()

capitalize()

truncate()

slugify()
```

Utilities should not contain React code.

---

#  Feature-Based Architecture

Each feature is self-contained.

Example:

```
features/
    homepage/
        components/
        hooks/
        constants/
        types/
        index.tsx
```

This structure makes it easy to:

- add new features
- remove features
- scale the project
- reduce dependencies between modules

---

# Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
```

---

## 2. Navigate into the project

```bash
cd template-next-js
```

---

## 3. Install dependencies

Using npm

```bash
npm install
```

Using pnpm

```bash
pnpm install
```

Using yarn

```bash
yarn
```

---

## 4. Configure environment variables

Copy the example file.

```bash
cp .env.example .env.local
```

Update the required values.

---

## 5. Start the development server

```bash
npm run dev
```

or

```bash
pnpm dev
```

Visit

```
http://localhost:3000
```

---

#  Development Guidelines

## Add a new feature

Create a new folder inside

```
features/
```

Example

```
features/
    authentication/
```

Recommended structure

```
authentication/

components/

hooks/

constants/

types/

index.tsx
```

---

## Add reusable components

```
components/
    Button.tsx
    Modal.tsx
```

---

## Add global hooks

```
hooks/
    useDebounce.ts
```

---

## Add utilities

```
utils/
    formatDate.ts
```

---

# 📝 Naming Convention

## Components

```
Navbar.tsx

Hero.tsx

FeatureCard.tsx
```

---

## Hooks

```
useAuth.ts

useTheme.ts
```

---

## Constants

```
ROUTES.ts

ENV.ts
```

---

## Types

```
User.ts

Api.ts
```

---

## Utility Functions

```
formatDate.ts

truncate.ts
```

---

# 📦 Recommended Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- ESLint
- Prettier
- React Hook Form
- Zod
- Axios
- Zustand
- Framer Motion
- TanStack Query

---

# 📈 Benefits of This Architecture

- Easy to scale
- Beginner-friendly
- Clean folder organization
- Better code separation
- Reusable components
- Feature isolation
- Easier collaboration
- Faster onboarding
- Production-ready

---

# 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Built as a scalable **Next.js Feature-Based Boilerplate** to serve as a solid starting point for modern web applications.