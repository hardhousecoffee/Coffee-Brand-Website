# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### `artifacts/hard-house-coffee` — Hard House Coffee Website (React + Vite)
- **Preview path**: `/`
- **Port**: 18347
- A premium dark-themed coffee brand website for "Hard House Coffee"
- Pages: Home, Blog, Products, About
- Features: Auto-rotating hero slideshow (6 images), Featured grid, Culture section, Blog cards with categories, Product recommendations with affiliate-style buttons
- Color palette: Deep espresso black (#0b0b0b), Dark brown (#2b1e16), Brick red (#8b2f2f), Dark orange (#a14f1f), Off-white (#f2f2f2)
- Fonts: Cinzel Decorative (headings), Inter (body)
- All uploaded images are in `public/images/`

### `artifacts/api-server` — Express API Server
- **Preview path**: `/api`
- **Port**: 8080
- Express 5 API with health check route

### `artifacts/mockup-sandbox` — Component Preview Server
- **Preview path**: `/__mockup`
- Design sandbox

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── hard-house-coffee/  # Main coffee website (React + Vite)
│   ├── api-server/         # Express API server
│   └── mockup-sandbox/     # Design sandbox
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```
