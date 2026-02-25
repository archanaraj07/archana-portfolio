import React from 'react';
import SectionWrapper from './SectionWrapper';
import SkillCategory from './SkillCategory';
import { SKILL_CATEGORIES } from '../constants';
// Import the new AnimatedItem component
import AnimatedItem from './AnimatedItem';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="bg-bg-secondary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {SKILL_CATEGORIES.map((categoryData, index) => (
          // Wrap each SkillCategory in AnimatedItem to enable individual staggered animations
          <AnimatedItem key={index} animationType="slide-up" delay={index * 200}>
            <SkillCategory categoryData={categoryData} />
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;