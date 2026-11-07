import { cloneElement, useCallback, useEffect, useRef, useState } from "react";
import { useSfx } from "utils/use-sfx";
import SoundBar from "./SoundBar/SoundBar";
import { MENULINKS, PROFILE } from "../../constants";
import { IconGithub, IconLinkedin } from "@/components/Icons";

const ResumeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M14 3v5h5M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const Header = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);
  const sfx = useSfx();

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    sfx.play("pop");
  }, [sfx]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    sfx.play("pop-down");
  }, [sfx]);

  const toggleMenu = useCallback(
    () => (menuOpen ? closeMenu() : openMenu()),
    [menuOpen, openMenu, closeMenu]
  );

  // Lock body scroll while the overlay is open. Centralised here so every
  // close path (link, Escape, backdrop, unmount) restores the previous value.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("py-4", window.scrollY > 24);
      navRef.current.classList.toggle("border-b", window.scrollY > 24);
      navRef.current.classList.toggle("border-white/5", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full select-none bg-gradient-to-b from-black py-6 shadow-black transition-[padding] duration-300"
    >
      <div className="section-container flex items-center justify-between">
        <a
          href="#home"
          className="group relative text-[1.15rem] font-semibold tracking-tight text-white transition-colors hover:text-accent"
        >
          {PROFILE.name}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#c8f542]" />
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {MENULINKS.slice(1).map((item) => (
            <a
              key={item.ref}
              href={`#${item.ref}`}
              className="font-mono text-xs uppercase tracking-wider text-gray-light-3 transition hover:text-accent"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div
          className={`outer-menu relative z-[1] flex items-center gap-5 ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden text-white hover:text-accent sm:inline-flex">
            <IconGithub />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden text-white hover:text-accent sm:inline-flex">
            <IconLinkedin />
          </a>
          {PROFILE.resume ? (
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-gray-light-2 hover:text-accent sm:inline-flex"
            >
              <ResumeIcon /> Resume
            </a>
          ) : null}
          <SoundBar />
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="side-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="hamburger link relative flex h-6 w-6 items-center justify-center"
          >
            <div className="relative flex w-full items-center justify-center bg-white duration-300" />
          </button>
          {children
            ? cloneElement(children, {
                open: menuOpen,
                onClose: closeMenu,
              })
            : null}
        </div>
      </div>
    </nav>
  );
};

export default Header;
