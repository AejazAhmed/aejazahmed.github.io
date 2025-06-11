// src/components/GlobalStyles.jsx
'use client'; // This directive marks the component as a Client Component

import React from 'react';

const GlobalStyles = () => (
  // The style tag with global styles is now contained within a Client Component
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
    html {
      scroll-behavior: smooth;
    }
    body {
      font-family: 'Inter', sans-serif;
      margin: 0; /* Ensure no default body margin */
      padding: 0; /* Ensure no default body padding */
      overflow-x: hidden; /* Prevent horizontal scroll from overflow */
    }
  `}</style>
);

export default GlobalStyles;
