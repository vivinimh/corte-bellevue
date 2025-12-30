import { useState, useEffect } from "react";

// Hook to detect when element is in view (replayable)
export function useInView() {
  const [isInView, setIsInView] = useState(false);
  const [wasInView, setWasInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasInView) {
          setIsInView(true);
          setWasInView(true);
        } else if (!entry.isIntersecting && wasInView) {
          // Reset when leaving viewport to allow replay
          setIsInView(false);
          setWasInView(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, wasInView]);

  return [setRef, isInView] as const;
}









