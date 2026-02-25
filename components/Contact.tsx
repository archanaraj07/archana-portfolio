import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_LINKS } from '../constants';
// Import the new AnimatedItem component
import AnimatedItem from './AnimatedItem';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you'd send this data to a backend service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <SectionWrapper id="contact" className="bg-bg-secondary glass-effect">
      <h2 className="text-4xl font-display font-bold text-accent-light mb-12 text-center">
        Contact Me
      </h2>
      <p className="text-lg text-text-secondary text-center mb-10 max-w-2xl mx-auto animate-fade-in delay-100">
        Let's connect and build something amazing together!
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Social Links & CTAs */}
        {/* Wrap the div in AnimatedItem */}
        <AnimatedItem animationType="slide-right" delay={0}>
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-4xl">
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-accent-light hover:text-text-primary transition-colors duration-300 animate-glow-accent-light" aria-label="Email Archana">
                <span className="sr-only">Email</span>
                &#9993;
              </a>
              <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-accent-light hover:text-text-primary transition-colors duration-300 animate-glow-accent-light delay-100" aria-label="Call Archana">
                <span className="sr-only">Phone</span>
                &#9742;
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-text-primary transition-colors duration-300 animate-glow-accent-light delay-200" aria-label="Archana's LinkedIn">
                <span className="sr-only">LinkedIn</span>
                &#xF08C; {/* Unicode for LinkedIn-like icon */}
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-text-primary transition-colors duration-300 animate-glow-accent-light delay-300" aria-label="Archana's GitHub">
                <span className="sr-only">GitHub</span>
                &#9737; {/* Unicode for GitHub-like icon, e.g., star */}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-8">
              <a
                href="#contact" // Stays on contact section, or could be a modal
                className="flex-1 px-8 py-3 rounded-lg bg-gradient-to-r from-accent-light to-accent-dark text-bg-primary font-semibold text-lg hover:text-text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg btn-gradient-glow"
              >
                Let's Connect
              </a>
              <a
  href={SOCIAL_LINKS.resume}
  download="Archana_Raj_Resume.pdf"   // THIS makes it download
  className="flex-1 px-8 py-3 rounded-lg border-2 border-accent-light text-accent-light font-semibold text-lg hover:bg-accent-light hover:text-bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg animate-glow-accent-light"
>
  Download Resume
</a>

            </div>
          </div>
        </AnimatedItem>

        {/* Contact Form */}
        {/* Wrap the form in AnimatedItem */}
        <AnimatedItem animationType="slide-up" delay={200}>
          <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-xl shadow-lg w-full">
            <div className="mb-6">
              <label htmlFor="name" className="block text-text-primary text-lg font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg-primary border border-transparent focus:border-accent-light focus:outline-none text-text-primary placeholder-text-secondary transition-colors duration-300 shadow-inner"
                placeholder="Type Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-text-primary text-lg font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-bg-primary border border-transparent focus:border-accent-light focus:outline-none text-text-primary placeholder-text-secondary transition-colors duration-300 shadow-inner"
                placeholder="arch123@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-text-primary text-lg font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 rounded-lg bg-bg-primary border border-transparent focus:border-accent-light focus:outline-none text-text-primary placeholder-text-secondary resize-y transition-colors duration-300 shadow-inner"
                placeholder="Send Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-accent-light to-accent-dark text-bg-primary font-semibold text-lg hover:text-text-primary transition-all duration-300 transform hover:-translate-y-1 shadow-lg btn-gradient-glow"
            >
              Send Message
            </button>
          </form>
        </AnimatedItem>
      </div>
    </SectionWrapper>
  );
};

export default Contact;