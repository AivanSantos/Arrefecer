import React from "react";

interface LogoProps {
  className?: string;
  type?: "full" | "icon";
}

const Logo: React.FC<LogoProps> = ({ className = "h-6 w-auto", type = "full" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Arrefecer Logo" 
        className="h-full w-auto scale-75"
      />
    </div>
  );
};

export default Logo;
