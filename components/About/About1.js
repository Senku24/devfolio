import useInView from "utils/use-in-view";

const About1 = ({ clientHeight }) => {
  const [sectionRef, inView] = useInView({ threshold: 0.3 });

  return (
    <section ref={sectionRef} aria-label="About" className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h2 className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center">
          <span
            className={`about-1 leading-tight reveal ${
              inView ? "is-visible" : ""
            }`}
          >
            I build production software across the stack — interfaces, APIs,
            data, and the last mile of shipping.{" "}
          </span>
          <span
            className={`about-2 leading-tight reveal ${
              inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            Lately that includes AI-powered tools, SaaS systems, and products
            people actually use.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default About1;
