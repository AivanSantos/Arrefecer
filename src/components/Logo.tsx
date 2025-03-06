import React from "react";

interface LogoProps {
  className?: string;
  type?: "full" | "icon";
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", type = "full" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Arrefecer Logo" 
        className="h-full w-auto" 
      />
    </div>
  );
};

export default Logo;
