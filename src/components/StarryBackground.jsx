import React from 'react';

const StarryBackground = () => {
  return (
    // Div covers hero section, positioned in background
    <div
      className="absolute inset-0 z-0"
      style={{
        // White dots using radial gradient
        backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
        // Dot spacing
        backgroundSize: '20px 20px',
        // Subtle opacity for dots
        opacity: 0.2,
        // Slow, random drifting animation for dots
        animation: 'star-drift 100s linear infinite', // Apply CSS animation
      }}
    >
      {/*
        Add this CSS @keyframes rule to your main CSS file (e.g., src/index.css)
        for the animation to work.
      */}
      <style>
        {`
          @keyframes star-drift {
            from { background-position: 0% 0%; }
            to { background-position: 200% 200%; } /* Increased values for more random-like drift */
          }
        `}
      </style>
    </div>
  );
};

export default StarryBackground;
