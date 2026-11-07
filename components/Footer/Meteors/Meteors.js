import { useMemo } from "react";
import { cn } from "utils/cn";

// Deterministic PRNG so SSR and client markup match (no hydration mismatch)
// and no effect is needed just to randomise decoration.
const mulberry32 = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const Meteors = ({ number = 10 }) => {
  const meteors = useMemo(() => {
    const rand = mulberry32(number * 9301 + 49297);
    return [...new Array(number)].map(() => ({
      top: "-5%",
      left: Math.floor(rand() * 100) + "%",
      animationDelay: rand() * 1 + 0.2 + "s",
      animationDuration: Math.floor(rand() * 9 + 2) + "s",
    }));
  }, [number]);

  return (
    <>
      {meteors.map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
