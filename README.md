# 3CS Assessment — Omindu

A bold, archetype-driven Single Page Application showcasing a **"Wireframe-to-Reality"** toggle, scroll-driven animations, and a high-ticket conversion narrative.

## ✨ Key Feature: Wireframe-to-Reality Toggle

This project includes a unique architectural feature — a global toggle that uses the **View Transitions API** to seamlessly switch the entire site between two visual modes:

- **Reality Mode:** A fully styled, high-ticket agency experience with dark themes, gradient accents, glassmorphism, and smooth animations.
- **Wireframe Mode:** A stark, blueprint-style wireframe with grid backgrounds, monospaced fonts, dashed borders, and crossed-out image placeholders.

This demonstrates both a **working wireframe prototype** and a **polished final product** within a single codebase, powered by CSS custom properties and the native View Transitions API for smooth cross-fade transitions.

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Fast development server & build tool |
| [React](https://react.dev/) + TypeScript | UI framework with type safety |
| [TailwindCSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [GSAP](https://greensock.com/gsap/) + ScrollTrigger | Scroll-driven & entrance animations |
| [Lenis](https://lenis.darkroom.engineering/) | Premium smooth scrolling |
| [Lucide React](https://lucide.dev/) | Lightweight SVG icon library |

## 🚀 Local Setup

```bash
# Clone the repository
git clone <repository-url>
cd 3cs-assessment

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## 📁 Project Structure

```
src/
├── components/
│   ├── AccordionCard.tsx    # Expandable card with GSAP height animation
│   ├── Navbar.tsx           # Fixed navigation with scroll-aware styling
│   ├── ScrollReveal.tsx     # Scroll-triggered reveal wrapper
│   ├── SplitTextReveal.tsx  # Character-by-character text animation
│   └── ThemeToggle.tsx      # Wireframe/Reality mode toggle
├── context/
│   └── ThemeProvider.tsx    # Theme state management + View Transitions
├── sections/
│   ├── Hero.tsx             # Full-bleed hero with SplitText headline
│   ├── Intro.tsx            # Oversized typography introduction
│   ├── ProblemSection.tsx   # "The Market Noise" content section
│   ├── MethodologySection.tsx # "The Architectural Shift" content section
│   ├── ResultSection.tsx    # "Unmatched Scale" content section
│   └── Footer.tsx           # Minimal footer with social links
├── App.tsx                  # Root component with Lenis initialization
├── index.css                # Design system, theme variables, wireframe styles
└── main.tsx                 # Entry point with ThemeProvider
```

## ♿ Accessibility

- Respects `prefers-reduced-motion` — disables smooth scroll and animations
- Semantic HTML structure with proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard navigable

## 🌐 Live Demo

> _Link to hosted URL will be added after deployment._

## 📝 License

This project was created as part of the 3CS Developer Practical Assessment.
