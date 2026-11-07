# Nixon Paul — Portfolio

Personal portfolio for Nixon Paul, Software Engineer and AI Full-Stack Developer.
Built with Next.js, Tailwind CSS, GSAP and SCSS modules.

<img width="1920" height="991" alt="Screenshot 2026-11-08 at 4 40 54 AM" src="https://github.com/user-attachments/assets/6ef41153-a986-49a5-aca0-79867c1a9169" />
<img width="1920" height="989" alt="Screenshot 2026-11-08 at 4 41 27 AM" src="https://github.com/user-attachments/assets/3218c5b5-840c-4652-ae6a-6c7ece130ead" />
<img width="1920" height="1001" alt="Screenshot 2026-11-08 at 4 41 56 AM" src="https://github.com/user-attachments/assets/eadfb3c8-55cf-4219-90d3-4f51eec7283a" />
<img width="1920" height="921" alt="Screenshot 2026-11-08 at 4 42 31 AM" src="https://github.com/user-attachments/assets/4441cca8-276f-4e16-83f9-f4a49f3abd56" />


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
