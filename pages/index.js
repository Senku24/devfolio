import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import About1 from "@/components/About/About1";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import About2 from "@/components/About/About2";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import FAQ from "@/components/FAQ/FAQ";
import Collaboration from "@/components/Collaboration/Collaboration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { displayFancyLogs } from "utils/log";

const DESKTOP_QUERY = "(min-width: 1024px) and (pointer: fine)";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [clientHeight, setClientHeight] = useState(800);

  useEffect(() => {
    displayFancyLogs();
    const media = window.matchMedia(DESKTOP_QUERY);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastWidth = window.innerWidth;
    let resizeTimer;

    const sync = () => {
      const nextDesktop = media.matches;
      const nextReduced = reducedMotion.matches;
      const nextHeight = window.innerHeight;

      setIsDesktop((previous) =>
        previous === nextDesktop ? previous : nextDesktop
      );
      setPrefersReducedMotion((previous) =>
        previous === nextReduced ? previous : nextReduced
      );
      setClientHeight((previous) =>
        previous === nextHeight ? previous : nextHeight
      );

      if (window.innerWidth !== lastWidth) {
        lastWidth = window.innerWidth;
        ScrollTrigger.refresh();
      }
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(sync, 150);
    };

    sync();
    media.addEventListener("change", sync);
    reducedMotion.addEventListener("change", sync);
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      clearTimeout(resizeTimer);
      media.removeEventListener("change", sync);
      reducedMotion.removeEventListener("change", sync);
      window.removeEventListener("resize", onResize);
    };
  }, []);


  // content-visibility keeps initial work down, but it also makes hash-link
  // positions approximate. Render those sections before the browser scrolls.
  useEffect(() => {
    const revealSections = () => {
      document.querySelectorAll(".cv-auto").forEach((el) => {
        el.style.contentVisibility = "visible";
      });
    };
    const onClick = (event) => {
      const link =
        event.target instanceof Element
          ? event.target.closest('a[href^="#"]')
          : null;
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      if (id && document.getElementById(id)) revealSections();
    };
    const onHashChange = () => {
      if (!window.location.hash) return;
      revealSections();
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);
    if (window.location.hash) onHashChange();
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header>
        <Menu />
      </Header>
      <ProgressIndicator />
      {isDesktop ? <Cursor /> : null}
      <main id="content" tabIndex={-1} className="flex flex-col outline-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 -z-10 inline-block rotate-90 text-gray-light-1 opacity-10 xs:top-96 xs:text-8xl sm:text-9xl md:top-52"
        >
          DEV
        </div>
        <Hero />
        <About1 clientHeight={clientHeight} />
        <About />
        <Skills />
        <About2 clientHeight={clientHeight} />
        <Projects
          isDesktop={isDesktop}
          clientHeight={clientHeight}
          prefersReducedMotion={prefersReducedMotion}
        />
        <Experience />
        <FAQ />
        <Collaboration clientHeight={clientHeight} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
