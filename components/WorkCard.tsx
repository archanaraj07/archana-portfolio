import React from 'react';
import { WorkImage } from '../types';

interface WorkCardProps {
  workImage: WorkImage;
}

const WorkCard: React.FC<WorkCardProps> = ({ workImage }) => {
  return (
    <div className="group relative glass-effect p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 max-w-xs mx-auto">
      <img
        src={workImage.image}
        alt={workImage.title}
        className="w-full h-auto object-cover object-center rounded-lg mb-4 aspect-[9/16]" // Adjusted aspect ratio for mobile UI screens
      />
      <h3 className="text-xl font-display font-semibold text-text-primary group-hover:text-accent-light transition-colors duration-300 text-center">
        {workImage.title}
      </h3>
      <p className="text-sm text-text-secondary mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {workImage.description}
      </p>
    </div>
  );
};

export default WorkCard;