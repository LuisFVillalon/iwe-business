# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for Imperial Web Experts, a small web dev agency in Calexico/Imperial Valley/Mexicali. Next.js 15 (App Router) + React 19 + Tailwind CSS 4, deployed as a bilingual (English/Spanish) static-ish marketing site with one server API route for the contact form.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint (eslint.config.mjs -> next/core-web-vitals, next/typescript)
```

There is no test suite configured in this repo.

## Architecture

### Bilingual UI via a client-side language toggle, not separate routes

There are **no per-language routes**. Each page (`/`, `/services`, `/about`, `/contact`) exists once and renders both English and Spanish content depending on runtime state — there used to be a duplicated-route architecture (`/es`, `/servicios`, `/sobre`, `/contacto` with `*-Spanish.tsx` component variants), but that was removed in favor of a single URL per page with an in-place toggle. Do not reintroduce Spanish-suffixed routes or components; add bilingual content to the existing single component instead.

The current language is global client state provided by `LanguageProvider` (`src/app/components/client-side/LanguageProvider.tsx`), wrapped around `{children}` in `src/app/layout.tsx`. It exposes a `useLanguage()` hook returning `{ language, toggleLanguage }`, backed by `localStorage` (key `iwe-language`) so the choice persists across page navigations and future visits — the very first render is always `"english"` (localStorage isn't available during SSR), then an effect restores the saved preference after mount, so there can be a brief flash to Spanish on load if that was the visitor's last choice. `Header.tsx` renders a single flag icon/button that calls `toggleLanguage()` (no longer a `<Link>` to a different route).

Any component whose content differs by language calls `useLanguage()` directly and keeps both language variants inline (e.g. a `Record<Language, ...>` copy lookup or a `language === "spanish" ? ... : ...` branch) — see `Hero.tsx`, `About.tsx`, `Services.tsx` (home section), `SocialLinks.tsx`, `Footer.tsx`, `ServicesPageCard.tsx`, `contact-form.tsx`. Because this requires `useContext`, any such component is a `"use client"` component; a `page.tsx` that needs bilingual body content but must also export `metadata` (server-only) extracts that body into a separate client subcomponent instead (see `about-sections/AboutPageContent.tsx` and `services-sections/ServicesPageContent.tsx`) and keeps the `page.tsx` itself as a thin server shell.

`contact-form.tsx` follows the same centralized-copy pattern as `servicesData.ts`: its strings live in `src/app/lib/contactFormCopy.ts` as a `Record<Language, ContactFormCopy>`, and the component just indexes into it via `useLanguage()` rather than inlining `en`/`es` branches itself.

`Contact.tsx` is a special case: its CTA copy varies by **both** page and language, and its callers (`page.tsx`, `AboutPageContent.tsx`, `ServicesPageContent.tsx`) supply a `copy: Record<Language, { ctaTitle, ctaText, ctaButton }>` prop with both language variants baked in as a literal; `Contact` picks the right entry via `useLanguage()` internally.

Because there's a single canonical route per page now, components that used to branch on `language` purely to pick a URL prefix no longer need to (e.g. `CTAButton` always links to `/contact`, `ServiceCard` always links to `/services#...`).

Copy text for services/pricing is centralized in `src/app/lib/servicesData.ts` (`websitePackages`, `carePlans`, `addOns`, `includedWithEveryWebsite`), where every string field is a `LocalizedText` object (`{ en, es }`) rather than a separate parallel Spanish array. Both the full `/services` page (`ServicesPageCard.tsx`) and the home page's Services teaser (`Services.tsx`/`ServiceCard.tsx`) read from this single source, each picking `.en`/`.es` per field via `useLanguage()` — so pricing/package/care-plan/add-on edits only need to happen in one place.

`src/app/lib/servicesPresentation.ts` holds the formatting logic both of those pages need on top of that data — `localize()` (usually imported `as L`), `getPriceParts()` (turns a `Price` into prefix/amount/suffix display strings), and the `packageIconMap`/`carePlanIconMap` lucide-icon lookups — so `Services.tsx` and `ServicesPageCard.tsx` share one implementation instead of two copies drifting apart.

Business contact details (phone, email) and social links live in `src/app/lib/siteConfig.ts` (`siteConfig`, `SOCIAL_LINKS`) rather than being retyped in each component — `Footer.tsx`, `Contact.tsx`, `contact-form.tsx`, and `SocialLinks.tsx` all read from it. Update a phone number or social URL there, not at each call site.

### Page composition pattern

Every top-level page (`src/app/page.tsx`, `about/page.tsx`, `services/page.tsx`, `contact/page.tsx`) follows the same shell:

