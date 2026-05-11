# CLAUDE.md

This file provides guidance for AI coding agents working in this repository.

## Project overview

A personal résumé / portfolio web app built with **React + TypeScript + Vite**, deployed to GitHub Pages at <https://jamesupakorn.github.io/Resume_React>.

Key features:
- Bilingual (Thai / English) UI powered by `i18next`
- 3-D model viewer via `@react-three/fiber` + `@react-three/drei`
- In-browser chatbot (`react-simple-chatbot`)
- PDF resume export (`html2pdf.js` + `jspdf`)
- Ant Design (`antd`) component library

## Package manager

This project uses **pnpm**. Always use `pnpm` — never `npm install` — so that `pnpm-lock.yaml` stays in sync.

```bash
pnpm install          # install dependencies
pnpm install --no-frozen-lockfile  # install and update lock file (e.g. after changing package.json)
```

## Common commands

| Command | Description |
|---|---|
| `pnpm dev` | Start the Vite dev server (hot-reload) |
| `pnpm build` | Production build into `dist/` |
| `pnpm preview` | Locally preview the production build |
| `pnpm deploy` | Build and push `dist/` to the `gh-pages` branch |

## Project structure

```
.
├── public/              # Static assets (images, PDF resumes, LaTeX sources)
├── src/
│   ├── Components/      # Reusable UI components
│   │   ├── Card/
│   │   ├── Chatbot.jsx
│   │   ├── Personal.jsx
│   │   ├── WorkEx.jsx
│   │   ├── StudyHis.jsx
│   │   ├── Resume3D.jsx
│   │   ├── PreviewResumeButton.jsx
│   │   └── ...
│   ├── Locales/         # i18n translation JSON files (th / en)
│   ├── CSS/             # Stylesheet files
│   ├── App.jsx          # Root component
│   ├── HeadPage.jsx     # Header / profile section
│   ├── MenuTab.jsx      # Navigation tabs
│   ├── i18n.js          # i18next configuration
│   └── index.jsx        # React entry point
├── export-pdf.cjs       # Node.js (CommonJS) helper for PDF export (uses __dirname / require)
├── vite.config.ts       # Vite configuration (ESM, shared dev & prod)
├── package.json         # Dependencies and scripts
└── pnpm-lock.yaml       # Exact resolved dependency versions (commit this file)
```

## ESM / CommonJS notes

`package.json` sets `"type": "module"`, meaning all `.js` files are treated as ESM by Node.js. The sole CommonJS file (`export-pdf.cjs`) uses the `.cjs` extension to opt out of ESM treatment.

## Deployment

CI runs on every push to `main` via `.github/workflows/deploy.yml`:
1. Installs pnpm globally, then runs `pnpm install`
2. Runs `pnpm build`
3. Publishes `dist/` to the `gh-pages` branch with `peaceiris/actions-gh-pages`

## Configuration notes

- **`vite.config.ts`** is environment-agnostic — the same config is used for `pnpm dev` and `pnpm build`. Do not add `server.*` blocks that are specific to a hosting environment.
- **`base`** is set to `'/Resume_React/'` for GitHub Pages subpath hosting.
- `package-lock.json` is gitignored (pnpm project).
