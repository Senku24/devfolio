import { useState, useRef } from "react";
import { cn } from "utils/cn";
import useInView from "utils/use-in-view";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [barRef, barInView] = useInView({
    once: false,
    threshold: 0,
    rootMargin: "80px",
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    const audio = soundBarEl.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // Autoplay policies and unsupported formats reject play(); keep the UI off.
      setIsPlaying(false);
    }
  };

  return (
    <>
      <button
        ref={barRef}
        type="button"
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={cn(
          "soundBars link top-1 right-14 flex items-center justify-center",
          isPlaying && "play",
          !barInView && "is-paused",
        )}
        onClick={togglePlayPause}
      >
        <span />
        <span />
        <span />
        <span />
      </button>
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="none" />
    </>
  );
};

export default SoundBar;
