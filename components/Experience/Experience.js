import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CERTIFICATION, EDUCATION, EXPERIENCE, MENULINKS } from "../../constants";

const Experience = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        opacity: 0.5,
        x: -16,
        stagger: 0.12,
        duration: 0.5,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.fromTo(
        ".exp-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 70%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      aria-label="Experience"
      className="section-container py-28"
    >
      <p className="uppercase tracking-widest text-gray-light-1">Experience</p>
      <h2 className="mt-2 w-fit text-6xl font-medium text-gradient">Where I&apos;ve worked</h2>
      <ol className="exp-list relative mt-14 border-l border-white/10">
        <span className="exp-line pointer-events-none absolute left-[-1px] top-0 h-full w-px origin-top bg-accent" />
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="exp-item relative pb-12 pl-10 last:pb-0">
            <span className="absolute -left-[7px] top-3 h-3 w-3 bg-accent" />
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-white">{job.company}</h3>
                <p className="text-gray-light-2">
                  {job.title} · {job.location}
                </p>
              </div>
              <p className="ml-auto font-mono text-xs text-gray-light-4">{job.dates}</p>
            </div>
            <p className="mt-4 max-w-2xl text-gray-light-3">{job.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-2">
        <article className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
            <Image
              src={EDUCATION.logo}
              alt="VIT logo"
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gray-light-4">Education</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{EDUCATION.school}</h3>
            <p className="text-gray-light-2">{EDUCATION.degree}</p>
            <p className="mt-1 font-mono text-xs text-gray-light-4">{EDUCATION.dates}</p>
          </div>
        </article>
        <article className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1.5">
            <Image
              src={CERTIFICATION.logo}
              alt="Microsoft logo"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gray-light-4">
              Certification
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{CERTIFICATION.name}</h3>
            <p className="text-gray-light-2">
              {CERTIFICATION.issuer} · Issued {CERTIFICATION.issued}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
