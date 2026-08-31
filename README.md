# Omni Fusions V2 — First Build

Fresh Next.js App Router rebuild for omnifusions.com. The previous Envato/template source was reviewed but intentionally not reused beyond verified brand/contact assets and old-route redirect knowledge.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Current V1 scope
- Premium light/dark/red design system based on existing Omni Fusions branding
- Conversion-focused homepage
- Service overview
- Graphic Design page
- Video Editing page
- Web Development page
- Dedicated Creative Support page
- Work / portfolio structure
- About page
- Lead-qualification contact form UI
- Metadata, canonical URLs, sitemap.xml, robots.txt and Organization JSON-LD
- Redirects from major old template URLs
- Stock-free project placeholders with a separate ASSET-BRIEF.md

## Before production launch
1. Replace all project placeholders with curated real work.
2. Add real client logos that can be displayed publicly.
3. Add final office/team imagery.
4. Confirm business address/phone before adding LocalBusiness schema.
5. Connect the contact form to a real backend/CRM (e.g. Resend, HubSpot, Formspree or your own API) and add spam protection.
6. Add GA4 + Search Console + conversion events.
7. Add final case studies with measurable outcomes where available.
8. Perform keyword research before expanding into sub-service SEO pages.
9. Build a complete redirect map from Google Search Console / indexed URLs before replacing the existing site.
10. Run Lighthouse/Core Web Vitals checks after real media is added.

## Important
The contact form currently opens a pre-filled email so the UI is testable without API credentials. This is not the final production lead-capture implementation.
