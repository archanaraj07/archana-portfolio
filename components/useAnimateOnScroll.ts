import { useEffect, useRef, useState } from 'react';

const useAnimateOnScroll = <T extends HTMLElement>(threshold = 0.1) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null); // Store observer instance

  useEffect(() => {
    // Only create a new observer if one doesn't exist or if ref.current changes
    if (!observerRef.current || !ref.current) {
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    // Disconnect observer once visible to ensure animation runs only once
                    if (observerRef.current && ref.current) {
                        observerRef.current.unobserve(ref.current);
                    }
                }
            },
            { threshold }
        );
    }

    if (ref.current && !isVisible) { // Only observe if not already visible
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  return { ref, isVisible };
};

export default useAnimateOnScroll;