import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import refactored components
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Arrefecer | Especialistas em Ar-Condicionado em Portugal";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Contact CTA Section */}
      <ContactCTA />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
