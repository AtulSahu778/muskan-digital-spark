
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
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card 
        className={`service-card border border-gray-200 hover:shadow-lg overflow-hidden transition-all duration-300 ${isHovered ? 'shadow-lg border-indigo-200' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-4">
          <motion.div 
            className="mb-3"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <span className={`h-1.5 w-1.5 rounded-full mr-2 ${isHovered ? 'bg-indigo-600' : 'bg-muskan-primary'}`}></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <BookingModal triggerText="Book Now" service={title} />
          <a 
            href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-muskan-primary font-medium hover:underline inline-flex items-center"
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
    </motion.div>
  );
};

export default ServiceCard;
