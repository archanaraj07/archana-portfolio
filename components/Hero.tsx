import React from 'react';
import SectionWrapper from './SectionWrapper';
import AnimatedItem from './AnimatedItem';
import { ARCHANA_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <SectionWrapper
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('${ARCHANA_IMAGE_URL}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* PORTFOLIO background text */}
      <div className="absolute w-full top-1 left-1 -translate-x-1/2 -translate-y-1/2 opacity-10 text-text-secondary font-display font-extrabold text-[12rem] md:text-[16rem] leading-none whitespace-nowrap z-0">
        PORTFOLIO
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 max-w-4xl mx-auto flex flex-col items-center">

        <AnimatedItem animationType="fade-in" delay={200}>
          <p className="text-xl md:text-2xl text-accent-light mb-4 font-body tracking-wider">
            Hi, I'm
          </p>
        </AnimatedItem>

        <AnimatedItem animationType="slide-up" delay={400}>
          <h1 className="text-6xl md:text-8xl font-display font-extrabold text-text-primary mb-4 leading-tight">
            Archana Raj VK
          </h1>
        </AnimatedItem>

        <AnimatedItem animationType="fade-in" delay={600}>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            UI/UX Designer-Developer • Frontend Designer •
          </p>
        </AnimatedItem>

        <AnimatedItem animationType="slide-up" delay={800}>
          <a
            href="https://www.figma.com/files/team/1404768163600607536/user/1404768161726095252?fuid=1404768161726095252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-accent-light to-accent-dark text-bg-primary font-semibold text-xl hover:text-text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg btn-gradient-glow"
          >
            Explore My Work
          </a>
        </AnimatedItem>

      </div>
    </SectionWrapper>
  );
};

export default Hero;
