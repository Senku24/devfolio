# Nixon Paul — Portfolio

Personal portfolio for Nixon Paul, Software Engineer and Full-Stack Developer.
Built with Next.js (Pages Router), Tailwind CSS, GSAP and SCSS modules.

![Portfolio screenshot](https://github.com/user-attachments/assets/7eb37d64-675c-42f1-9726-bdbc491d7a1c)

## Getting started

Requires Node.js 20+ and [Bun](https://bun.sh) 1.3+.

```bash
bun install
bun run dev      # http://localhost:3000
```

## Scripts

```bash
bun run dev                # local development
bun run build              # production build
bun run start              # serve the production build
bun run lint               # ESLint (flat config, eslint-config-next)
bun audit --production     # production dependency audit
```

## Project structure

```
components/       # one folder per section, plus Hero/HeroVisual (inline SVG)
pages/            # single-page entry (pages/index.js) and 404
constants.js      # all site content: profile, menu, projects, skills, experience
public/           # fonts, images, sounds, skill icons, preview.png
styles/           # globals.scss (Tailwind layers, menu, shared styles)
utils/            # cn, analytics-free helpers, sound effects
```

Nearly all content lives in `constants.js` — edit profile, projects, skills and
experience there. Anything still waiting on owner input is marked
`TODO(owner)` and is listed in the pull request.

## Deployment

Vercel (or any Node host) works with the defaults. Set one environment variable
in the deployment project:

```bash
NEXT_PUBLIC_SITE_URL=https://your-primary-domain.com
```

It is the single source for canonical, Open Graph and Twitter URLs. The same
origin must be written into `public/sitemap.xml` and `public/robots.txt`; both
currently contain the `https://example.com` placeholder.

Before launch:

- add the final PDF at `public/resume.pdf`, then set `PROFILE.resume` back to
  `"/resume.pdf"` (the resume links stay hidden while it is empty)
- replace the `https://example.com` entries in `public/sitemap.xml` and
  `public/robots.txt`
- add `TODO(owner)` project roles/live URLs, the skills shortlist confirmation
  and experience metrics

## License

MIT — see [LICENSE.md](LICENSE.md). Copyright (c) 2022 Shubh Porwal and
(c) 2026 Nixon Paul.

Based on the MIT-licensed portfolio template by
[Shubh Porwal](https://github.com/shubh73/devfolio).
