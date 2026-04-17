# Ulox Mobile Product UI System

This repository contains the complete UI system blueprint for **Ulox**, a real estate super-platform that unifies:

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

## Required Frame Pages

- Foundations
- Components
- Patterns
- App Screens
- Admin

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
