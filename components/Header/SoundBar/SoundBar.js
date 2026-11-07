import { useState, useRef } from "react";
import { cn } from "utils/cn";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = soundBarEl.current;
    if (!audio) return;
    if (!isPlaying) {
      const pending = audio.play();
      if (pending && typeof pending.catch === "function") {
        pending.catch(() => setIsPlaying(false));
      }
    } else {
      audio.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <button
      type="button"
      aria-pressed={isPlaying}
      aria-label="Play background music"
      className={cn(
        "soundBars link top-1 right-14 flex items-center justify-center",
        isPlaying && "play",
      )}
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src="/sounds/song.mp3" loop preload="none" />
    </button>
  );
};

export default SoundBar;
