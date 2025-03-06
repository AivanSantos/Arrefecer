import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Daikin",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/DAIKIN_logo.svg",
  },
  {
    name: "Mitsubishi Electric",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Mitsubishi-logo.png",
  },
  {
    name: "Samsung",
    image: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png",
  },
  {
    name: "LG",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/LG_logo_%282014%29.svg",
  },
  {
    name: "Carrier",
    image: "https://logos-world.net/wp-content/uploads/2023/03/Gree-Logo.png",
  },
  {
    name: "Haier",
    image: "https://1000logos.net/wp-content/uploads/2017/12/Haier-Logo.png",
  }
];

const BrandSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === brands.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto py-6 md:py-12">
      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[33.333%] px-4"
            >
              <div className="bg-white rounded-lg p-8 md:p-6 flex items-center justify-center h-40 md:h-32 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="max-h-24 md:max-h-16 w-auto max-w-[80%] object-contain transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-10 h-10 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicadores de slide */}
      <div className="flex justify-center mt-4 gap-2">
        {brands.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-arrefecer-500 w-4" 
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider; 