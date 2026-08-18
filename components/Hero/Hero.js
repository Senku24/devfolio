import { useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, PROFILE } from "../../constants";
import { IconGithub, IconLinkedin } from "@/components/Icons";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-[min(78vh,620px)] w-full" aria-hidden="true" />,
});

const ResumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 3v5h5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const Hero = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
        opacity: 0.25,
        y: 14,
        duration: 0.42,
        stagger: 0.07,
        ease: "power2.out",
        immediateRender: false,
      });
      gsap.from(".hero-visual", {
        opacity: 0.2,
        scale: 0.97,
        duration: 0.7,
        ease: "power2.out",
        immediateRender: false,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      aria-label="Introduction"
      className="relative mx-auto mb-24 flex min-h-screen w-full items-center overflow-hidden py-8 2xl:container xl:px-20 md:px-12 px-4"
    >
      <div
        className="pointer-events-none absolute right-0 top-10 h-[70%] w-[55%] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(139,49,255,0.18), transparent 62%)",
        }}
      />
      <div className="grid w-full items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)]">
        <div className="flex flex-col pt-32 select-none md:pt-0">
          <h5 className={`${styles.intro} staggered-reveal font-mono font-medium text-accent`}>
            {PROFILE.location}
          </h5>
          <h1 className={`${styles.heroName} text-5xl font-semibold text-white sm:text-6xl`}>
            <span className={`relative ${styles.emphasize} staggered-reveal`}>Nixon</span>
            <span className="staggered-reveal"> Paul</span>
          </h1>
          <p className="staggered-reveal text-2xl font-medium text-gray-light-2 sm:text-3xl">
            {PROFILE.title}
          </p>
          <p className="staggered-reveal mt-2 font-mono text-sm text-gray-light-3 sm:text-base">
            {PROFILE.subtitle}
          </p>
          <p className="staggered-reveal mt-5 max-w-md text-lg text-gray-light-3">
            {PROFILE.tagline}
          </p>
          <div className="staggered-reveal">
            <Profiles />
          </div>
          <div className="staggered-reveal flex flex-wrap items-center gap-3 pt-2">
            <Button href={`#${MENULINKS[3].ref}`} classes="link" type="primary">
              <span className="inline-flex items-center gap-2">
                View Projects <ArrowIcon />
              </span>
            </Button>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent hover:shadow-[0_8px_30px_rgba(124,58,237,0.18)]"
            >
              <IconGithub /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent hover:shadow-[0_8px_30px_rgba(124,58,237,0.18)]"
            >
              <IconLinkedin /> LinkedIn
            </a>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              <ResumeIcon /> Resume
            </a>
          </div>
        </div>
        <div className="hero-visual relative z-10 w-full overflow-hidden lg:max-h-[min(78vh,760px)]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;
