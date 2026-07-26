import React, { useState } from 'react';
import { BookOpen, Trophy, Music, Compass, GraduationCap, Code2, Sparkles } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('education');
  const [selectedPromptTemplate, setSelectedPromptTemplate] = useState('coding');
  const [customPrompt, setCustomPrompt] = useState('write a python script to parse a csv file and get average age');
  const [optimizationState, setOptimizationState] = useState('idle'); // idle, optimizing, complete

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'aiPlayground', label: 'AI Playground' },
    { id: 'interests', label: 'Interests' },
    { id: 'philosophy', label: 'My Approach' }
  ];

  const interestItems = [
    { icon: <Trophy size={20} />, label: 'Watching Cricket' },
    { icon: <BookOpen size={20} />, label: 'Reading Books' },
    { icon: <Music size={20} />, label: 'Listening to Music' },
    { icon: <Compass size={20} />, label: 'Bike Traveling' }
  ];

  const promptTemplates = {
    coding: {
      raw: 'write a python script to parse a csv file and get average age',
      engineered: `[System Instruction]
You are an expert Python data engineer. Generate robust, production-ready code with complete error handling.

[Context & Constraints]
- File format: Standard CSV with headers "name", "age", "department".
- Average age must be calculated by ignoring empty rows or non-numeric age values.
- Dependency restriction: Standard Python libraries only (no pandas).

[Few-Shot Example]
Input Schema: {"name": "A", "age": "25", "department": "HR"}
Expected Output: Returns calculated float representation of average.

[Expected Output Format]
Provide self-contained functions with docstrings, inline comments, and a sample driver execution.`
    },
    data: {
      raw: 'analyse sales data to see where we are losing money',
      engineered: `[System Instruction]
You are a senior business intelligence analyst specializing in financial diagnostics.

[Context & Constraints]
- Input: Array of monthly transactional records containing columns "revenue", "cogs", "refunds".
- Metrics to calculate: COGS-to-Revenue ratios and Refund Frequency rates.
- Identify the top three anomalies where profit margin drop exceeds 15% MoM.

[Few-Shot Example]
COGS: $50K, Rev: $60K -> Alert: Margin critical (< 17%).

[Expected Output Format]
Structured table of margins, bulleted lists of the top three anomalies, and actionable operational adjustments.`
    },
    prompting: {
      raw: 'write an email asking for a deadline extension',
      engineered: `[System Instruction]
You are a professional communicator writing to a senior manager. Maintain a polite, solution-oriented tone.

[Context & Constraints]
- Reason: Additional time required for algorithmic convergence testing of the MCA Time Table database.
- Current deadline: Monday, 9:00 AM. Requested extension: Wednesday, 5:00 PM.
- Include a progress report summary of current completions to prove work ethics.

[Few-Shot Example]
Subject: Extension Request: [Project Name] - H M Prashantha

[Expected Output Format]
Provide a subject line, clean body copy with placeholders, and a concise bullet list of completed tasks.`
    }
  };

  const handleOptimize = () => {
    setOptimizationState('optimizing');
    setTimeout(() => {
      setOptimizationState('complete');
    }, 1000);
  };

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know my educational background, interactive AI playground, personal interests, and development philosophy.</p>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-title)', fontFamily: 'var(--font-display)' }}>
              Engineering Intelligent Systems & Modern Webs.
            </h3>
            <p className="about-intro-text">
              I am Completed my <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Master of Computer Applications (MCA)</span> at Kishkinda University. I specialize in bridging advanced **Machine Learning** pipelines and **Data Science** analytics with responsive full-stack software.
            </p>
            <p className="about-philosophy">
              I am highly passionate about **Generative AI** and **Prompt Engineering**. By integrating modern AI systems—from models like ChatGPT and Claude to agentic environments like Antigravity—I construct software that is fast, context-aware, and built for future technological demands.
            </p>
          </div>

          <div className="glass-panel">
            <div className="tab-nav" style={{ flexWrap: 'wrap', gap: '15px' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'education' && (
                <div style={{ animation: 'fade-in 0.4s ease', maxHeight: '350px', overflowY: 'auto', paddingRight: '10px' }}>
                  <div className="timeline-item">
                    <span className="timeline-year">2024 - Present</span>
                    <h4 className="timeline-title">Master of Computer Applications (MCA)</h4>
                    <p className="timeline-desc">Kishkinda University, Bellari | CGPA: 8.6 (Pursuing 4th Sem)</p>
                    <p className="timeline-desc" style={{ marginTop: '5px', opacity: 0.8 }}>
                      Focusing on Advanced Algorithms, Machine Learning pipelines, Generative AI models, and Relational Database Systems.
                    </p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-year">2021 - 2024</span>
                    <h4 className="timeline-title">Bachelor of Science (B.Sc in PCM)</h4>
                    <p className="timeline-desc">JSS Banashankari Arts and Commerce & S K Gubbi Science College, Dharwad | Percentage: 65.23%</p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-year">2018 - 2020</span>
                    <h4 className="timeline-title">Pre-University Education (PUC - Comp Sci)</h4>
                    <p className="timeline-desc">Renuka Computer Science PU College | Percentage: 61%</p>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-year">2017 - 2018</span>
                    <h4 className="timeline-title">Class 10th (SSLC)</h4>
                    <p className="timeline-desc">Jnana Jyothi English Medium School | Percentage: 82%</p>
                  </div>
                </div>
              )}

              {activeTab === 'aiPlayground' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'fade-in 0.4s ease' }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button 
                      onClick={() => { setSelectedPromptTemplate('coding'); setCustomPrompt(promptTemplates.coding.raw); setOptimizationState('idle'); }} 
                      className={`skill-category-btn ${selectedPromptTemplate === 'coding' ? 'active' : ''}`}
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      Python Coding
                    </button>
                    <button 
                      onClick={() => { setSelectedPromptTemplate('data'); setCustomPrompt(promptTemplates.data.raw); setOptimizationState('idle'); }} 
                      className={`skill-category-btn ${selectedPromptTemplate === 'data' ? 'active' : ''}`}
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      Data Science
                    </button>
                    <button 
                      onClick={() => { setSelectedPromptTemplate('prompting'); setCustomPrompt(promptTemplates.prompting.raw); setOptimizationState('idle'); }} 
                      className={`skill-category-btn ${selectedPromptTemplate === 'prompting' ? 'active' : ''}`}
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      Email Prompt
                    </button>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Raw Input Prompt:</label>
                    <textarea 
                      value={customPrompt} 
                      onChange={(e) => { setCustomPrompt(e.target.value); setOptimizationState('idle'); }}
                      className="form-textarea-element"
                      style={{ minHeight: '60px', padding: '10px 14px', fontSize: '0.9rem' }}
                    />
                  </div>

                  <button 
                    onClick={handleOptimize}
                    disabled={optimizationState === 'optimizing'}
                    className="btn-primary"
                    style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.9rem' }}
                  >
                    {optimizationState === 'optimizing' ? 'Optimizing Prompt...' : 'Apply Prompt Engineering'}
                  </button>

                  {optimizationState === 'complete' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'scale-up 0.3s ease' }}>
                      <label style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>Optimized Prompt System Shell:</label>
                      <pre 
                        style={{ 
                          background: 'rgba(6, 182, 212, 0.04)', 
                          border: '1px solid rgba(6, 182, 212, 0.15)',
                          borderRadius: '10px', 
                          padding: '16px', 
                          whiteSpace: 'pre-wrap', 
                          fontSize: '0.85rem',
                          fontFamily: 'monospace',
                          color: 'var(--text-primary)',
                          maxHeight: '150px',
                          overflowY: 'auto'
                        }}
                      >
                        {promptTemplates[selectedPromptTemplate]?.engineered || customPrompt}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="interests-grid" style={{ animation: 'fade-in 0.4s ease' }}>
                  {interestItems.map((item, index) => (
                    <div key={index} className="interest-item">
                      <div className="interest-icon-wrap">
                        {item.icon}
                      </div>
                      <span className="interest-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', animation: 'fade-in 0.4s ease' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--accent-cyan)', marginTop: '4px' }}>
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-title)', fontSize: '1.1rem', marginBottom: '4px', fontWeight: 600 }}>Intelligent ML & Data Science</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Structuring clean predictive algorithms and high-velocity database systems to process complex data layers.
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--accent-purple)', marginTop: '4px' }}>
                      <Sparkles size={24} />
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text-title)', fontSize: '1.1rem', marginBottom: '4px', fontWeight: 600 }}>Prompt Engineering & AI Workflows</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        Leveraging advanced prompt design paradigms and collaborative systems like Antigravity, Claude, and ChatGPT to engineer smart user flows.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
