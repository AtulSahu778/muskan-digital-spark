
import React from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Smartphone, Printer } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
          </div>
          
          <div className="w-full md:w-1/2 mb-10 md:mb-0 stagger-appear">
            <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full mb-6 font-medium text-sm">
              Professional Digital Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 leading-tight">
              Your One-Stop <span className="gradient-text">Digital Service</span> Hub
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Photography, Phone Repairs, Printing Services & Electronics - All Under One Roof in Jaldega, Simdega
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary px-8 py-6 rounded-md">
                Book a Service
              </Button>
              <Button variant="outline" className="btn-outline px-8 py-6 rounded-md">
                Explore Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <Camera className="text-indigo-600 h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Photography</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <Smartphone className="text-indigo-600 h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Phone Repairs</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-3 shadow-md">
                  <Printer className="text-indigo-600 h-6 w-6" />
                </div>
                <span className="text-sm font-medium">Printing</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 floating">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Muskan Digital Studio" 
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
            <div className="absolute top-5 -right-5 w-72 h-full rounded-lg bg-indigo-600 opacity-10 -z-10 transform rotate-3"></div>
            <div className="absolute -bottom-5 -left-5 w-72 h-full rounded-lg bg-amber-500 opacity-10 -z-10 transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
