# Next.js Feature-Based Architecture Boilerplate

A scalable and beginner-friendly Next.js boilerplate built using a feature-based architecture and Clean Architecture principles. This project separates business logic, application logic, infrastructure, and presentation layers to improve maintainability and scalability.

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI
- ESLint
- Prettier

---

## Project Structure

```
.
├── app/
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│
├── constants/
│
├── lib/
│
├── public/
│
├── src/
│   ├── application/
│   │   ├── auth/
│   │   └── inventory/
│   │
│   ├── domain/
│   │   ├── auth/
│   │   │   ├── AuthService.ts
│   │   │   └── User.ts
│   │   │
│   │   └── inventory/
│   │       └── Product.ts
│   │
│   ├── infrastructure/
|   |    ├── auth/
│   |    |    └── AuthRepository.ts
│   |    |
|   |    └── inventory/
|   |        └── ProductRepository.ts
│   │
│   └── presentation/
│       └── features/
│           └── homepage/
│               ├── components/
│               ├── constant/
│               ├── hooks/
│               ├── types/
│               └── index.tsx
│
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

# Folder Explanation

## app/

Contains all routes using the Next.js App Router.

Example:

- Home Page
- Login
- Register
- Layout
- Global CSS

---

## components/

Stores reusable UI components that can be shared across multiple features.

Examples:

- Button
- Input
- Card
- Modal
- Loader

---

## constants/

Contains application-wide constants.

Examples:

- Navigation Links
- API URLs
- Roles
- Theme Colors

---

## lib/

Contains shared utilities.

Examples:

- API Client
- Helper Functions
- Validation
- Authentication Helpers

---

## public/

Stores static assets.

Examples:

- Images
- SVG Icons
- Fonts

---

# Source Architecture

The `src` directory follows a Clean Architecture approach.

```
Presentation
        ↓
Application
        ↓
Domain
        ↓
Infrastructure
```

Each layer has a single responsibility.

---

## application/

Contains application use cases.

Responsibilities:

- Business workflows
- Coordinating services
- Managing application logic
- Calling repositories
- Authentication actions

Example:

```
application/
    auth/
        login.ts
        register.ts

    inventory/
        createProduct.ts
        updateProduct.ts
```

---

## domain/

The core of the application.

Contains business rules only.

### Entities

Example:

```
User.ts
Product.ts
```

Entities define the application's core models.

### Services

Example:

```
AuthService.ts
```

Contains business logic independent of frameworks.

The domain layer should never depend on React, Next.js, or APIs.

---

## infrastructure/

Handles external services.

Examples:

- API requests
- Database
- Repository implementations
- Authentication providers
- Local Storage
- Third-party SDKs

---

## presentation/

Contains everything related to the user interface.

Each feature has its own folder.

Example:

```
homepage/
```

Inside every feature:

### components/

Feature-specific UI.

Example:

```
Hero.tsx
Navbar.tsx
Footer.tsx
FeatureCard.tsx
```

---

### constant/

Constants used only within the feature.

Example:

```
heroContent.ts
statistics.ts
```

---

### hooks/

Feature-specific custom hooks.

Example:

```
useHero.ts
useTestimonials.ts
```

---

### types/

Feature-specific TypeScript types.

Example:

```
Hero.ts
Feature.ts
```

---

### index.tsx

Acts as the feature entry point.

Usually renders all feature components.

---

# Naming Convention

### Components

```
PascalCase

Navbar.tsx
HeroSection.tsx
ProductCard.tsx
```

### Hooks

```
camelCase

useAuth.ts
useProduct.ts
```

### Constants

```
UPPER_SNAKE_CASE

API_URL
MAX_PRODUCTS
USER_ROLE
```

### Types

```
PascalCase

User.ts
Product.ts
```

### Utility Functions

```
camelCase

formatDate.ts
generateToken.ts
```

---

# Using Shadcn/UI

Shadcn components should be placed inside the `components/ui` folder.

Example:

```
components/
└── ui/
    ├── button.tsx
    ├── input.tsx
    ├── card.tsx
    ├── dialog.tsx
    └── ...
```

Feature-specific wrappers or composed components should remain inside the corresponding feature folder.

Example:

```
presentation/
└── features/
    └── homepage/
        └── components/
            HeroButton.tsx
```

This keeps generated UI components centralized while allowing features to compose them as needed.

---

# Getting Started

## Clone the Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

Using npm

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Build for Production

```bash
npm run build
```

---

## Start Production Server

```bash
npm start
```

---

# Environment Variables

Create a `.env.local` file.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=
JWT_SECRET=
```

---

