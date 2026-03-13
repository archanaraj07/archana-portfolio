import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Work from './components/Work'; // Import the new Work component

function App() {
  return (
    <div className="bg-bg-primary text-text-primary font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Work /> {/* Place the new Work component here */}
        <Projects />
        <Skills />
        <Contact />
      </main>
      {/* Optional: Add a Footer component here */}
    </div>
  );
}

export default App;