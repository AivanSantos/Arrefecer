
import React from "react";

interface LogoProps {
  className?: string;
  type?: "full" | "icon";
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", type = "full" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/cf9106a7-02b0-4e9c-83bd-893f96e9c162.png" 
        alt="Arrefecer Logo" 
        className="h-full w-auto" 
      />
    </div>
  );
};

export default Logo;
