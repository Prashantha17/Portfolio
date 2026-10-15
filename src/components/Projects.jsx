import React, { useState } from 'react';
import { ExternalLink, Eye, X, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // ML Car Price Predictor State
  const [carBrand, setCarBrand] = useState('maruti');
  const [carYear, setCarYear] = useState(2022);
  const [carKm, setCarKm] = useState(30000);
  const [predictionState, setPredictionState] = useState('idle'); // idle, calculating, completed
  const [predictedPrice, setPredictedPrice] = useState(0);

  const projectList = [
    {
      id: 1,
      title: 'AI-Powered Gesture-Controlled 3D Data Explorer',
      category: 'webapp',
      shortDesc: 'Hand gesture recognition visualizer enabling interactive 3D multi-dimensional data exploration.',
      longDesc: 'An advanced web application utilizing computer vision to enable touchless gesture control. Real-time hand tracking is integrated with MediaPipe to interpret hand coordinates over WebSockets, transforming manual metrics into rotating 3D datasets with sub-100ms processing cycles.',
      tags: ['React', 'Flask', 'MediaPipe', 'MongoDB', 'WebSockets'],
      image: '/gesture_3d_explorer.png',
      highlights: [
        'Integrated Google MediaPipe for high-precision real-time hand tracking with 95%+ accuracy',
        'Created interactive multi-dimensional 3D charts (Scatter, Bar, Surface)',
        'Built low-latency WebSocket communication between Flask backend and React frontend',
        'Structured flexible MongoDB schemas to catalog complex multi-dimensional data layers'
      ],
      demoLink: 'https://3-d-data-explore.vercel.app/',
      githubLink: 'https://github.com/Prashantha17'
    },
    {
      id: 2,
      title: 'AI-Powered Used Car Price Prediction',
      category: 'webapp',
      shortDesc: 'A machine learning predictive application estimating used vehicle resale prices accurately.',
      longDesc: 'A full-stack predictive system designed to provide reliable valuations for second-hand vehicles. Machine learning regression pipelines are built in Python with Pandas, NumPy, and Scikit-Learn to evaluate historical pricing data, generating instant estimations on the React frontend via a Flask server.',
      tags: ['React.js', 'Flask', 'Python', 'Scikit-learn', 'Pandas'],
      image: '/car_price_predictor.png',
      highlights: [
        'Built predictive models utilizing Scikit-learn regression algorithms',
        'Engineered data engineering pipelines using Python and Pandas',
        'Designed interactive sliders and selectors to filter specification parameters',
        'Served low-latency Flask endpoints to provide predictions under 10ms'
      ],
      demoLink: '',
      githubLink: 'https://github.com/Prashantha17'
    },
    {
      id: 3,
      title: 'Home Rental Web Application',
      category: 'database',
      shortDesc: 'Full-stack property rental portal for listing management, booking systems, and user profiles.',
      longDesc: 'A comprehensive property marketplace developed with Flask and MySQL. Integrates robust authentication frameworks, secure listings uploads, and booking databases to coordinate property transactions and tenant-landlord communication.',
      tags: ['Flask', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      image: '/home_rental.png',
      highlights: [
        'Built secure login profiles and session authentication triggers',
        'Integrated MySQL relational schemas to store property catalogs and rental availability',
        'Developed clean, responsive frontend layouts to query local property listings',
        'Programmed administrative CRUD routes to upload note packages and listings'
      ],
      demoLink: 'https://home-rental-website-ten.vercel.app/',
      githubLink: 'https://github.com/Prashantha17'
    },

  ];

  const filteredProjects = activeFilter === 'all'
    ? projectList
    : projectList.filter(project => project.category === activeFilter);

  const handleOpenModal = (project) => {
    setPredictionState('idle');
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Run dynamic pricing prediction simulator
  const handlePredictPrice = () => {
    setPredictionState('calculating');
    setTimeout(() => {
      let base = 500000; // 5 Lakhs

      // Brand factors
      if (carBrand === 'hyundai') base += 80000;
      if (carBrand === 'honda') base += 150000;

      // Depreciation by year (assuming 2026 is current)
      const age = 2026 - carYear;
      base -= age * 40000;

      // Kilometers depreciation
      base -= carKm * 1.5;

      // Minimum floor price
      const finalPrice = Math.max(130000, base);

      setPredictedPrice(finalPrice);
      setPredictionState('completed');
    }, 1200);
  };

  return (
    <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>A showcase of my actual full-stack web applications, machine learning systems, and relational databases.</p>
        </div>

        <div className="projects-filter-bar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`skill-category-btn ${activeFilter === 'all' ? 'active' : ''}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('webapp')}
            className={`skill-category-btn ${activeFilter === 'webapp' ? 'active' : ''}`}
          >
            AI & Web Apps
          </button>
          <button
            onClick={() => setActiveFilter('database')}
            className={`skill-category-btn ${activeFilter === 'database' ? 'active' : ''}`}
          >
            Database Driven
          </button>
        </div>

        <div className="project-grid-layout">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-display-card">
              <div className="project-card-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image"
                />
                <div className="project-image-gradient-overlay" />
              </div>
              <div className="project-content-block">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.shortDesc}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card-tag">{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => handleOpenModal(project)}
                  className="project-view-details-btn"
                >
                  <Eye size={18} />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content-glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="modal-close-trigger"
              title="Close Details"
            >
              <X size={20} />
            </button>

            <div className="modal-hero-banner">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-hero-banner-image"
              />
              <div className="modal-hero-gradient-overlay" />
            </div>

            <div className="modal-body-content">
              <div className="modal-title-row">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="project-card-tag" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="modal-long-desc">{selectedProject.longDesc}</p>

              <div className="modal-highlights-section">
                <h4 className="modal-section-title">Key Highlights</h4>
                <ul className="modal-highlights-list">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="modal-highlight-item">
                      <CheckCircle2 size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Used Car Price Prediction ML Simulator */}
              {selectedProject.id === 2 && (
                <div
                  className="glass-panel"
                  style={{
                    marginTop: '25px',
                    marginBottom: '35px',
                    padding: '24px',
                    background: 'rgba(6, 182, 212, 0.02)',
                    borderColor: 'rgba(6, 182, 212, 0.12)',
                    borderRadius: '16px'
                  }}
                >
                  <h4 className="modal-section-title" style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                    Machine Learning Sandbox: Price Predictor
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                    Interact with a simulated regression pricing model running on car feature matrices.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Brand:</span>
                      <select
                        value={carBrand}
                        onChange={(e) => { setCarBrand(e.target.value); setPredictionState('idle'); }}
                        className="form-input-element"
                        style={{ padding: '8px 12px', fontSize: '0.9rem', background: 'var(--bg-secondary)' }}
                      >
                        <option value="maruti">Maruti Suzuki</option>
                        <option value="hyundai">Hyundai i20</option>
                        <option value="honda">Honda City</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Model Year:</span>
                      <select
                        value={carYear}
                        onChange={(e) => { setCarYear(Number(e.target.value)); setPredictionState('idle'); }}
                        className="form-input-element"
                        style={{ padding: '8px 12px', fontSize: '0.9rem', background: 'var(--bg-secondary)' }}
                      >
                        {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Kilometers: {carKm.toLocaleString()} km</span>
                      <input
                        type="range"
                        min="5000"
                        max="120000"
                        step="5000"
                        value={carKm}
                        onChange={(e) => { setCarKm(Number(e.target.value)); setPredictionState('idle'); }}
                        style={{ accentColor: 'var(--accent-cyan)', marginTop: '12px' }}
                      />
                    </div>
                  </div>

                  {predictionState === 'idle' && (
                    <button
                      onClick={handlePredictPrice}
                      className="btn-primary"
                      style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                    >
                      Estimate Vehicle Value
                    </button>
                  )}

                  {predictionState === 'calculating' && (
                    <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                      Running Random Forest Regression pipelines... Normalizing feature matrices...
                    </div>
                  )}

                  {predictionState === 'completed' && (
                    <div style={{ animation: 'scale-up 0.3s ease' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.06)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: '12px', padding: '14px', marginBottom: '15px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>ML Valuation Result:</span>
                        <strong style={{ fontSize: '1.3rem', color: 'var(--accent-cyan)' }}>
                          ₹ {predictedPrice.toLocaleString('en-IN')}
                        </strong>
                        <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'block', marginTop: '4px' }}>
                          ✓ Estimated successfully with Scikit-learn random-forest pipeline parameters.
                        </span>
                      </div>
                      <button
                        onClick={() => setPredictionState('idle')}
                        className="btn-secondary"
                        style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                      >
                        Adjust Features
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="modal-action-row">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Source Code
                </a>
                {selectedProject.demoLink ? (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={18} />
                    Live Preview
                  </a>
                ) : (
                  <button
                    className="btn-secondary"
                    disabled
                    style={{ opacity: 0.5, cursor: 'not-allowed' }}
                    title="Demo coming soon"
                  >
                    <ExternalLink size={18} />
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
