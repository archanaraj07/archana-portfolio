import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from '../constants';
// Import the new AnimatedItem component
import AnimatedItem from './AnimatedItem';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        Experience & Internships
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
        {EXPERIENCES.map((exp, index) => (
          // Wrap each ExperienceCard in AnimatedItem to enable individual staggered animations
          <AnimatedItem key={index} animationType="slide-up" delay={index * 200}>
            <ExperienceCard experience={exp} />
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;