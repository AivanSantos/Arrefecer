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
        className="h-16 md:h-20 w-auto"
        style={{
          minWidth: '200px',
          minHeight: '40px',
          maxHeight: '80px',
          width: 'auto',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};

export default Logo;
