import React from "react";

interface LogoProps {
  className?: string;
  type?: "full" | "icon";
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", type = "full" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png"
        alt="Arrefecer Logo" 
        className="h-full w-auto"
        style={{ filter: 'brightness(0) invert(13%) sepia(82%) saturate(1259%) hue-rotate(187deg) brightness(97%) contrast(98%)' }}
      />
    </div>
  );
};

export default Logo;
