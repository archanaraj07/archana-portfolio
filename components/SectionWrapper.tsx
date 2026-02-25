import React, { ReactNode } from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'slide-right' | 'slide-left';
  // Added style prop to allow custom inline styles
  style?: React.CSSProperties;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '',
  animationType = 'slide-up',
  style, // Destructure the style prop
}) => {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>(0.1);

  // Apply opacity-0 initially and then the animation class when visible
  const animationClass = isVisible ? `animate-${animationType}` : 'opacity-0';

  return (
    <section id={id} className={`relative py-16 md:py-24 px-4 ${className}`}>
      <div
        ref={ref}
        className={`${animationClass} transition-all duration-1000 ease-out`}
        // Hide content until it's ready to be animated
        style={{ opacity: isVisible ? 1 : 0, ...style }} // Apply the style prop here
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;