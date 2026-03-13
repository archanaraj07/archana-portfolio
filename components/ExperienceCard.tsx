import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent-light to-accent-dark text-bg-primary font-bold rounded-full text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
          {experience.logoPlaceholder}
        </div>
        <div>
          <h3 className="text-2xl font-display font-semibold text-text-primary group-hover:text-accent-light transition-colors duration-300">
            {experience.title}
          </h3>
          <p className="text-text-secondary text-md">{experience.company} | {experience.location}</p>
        </div>
      </div>
      <p className="text-accent-light text-sm font-medium mb-4">{experience.year}</p>
      <ul className="list-disc list-inside text-text-secondary text-base space-y-2">
        {experience.details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-accent-light mr-2">&#8226;</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;