# Ahmed Osama — Portfolio

A responsive portfolio website for Ahmed Osama, a junior frontend developer. It presents selected projects, the tools used to build them, and ways to get in touch.

## Built with

- React and Vite
- Tailwind CSS v4
- Font Awesome
- React Fast Marquee

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Responsive images

Project and profile images are served through a `<picture>` element with AVIF, WebP, and JPEG fallback sources. The `images` script generates the AVIF/WebP variants at appropriate breakpoints; it also runs automatically before production builds.

```bash
npm run images
```

When adding a new portfolio image, add it to the `images` array in `scripts/generate-images.mjs`, generate variants, then use `ResponsiveImage` in the relevant component.

## Before deployment

- Replace the site URL and add Open Graph metadata once a production domain is available.
- Confirm that the live project, social, email, and WhatsApp links are current.
- Add a résumé download link if you want recruiters to be able to save your CV.
