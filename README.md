# Ahmed Osama — Portfolio

A responsive portfolio for Ahmed Osama, featuring selected frontend projects, skills, and an Upwork contact link.

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

The prebuild step generates AVIF and WebP image variants in `public/images`; Vercel runs it through the configured build command.

## Deploy to Vercel

Import `Ahmed-Osama99/ahmed-osama-portfolio` as a Vercel project. The repository's `vercel.json` sets `npm run build` and `dist` as the output directory. Keep the project root set to the repository root. Once imported, pushes to the production branch can trigger new deployments.

After Vercel assigns the production URL, add it as the canonical URL and set absolute `og:url` and social preview image URLs in `index.html` if you want link previews.
