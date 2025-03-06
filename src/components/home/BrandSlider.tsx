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
      prevIndex === brands.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? brands.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto py-12">
      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-[33.333%] px-4"
            >
              <div className="bg-white rounded-lg p-8 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default BrandSlider; 