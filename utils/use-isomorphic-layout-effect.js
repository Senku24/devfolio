import { useEffect, useLayoutEffect } from "react";

// GSAP needs layout timing on the client, but useLayoutEffect warns during SSR.
// The server render falls back to useEffect; the browser keeps layout timing.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
