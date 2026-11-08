import useInView from "utils/use-in-view";
import Button from "../Button/Button";
import EmailLink from "../EmailLink/EmailLink";
import CopyEmailButton from "./CopyEmailButton";
import { MENULINKS, PROFILE } from "../../constants";

const Contact = () => {
  const [sectionRef, inView] = useInView({ threshold: 0.2 });
  const reveal = (delay = 0) => ({
    className: `reveal ${inView ? "is-visible" : ""}`,
    style: { transitionDelay: `${delay}ms` },
  });

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[5].ref}
      aria-label="Contact"
      className="relative mt-16 w-full select-none bg-black pb-20 pt-16 cv-auto"
    >
      <div className="section-container flex flex-col justify-center">
        <div className="contact-wrapper flex flex-col">
          <p className="uppercase tracking-widest text-gray-light-1" {...reveal()}>
            Contact
          </p>
          <h2 className="mt-2 w-fit text-6xl font-medium text-gradient" {...reveal(80)}>
            Have something worth building?
          </h2>
          <p className="mt-4 max-w-xl text-[1.65rem] font-medium" {...reveal(160)}>
            I&apos;m open to engineering roles and collaborations that need someone who can take an
            idea across the stack.
          </p>
          {PROFILE.email ? (
            <div className="mt-4 flex flex-wrap items-center gap-4" {...reveal(260)}>
              <EmailLink
                email={PROFILE.email}
                className="inline-flex font-mono text-base text-accent underline-offset-4 hover:underline"
              >
                {PROFILE.email}
              </EmailLink>
              <CopyEmailButton />
            </div>
          ) : null}
          <div className="flex flex-wrap gap-3" {...reveal(300)}>
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
