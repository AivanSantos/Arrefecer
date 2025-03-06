
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, delay = 0 }) => {
  return (
    <div 
      className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg group hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-arrefecer-100 text-arrefecer-600 p-3 rounded-xl inline-flex mb-4 group-hover:bg-arrefecer-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      <Button asChild variant="link" className="p-0 font-medium">
        <Link to={`/services#${id}`} className="inline-flex items-center text-arrefecer-600 hover:text-arrefecer-800">
          Saiba mais <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
