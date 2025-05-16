
import React from 'react';

interface ParallaxHeaderProps {
  title: string;
  subtitle: string;
  imagePath: string;
}

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({ title, subtitle, imagePath }) => {
  return (
    <div 
      className="relative h-[50vh] md:h-[60vh] w-full bg-cover bg-center bg-no-repeat parallax-bg flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${imagePath || '/placeholder.svg'})`,
      }}
    >
      <div className="absolute inset-0 bg-dark/40" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl opacity-90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-light to-transparent" />
    </div>
  );
};

export default ParallaxHeader;
