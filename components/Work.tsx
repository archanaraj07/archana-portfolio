import React, { useState, useRef, useEffect } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORK_IMAGES } from "../constants";

const Work: React.FC = () => {
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const VISIBLE_CARDS = 3; // how many visible at once
  const GAP = 32; // gap-8 = 32px

  // Measure first card width + gap
  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".work-card") as HTMLElement;
      if (firstCard) {
        const width = firstCard.offsetWidth;
        setCardWidth(width + GAP); // card + gap
      }
    }
  }, []);

  const totalCards = WORK_IMAGES.length;

  // ❗ REAL FIX: full width including last gap removed
  const totalContentWidth = totalCards * cardWidth - GAP;

  // ❗ Viewport width = cardWidth * VISIBLE_CARDS
  const viewportWidth = VISIBLE_CARDS * cardWidth;

  // ❗ Correct max translate so last card aligns PERFECTLY
  const maxTranslate = Math.max(totalContentWidth - viewportWidth, 0);

  const handleNext = () => {
    setCurrentTranslate(prev =>
      Math.min(prev + VISIBLE_CARDS * cardWidth, maxTranslate)
    );
  };

  const handlePrev = () => {
    setCurrentTranslate(prev =>
      Math.max(prev - VISIBLE_CARDS * cardWidth, 0)
    );
  };

  return (
    <SectionWrapper id="work" className="bg-bg-primary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        My Work & UI/UX Designs
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center justify-center">

        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          disabled={currentTranslate === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full 
            bg-bg-secondary text-accent-light text-3xl shadow-lg
            ${
              currentTranslate === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-accent-light hover:text-bg-primary"
            }
          `}
        >
          &#10094;
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden w-full px-16">
          <div
            ref={containerRef}
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentTranslate}px)`
            }}
          >
            {WORK_IMAGES.map(work => (
              <div
                key={work.id}
                className="work-card rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
                style={{ width: "320px" }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-accent-light">{work.title}</h3>
                  <p className="text-sm text-text-secondary mt-1">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          disabled={currentTranslate >= maxTranslate}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full 
            bg-bg-secondary text-accent-light text-3xl shadow-lg
            ${
              currentTranslate >= maxTranslate
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-accent-light hover:text-bg-primary"
            }
          `}
        >
          &#10095;
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Work;
