import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    location: "Lisboa",
    rating: 5,
    text: "Serviço excelente e profissional. A instalação foi rápida e a equipe deixou tudo limpo e organizado. O ar-condicionado funciona perfeitamente!"
  },
  {
    id: 2,
    name: "Maria Oliveira",
    location: "Porto",
    rating: 5,
    text: "Contratei a Arrefecer para fazer a manutenção do meu ar-condicionado e fiquei muito satisfeita. Atendimento pontual e equipe muito educada."
  },
  {
    id: 3,
    name: "Pedro Costa",
    location: "Braga",
    rating: 4,
    text: "Comprei um ar-condicionado pela loja online e fui muito bem atendido. A entrega foi rápida e o preço estava muito bom comparado ao mercado."
  },
  {
    id: 4,
    name: "Ana Santos",
    location: "Faro",
    rating: 5,
    text: "Excelente trabalho de pré-instalação. Fizeram tudo conforme combinado e dentro do prazo. Recomendo a todos que precisam desse serviço."
  },
  {
    id: 5,
    name: "Rui Ferreira",
    location: "Coimbra",
    rating: 5,
    text: "Já é a segunda vez que contrato a Arrefecer e não me arrependo. Profissionais de confiança e preço justo. Continuarei sendo cliente."
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array(5).fill(0).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplaying, setAutoplaying] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoplaying) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplaying, activeIndex]);

  const handleMouseEnter = () => {
    setAutoplaying(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAutoplaying(true);
  };

  useEffect(() => {
    // Inicialize o scroll para o item ativo quando o componente montar
    if (slideContainerRef.current) {
      const slideWidth = slideContainerRef.current.offsetWidth;
      slideContainerRef.current.scrollTo({
        left: activeIndex * slideWidth,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative w-full max-w-4xl overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={slideContainerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 rounded-full p-2 mr-3">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <RatingStars rating={testimonial.rating} />
                <p className="mt-4 text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;