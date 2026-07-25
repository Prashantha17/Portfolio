import React, { useState } from 'react';
import { Phone, Mail, Send, Loader2, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validations
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all input fields.');
      return;
    }

    if (!validateEmail(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    // Trigger visual loading simulation
    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1800);
  };

  const contactMethods = [
    {
      icon: <Phone size={22} />,
      label: 'Call Me',
      value: '+91-9535178422',
      href: 'tel:+919535178422'
    },
    {
      icon: <Mail size={22} />,
      label: 'Email Me',
      value: 'hmprashanth018@gmail.com',
      href: 'mailto:hmprashanth018@gmail.com'
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'H M Prashantha',
      href: 'https://www.linkedin.com/in/h-m-prashantha-607643348-'
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
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
      ),
      label: 'GitHub Portal',
      value: 'Prashantha17',
      href: 'https://github.com/Prashantha17'
    }
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have an exciting opportunity or project? Feel free to reach out. I would love to collaborate.</p>
        </div>

        <div className="contact-layout-grid">
          <div className="contact-info-panel">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon-wrap">
                  {method.icon}
                </div>
                <div>
                  <span className="contact-method-label">{method.label}</span>
                  <div className="contact-method-detail">{method.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-form-glass-panel">
            {isSuccess ? (
              <div className="form-submission-success-overlay">
                <div className="success-check-bubble">
                  <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="success-bubble-title">Message Transmitted!</h3>
                <p className="success-bubble-desc">
                  Thank you for reaching out. Your message has been simulated successfully and is captured.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="form-field-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input-element"
                  required
                />
                <label htmlFor="name" className="form-label-float">Your Name</label>
              </div>

              <div className="form-field-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input-element"
                  required
                />
                <label htmlFor="email" className="form-label-float">Email Address</label>
              </div>

              <div className="form-field-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input-element"
                  required
                />
                <label htmlFor="subject" className="form-label-float">Subject</label>
              </div>

              <div className="form-field-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder=" "
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea-element"
                  required
                />
                <label htmlFor="message" className="form-label-float">Message</label>
              </div>

              {errorMessage && (
                <div style={{ color: '#ef4444', marginBottom: '20px', fontWeight: 500, fontSize: '0.95rem' }}>
                  {errorMessage}
                </div>
              )}

              <div className="form-submit-row">
                <div className="submit-btn-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="fa-spin" style={{ animation: 'spin 1s linear infinite' }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Dynamic spinner animation logic */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
