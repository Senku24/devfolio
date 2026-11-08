import useInView from "utils/use-in-view";

const LEFT_TEXT =
  "Software Engineering · Problem Solving · Software Architecture · ";
const RIGHT_TEXT =
  "Full-Stack Development · AI Systems · SaaS Engineering · ";

const Collaboration = ({ clientHeight }) => {
  const [sectionRef, inView] = useInView({
    once: false,
    threshold: 0,
    rootMargin: "120px",
  });

  return (
    <section
      ref={sectionRef}
      aria-label="Collaboration"
      className="w-full relative select-none my-40 cv-auto"
    >
      <div
        className={`${
          clientHeight > 650 ? "py-36" : "py-48"
        } section-container flex flex-col`}
      >
        <div className="overflow-hidden" aria-hidden="true">
          <p
            className="collab-track collab-track-left opacity-40 text-6xl sm:text-7xl font-semibold"
            style={{ animationPlayState: inView ? "running" : "paused" }}
          >
            <span>{LEFT_TEXT.repeat(4)}</span>
            <span>{LEFT_TEXT.repeat(4)}</span>
          </p>
        </div>

        <h2
          className="mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
        >
          Interested in{" "}
          <span
            className="text-strong font-semibold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #c8f542 51%, #d8ff6a 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Collaboration
          </span>
          ?
        </h2>

        <div className="mt-6 md:mt-8 overflow-hidden" aria-hidden="true">
          <p
            className="collab-track collab-track-right opacity-40 text-6xl sm:text-7xl font-semibold"
            style={{ animationPlayState: inView ? "running" : "paused" }}
          >
            <span>{RIGHT_TEXT.repeat(4)}</span>
            <span>{RIGHT_TEXT.repeat(4)}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
