# Nixon Paul — Portfolio

Personal portfolio for Nixon Paul, Software Engineer and Full-Stack Developer.
Built with Next.js (Pages Router), Tailwind CSS, GSAP and SCSS modules.

![Portfolio screenshot](https://github.com/user-attachments/assets/7eb37d64-675c-42f1-9726-bdbc491d7a1c)

## Getting started

Requires Node.js 20+ and [Bun](https://bun.sh).

```bash
bun install
bun run dev      # start the dev server at http://localhost:3000
```

## Scripts

```bash
bun run dev      # local development
bun run build    # production build
bun run start    # serve the production build
bun run lint     # ESLint (flat config, eslint-config-next)
```

## Project structure

```
components/       # one folder per section (Hero, About, Skills, Projects, Experience, Contact)
pages/            # single-page entry (pages/index.js) and 404
constants.js      # all site content: profile, menu, projects, skills, experience
public/           # fonts, images, sounds, skills/tech icons, resume (add public/resume.pdf)
styles/           # globals.scss (Tailwind layers, menu, shared styles)
tailwind.config.js
```

Nearly all content lives in `constants.js` — edit profile, projects, skills and
experience there. Items still awaiting owner input are marked `TODO(owner)`.

## Deployment

Any Node host or static export target works. For Vercel, import the repo and
deploy with defaults (bun is auto-detected; otherwise `bun run build` /
`bun run start`). Before launch, set:

- `METADATA.siteUrl` in `constants.js` (absolute origin, used for canonical/OG/sitemap)
- `public/preview.png` OG image (already 1200×630)
- `public/resume.pdf` resume file

## License

MIT — see [LICENSE.md](LICENSE.md). Copyright (c) 2022 Shubh Porwal and
(c) 2026 Nixon Paul.

Based on the MIT-licensed portfolio template by [Shubh Porwal](https://github.com/shubhamporwal/devfolio).
