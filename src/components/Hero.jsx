import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight } from 'lucide-react';

export default function Hero() {
  const titles = [
    'MCA Specialist',
    'Machine Learning Developer',
    'GenAI & Prompt Engineer',
    'Full-Stack Web Architect'
  ];

  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriting animation logic
  useEffect(() => {
    const activeTitle = titles[titleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setText(activeTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        setTypingSpeed(100);

        if (charIndex + 1 === activeTitle.length) {
          // Pause at the end of word
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        setText(activeTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(50);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500); // Pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wrapper">
      {/* Glow Backdrops */}
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />

      <div className="container">
        <div className="hero-layout">
          <div className="hero-text-block">
            <span className="hero-subtitle">Welcome to my space</span>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">H M Prashantha</span>
            </h1>
            
            <div className="typing-container">
              <span>I am a </span>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{text}</span>
              <span className="typing-cursor" />
            </div>

            <p className="hero-description">
              I am a Master of Computer Applications (MCA) student focusing on modern Web Development, Machine Learning, and Generative AI. I design interactive interfaces and construct intelligent, AI-assisted software systems.
            </p>

            <div className="hero-buttons">
              <a 
                href="#projects" 
                onClick={handleScrollToProjects} 
                className="btn-primary"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a 
                href="/H M Prashantha.pdf" 
                download="H_M_Prashantha_Resume.pdf" 
                className="btn-secondary"
              >
                Download Resume
                <FileText size={18} />
              </a>
            </div>
          </div>

          <div className="hero-image-block">
            <div className="avatar-container">
              <img 
                src="/profile1.jpg" 
                alt="H M Prashantha" 
                className="avatar-image" 
                onError={(e) => {
                  // Fallback if image isn't available
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
