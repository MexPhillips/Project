# Handcrafted Haven

A virtual marketplace for artisans and crafters to showcase and sell handmade products. Built for the W07 Project Completion assignment (WDD 430 / Web Application Development).

## Live Application

**Vercel URL:** _Add your deployed URL here after connecting to Vercel_

Example: `https://your-project.vercel.app`

## Project Board

**Board URL:** _Add your Azure DevOps or GitHub Project board link here_

## Repository

**GitHub:** https://github.com/MexPhillips/Project

The Next.js application lives in the `my-project/` directory.

## Group Video Demonstration

**Video URL:** _Add your group presentation video link here_

Each participating member should demonstrate application functionality and/or discuss project challenges and successes.

---

## Features (Rubric Functionality)

| Feature | Status | Where to see it |
|---------|--------|-----------------|
| **Seller profiles** | Complete | `/sellers`, `/sellers/[id]` |
| **Product listings** | Complete | `/products`, `/products/[id]` |
| **Search & filters** | Complete | `/products` — search, category, price, rating, sort |
| **Shopping cart** | Complete | Add from product page → `/cart` → checkout |
| **Reviews & ratings** | Complete | Product detail pages — read and submit reviews |
| **User authentication** | Complete | `/auth/signup`, `/auth/signin`, session in header |
| **Responsive design** | Complete | Mobile navigation, responsive grids throughout |
| **Blog & community content** | Complete | `/blog`, `/about`, `/faq`, `/contact` |

---

## Tech Stack

- **Frontend:** Next.js 16, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL database (optional for local dev — auth uses in-memory fallback without a DB)

### Installation

```bash
cd my-project
npm install
cp .env.example .env
# Edit .env with your DATABASE_URL and AUTH_COOKIE_SECRET
npm run db:push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Demo Account (after seeding)

- **Email:** demo@handcrafted-haven.com
- **Password:** Demo1234!

---

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Set **Root Directory** to `my-project` (or use the root `vercel.json` which sets this automatically).
4. Add environment variables:
   - `DATABASE_URL` — PostgreSQL connection string ([Vercel Postgres](https://vercel.com/storage/postgres) or [Neon](https://neon.tech))
   - `AUTH_COOKIE_SECRET` — long random string
5. Deploy, then run `npm run db:push` and `npm run db:seed` against your production database.

---

## Video Demo Checklist

Use this checklist when recording your group presentation:

1. **Home page** — hero, featured products, testimonials
2. **Marketplace** — search, filter by category/price/rating, sort, pagination
3. **Product detail** — description, add to cart, submit a review
4. **Seller profiles** — artisan story and product grid
5. **Shopping cart** — update quantities, checkout flow
6. **Authentication** — sign up, sign in, sign out
7. **Mobile view** — hamburger menu and responsive layout

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run db:push` | Sync Prisma schema to database |
| `npm run db:seed` | Seed demo user |

---

## Group Members

_Add your group member names here_
