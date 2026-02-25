import React from 'react';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import AnimatedItem from './AnimatedItem';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-bg-secondary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <AnimatedItem
            key={index}
            animationType="slide-up"
            delay={index * 200}
          >
            <ProjectCard project={project} />
          </AnimatedItem>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
