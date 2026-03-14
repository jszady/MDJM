# MJDM Agency Website

Premium, futuristic, conversion-focused agency site built with `Next.js`, `TypeScript`, `Tailwind CSS`, and `Framer Motion`.

## Suggested Sitemap

- `/`
- `/services`
- `/work`
- `/about`
- `/blog`
- `/contact`

## Notes

- Homepage is the strongest visual entry point with layered glow, bold typography, and motion-led sections.
- Services are data-driven and structured for future split-out pages with minimal refactor.
- Contact form posts to `src/app/api/contact/route.ts` and is ready to connect to a real email provider.
- Replace placeholder contact details and social URLs in `src/data/site.ts`.
- Replace placeholder case studies, testimonials, and blog content in `src/data/`.
- If an official MJDM logo asset is provided, swap the current wordmark treatment in `src/components/brand/logo.tsx`.

## Local Setup

1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev`.
