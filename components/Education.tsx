import React from 'react';
import SectionWrapper from './SectionWrapper';
import EducationCard from './EducationCard';
import { EDUCATION, CERTIFICATIONS } from '../constants';
// Import the new AnimatedItem component
import AnimatedItem from './AnimatedItem';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" className="bg-bg-primary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        Education & Certifications
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Education Section */}
        {/* Wrap the education section content in AnimatedItem */}
        <AnimatedItem animationType="slide-left" delay={0}>
          <div>
            <h3 className="text-3xl font-display font-semibold text-text-primary mb-8 border-b-2 border-accent-dark pb-3 text-center md:text-left">
              Education
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((item, index) => (
                <AnimatedItem key={index} animationType="slide-left" delay={index * 150}>
                  <EducationCard item={item} type="education" />
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedItem>

        {/* Certifications Section */}
        {/* Wrap the certifications section content in AnimatedItem */}
        <AnimatedItem animationType="slide-right" delay={200}>
          <div>
            <h3 className="text-3xl font-display font-semibold text-text-primary mb-8 border-b-2 border-accent-dark pb-3 text-center md:text-left">
              Certifications
            </h3>
            <div className="space-y-8">
              {CERTIFICATIONS.map((item, index) => (
                <AnimatedItem key={index} animationType="slide-right" delay={index * 150}>
                  <EducationCard item={item} type="certification" />
                </AnimatedItem>
              ))}
            </div>
          </div>
        </AnimatedItem>
      </div>
    </SectionWrapper>
  );
};

export default Education;