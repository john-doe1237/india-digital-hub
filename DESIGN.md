# Design Brief: India Digital Hub

**Purpose**: Premium All-in-One Government Super App for India. Unified digital gateway for accessing 20+ government services (Aadhaar, PDS, utilities, banking, voting, passport, etc.) with intuitive, glass-morphic UX for all literacy levels.

**Tone**: Luxury FinTech meets government digital; authoritative yet approachable; premium high-tech gateway.

**Differentiation**: Frosted glass cards with subtle mesh gradients and dual-layer depth. Electric Indigo → Persian Blue authority gradient. Saffron pending/active states. Emerald success states. Smooth micro-interactions on every tap. Plain language ("Get My Papers" not "Fetch Documentation").

## Color Palette

| Token | OKLCH | Hex Approx | Role |
|-------|-------|-----------|------|
| primary | 0.68 0.22 256 (dark mode) | #6644DD | Authority, primary actions |
| primary-accent | 0.56 0.20 250 | #5555FF | Gradient end, secondary |
| accent | 0.68 0.23 54 | #FFA733 | Pending, active, alerts |
| success | 0.70 0.19 142 | #1DB954 | Verified, completed states |
| background | 0.08 0 0 (dark) | #0A0F1E | Deep navy base |
| card | 0.15 0.02 250 | #1A1F3A | Frosted glass cards |
| foreground | 0.92 0.01 250 | #E8E5FF | Text, cool white |
| border | 0.25 0.02 250 | #30354A | Subtle dividers, 20% opacity |
| muted | 0.22 0.01 250 | #2A2F45 | Secondary text, disabled |

## Typography

| Scale | Font | Weight | Size | Leading | Use |
|-------|------|--------|------|---------|-----|
| Display L | Fraunces | 700 | 32px | 1.2 | Hero headings, premium titles |
| Display M | Fraunces | 600 | 24px | 1.3 | Section headers |
| Body L | General Sans | 600 | 16px | 1.5 | Primary body, CTAs |
| Body M | General Sans | 400 | 14px | 1.5 | Descriptive text |
| Body S | General Sans | 400 | 12px | 1.4 | Captions, metadata |
| Mono | System | 400 | 12px | 1.4 | Document IDs, codes |

## Elevation & Depth

| Layer | Treatment | Use |
|-------|-----------|-----|
| Surface 0 (base) | `bg-background` flat, no glass | Page background |
| Surface 1 (elevated) | `.glass`: 12px blur, 8% backdrop, 0.2 border alpha | Cards, inputs, secondary zones |
| Surface 2 (high) | `.glass-elevated`: 16px blur, card bg, 0.15 border alpha, shadow-glass | Premium cards, modals, drawers |
| Overlay | `bg-gradient-primary` with 40% opacity | Hover states, active nav |

## Structural Zones

| Zone | Background | Border | Spacing | Role |
|------|-----------|--------|---------|------|
| Header | `.glass-elevated` | 0.15 border, bottom | 1rem padding | Logo, app title, user badge |
| Hero/Main | `bg-background` flat | none | 1.5rem padding | Immediate CTAs ("Get My Papers") |
| Content Cards | `.card-glass` | 0.2 border alpha | 1.5rem gap | Service tiles, documents, status updates |
| Navigation Bottom | `.glass` fixed | 0.15 border, top | 0.75rem padding | 6 nav items: Home, Services, Documents, Transactions, Profile, Help |
| Modal/Drawer | `.glass-elevated` | 0.15 border | 1.5rem padding | Forms, confirmations, details |

## Component Patterns

