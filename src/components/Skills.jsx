import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, Coffee, Database, Globe, Atom, Server, GitBranch, Layers, Sparkles, Bot, Zap, Brain, Search, Code2, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animate, setAnimate] = useState(false);

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Tech' },
    { id: 'ai', label: 'AI & LLM Tools' },
    { id: 'tools', label: 'Tools & IDEs' }
  ];

  const skillData = [
    // Languages
    { title: 'HTML5 & CSS3', percentage: 95, icon: <Globe size={22} />, category: 'web' },
    { title: 'JavaScript', percentage: 90, icon: <Cpu size={22} />, category: 'languages' },
    { title: 'Java', percentage: 80, icon: <Coffee size={22} />, category: 'languages' },
    { title: 'Python', percentage: 85, icon: <Terminal size={22} />, category: 'languages' },

    // Web
    { title: 'React.js', percentage: 85, icon: <Atom size={22} />, category: 'web' },
    { title: 'Node.js ', percentage: 75, icon: <Server size={22} />, category: 'web' },

    // AI & LLM Tools
    { title: 'Antigravity AI Agent', percentage: 95, icon: <Brain size={22} />, category: 'ai' },
    { title: 'ChatGPT & OpenAI', percentage: 95, icon: <Bot size={22} />, category: 'ai' },
    { title: 'Cursor AI IDE', percentage: 92, icon: <Zap size={22} />, category: 'ai' },
    { title: 'Claude (Anthropic)', percentage: 90, icon: <Sparkles size={22} />, category: 'ai' },
    { title: 'Perplexity AI', percentage: 88, icon: <Search size={22} />, category: 'ai' },
    { title: 'Gemini AI (Google)', percentage: 90, icon: <Cpu size={22} />, category: 'ai' },

    // Tools, IDEs & Databases
    { title: 'VS Code', percentage: 95, icon: <Code2 size={22} />, category: 'tools' },
    { title: 'PyCharm', percentage: 88, icon: <Terminal size={22} />, category: 'tools' },
    { title: 'Eclipse IDE', percentage: 82, icon: <Coffee size={22} />, category: 'tools' },
    { title: 'SQL & DBMS', percentage: 75, icon: <Database size={22} />, category: 'tools' },
    { title: 'Git & Version Control', percentage: 85, icon: <GitBranch size={22} />, category: 'tools' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter(skill => skill.category === activeCategory);

  // Trigger animations when skills are re-filtered
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <p>Proficiencies across programming languages, web technologies, AI tools, IDEs, databases, and frameworks.</p>
        </div>

        <div className="skills-tab-bar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`skill-category-btn ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.id === 'all' && <Layers size={16} />}
              {category.id === 'ai' && <Sparkles size={16} />}
              {category.id === 'tools' && <Wrench size={16} />}
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-deck">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-bar-card">
              <div className="skill-head-info">
                <div className="skill-title-block">
                  <div className="skill-icon-wrap">{skill.icon}</div>
                  <span>{skill.title}</span>
                </div>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-progress-bar-track">
                <div
                  className="skill-progress-fill"
                  style={{ width: animate ? `${skill.percentage}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
