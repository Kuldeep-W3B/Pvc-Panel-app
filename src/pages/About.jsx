import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">About Our PVC Panels</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our high-quality PVC panels are designed to offer the best in terms of durability, versatility, and style. 
          Perfect for both residential and commercial applications, our panels provide a cost-effective and modern solution.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Durability</h3>
          <p className="text-gray-600">
            Our PVC panels are built to last, providing a long-lasting solution for both indoor and outdoor environments.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Eco-Friendly</h3>
          <p className="text-gray-600">
            Made from environmentally friendly materials, our PVC panels are a sustainable choice for your next project.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Affordable</h3>
          <p className="text-gray-600">
            Offering exceptional value for money, our PVC panels help you achieve stylish and functional spaces without breaking the bank.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="mt-16 text-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          With years of experience in the industry, we have become a trusted supplier of premium PVC panels. We pride ourselves on delivering high-quality products that meet the needs of our customers. 
          Whether you're renovating your home, building a new commercial space, or embarking on a large-scale project, our PVC panels are the perfect choice for all your interior and exterior needs.
        </p>
      </div>

      {/* Contact Us Section */}
      <div className="mt-16 text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          Have questions or need more information about our PVC panels? We'd love to hear from you!
        </p>
        <a
          href="mailto:mohitbadgujjar2@gmail.com"
          className="inline-block mt-4 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-200"
        >
          Email at mohitbadgujjar2@gmail.com
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
