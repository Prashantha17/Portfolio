import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Track window scroll to shrink navbar and change styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Simple theme switch mock - updates root CSS colors
    const root = document.documentElement;
    if (isDarkTheme) {
      // Switch to lighter tech theme
      root.style.setProperty('--bg-primary', '#f8fafc');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-glass', 'rgba(255, 255, 255, 0.85)');
      root.style.setProperty('--border-glass', 'rgba(15, 23, 42, 0.08)');
      root.style.setProperty('--text-primary', '#334155');
      root.style.setProperty('--text-secondary', '#64748b');
      root.style.setProperty('--text-title', '#0f172a');
      
      root.style.setProperty('--btn-secondary-bg', 'rgba(15, 23, 42, 0.05)');
      root.style.setProperty('--btn-secondary-text', '#0f172a');
      root.style.setProperty('--btn-secondary-border', 'rgba(15, 23, 42, 0.1)');
      root.style.setProperty('--btn-secondary-hover', 'rgba(15, 23, 42, 0.08)');
      
      root.style.setProperty('--input-bg', 'rgba(15, 23, 42, 0.02)');
      root.style.setProperty('--input-border', 'rgba(15, 23, 42, 0.1)');
      root.style.setProperty('--input-focus-bg', 'rgba(15, 23, 42, 0.04)');
    } else {
      // Restore premium dark tech theme
      root.style.setProperty('--bg-primary', '#0a0f1d');
      root.style.setProperty('--bg-secondary', '#111827');
      root.style.setProperty('--bg-glass', 'rgba(17, 24, 39, 0.75)');
      root.style.setProperty('--border-glass', 'rgba(255, 255, 255, 0.07)');
      root.style.setProperty('--text-primary', '#f3f4f6');
      root.style.setProperty('--text-secondary', '#9ca3af');
      root.style.setProperty('--text-title', '#ffffff');
      
      root.style.setProperty('--btn-secondary-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--btn-secondary-text', '#ffffff');
      root.style.setProperty('--btn-secondary-border', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--btn-secondary-hover', 'rgba(255, 255, 255, 0.1)');
      
      root.style.setProperty('--input-bg', 'rgba(255, 255, 255, 0.02)');
      root.style.setProperty('--input-border', 'rgba(255, 255, 255, 0.08)');
      root.style.setProperty('--input-focus-bg', 'rgba(255, 255, 255, 0.04)');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar-nav">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="logo-text">
              <Code size={26} strokeWidth={2.5} />
              H M PRASHANTHA
            </a>

            <ul className="nav-links-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                    className={`nav-item-link ${activeSection === link.id ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button 
                  onClick={toggleTheme} 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--text-primary)', 
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px'
                  }}
                  title="Toggle Theme"
                >
                  {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button 
                onClick={toggleTheme} 
                className="hamburger-btn" 
                style={{ display: 'flex', padding: '4px', border: 'none', background: 'none' }}
              >
                {isDarkTheme ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <button onClick={() => setIsDrawerOpen(true)} className="hamburger-btn">
                <Menu size={28} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Responsive Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${isDrawerOpen ? 'active' : ''}`} 
        onClick={() => setIsDrawerOpen(false)}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setIsDrawerOpen(false)} className="mobile-drawer-close">
            <X size={28} />
          </button>

          <ul className="mobile-drawer-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                  className={`mobile-drawer-nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
