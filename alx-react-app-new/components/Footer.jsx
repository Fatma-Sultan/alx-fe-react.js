// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'gray', color: 'white', textAlign: 'center', padding: '10px' }}>
      <p>&copy; {new Date().getFullYear()} My Favorite Cities</p>
    </footer>
  );
};

export default Footer; 