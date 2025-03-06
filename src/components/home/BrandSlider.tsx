import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Daikin",
    image: "https://www.daikin.pt/content/dam/daikin-sites/dpt/logos/daikin-logo.png",
  },
  {
    name: "Mitsubishi Electric",
    image: "https://www.mitsubishielectric.pt/img/logo-mitsubishi-electric.png",
  },
  {
    name: "Samsung",
    image: "https://images.samsung.com/is/image/samsung/assets/pt/about-us/brand/logo/mo/360_197_1.png",
  },
  {
    name: "LG",
    image: "https://www.lg.com/lg5-common-gp/images/common/header/logo-b2c.jpg",
  },
  {
    name: "Carrier",
    image: "https://www.carrier.com/carrier/en/worldwide/img/Carrier_Logo_Blue.png",
  },
  {
    name: "Haier",
    image: "https://www.haier.com/pt/static/image/logo.png",
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