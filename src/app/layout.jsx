// src/app/layout.jsx
'use client';
import React from 'react';
import '../styles/globals.css'; 

// Determine base path for GitHub Pages
// This needs to be consistent across the application
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/<your-repository-name>' : ''; // Replace with your repository name

// Global styles are now part of the layout
const GlobalStyles = () => (
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata for the document - now in layout */}
        {/* These would typically come from Next.js's metadata API or <Head> component if it were a full build */}
        <title>My Portfolio</title>
        <meta name="description" content="A personal portfolio built with Next.js and Tailwind CSS" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        {/* Load Lucide React icons via CDN - ensures icons are available globally */}
        <script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.min.js"></script>
        <GlobalStyles /> {/* Apply global styles */}
      </head>
      <body>
        {children} {/* This is where your page content will be rendered */}
      </body>
    </html>
  );
}

// Export basePath for use in components if needed, or pass as props
export { basePath };
