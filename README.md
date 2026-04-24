# Ulox Mobile Product UI System

This repository contains a complete, mobile-first UI system blueprint and application frame catalog for **Ulox**, a real estate super-platform that unifies:

- Property marketplace
- Roommates marketplace
- Reels commerce/media discovery
- DwellHub goods and services
- LabourHub jobs and settlements
- User authentication/profile workflows
- Admin moderation and operations console

## Structure

- `design/Foundations.md` — design tokens, color, typography, spacing, trust language.
- `design/Components.md` — reusable component catalog.
- `design/Patterns.md` — reusable interaction and flow patterns.
- `design/AppScreens.md` — frame inventory for all mobile app screens and responsive behavior.
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

## Run locally (web)

```bash
npm install
npm run dev
```

## Run React Native prototype (Expo)

```bash
npm install
npm run start
```

Use Expo device/emulator/web preview to inspect the frame system.

## Design principles

- Mobile-first responsive layout
- Card-based interfaces
- Trust and verification indicators
- Reusable component primitives
- Neutral modern visual language
