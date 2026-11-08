import { ABOUT, MENULINKS } from "../../constants";
import useInView from "utils/use-in-view";

const blocks = [
  { label: "Who I am", text: ABOUT.who },
  { label: "What I build", text: ABOUT.build },
  { label: "What I’m exploring", text: ABOUT.explore },
  { label: "How I work", text: ABOUT.work },
];

const About = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

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
        {blocks.map((block, index) => (
          <article
            key={block.label}
            className={`about-block bg-black p-8 text-gray-light-2 transition duration-300 hover:bg-gray-dark-4 reveal ${
              inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
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
