
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Smartphone, Printer } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-white to-muskan-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-muskan-dark leading-tight animate-fade-in">
              Your One-Stop Digital <span className="text-muskan-primary">Service Hub</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Photography, Phone Repairs, Printing Services & Electronics - All Under One Roof in Jaldega, Simdega
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button className="bg-muskan-primary hover:bg-muskan-tertiary text-white px-6 py-6">
                Book a Service
              </Button>
              <Button variant="outline" className="border-muskan-primary text-muskan-primary hover:bg-muskan-primary hover:text-white px-6 py-6">
                Explore Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-muskan-light rounded-full flex items-center justify-center mb-2">
                  <Camera className="text-muskan-primary" />
                </div>
                <span className="text-sm font-medium">Photography</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-muskan-light rounded-full flex items-center justify-center mb-2">
                  <Smartphone className="text-muskan-primary" />
                </div>
                <span className="text-sm font-medium">Phone Repairs</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-muskan-light rounded-full flex items-center justify-center mb-2">
                  <Printer className="text-muskan-primary" />
                </div>
                <span className="text-sm font-medium">Printing</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Muskan Digital Studio" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="absolute top-8 -right-4 w-64 h-full rounded-lg bg-muskan-primary opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-full rounded-lg bg-muskan-accent opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
