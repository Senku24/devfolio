import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ABOUT, MENULINKS } from "../../constants";

const blocks = [
  { label: "Who I am", text: ABOUT.who },
  { label: "What I build", text: ABOUT.build },
  { label: "What I’m exploring", text: ABOUT.explore },
  { label: "How I work", text: ABOUT.work },
];

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      gsap.from(".about-block", {
        y: 20,
        opacity: 0.55,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      aria-label="About"
      className="section-container py-20"
    >
      <p className="uppercase tracking-widest text-gray-light-1">About</p>
      <h2 className="mt-2 w-fit text-6xl font-medium text-gradient">A little more</h2>
      <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
        {blocks.map((block) => (
          <article
            key={block.label}
            className="about-block bg-black p-8 text-gray-light-2 transition duration-300 hover:bg-gray-dark-4"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {block.label}
            </p>
            <p className="mt-4 text-lg leading-relaxed">{block.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
