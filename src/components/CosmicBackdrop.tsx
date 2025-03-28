
import React from 'react';

export const CosmicBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-cosmic-accent/20 animate-pulse-glow"></div>
      <div className="absolute top-3/4 right-1/3 w-24 h-24 rounded-full bg-cosmic-highlight/10 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-full bg-cosmic-muted/15 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
    </div>
  );
};
