import React, { ReactNode } from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';

interface AnimatedItemProps {
  children: ReactNode;
  animationType?: 'fade-in' | 'slide-up' | 'slide-right' | 'slide-left';
  delay?: number; // in milliseconds, for transition-delay
  className?: string;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  animationType = 'slide-up',
  delay = 0,
  className = '',
}) => {
  const { ref, isVisible } = useAnimateOnScroll<HTMLDivElement>(0.1);

  // Initial state should be hidden and transformed, then when visible, apply the desired animation state.
  // The 'transition-all' on the element will handle the animation.
  let initialTransformClass = '';
  switch (animationType) {
    case 'slide-up':
      initialTransformClass = 'translate-y-8'; // Start slightly below
      break;
    case 'slide-right':
      initialTransformClass = '-translate-x-full'; // Start off-left
      break;
    case 'slide-left':
      initialTransformClass = 'translate-x-full'; // Start off-right
      break;
    case 'fade-in':
    default:
      initialTransformClass = ''; // No transform for fade-in
      break;
  }

  const visibilityClasses = isVisible
    ? 'opacity-100 translate-x-0 translate-y-0' // Final state
    : `opacity-0 ${initialTransformClass}`; // Initial state (hidden and transformed)

  return (
    <div
      ref={ref}
      // Apply the common transition properties and the specific visibility classes.
      // The delay will apply to the 'transition-all'.
      className={`${className} transition-all duration-1000 ease-out ${visibilityClasses}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedItem;