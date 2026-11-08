import { useRef } from "react";
import useIsomorphicLayoutEffect from "utils/use-isomorphic-layout-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Profiles from "../Profiles/Profiles";
import Button from "../Button/Button";
import EmailLink from "../EmailLink/EmailLink";
import CopyEmailButton from "./CopyEmailButton";
import { MENULINKS, PROFILE } from "../../constants";

const Contact = () => {
  const sectionRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".staggered-reveal", {
        opacity: 0,
        y: 18,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".contact-wrapper"),
          start: "top 80%",
          once: true,
        },
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
          {PROFILE.email ? (
            <div className="staggered-reveal mt-4 flex flex-wrap items-center gap-4">
              <EmailLink
                email={PROFILE.email}
                className="inline-flex font-mono text-base text-accent underline-offset-4 hover:underline"
              >
                {PROFILE.email}
              </EmailLink>
              <CopyEmailButton />
            </div>
          ) : null}
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
