# Emmanuel R Nyadzi — Portfolio

A personal portfolio website built from scratch using modern web technologies.

## Tech Stack

- **Vite** — fast build tool and dev server
- **React** — UI library
- **TypeScript** — type safety
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible component library
- **Framer Motion** — animations

## Getting Started

Make sure you have **Node.js v18+** installed, then:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Available Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Project Structure

```
src/
├── assets/        # Images and static files
├── components/    # Reusable UI components
│   └── ui/        # shadcn/ui base components
├── data/          # Portfolio content (personal info, projects, skills)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── pages/         # Page components
```

## Customization

All portfolio content lives in the `src/data/` folder:

- `personal.ts` — your name, bio, contact info, social links
- `projects.ts` — your projects with descriptions and tech stacks
- `skills.ts` — your skills and proficiency levels

## License

MIT — feel free to use this as inspiration for your own portfolio.
