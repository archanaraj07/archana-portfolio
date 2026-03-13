export interface Experience {
  title: string;
  company: string;
  location: string;
  year: string;
  details: string[];
  logoPlaceholder: string;
}

export interface Project {
  title: string;
  tech: string;
  year: string;
  details: string[];
}


export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface WorkImage {
  id: string;
  title: string;
  description: string;
  image: string;
}