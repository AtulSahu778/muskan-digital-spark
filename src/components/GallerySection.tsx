
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GallerySection = () => {
  // Sample gallery images (in a real implementation, these would come from your actual portfolio)
  const categories = [
    {
      id: "photography",
      label: "Photography",
      images: [
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2060239/pexels-photo-2060239.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1444441/pexels-photo-1444441.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
    },
    {
      id: "printing",
      label: "Printing",
      images: [
        "https://t3.ftcdn.net/jpg/00/89/06/80/240_F_89068008_XurvR1bKCuZbrkcIzkC8Fk1fxhdBB8rY.jpg",
        "https://images.pexels.com/photos/30921929/pexels-photo-30921929/free-photo-of-elegant-traditional-indian-wedding-invitation-card.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://t3.ftcdn.net/jpg/00/52/76/22/240_F_52762278_xZPlJuEZQCNw4e9bQgv5eB4BD5dd34ir.jpg",
        "https://t3.ftcdn.net/jpg/07/32/42/24/240_F_732422498_GczZX79vY8YUYc0rjycGd0mLUdl4SeMS.jpg",
      ],
    },
    {
      id: "repairs",
      label: "Phones & Stationery",
      images: [
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "https://lh3.googleusercontent.com/p/AF1QipOcElwyn4U9Yt20b00LG-vyp8LNvMwNYsqW6fKl=s1360-w1360-h1020-rw",
        
      ],
    },
  ];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-muskan-primary">Work</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of photography, printing, and repair services that showcase our quality and expertise
          </p>
        </div>

        <Tabs defaultValue="photography" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-muskan-primary data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <div key={index} className="gallery-item rounded-lg shadow-md">
                    <img 
                      src={image}
                      alt={`${category.label} work ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GallerySection;
