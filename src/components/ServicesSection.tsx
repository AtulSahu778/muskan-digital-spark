
import React from 'react';
import { Camera, Smartphone, Printer, ShoppingBag, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-muskan-primary">Services</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Muskan Digital Studio offers a wide range of digital and physical services to meet all your needs under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-gray-200 hover:shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-3">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-muskan-primary mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href="#contact" 
                  className="text-muskan-primary font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
