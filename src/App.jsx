import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Dynamic Cursor Layer */}
      <CustomCursor />
      
      {/* Core Navigation Layer */}
      <Navbar />

      {/* Main Structural Layout */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
