# AI Rules & Guidelines

This document serves as a guideline for AI agents and developers working on this codebase. It outlines the tech stack, preferred libraries, and rules for extending the application.

## 🛠 Tech Stack

- **React 19 (via Vite)**: The core frontend library for building user interfaces.
- **TypeScript**: Used for all source code to ensure type safety and developer experience.
- **Tailwind CSS (v4)**: The exclusive utility-first CSS framework used for styling.
- **Framer Motion (`motion/react`)**: Used for all UI animations, transitions, and scroll effects.
- **Lucide React**: The standard library for SVG icons.
- **React Router**: Used for client-side routing and navigation (when multiple pages are needed).
- **Shadcn UI & Radix UI**: The standard for accessible, pre-built UI components.
- **Express & Node.js**: Used for any backend or API routing requirements.
- **Google GenAI (`@google/genai`)**: Integrated for AI and generative features.

## 📜 Library Rules & Usage Guidelines

### 1. Styling & CSS
- **Rule**: ALWAYS use Tailwind CSS for styling. 
- **Exception**: Global theme variables (like colors and fonts) and specific complex keyframes/noise textures are defined in `src/index.css`.
- **Theme Variables**: Utilize the established custom variables for consistency (e.g., `bg-[var(--color-bg-primary)]`, `text-[var(--color-gold-primary)]`).
- **Typography**: Adhere to the established font families: `font-display` (Playfair Display), `font-headline` (Cormorant Garamond), and `font-sans` / default (DM Sans).

### 2. UI Components
- **Rule**: ALWAYS prioritize Shadcn UI and Radix UI components for standard interactive elements (Buttons, Dialogs, Forms, etc.). 
- **Custom Components**: For bespoke sections (like custom cards or hero sections), build them cleanly using Tailwind CSS and keep them under 100 lines if possible. Extract reusable pieces into `src/components/`.

### 3. Animations
- **Rule**: Use `motion/react` (Framer Motion) for all component animations, fade-ins, and scroll-triggered reveals.
- **Implementation**: Rely on the existing `<FadeIn />` wrapper pattern (or similar reusable motion components) to maintain consistent animation timing and behavior across the app.

### 4. Icons
- **Rule**: ONLY use `lucide-react` for icons. Do not import random SVG files or use other icon libraries like FontAwesome or Heroicons.

### 5. Routing
- **Rule**: Maintain route definitions inside `src/App.tsx` using React Router. 
- **Structure**: Place individual route screens inside `src/pages/`.

### 6. File Structure & Best Practices
- **Components**: Create small, focused files in `src/components/`. Never add new components to existing files—always create a new file.
- **Pages**: Place top-level views in `src/pages/`.
- **TypeScript**: Always use proper interfaces and types. Avoid `any`.
- **Responsiveness**: Ensure all new Tailwind classes include responsive variants (`md:`, `lg:`) to maintain mobile-first design.