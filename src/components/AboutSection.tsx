
import React from 'react';
import { CheckCircle, Clock, MapPin } from "lucide-react";

const AboutSection = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 8:00 PM" }
  ];

  const advantages = [
    "Multi-service business under one roof",
    "Experienced professionals with attention to detail",
    "Latest equipment and technology",
    "Competitive pricing",
    "Quick turnaround times",
    "Located in the heart of Jaldega"
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-muskan-primary">Muskan Digital Studio</span></h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to provide comprehensive digital services to the people of Jaldega and nearby areas, Muskan Digital Studio has been serving the community since 2004. Our mission is to deliver high-quality photography, repair, and printing services at affordable prices.
            </p>
            <p className="text-gray-600 mb-8">
              What started as a small photography studio has now grown into a multi-service hub catering to all digital and electronic needs of our customers. We take pride in our work and strive for customer satisfaction in everything we do.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-2 mb-8">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-muskan-primary flex-shrink-0" />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 text-muskan-primary mr-2" />
                <h3 className="text-lg font-semibold">Business Hours</h3>
              </div>
              <ul className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium">{schedule.day}:</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOcElwyn4U9Yt20b00LG-vyp8LNvMwNYsqW6fKl=s1360-w1360-h1020-rw" 
                alt="Muskan Digital Studio Shop" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-start mb-3">
                <MapPin className="h-5 w-5 text-muskan-primary mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 text-sm">
                  Opp, Block office, Jaldega, Jharkhand 835211
                  </p>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/hkyvUEMPaWz333Uw8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muskan-primary font-medium hover:underline inline-flex items-center"
              >
               View on Google Maps
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
