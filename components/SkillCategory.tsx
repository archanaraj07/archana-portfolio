import React from 'react';
import { SkillCategory as SkillCategoryType } from '../types';

interface SkillCategoryProps {
  categoryData: SkillCategoryType;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ categoryData }) => {
  return (
    <div className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <h3 className="text-2xl font-display font-semibold text-accent-light mb-6 border-b-2 border-accent-dark pb-3">
        {categoryData.category}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text-secondary text-lg">
        {categoryData.skills.map((skill, index) => (
          <li key={index} className="flex items-center group">
            <span className="text-accent-light text-xl mr-3 group-hover:rotate-12 transition-transform duration-300">&#9679;</span>
            <span className="group-hover:text-text-primary transition-colors duration-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;