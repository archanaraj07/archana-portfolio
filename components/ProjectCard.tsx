import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">

      <div className="flex items-center mb-4">
        {/* Circle icon just like Experience */}
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br 
          from-accent-light to-accent-dark text-bg-primary font-bold rounded-full text-xl 
          mr-4 group-hover:scale-110 transition-transform duration-300">
          {project.title.substring(0, 2).toUpperCase()}
        </div>

        <div>
          <h3 className="text-2xl font-display font-semibold text-text-primary 
            group-hover:text-accent-light transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-text-secondary text-md">{project.tech}</p>
        </div>
      </div>

      {/* Year / Subtitle */}
      <p className="text-accent-light text-sm font-medium mb-4">{project.year}</p>

      {/* Bullet points */}
      <ul className="list-disc list-inside text-text-secondary text-base space-y-2">
        {project.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-light mr-2">&#8226;</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default ProjectCard;
