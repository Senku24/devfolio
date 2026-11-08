import { useEffect, useRef } from "react";

const ProgressIndicator = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    let maxScroll = 0;
    let ticking = false;
    let resizeTimer;

    const measure = () => {
      maxScroll =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
    };

    const update = () => {
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      bar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        measure();
        update();
      }, 150);
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="progress fixed top-0 z-50 w-full" aria-hidden="true">
      <div ref={progressRef} className="progress-bar"></div>
    </div>
  );
};

export default ProgressIndicator;
