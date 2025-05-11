
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import BookingModal from './BookingModal';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`service-card border border-gray-200 h-full hover:shadow-lg overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg border-indigo-200' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-4">
        <motion.div 
          className="mb-3 flex justify-center"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <CardTitle className="text-center text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <span className={`h-2 w-2 rounded-full mr-2 ${isHovered ? 'bg-indigo-600' : 'bg-muskan-primary'}`}></span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100">
        <BookingModal triggerText="Book Now" service={title} />
        <a 
          href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-muskan-primary font-medium hover:underline inline-flex items-center text-sm"
          onClick={(e) => {
            e.preventDefault();
            // You can implement a more detailed view or modal here
            console.log(`View details for ${title}`);
          }}
        >
          <span>Details</span>
          <Eye className="ml-1 w-4 h-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
