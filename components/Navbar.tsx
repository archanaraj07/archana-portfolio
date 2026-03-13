import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate the offset considering the fixed Navbar height
      // Using a fixed value like 80px to safely clear the Navbar
      const offset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" 
           onClick={(e) => handleNavLinkClick(e, 'hero')} // Apply handler to hero link too
           className="text-3xl font-display font-bold text-accent-light hover:text-text-primary transition-colors duration-300">
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
          <a href="#education" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'education')}>Education</a>
          <a href="#experience" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</a>
          <a href="#work" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'work')}>Work</a> {/* New Work link */}
          <a href="#projects" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent-light focus:outline-none text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-bg-primary/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 text-3xl md:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#about" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a>
        <a href="#education" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'education')}>Education</a>
        <a href="#experience" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'experience')}>Experience</a>
        <a href="#work" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'work')}>Work</a> {/* New Work link */}
        <a href="#projects" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a>
        <a href="#skills" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
        <a href="#contact" className="nav-link-mobile" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;