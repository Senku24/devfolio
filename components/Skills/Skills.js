/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EXPLORING, MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } }).from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0.4, duration: 0.4, stagger: 0.18, immediateRender: false },
        "<"
      );
      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "80px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });
    return () => ctx.revert();
  }, []);

  const loop = [...EXPLORING, ...EXPLORING];

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      aria-label="Skills"
      className="relative mt-32 w-full select-none"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-10 h-64 opacity-40"
        style={{
          background: "radial-gradient(ellipse at 20% 0%, rgba(139,49,255,0.12), transparent 60%)",
        }}
      />
      <div className="section-container flex flex-col justify-center py-16">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute bottom-2/4 right-0 hidden w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="skills-wrapper flex flex-col">
          <p className="staggered-reveal uppercase tracking-widest text-gray-light-1">Skills</p>
          <h2 className="staggered-reveal mt-2 w-fit text-6xl font-medium text-gradient">My Skills</h2>
          <p className="staggered-reveal mt-2 w-full text-[1.65rem] font-medium md:max-w-lg">
            Skills I use to build things.
          </p>
          <div className="staggered-reveal mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-8">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-4 text-[11px] font-medium uppercase tracking-widest text-gray-light-2">
                  {group}
                </h3>
                <ul className="flex flex-col gap-3">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <div className="group flex items-center gap-2 text-sm text-gray-light-3 transition hover:text-white">
                        <Image
                          src={`/skills/${skill.icon}.svg`}
                          alt=""
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px] object-contain transition-transform duration-200 group-hover:scale-110"
                        />
                        <span>{skill.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="staggered-reveal mt-16 overflow-hidden">
            <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-light-2">
              Currently exploring
            </h3>
            <div className="explore-marquee group relative">
              <ul className="explore-track flex w-max gap-3 py-1">
                {loop.map((item, i) => (
                  <li key={`${item}-${i}`}>
                    <span className="inline-block border border-white/15 px-3 py-1.5 text-sm text-gray-light-3 transition hover:border-purple hover:text-white hover:shadow-[0_8px_24px_rgba(124,58,237,0.16)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
