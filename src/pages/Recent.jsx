import React, { useEffect, useState } from "react";
import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";

const RecentWorkPage = () => {
  const images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Recent Works</h1>
        <p className="text-lg md:text-xl">
          Explore the quality and creativity of our recent projects.
        </p>
      </header>

      {/* Image Slider */}
      <section className="relative w-full max-w-6xl mx-auto mt-8">
        <div className="w-full overflow-hidden rounded-lg shadow-md">
          <img
            src={images[currentIndex]}
            alt={`Work ${currentIndex + 1}`}
            className="w-full h-96 object-cover transition-transform duration-500"
          />
        </div>
        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </section>

    

      
    </div>
  );
};

export default RecentWorkPage;
