
import React from 'react';
import { Camera, Smartphone, Printer, ShoppingBag, BookOpen } from "lucide-react";
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera className="h-10 w-10 text-muskan-primary" />,
      title: "Photography & Videography",
      description: "Professional photography and videography services for weddings, events, and personal shoots.",
      features: ["Wedding Photography", "Event Coverage", "Portrait Sessions", "Video Editing"],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-muskan-primary" />,
      title: "Mobile Phone Repair",
      description: "Expert repair services for all types of mobile phones with quick turnaround times.",
      features: ["Screen Replacement", "Battery Replacement", "Software Issues", "Water Damage Repair"],
    },
    {
      icon: <Printer className="h-10 w-10 text-muskan-primary" />,
      title: "Printing Services",
      description: "High-quality printing for all your personal and business needs.",
      features: ["Banners & Posters", "ID Cards", "Business Cards", "Photo Printing"],
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-muskan-primary" />,
      title: "Electronics & Accessories",
      description: "Wide range of phones, batteries, and electronic accessories for sale.",
      features: ["Mobile Phones", "Batteries & Chargers", "Phone Cases", "Memory Cards"],
    },
    {
      icon: <BookOpen className="h-10 w-10 text-muskan-primary" />,
      title: "Stationery & Supplies",
      description: "Complete range of stationery and office supplies for all your needs.",
      features: ["Office Supplies", "School Stationery", "Art Materials", "Paper Products"],
    },
  ];

  return (
    <section id="services" className="section py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-muskan-primary">Services</span></h2>
          <div className="w-24 h-1 bg-muskan-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Muskan Digital Studio offers a wide range of digital and physical services to meet all your needs under one roof
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