- **Buttons**: `.button-primary` (gradient bg, rounded-lg), `.button-accent` (Saffron, pending), `.button-success` (Emerald, verified). All include shadow-glass-hover on state.
- **Cards**: `.card-glass` with rounded-2xl. Hover triggers shadow-glass-hover. Image-top cards for service tiles.
- **Badges**: `.badge-success` (Emerald/10), `.badge-warning` (Saffron/10), `.badge-pending` (Saffron/10). Inline-flex, 12px type.
- **Inputs**: `.glass` backdrop, rounded-lg, 0.2 border alpha, focus triggers ring-primary.
- **Navigation**: `.nav-item` flex column, `.nav-item-active` (primary/10 bg, text-primary), `.nav-item-inactive` (text-muted, hover:text-foreground).
- **Micro-interactions**: All transitions use `--transition-smooth` (0.3s cubic-bezier). Buttons respond with shadow lift on hover. Cards trigger glass-hover border color shift.

## Motion & Animation

| Keyframe | Duration | Easing | Use |
|----------|----------|--------|-----|
| fade-in | 0.4s | ease-out | Page loads, modals appear |
| slide-up | 0.4s | ease-out | Content cards mount in sequence |
| pulse-soft | 3s infinite | ease-in-out | Loading states, pending badges |
| transition-smooth | 0.3s | cubic-bezier(0.4,0,0.2,1) | All interactive element state changes |

No bounce. No scale. No frantic motion. Orchestrate card slide-ups with staggered delays (50ms between each) for rhythm.

## Spacing & Rhythm

- **Base unit**: 0.25rem (4px). Scale: 4, 8, 12, 16, 24, 32, 40, 48, 56, 64px.
- **Card gaps**: 1.5rem (24px) horizontal, 1.5rem vertical between cards.
- **Padding**: Headers 1rem, cards 1.5rem, sections 1.5rem.
- **Radius**: Full (9999px) pills, rounded-2xl cards (16px), rounded-lg buttons (12px), rounded-md inputs (8px).

## Layout: 6-Screen Mobile First

1. **Home** (Dashboard): Hero card "Get My Papers", pinned services (Aadhaar, PDS, Utilities), quick status badges.
2. **Services** (Catalog): Grid of 8–12 government services. Filter by status (Active, Pending, Verified).
3. **Documents** (DigiLocker-style): List/grid of uploaded & linked documents. Badge per doc status.
4. **Transactions** (Activity): Timeline of submissions, approvals, renewals. Saffron badges for pending, Emerald for verified.
5. **Profile** (Account): User info, linked accounts (bank, Aadhaar), settings toggle.
6. **Help** (Support): FAQs, chat widget placeholder, contact form. Plain language.

Bottom nav with 6 icons + labels. Active nav item: primary/10 background, primary text, icon highlight.

## Signature Detail

**Frosted Glass + Mesh Gradient Depth**: Every card uses `.glass-elevated` with dual-layer effect — subtle cool-toned mesh visible through 12–16px blur at edges. Border glow on hover: primary color at 30% opacity. This creates a "floating premium interface" aesthetic that's distinctive to India Digital Hub.

## Constraints

- **No rainbow palettes**: 4 colors max (primary, accent, success, destructive) + neutrals.
- **No harsh shadows**: Shadows use soft black at 12% opacity max.
- **No jarring animations**: All motion is 0.3–0.4s ease-out or cubic-bezier.
- **No complex jargon**: Strings use plain language (e.g., "Verify Your Identity" not "Biometric Authentication").
- **Accessibility**: 7+ OKLCH lightness difference on foreground/background. WCAG AA+ contrast on all text.
- **Dark mode only**: No light mode variant for this release.

## Micro-Interactions

- Tap button → shadow lift (0.3s) + background fade to brighter primary.
- Hover card → glass-hover (border color shift primary/30, shadow-glass-hover).
- Load page → cards fade-in + slide-up (staggered 50ms).
- Badge pending → pulse-soft (3s loop).
- Input focus → ring-primary + border-primary opacity increase.

---

**Design System Version**: 1.0  
**Last Updated**: Apr 2026  
**Theme**: Dark (glass-morphism depth layer variant)  
**Font Stack**: Fraunces (display) + General Sans (body)  
**Target**: Mobile-first, 6-screen Super App UX
