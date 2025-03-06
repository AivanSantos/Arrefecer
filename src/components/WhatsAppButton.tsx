
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const phoneNumber = "351962827946"; // Formato internacional sem o "+"

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const tooltipTimer = setTimeout(() => {
        setTooltipVisible(true);
      }, 1000);
      
      return () => clearTimeout(tooltipTimer);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const closeTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <div className="relative animate-fade-in">
          {tooltipVisible && (
            <div className="absolute right-0 bottom-16 glass rounded-lg p-4 shadow-lg w-60 text-sm animate-fade-in-up">
              <button 
                onClick={closeTooltip}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Fechar dica"
              >
                <X size={16} />
              </button>
              <p>Precisa de ajuda? Fale conosco pelo WhatsApp!</p>
            </div>
          )}
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all hover:scale-105"
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle size={28} />
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
