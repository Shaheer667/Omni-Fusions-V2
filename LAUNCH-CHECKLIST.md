# Omni Fusions — Launch Checklist

## Before deploying this revision

1. Confirm the contact form environment variables are configured on the live host:
   - `RESEND_API_KEY`
   - `CONTACT_FROM_EMAIL` (must use a verified sending domain)
   - `CONTACT_TO_EMAIL=info@omnifusions.com`
2. Submit one real test enquiry from the live site and confirm it reaches the inbox and reply-to points to the visitor.
3. If using analytics, configure `NEXT_PUBLIC_GA_ID` and/or `NEXT_PUBLIC_CLARITY_ID` and test both consent choices.
4. Review the Privacy, Terms, Cookie, and Cancellation & Refund pages with qualified legal counsel for any jurisdiction-specific obligations or business terms.
5. Keep records of the source/licence for temporary stock imagery. Replace temporary stock with genuine Omni Fusions photography when suitable team/workspace imagery is available.
6. Verify every public case-study statement, client number, team-size claim and testimonial quote is accurate and approved for public use.

## Changes included in this revision

- Added Careers to the primary navigation.
- Added a direct Contact link while keeping Start a Project as the primary CTA.
- Expanded the footer into Company, Services, Legal and Contact navigation.
- Added Terms & Conditions, Cookie Policy and Cancellation & Refund Policy pages.
- Expanded the existing Privacy Policy.
- Added a Careers page without inventing active job openings.
- Removed visible Upwork/platform branding from testimonial presentation and service proof labels.
- Removed “Pakistan-based” from front-facing site description/privacy wording while retaining factual founding-location structured data.
- Added agency/process imagery to Services, About and Contact.
- Fixed a missing homepage image reference.
- Optimized large agency JPEG assets to WebP for faster delivery.
- Added basic HTTP security headers.
- Added the new public routes to the sitemap.
- Added social/profile URLs and sales contact data to Organization structured data.

## Suggested live QA widths

- 1440px desktop
- 1024px tablet landscape
- 820px / 768px tablet
- 430px mobile
- 390px mobile
- 360px mobile

Check: header/menu, Services dropdown, forms, image crops, footer columns, project cards, legal pages and Careers.
