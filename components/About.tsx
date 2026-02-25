import React from 'react';
import SectionWrapper from './SectionWrapper';
import AnimatedItem from './AnimatedItem'; // Import AnimatedItem for the waving hand

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-bg-primary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="md:w-1/3 flex justify-center animate-fade-in delay-100">
          {/* Replaced image with waving hand emoji */}
          <AnimatedItem animationType="fade-in" delay={0}>
            <span
              role="img"
              aria-label="Waving hand"
              className="text-9xl animate-wave" // Tailwind class for waving animation
              style={{ display: 'inline-block' }} // Ensure it acts as a block for animation
            >
              👋
            </span>
          </AnimatedItem>
        </div>
        <div className="md:w-2/3 text-center md:text-left animate-slide-right delay-200">
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            Hi, I’m Archana Raj V K, a UI/UX and front-end enthusiast, dedicated to crafting intuitive, visually compelling digital experiences that seamlessly blend design and functionality.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
           I have hands-on experience designing detailed prototypes in Figma, conducting user research to uncover insights, and developing robust applications using HTML, Java, and modern frameworks. I embrace new challenges and strive to deliver innovative, impactful solutions.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;