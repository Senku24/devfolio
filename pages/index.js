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
  const [clientHeight, setClientHeight] = useState(800);

  useEffect(() => {
    displayFancyLogs();
    const media = window.matchMedia(DESKTOP_QUERY);
    const apply = () => {
      setIsDesktop(media.matches);
      setClientHeight(window.innerHeight);
      ScrollTrigger.refresh();
    };
    apply();
    media.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    return () => {
      media.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
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
      <Cursor isDesktop={isDesktop} />
      <main id="content" className="flex flex-col">
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
        <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
        <Experience />
        <Collaboration clientHeight={clientHeight} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
