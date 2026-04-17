# Madison Griffin Fit — Project Context

## Project
Luxury fitness coaching website for Madison Griffin. 7-page Next.js site with Adhara forms integration.
Live: https://www.madisongriffinfit.com | Vercel: https://madison-griffin.vercel.app

## Tech Stack
- Next.js 15.3 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4 (PostCSS plugin)
- Framer Motion 12 (animations)
- Adhara (forms, email marketing)

## Design System

**Colors (tailwind.config.ts):**
- `cream` #FAF7F2 — primary background
- `sand` #D4A574 — warm accent, completed step indicators
- `bark` #8B7355 — primary interactive (buttons, borders, accents)
- `sage` #5C6B4F — success states
- `charcoal` #2C2C2C — body text
- `midnight` #1A1A1A — headings, darkest elements

**Fonts:** Playfair Display (serif, headings) + Inter (sans, body) via Google Fonts

**Input class pattern:**
```
w-full bg-white border border-bark/20 rounded-lg px-4 py-3 text-midnight placeholder:text-charcoal/30 text-sm focus:outline-none focus:ring-2 focus:ring-bark/20 focus:border-bark transition-all duration-300
```

**Button styles:**
- Primary: `bg-bark text-cream text-[11px] font-medium tracking-[0.18em] uppercase px-8 py-3 rounded-sm hover:bg-bark/90`
- Secondary: `text-bark border border-bark/25 text-[11px] font-medium tracking-[0.18em] uppercase px-6 py-3 rounded-sm hover:bg-bark/5`

**Section labels:** `text-bark text-[11px] font-medium tracking-[0.25em] uppercase`

## Image Catalog
All WebP in `/public/`:
- `Madison-29.webp` — Home hero + OG/SEO image
- `Madison-38.webp`, `Madison-73.webp` — Home page sections
- `Madison-102.webp`, `Madison-114.webp` — Used in pages
- `Madison-134.webp` — Apply page hero (right panel)
- `Madison-88.webp` — Body Brief page hero (right panel)
- `Madison-153.webp`, `Madison-157.webp`, `Madison-167.webp`, `Madison-170.webp` — Various sections
- `Madison-178.webp`, `Madison-201.webp`, `Madison-243.webp`, `Madison-249.webp` — Various sections
- `Madison-281.webp`, `Madison-283.webp` — Various sections
- `Madison-83.webp` — Available/Results page

## Pages
| Route | Purpose |
|-------|---------|
| `/` | Home (hero, method overview, results teaser) |
| `/about` | About Madison |
| `/method` | The coaching method |
| `/results` | Client results/testimonials |
| `/work-with-me` | Services and pricing |
| `/blog` | Blog listing |
| `/apply` | 3-step coaching application form |
| `/body-brief` | 4-step body brief intake form (lead capture) |

## Forms & Adhara Integration

**Env vars (.env.local):**
```
ADHARA_API_KEY=adhara_pk_30c1d72d_...
ADHARA_WORKSPACE_ID=6f116b87-3082-438f-baab-1937add20384
ADHARA_BASE_URL=https://api.adharaweb.com
ADHARA_FORM_SLUG=coaching-application        # /apply form
ADHARA_BODY_BRIEF_FORM_SLUG=body-brief       # /body-brief form
NEXT_PUBLIC_SITE_URL=https://www.madisongriffinfit.com
```

**Submission pattern:**
```
POST ${ADHARA_BASE_URL}/api/v1/forms/${formSlug}/submit
Headers: X-API-Key, X-Workspace-ID, Content-Type: application/json
Body: { response_data: { ...formFields } }
```

**Apply form fields:** fullName, email, instagram, fitnessGoals, currentRoutine, biggestStruggle, travelFrequency, commitmentLevel, anythingElse

**Body Brief form fields:** fullName, email, whatYouDo, weekStructure, activityLevel, primaryGoal, successDescription, trainingFrequency, trainingDescription, proteinIntake, nutritionConsistency, fallOffTriggers (array→joined string), responseToFalling, whatDidntWork, anythingElse

## Form UI Patterns

**Multi-step progress indicator:** Numbered circles, `bg-bark` current, `bg-sand` completed with checkmark, `bg-bark/10` upcoming. Connector lines `w-12 h-px`.

**Radio button (custom):** Label wrapper with border, inner div with `rounded-full border-2`, inner dot `w-2.5 h-2.5 rounded-full bg-bark animate-scale-in`. Hidden native input `sr-only`.

**Checkbox (custom):** Same pattern but `rounded-sm` outer with `bg-bark` fill when checked, checkmark SVG inside.

**Success state:** Centered, `bg-sage/15` circle with animated checkmark SVG, Playfair serif heading.

## Key Notes
- No separate component files for forms — all inline in page.tsx
- Navigation is fixed header with scroll-triggered styling
- `style jsx` used for custom `@keyframes draw` on success checkmark animation
- Images use `next/image` with `fill` + `object-cover`, desktop-only right panel is `position: fixed`
