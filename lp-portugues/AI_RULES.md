# AI Rules & Tech Stack

## Tech Stack
- **Framework:** React 19 (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Icons:** `lucide-react`
- **Build Tool:** Vite
- **Package Manager:** npm
- **Backend/Storage:** Supabase (Used for image assets)

## Development Rules

### 1. Component Structure
- Use **Functional Components** with TypeScript interfaces for props.
- Place all components in `src/components/`.
- Place page-level components in `src/pages/` (if routing is implemented).
- **One component per file** is preferred for maintainability.
- Keep components small (< 100 lines) and focused on a single responsibility.

### 2. Styling
- **Exclusively use Tailwind CSS** for styling.
- Do not use CSS modules or separate `.css` files unless absolutely necessary for global resets or animations not supported by Tailwind.
- Ensure **Responsive Design** using Tailwind's breakpoints (`md:`, `lg:`, etc.) for all components.
- Use the defined brand colors in `tailwind.config` (e.g., `bg-brand-black`, `text-brand-gold`) to maintain visual consistency.

### 3. Icons & Assets
- **ALWAYS** use `lucide-react` for icons.
- Use `lucide-react` imports destructuring: `import { IconName } from 'lucide-react';`.
- For images, prefer using the existing Supabase Storage URLs or optimized web formats (`.webp`).

### 4. Code Quality & Best Practices
- **Strict TypeScript:** Avoid `any`. Define interfaces for props and state.
- **Hooks:** Use built-in React hooks (`useState`, `useEffect`, `useRef`). Avoid complex third-party state libraries unless the app grows significantly.
- **Clean Code:** Remove unused imports and console logs before finishing a task.
- **Accessibility:** Ensure buttons have accessible names or labels, and images have `alt` text.

### 5. File Operations
- **App.tsx:** Serves as the main layout/router. Only modify if adding global providers or changing the high-level page structure.
- **New Features:** Always create new files for new components rather than appending to existing ones.