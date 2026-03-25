## Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Key Design Decisions](#key-design-decisions)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)
- [Motivation](#motivation)


# Portfolio Website

A full-stack personal portfolio built to showcase projects, track LeetCode progress, and experiment with modern web architecture.

# Overview
This project started as a simple way to visualise LeetCode solve data and evolved into a fully featured portfolio platform. 
It integrates authentication, backend APIs, database persistence, and dynamic content from external sources.

The goal was to build something production-grade to refine skills I use in my current job.

# Tech Stack
## Frontend
- Next.js (App Router)
- TypeScript
- Mantine UI
- React Query
- Orval (API client generation)

## Backend
- NestJS
- TypeScript
- REST API (OpenAPI/Swagger)

## Database
- PostgreSQL
- Prisma ORM

## Auth
- better-auth
- GitHub OAuth

## Infrastructure
- Railway (backend, frontend, database)
- PNPM monorepo

# Features

## Core
- Full-stack architecture (frontend + backend + database)
- Type-safe API layer with generated clients
- Authentication with session handling
- Protected endpoints and role-based access

## Portfolio
- Dynamic project display (from GitHub repos tagged portfolio)
- Structured experience timeline
- Responsive UI with consistent design system

## LeetCode Analytics
- Store solve data in PostgreSQL
- Scatter plot visualisation of solves
- Auth-protected submission system
- Real-time updates via API

## Developer Experience
- Monorepo setup with shared packages
- Prisma schema + migrations
- Generated API hooks via Orval
- Environment-based configuration (local vs production)

# Project Structure
```
apps/
  web/        # Next.js frontend
  api/        # NestJS backend
packages/
  db/         # Prisma + database client
  auth/       # Authentication configuration
```

# Getting Started
## 1. Install dependencies
`pnpm install`
## 2. Set environment variables
Create `.env` and `.env.local` files where needed.

### Example (web)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_URL=http://localhost:3000
Example (api)
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
```

## 3. Build & run development servers
from root: 
`pnpm -r build`
`pnpm --filter api run dev` and `pnpm --filter web run start:dev` 

## 4. Run database migrations
`pnpm --filter @portfolio/db exec prisma migrate dev`

# Deployment
Everything is deployed on Railway.

# Key Design Decisions
**Monorepo**
  - Shared types and logic across frontend/backend
  - Easier dependency management
**Generated API Client**
  - Eliminates manual fetch logic
  - Ensures type safety across layers
**Separation of Concerns**
  - Backend handles all business logic
  - Frontend remains a thin client

# Challenges
- Handling environment differences between local and production
- Authentication across domains (cookies, CORS, origins)
- Prisma client resolution in monorepo builds
- API generation timing during builds (Orval + backend availability)
- Mantine Timeline display strange behaviour on light mode
  
# Future Improvements
- Improve LeetCode visualisation UX
- Enhance project filtering/sorting
- Add CI/CD pipeline with automated checks
- Add education section
- Fix Mantine Timeline component issue

# Motivation

This project was built to:
  - Go beyond a static portfolio
  - Improve full-stack engineering ability
  - Explore production concerns (auth, deployment, infra)
  - Build something genuinely useful
