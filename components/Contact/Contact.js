import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Profiles from "../Profiles/Profiles";
import Button from "../Button/Button";
import { MENULINKS, PROFILE } from "../../constants";

const Contact = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "none" } }).from(
        ".staggered-reveal",
        { opacity: 0, duration: 0.5, stagger: 0.35 },
        "<"
      );
      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".contact-wrapper"),
        start: "80px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[5].ref}
      aria-label="Contact"
      className="relative mt-16 w-full select-none bg-black pb-20 pt-16"
    >
      <div className="section-container flex flex-col justify-center">
        <div className="contact-wrapper flex flex-col">
          <p className="staggered-reveal uppercase tracking-widest text-gray-light-1">Contact</p>
          <h2 className="staggered-reveal mt-2 w-fit text-6xl font-medium text-gradient">
            Have something worth building?
          </h2>
          <p className="staggered-reveal mt-4 max-w-xl text-[1.65rem] font-medium">
            I&apos;m open to engineering roles and collaborations that need someone who can take an
            idea across the stack.
          </p>
          <div className="staggered-reveal">
            <Profiles />
          </div>
          <div className="staggered-reveal flex flex-wrap gap-3">
            <Button href={PROFILE.linkedin} classes="link" type="primary" target="_blank" rel="noreferrer">
              LinkedIn
            </Button>
            <Button href={PROFILE.github} classes="link" type="secondary" target="_blank" rel="noreferrer">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
