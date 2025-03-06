import React from "react";

interface LogoProps {
  className?: string;
  type?: "full" | "icon";
}

const Logo: React.FC<LogoProps> = ({ className = "", type = "full" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.svg" 
        alt="Arrefecer Logo" 
        className="h-12 md:h-16 w-auto"
        style={{
          minWidth: '150px',
          maxHeight: '64px'
        }}
      />
    </div>
  );
};

export default Logo;
