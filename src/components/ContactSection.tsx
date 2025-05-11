
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
      details: ["+91 94301 43045, +91 99057 79464"],
      action: {
        text: "Call now",
        href: "tel:+919430143045"
      }
    },
    {
      icon: <Mail className="h-5 w-5 text-muskan-primary" />,
      title: "Email Us",
      details: ["muskanstudio04@gmail.com"],
      action: {
        text: "Send email",
        href: "mailto:muskanstudio04@gmail.com"
      }
    },
    {
      icon: <MapPin className="h-5 w-5 text-muskan-primary" />,
      title: "Visit Us",
      details: ["Opp, Block Office, Jaldega, Jharkhand 835211"],
      action: {
        text: "Get directions",
        href: "https://maps.app.goo.gl/v3JEj1tdcxfjPmCR7"
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

          
        </div>

        <div className="mt-16">
          <div className="bg-gray-100 p-2 rounded-lg shadow">
        <iframe
        title="Muskan Studio Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.1917257013918!2d84.81220813971699!3d22.576742032763214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398aa84c6aaaaaab%3A0x622d2e6223e1bdfb!2sMuskan%20Studio!5e1!3m2!1sen!2sin!4v1746964363384!5m2!1sen!2sin"
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