```
<Header/> -> spacer div -> <Wrapper><...page sections.../><Contact .../><Footer/></Wrapper>
```

`Wrapper` (`src/app/components/Wrapper.tsx`) just centers content with a max width — it's the layout primitive used on every page instead of a shared `<main>` in `layout.tsx`. `Contact` renders the CTA banner + a rotating Bible-verse component (`ClientVerseSwitcher`), used near the bottom of most pages, distinct from the full contact form used on `/contact`. `Footer` belongs *inside* the same trailing `<Wrapper>` as `Contact`, not after it — moving it out changes its width/centering.

The `/services` and `/about` pages each open with a full-bleed dark hero (eyebrow badge, heading with an accented word, subheading, highlight checklist, CTA, and a hover-reveal image with source attribution) built on the shared `PageHero` component (`src/app/components/PageHero.tsx`) — pass `eyebrow`/`heading`/`headingAccent`/`subheading`/`highlights`/`ctaText`/`image`, it owns both the copy column and the image's hover/tap-reveal state internally. The home page's `Hero.tsx` has a meaningfully different heading/visual shape (embedded `ClientWordSwitcher`, a static product-screenshot card instead of a hover-reveal photo) and is intentionally not built on `PageHero` — don't force it onto that component.

Per-page `<Metadata>` (title/description/OpenGraph/icons) is defined inline in each `page.tsx`, not centralized, and is necessarily English-only now that there's one URL per page (no route to hang Spanish metadata off of) — `layout.tsx` sets the shared English fallback title/description, seen only as a brief flash before a page's own metadata takes over. Each page also sets its own `icons.icon` pointing at `public/iwe-logo.png`.

### Client-only interactivity

App Router server components are the default; anything stateful/browser-dependent (including anything that reads `useLanguage()`) is pulled out into a `"use client"` component, often under `src/app/components/client-side/`:

- `LanguageProvider.tsx` — the bilingual-toggle context described above.
- `ClientScrollEffect.tsx` — IntersectionObserver that toggles a `visible` class on elements with `.fade-in-scroll`/`.fade-in-scroll-right`/`.fade-in-scroll-left`/`.fade-in-scroll-hero` (animation keyframes defined in `globals.css`). Must be mounted on any page using those scroll-fade classes.
- `ClientVerseSwitcher.tsx` — rotates a Bible verse every 7s; reads language from `useLanguage()`.
- `ClientWordSwitcher.tsx` — similar rotating-text client component.
- `Header.tsx` — client component for scroll-hide-on-down behavior (via the `useHeaderVisibility` hook in `src/app/hooks/`) and the language toggle. The decorative flag SVGs it renders (`MexicoFlagIcon`/`USFlagIcon`) live in `src/app/components/header/FlagIcons.tsx`, kept separate so `Header.tsx` itself stays readable as nav/scroll/language logic.

`contact-form.tsx` is a full `"use client"` component owning its own form state/validation, independent from `Contact.tsx`.

### Contact form -> email flow

`ContactForm` (`src/app/components/contact-form.tsx`) POSTs JSON (`fullName`, `email`, `message`) to `src/app/api/send-email/route.ts`, which sends mail via `nodemailer` using Gmail SMTP. Requires `GMAIL_USER` and `GMAIL_PASS` env vars (not committed — see `.gitignore` `.env*`); the route returns 500 if they're missing. It only `console.error`s on actual failure branches (missing env vars, transporter verification, send failure) and never logs submitted form content — keep it that way if you touch it.

### Styling

Tailwind CSS 4 via `@tailwindcss/postcss`, imported once in `src/app/globals.css`. There is no shared design-token/theme layer wired into Tailwind — colors are ad-hoc hex literals in `className` (e.g. `text-[#0A0A23]`, `#dab63e` gold, `#23508e` blue) and inline `style={{ background: 'linear-gradient(...)' }}`, repeated per component rather than centralized. Custom font-family utility classes (`.inter-text`, `.merriweather-text`, plus `dm-serif-text-regular` used inline) and the scroll/entrance animation keyframes (`fadeInUp`, `fadeInLeft`, `fadeInRight`, `fadeInTop`, `fadeInBottom` and their `.fade-in-*` classes) are hand-written in `globals.css` rather than Tailwind config.

`DESIGN.md` at the repo root is a Webflow-derived design-token reference (colors, type scale, spacing, component specs) — it does **not** reflect the current implementation (the live code uses the navy/gold palette described above, not Webflow's tokens). Treat it as an aspirational/reference document, not a source of truth for existing components, unless the user is actively migrating toward it.

### Path aliases

`@/*` maps to `src/*` (see `tsconfig.json`). Existing imports are inconsistent — some use `@/app/...`, others use relative `../` paths within `src/app`.
