"use client";

import { useEffect } from "react";

/**
 * Boots the GSAP motion + interaction layer once, after hydration.
 * The page itself is static server-rendered markup; these scripts enhance it in place
 * exactly like the original site's end-of-body scripts did.
 */
export default function SiteMotion() {
  useEffect(() => {
    if (window.__siteMotionBooted) return;
    window.__siteMotionBooted = true;

    let cancelled = false;
    Promise.all([import("@/lib/motion"), import("@/lib/interactions")]).then(
      ([motion, interactions]) => {
        if (cancelled) return;
        motion.default();
        interactions.default();

        // Images / fonts change layout after boot: recompute every ScrollTrigger once they settle.
        const { ScrollTrigger } = motion;
        const refresh = () => ScrollTrigger.refresh();
        if (document.readyState === "complete") refresh();
        else window.addEventListener("load", refresh, { once: true });
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
      }
    );
    return () => { cancelled = true; };
  }, []);

  return null;
}
