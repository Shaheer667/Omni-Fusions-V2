# Omni Fusions V2

Premium lead-generation website for Omni Fusions, built with Next.js App Router.

## What is included

- Conversion-focused homepage
- Services overview
- Graphic Design service page
- Video Editing service page
- Web Development service page
- Ongoing Creative Support page
- Selected Work page grouped by discipline
- Individual case-study routes for web, design and video work
- About page
- Qualified Start a Project form
- Thank-you page for conversion tracking
- Privacy notice
- Responsive navigation with service dropdown
- SEO metadata, canonicals, Open Graph, sitemap and robots
- Organization, Service and CreativeWork structured data
- 301 redirects for major legacy template routes
- Optional Google Analytics + Microsoft Clarity consent flow
- Server-side contact form endpoint using Resend
- Stock-free visual placeholders that can be replaced by real Omni Fusions project imagery

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production contact form

The form posts to `/api/contact` and sends inquiries through the Resend REST API. Create `.env.local` from `.env.example` and set:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL=Omni Fusions Website <website@your-verified-domain.com>
CONTACT_TO_EMAIL=info@omnifusions.com
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified in Resend.

## Optional analytics

Add any of these to `.env.local` / deployment environment variables:

```env
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_CLARITY_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

When GA or Clarity is configured, the site shows an analytics preference control and only loads optional analytics after acceptance.

## Before launch

1. Replace abstract portfolio visuals with final project mockups/screenshots/video loops using `ASSET-BRIEF.md`.
2. Replace the About page studio visual with a real Omni Fusions office/team photo or short muted reel.
3. Verify every case-study statement against final project records before publishing.
4. Add final client logos only where permission exists.
5. Configure Resend and test the contact form on production.
6. Configure Search Console and optional analytics.
7. Run Lighthouse / Core Web Vitals checks after final media is added.
8. Review legacy URLs in Google Search Console and add any missing redirects before switching the domain.

## Important

Do not commit `node_modules`, `.next` or environment files. A `.gitignore` is included.
