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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative overflow-hidden py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">O que os nossos clientes dizem</h2>
          <p className="text-gray-600">
            Veja alguns depoimentos de clientes satisfeitos com nossos serviços de venda, instalação e manutenção de ar-condicionado.
          </p>
        </div>

        <div className="relative px-6">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="glass rounded-xl p-8 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center space-x-2 mb-2">
                        {Array(5).fill(0).map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="italic text-gray-700 mb-6 flex-grow">{testimonial.text}</p>
                      <div className="flex items-center mt-auto">
                        <div className="bg-arrefecer-100 p-2 rounded-full mr-3">
                          <User className="h-5 w-5 text-arrefecer-500" />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-gray-500 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-arrefecer-500 w-6"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;