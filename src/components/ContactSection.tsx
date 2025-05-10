
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real implementation, you would send this data to your backend
    // For now, we'll just show a success message
    toast.success('Thank you for your inquiry! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-muskan-primary" />,
      title: "Call Us",
      details: ["+91 9876543210", "+91 8765432109"],
      action: {
        text: "Call now",
        href: "tel:+919876543210"
      }
    },
    {
      icon: <Mail className="h-5 w-5 text-muskan-primary" />,
      title: "Email Us",
      details: ["contact@muskandigital.com", "info@muskandigital.com"],
      action: {
        text: "Send email",
        href: "mailto:contact@muskandigital.com"
      }
    },
    {
      icon: <MapPin className="h-5 w-5 text-muskan-primary" />,
      title: "Visit Us",
      details: ["Main Road, Near District Court", "Jaldega, Simdega, Jharkhand - 835227"],
      action: {
        text: "Get directions",
        href: "https://maps.google.com"
      }
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-muskan-primary" />,
      title: "WhatsApp",
      details: ["Chat with us directly", "Quick responses guaranteed"],
      action: {
        text: "WhatsApp now",
        href: "https://wa.me/919876543210"
      }
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact <span className="text-muskan-primary">Us</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to book a service? Reach out to us through any of the methods below or fill out the contact form
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-lg ml-2">{item.title}</h3>
                </div>
                <div className="space-y-1 mb-4">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <a 
                  href={item.action.href} 
                  target={item.action.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-muskan-primary font-medium hover:underline inline-flex items-center"
                >
                  {item.action.text}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Service Interested In
                    </label>
                    <Select value={formData.service} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="photography">Photography & Videography</SelectItem>
                        <SelectItem value="repair">Phone Repair</SelectItem>
                        <SelectItem value="printing">Printing Services</SelectItem>
                        <SelectItem value="electronics">Electronics & Accessories</SelectItem>
                        <SelectItem value="stationery">Stationery & Supplies</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                  />
                </div>
                
                <div>
                  <Button type="submit" className="w-full bg-muskan-primary hover:bg-muskan-tertiary text-white">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-100 p-2 rounded-lg shadow">
            <iframe
              title="Muskan Digital Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14569.740129460438!2d84.2572215!3d22.9666483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a23c89063e745b7%3A0xffb8c7f67ef34bb5!2sJaldega%2C%20Jharkhand%20835227!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
