import React from "react";

const stats = [
  { value: "15+", label: "Products" },
  { value: "200+", label: "Designs" },
  { value: "4000+", label: "Projects Completed" },
];

const logos = [
  "https://fliarbi.com/company.jpg",
  "https://fliarbi.com/indm_services/6270b847b22f4-logo11-90x90.png",
  "https://fliarbi.com/indm_services/6270b99634c46-aeden-exhibiton-products-logo-90x90.png",
  "https://fliarbi.com/indm_services/6270b63bb2a74-selection-001-90x90.png",
  "https://fliarbi.com/indm_services/6270be084ecc0-designo-crafts-90x90.jpg",
  "https://fliarbi.com/indm_services/6270c7bd992d1-m-m-metal-matriex-pvt-ltd-logo-90x90.png",
];

const ShowcasePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Empowering Creativity and Innovation
        </h1>
        <p className="text-lg md:text-xl">
          Discover our amazing products, unique designs, and successful projects
        </p>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 shadow-md rounded-lg bg-gray-50"
            >
              <h2 className="text-4xl font-bold text-blue-600">{stat.value}</h2>
              <p className="text-lg font-medium text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Trusted by Top Brands
          </h2>
          <p className="text-gray-600">
            We’ve worked with industry leaders to deliver outstanding results.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default ShowcasePage;
