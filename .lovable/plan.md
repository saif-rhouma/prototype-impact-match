# Impact Match — Build Plan

A vibrant, impact-driven platform connecting companies with young talents via innovation challenges and recruitment. Built as a TanStack Start web app with the specified palette and modern glassmorphism style.

## Scope of this first build

Given the size of the spec, I'll deliver a complete **frontend-first** version with realistic mock data so every page and interaction is browseable end-to-end. Backend (auth, database, file uploads, real chat, real match logic) will be added in a follow-up once we enable Lovable Cloud — I'll flag exactly where to plug it in.

## Design system

- **Palette (locked):** Yellow `#FFC604`, Coral `#EF897E`, Soft Pink `#F0BDB8`, Golden Orange `#F3B11D`, Teal `#44B1A8`, on white + subtle gradient surfaces.
- **Typography:** Poppins (headings, bold/extrabold) + Inter (body).
- **Style:** Glassmorphism cards, 20–28px radius, soft layered shadows, gradient accents (yellow→coral, coral→teal), micro-interactions on hover, framer-motion page/element transitions.
- All tokens defined in `index.css` + `tailwind.config.ts` as semantic HSL variables (`--primary`, `--coral`, `--teal`, `--pink-soft`, `--orange`, gradients, shadows).

## Pages & routes

```text
/                       Landing
/challenges             Marketplace (filters, search, categories, trending, featured carousel)
/challenges/:id         Challenge detail + submit flow entry
/talents                Talent directory
/talents/:id            Talent profile (skills radar, portfolio, badges, timeline)
/teams                  Team formation hub (browse, create, match %)
/teams/:id              Team workspace (members, chat, shared submission)
/recruitment            Open positions feed
/recruitment/:id        Position detail + apply
/success-stories        Storytelling timeline
/company/onboarding     Multi-step animated company onboarding
/company/dashboard      Company dashboard (challenges, candidates, submissions, chat, winners, recruitment)
/talent/onboarding      Talent onboarding (skills, interests, portfolio)
/talent/dashboard       Talent dashboard (my challenges, teams, applications, badges)
/admin                  Association admin (users, validation, moderation, analytics, KPIs, notifications)
/match/:id              "It's a Match" celebration screen
/auth                   Sign in / sign up (UI only for now)
```

## Key components

- `FloatingNav` + sticky top navbar with glass blur
- `DashboardSidebar` (company / talent / admin variants, collapsible)
- `ChallengeCard`, `TalentCard`, `TeamCard`, `PositionCard`, `StoryCard`
- `SkillsRadar` (recharts), `MatchScoreRing`, `KPICard`, `AnalyticsCharts` (area/bar/pie)
- `SubmissionWizard` (multi-step with file/video/deck upload UI)
- `OnboardingStepper` (animated progress)
- `MatchCelebration` (confetti + animated score reveal)
- Empty states with friendly SVG illustrations, skeleton loaders, toast system (sonner), tag chips, filter drawer

## Mock data layer

`src/lib/mock/` with typed fixtures for companies, talents, challenges, teams, submissions, positions, stories, notifications, analytics. Lets every screen render real-feeling content and supports filtering/search client-side.

## Tech notes

- TanStack Start + Tailwind + shadcn/ui (already in template)
- `framer-motion` for transitions and match celebration
- `recharts` for radar/KPI charts
- `lucide-react` for icons; custom SVG illustrations for hero/empty states
- Generated hero + collaboration illustrations via image gen, stored in `src/assets/`
- Fully responsive, mobile-first; dark mode toggle on admin dashboard

## Out of scope this round (flagged for follow-up)

- Real authentication, RLS, persistent profiles → needs Lovable Cloud
- Real file/video uploads → needs Cloud Storage
- Real-time team chat → needs Cloud + realtime channel
- AI skill matching algorithm → needs Lovable AI Gateway
- Email notifications → needs Lovable Email

I'll wire these in immediately after the UI is approved, in a focused second pass so we don't bundle infra decisions into the design build.

## Acceptance

- All 10 page areas browseable with realistic content
- Palette + typography applied consistently via tokens (no hardcoded hex in components)
- Smooth animations, hover states, glass surfaces, gradient accents present throughout
- Mobile, tablet, desktop layouts verified
