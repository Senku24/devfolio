import useInView from "utils/use-in-view";

const About2 = ({ clientHeight }) => {
  const [sectionRef, inView] = useInView({ threshold: 0.3 });

  return (
    <section ref={sectionRef} aria-label="Philosophy" className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "py-80" : "py-72"
        } section-container`}
      >
        <h2
          className={`font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center reveal ${
            inView ? "is-visible" : ""
          }`}
        >
          I have a{" "}
          <span
            className="about-3 font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #c8f542 51%, #d8ff6a 102%)",
              backgroundSize: "200% 100%",
              backgroundPositionX: inView ? "100%" : "0%",
              transition: "background-position 0.8s ease",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            strong
          </span>{" "}
          habit of shipping, then making it better.
        </h2>
      </div>
    </section>
  );
};

export default About2;
