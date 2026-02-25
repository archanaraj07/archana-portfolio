import { Experience, Project, SkillCategory, EducationItem, Certification, WorkImage } from './types';

// Archana's Image URLs
export const ARCHANA_IMAGE_URL = '/archana.jpeg';
 // Full background image, now points to local public folder
export const ARCHANA_HEADSHOT_URL = '/archana.jpeg'; // Circular headshot for foreground, now points to local public folder

export const EXPERIENCES: Experience[] = [
  {
    title: 'UI/UX Designer Intern',
    company: ' Zephyr Technologies & Solutions Pvt. Ltd.',
    location: ' Bangalore, India',
    year: 'June 2025- July 2025',
    details: [
      'Designed high-fidelity UI prototypes in Figma, emphasizing usability, accessibility, and visual clarity.',
      'Created empathy maps in Miro and mind maps in XMind to guide user-centered design workflows.',
      'Applied core UI/UX design principles to enhance user engagement and interface consistency.',
      'Applied UI/UX best practices to create cohesive and engaging design systems.',
    ],
    logoPlaceholder: 'IS',
  },
  {
    title: ' Python ML, AI, DS Intern',
    company: 'Maitexa Integrating Minds',
    location: 'Calicut, Kerala',
    year: 'Jul 2022 - Dec 2022',
    details: [
      'Designed and trained a CNN architecture using Keras and TensorFlow for the CIFAR-10 dataset.',
      'Integrated augmentation and dropout layers to mitigate overfitting and improve generalization.',
      'Visualized model convergence trends through loss and accuracy plots.',
      'Achieved significant gains in classification accuracy through iterative optimization.',
    ],
    logoPlaceholder: 'TI',
  },
];

// Dummy data for Projects
export const PROJECTS: Project[] = [
  {
    title: 'Tech Problem Aggregator',
    tech: 'Major Project — Amal Jyothi College of Engineering',
    year: '2024',
    details: [
      'Developed a platform to match real-world tech problems with innovators, students, and developers.',
      'Aggregated verified problem statements from multiple sources using automated scraping and NLP.',
      'Designed a recommendation engine to suggest challenges based on user’s skills and interests.',
    ],
  },

  {
    title: 'Alertify – Real-Time Drowsiness Detection App',
    tech: 'Mini Project — Amal Jyothi College of Engineering',
    year: '2023',
    details: [
      'Built a mobile app using React Native and Flask to detect driver drowsiness in real time.',
      'Used facial analysis with OpenCV and ML to monitor eye movement and trigger alerts.',
      'Implemented location tracking and automated SMS alerts to emergency contacts.',
    ],
  },
];


// Dummy data for Skill Categories
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'HTML', 'C', 'Javascript'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'MySQL', 'MongoDB',],
  },
  {
    category: 'Design Tools',
    skills: ['Canva', 'Figma',],
  },
];

// Dummy data for Education
export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Amal Jyothi College Of Engineering (Autonomous) ,Kottayam ,Kerala',
    year: '2022 - 2026(Expected)',
  },
  
  {
    degree: 'Higher Secondary Education',
    institution: 'Farook Higher Secondary School, Calicut,Kerala',
    year: '2020 - 2022',
  },
];

// Dummy data for Certifications
export const CERTIFICATIONS: Certification[] = [
  {
    name: ' UI/UX Workshop',
    issuer: 'Makerhub IEDC',
    year: 'Feb 2024',
  },
  {
    name: 'Web Development',
    issuer: ' Internshala (NSDC)',
    year: 'Nov 2024',
  },
  {
    name: ' Node.js Backend Workshop',
    issuer: 'Leopard Tech Labs',
    year: 'Oct 2024',
  },
];

// Data for Work Images (UI/UX Designs) from user-provided screenshots
export const WORK_IMAGES: WorkImage[] = [
  {
    id: 'work-1',
    title: 'VR Movie Onboarding',
    description: 'A sleek and immersive home-screen UI crafted for a modern movie-booking experience.',
    image: 'hehe1.png'
  },
  {
    id: 'work-2',
    title: 'Movie Search & Home',
    description: 'A polished home interface featuring the newest movie titles in an intuitive layout.',
    image:'hehe2.png',
  },
  {
    id: 'work-3',
    title: 'Deadpool Playback Detail',
    description: 'Detailed movie playback screen featuring cast information, ratings, and a play button.',
    image:'hehe3.png',
  },
  {
    id: 'work-4',
    title: 'Login/Register Form (Circles)',
    description: 'Login and registration form with a modern abstract circle background design.',
    image:'hehe4.png',
  },
  {
    id: 'work-5',
    title: 'Register Form Extended (Circles)',
    description: 'Expanded registration form including an email field, set against a circle background.',
    image:'hehe5.png',
  },
  {
    id: 'work-6',
    title: 'Welcome Back Onboarding',
    description: 'Onboarding screen with a "Welcome Back!" message and input fields, inviting user login.',
    image:'hehe6.png',
  },
  {
    id: 'work-8',
    title: 'Welcome OnBoard Register',
    description: 'Registration form for a To-Do app, designed for new user sign-ups.',
    image:'hehe8.png',
  },
  {
    id: 'work-9',
    title: 'Todo App Dashboard',
    description: 'Dashboard for a To-Do application, showing user profile, clock, and task list.',
    image:'hehe9.png',
  },
  {
    id: 'work-10',
    title: 'Todo App Dashboard',
    description: 'Dashboard for a To-Do application, showing user profile, clock, and task list.',
    image:'hehe10.png',
  },
];

// Archana's social media and contact links
export const SOCIAL_LINKS = {
  email: 'archanarajvk123@gmail.com',
  phone: '+91 7736415612',
  linkedin: 'https://www.linkedin.com/in/archanarajvk/',
  github: 'https://github.com/archanarajvk',
  resume: 'Archana.pdf', 
};
