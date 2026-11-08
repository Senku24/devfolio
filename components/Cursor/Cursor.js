import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const cursorEl = cursor.current;
    const followerEl = follower.current;
    if (!cursorEl || !followerEl) return;

    gsap.set([cursorEl, followerEl], { xPercent: -50, yPercent: -50 });
    const cursorX = gsap.quickTo(cursorEl, "x", { duration: 0.1, ease: "none" });
    const cursorY = gsap.quickTo(cursorEl, "y", { duration: 0.1, ease: "none" });
    const followerX = gsap.quickTo(followerEl, "x", { duration: 0.3, ease: "none" });
    const followerY = gsap.quickTo(followerEl, "y", { duration: 0.3, ease: "none" });

    const moveCircle = (event) => {
      cursorX(event.clientX);
      cursorY(event.clientY);
      followerX(event.clientX);
      followerY(event.clientY);
    };

    const hover = () => {
      gsap.to(cursorEl, { scale: 0.5, duration: 0.3 });
      gsap.to(followerEl, { scale: 3, duration: 0.3 });
    };

    const unHover = () => {
      gsap.to(cursorEl, { scale: 1, duration: 0.3 });
      gsap.to(followerEl, { scale: 1, duration: 0.3 });
    };

    document.addEventListener("mousemove", moveCircle, { passive: true });
    const links = document.querySelectorAll(".link");
    links.forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", hover);
        el.removeEventListener("mouseleave", unHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursor}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 select-none rounded-full bg-accent"
      />
      <div
        ref={follower}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 h-10 w-10 select-none rounded-full border border-accent/40"
      />
    </>
  );
};

export default Cursor;
