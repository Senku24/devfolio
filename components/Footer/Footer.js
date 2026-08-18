/* eslint-disable @next/next/no-img-element */
import FooterBg from "./FooterBg/FooterBg";
import { theme } from "tailwind.config";
import { PROFILE } from "../../constants";
import { IconGithub, IconLinkedin, IconMail } from "@/components/Icons";

const ResumeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 3v5h5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const Footer = () => (
  <footer
    className="relative w-full select-none bg-cover"
    style={{
      backgroundImage: `linear-gradient(to right, ${theme.colors.indigo.light}, ${theme.colors.indigo.dark})`,
    }}
  >
    <FooterBg />
    <div className="h-full w-full pt-32 text-black">
      <div className="section-container z-10 flex h-full flex-col items-center justify-end py-12">
        <p className="text-3xl font-semibold text-black md:text-4xl">{PROFILE.name}</p>
        <p className="mt-2 text-center text-sm font-medium text-black/80 md:text-base">
          {PROFILE.title} · {PROFILE.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-black [&_svg]:stroke-black">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 text-sm font-semibold">
            <IconGithub /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 text-sm font-semibold">
            <IconLinkedin /> LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            <IconMail /> Email
          </a>
          <a href={PROFILE.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">
            <ResumeIcon /> Resume
          </a>
        </div>
        <p className="mt-8 text-center text-sm font-medium tracking-wide text-black">
          Built by {PROFILE.name}
          <span className="mt-2 block font-mono text-xs uppercase tracking-wider text-black/70">
            {PROFILE.location}
          </span>
        </p>
      </div>
    </div>
    <img src="/footer-curve.svg" className="w-full rotate-180" alt="" loading="lazy" height={180} />
  </footer>
);

export default Footer;
