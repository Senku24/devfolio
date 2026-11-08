/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import useInView from "utils/use-in-view";
import { EXPLORING, MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.15 });
  const [marqueeRef, marqueeInView] = useInView({
    once: false,
    threshold: 0,
    rootMargin: "120px",
  });

  const loop = [...EXPLORING, ...EXPLORING];

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
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
          <p
            className={`uppercase tracking-widest text-gray-light-1 reveal ${
              inView ? "is-visible" : ""
            }`}
          >
            Skills
          </p>
          <h2
            className={`mt-2 w-fit text-6xl font-medium text-gradient reveal ${
              inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "80ms" }}
          >
            My Skills
          </h2>
          <p
            className={`mt-2 w-full text-[1.65rem] font-medium md:max-w-lg reveal ${
              inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            Skills I use to build things.
          </p>
          <div
            className={`mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-8 reveal ${
              inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-4 text-[11px] font-medium uppercase tracking-widest text-gray-light-2">
                  {group}
                </h3>
                <ul className="flex flex-col gap-3">
                  {items.map((skill) => (
                    <li key={skill.name}>
                      <div className="group flex items-center gap-2 text-sm text-gray-light-3 transition hover:text-white">
                        {skill.icon ? (
                          <Image
                            src={`/skills/${skill.icon}.svg`}
                            alt=""
                            width={22}
                            height={22}
                            className="h-[22px] w-[22px] shrink-0 object-contain transition-transform duration-200 group-hover:scale-110"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="flex h-[22px] w-[22px] shrink-0 items-center justify-center"
                          >
                            <span className="h-1 w-1 rounded-full bg-accent/60" />
                          </span>
                        )}
                        <span>{skill.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className={`mt-16 overflow-hidden reveal ${
              inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "280ms" }}
          >
            <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-light-2">
              Currently exploring
            </h3>
            <div className="explore-marquee group relative">
              <ul
                ref={marqueeRef}
                className="explore-track flex w-max gap-3 py-1"
                style={{ animationPlayState: marqueeInView ? "running" : "paused" }}
              >
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
