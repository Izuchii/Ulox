# Ulox — Real Estate Super-Platform UI System

This repository contains the complete product UI system for **Ulox**, a real estate super-platform and property services ecosystem that unifies:

- Property marketplace (rent, buy, HomeBuy Assist)
- Roommates marketplace
- Reels commerce/media discovery
- DwellHub goods and services
- LabourHub jobs and settlements
- User authentication/profile workflows
- Admin moderation and operations console

## Web Application (Next.js)

A full Next.js 14 web application with 46 routes, built with TypeScript and Tailwind CSS.

### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
npm start
```

## Design Documentation

- `design/Foundations.md` — design tokens, color, typography, spacing, trust language.
- `design/Components.md` — reusable component catalog.
- `design/Patterns.md` — reusable interaction and flow patterns.
- `design/AppScreens.md` — frame inventory for all app screens and responsive behavior.
- `design/Admin.md` — admin console architecture and frames.
- `src/ulox-ui-blueprint.ts` — machine-readable blueprint for tabs, modules, pages, components, and tokens.
- `App.tsx` — React Native (Expo) prototype covering the full design system and frame catalog.

## Required Frame Pages

- **Foundations** (tokens, grid, responsive rules)
- **Components** (buttons, inputs, cards, navigation, filters, badges, modals, tables, notifications)
- **Patterns** (search/filter, checkout, booking, moderation)
- **App Screens** (all required marketplace, reels, dwellhub, labourhub, auth, and profile flows)
- **Admin** (moderation, disputes, monitoring, CMS, analytics)

## Navigation Model

Top tabs:
1. Land & Property Listings
2. Reels
3. DwellHub
4. LabourHub

Nested property tabs:
- Rent
- Buy
- HomeBuy Assist

Rent nested tabs:
- Properties
- Roommates

## Web App Structure (`src/app/`)

| Route | Description |
|-------|-------------|
| `/` | Home / discovery feed |
| `/listings` | Property listings |
| `/listings/rent/properties` | Rental properties |
| `/listings/rent/roommates` | Roommate finder |
| `/listings/buy/checkout` | Purchase flow with conveyancing tracker |
| `/listings/homebuy-assist` | First-time buyer program |
| `/reels` | Vertical reels feed |
| `/dwellhub/goods` | Product marketplace |
| `/dwellhub/services` | Service provider marketplace |
| `/labourhub` | Jobs marketplace |
| `/profile` | User profile and settings |
| `/auth/login` | Authentication |
| `/admin/analytics` | Admin console |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Design tokens:** Primary `#1B4F72` · Secondary `#F39C12`
