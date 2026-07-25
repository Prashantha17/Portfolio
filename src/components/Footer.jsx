import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container">
        <p>&copy; {currentYear} H M Prashantha. All rights reserved.</p>
        <p style={{ marginTop: '8px', fontSize: '0.85rem', opacity: 0.6 }}>
          Designed and engineered with passion in React.
        </p>
      </div>
    </footer>
  );
}
