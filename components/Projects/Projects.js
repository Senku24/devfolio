import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

const Projects = ({ isDesktop, clientHeight, prefersReducedMotion = false }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });
    const sidePadding =
      document.body.clientWidth -
      sectionRef.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      sectionRef.current.querySelector(".project-wrapper").clientWidth;
    sectionRef.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(sectionRef.current, { x: width })
      .to(sectionTitleRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    const section = sectionRef.current;
    const projectWrapper = section.querySelector(".project-wrapper");
    const reduced = prefersReducedMotion;

    // Reset any inline geometry left by the previous layout before measuring.
    const ctx = gsap.context(() => {
      gsap.set(section, { clearProps: "transform,width" });
      gsap.set(sectionTitleRef.current, { clearProps: "transform" });
      projectWrapper.style.width = "";
      projectWrapper.style.overflowX = "";
      projectWrapper.style.scrollSnapType = "";

      if (isDesktop && !reduced) {
        getProjectsSt();
      } else {
        projectWrapper.style.width = "calc(100vw - 1rem)";
        projectWrapper.style.overflowX = "auto";
        projectWrapper.style.scrollSnapType = "x mandatory";
        projectWrapper.style.webkitOverflowScrolling = "touch";
      }

      getRevealSt();
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [sectionRef, sectionTitleRef, isDesktop, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      aria-label="Projects"
      className={`${
        isDesktop && !prefersReducedMotion ? "min-h-screen" : ""
      } w-full relative select-none section-container`}
    >
      <div className="flex flex-col justify-center h-full">
        <div
          className="flex flex-col inner-container"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            PROJECTS
          </p>
          <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            My Projects
          </h2>
          <p className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
            Six builds from my GitHub — full-stack apps, AI tools and developer
            tooling.
          </p>
          <a
            href="https://github.com/Senku24?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="link mt-5 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent hover:underline"
          >
            See all repositories on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-8"
          } flex project-wrapper no-scrollbar w-fit staggered-reveal`}
        >
          {PROJECTS.map((project, index) => (
            <ProjectTile
              classes={
                index === PROJECTS.length - 1 ? "" : "mr-8 xs:mr-10 sm:mr-12"
              }
              project={project}
              isDesktop={isDesktop}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
