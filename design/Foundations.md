# Ulox UI System — Foundations

## 1) Brand Principles
- **Trust-first marketplace:** every critical entity has visible verification states.
- **Action-driven clarity:** each screen or card has one primary CTA.
- **Unified ecosystem:** property, services, labour, and media share the same interaction grammar.
- **Mobile-first hierarchy:** single-hand usage, thumb-zone optimized controls.

## 2) Grid & Layout
- **Mobile base width:** 390 px (iPhone 14/15 reference), 16 px horizontal padding.
- **Tablet:** 768 px with 24 px horizontal padding.
- **Desktop web admin:** 1440 px with 12-column layout.
- **Desktop listing grid:** 4 columns minimum for property cards.
- **Spacing scale (4pt):** 4, 8, 12, 16, 20, 24, 32, 40, 48.

## 3) Typography
- **Display:** 32/40, 700
- **H1:** 28/36, 700
- **H2:** 24/32, 700
- **H3:** 20/28, 600
- **Title:** 18/26, 600
- **Body:** 16/24, 400
- **Body Small:** 14/20, 400
- **Caption:** 12/16, 500
- **Overline:** 11/14, 600, uppercase

## 4) Color Tokens
### Core Palette
- `--ulx-primary-600`: #2563EB
- `--ulx-primary-500`: #3B82F6
- `--ulx-primary-100`: #DBEAFE
- `--ulx-neutral-900`: #111827
- `--ulx-neutral-700`: #374151
- `--ulx-neutral-500`: #6B7280
- `--ulx-neutral-300`: #D1D5DB
- `--ulx-neutral-100`: #F3F4F6
- `--ulx-surface`: #FFFFFF
- `--ulx-bg`: #F8FAFC

### Semantic Palette
- `--ulx-success`: #16A34A
- `--ulx-warning`: #D97706
- `--ulx-danger`: #DC2626
- `--ulx-info`: #0284C7
- `--ulx-verified`: #0891B2

## 5) Elevation & Radius
- Radius: 8, 12, 16, 24 (pill).
- Shadow sm: y=1, blur=2, alpha 8%
- Shadow md: y=4, blur=12, alpha 10%
- Shadow lg: y=12, blur=24, alpha 14%

## 6) Iconography
- 24 px primary icons; 20 px secondary.
- Outlined style default; filled for active nav state.
- Verification and trust icons always paired with labels.

## 7) Motion
- Micro transition: 160ms ease-out.
- Page transition: 220ms standard curve.
- Bottom sheet rise: 240ms spring-lite.
- Skeleton shimmer: 1200ms loop.

## 8) Trust Indicator Language
- **Verified Title:** cyan badge + shield icon.
- **KYC Approved:** green badge + check icon.
- **Pending:** amber pill + clock icon.
- **Registry Lodged:** blue status chip + document icon.
- **Settlement Complete:** green status bar + confetti micro animation.

## 9) Frame Pages (Figma/Design-tool Organization)
- **Page 1: Foundations**
  - Color styles
  - Typography
  - Spacing and grid
  - Elevation and radius
  - Iconography
- **Page 2: Components**
- **Page 3: Patterns**
- **Page 4: App Screens**
- **Page 5: Admin**
