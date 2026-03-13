import React from 'react';
import { EducationItem, Certification } from '../types';

interface EducationCardProps {
  item: EducationItem | Certification;
  type: 'education' | 'certification';
}

const EducationCard: React.FC<EducationCardProps> = ({ item, type }) => {
  return (
    <div className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      {type === 'education' ? (
        <>
          <h3 className="text-2xl font-display font-semibold text-text-primary group-hover:text-accent-light transition-colors duration-300">
            {(item as EducationItem).degree}
          </h3>
          <p className="text-text-secondary text-lg mb-2">{(item as EducationItem).institution}</p>
          <p className="text-accent-light text-sm font-medium mb-4">{(item as EducationItem).year}</p>
          {((item as EducationItem).details || []).length > 0 && (
            <ul className="list-disc list-inside text-text-secondary text-base space-y-2">
              {(item as EducationItem).details!.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-light mr-2">&#8226;</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <>
          <h3 className="text-2xl font-display font-semibold text-text-primary group-hover:text-accent-light transition-colors duration-300">
            {(item as Certification).name}
          </h3>
          <p className="text-text-secondary text-lg mb-2">{(item as Certification).issuer}</p>
          <p className="text-accent-light text-sm font-medium">{(item as Certification).year}</p>
        </>
      )}
    </div>
  );
};

export default EducationCard;