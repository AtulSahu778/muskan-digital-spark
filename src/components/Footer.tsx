
import React from 'react';
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              <span className="text-muskan-primary">Muskan</span> Digital Studio
            </h3>
            <p className="mb-4">
              Your one-stop shop for photography, phone repairs, printing services, and more in Jaldega, Simdega.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-muskan-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-muskan-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-muskan-primary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="hover:text-muskan-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-muskan-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-muskan-primary transition-colors">Photography & Videography</a>
              </li>
              <li>
                <a href="#services" className="hover:text-muskan-primary transition-colors">Mobile Phone Repair</a>
              </li>
              <li>
                <a href="#services" className="hover:text-muskan-primary transition-colors">Printing Services</a>
              </li>
              <li>
                <a href="#services" className="hover:text-muskan-primary transition-colors">Electronics & Accessories</a>
              </li>
              <li>
                <a href="#services" className="hover:text-muskan-primary transition-colors">Stationery & Supplies</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-muskan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Opp, Block office, Jaldega,<br />Jharkhand 835211</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-muskan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span></span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-muskan-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>contact@muskandigital.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Muskan Digital Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-muskan-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-muskan-primary transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
