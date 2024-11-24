import React from "react";

const products = [
  {
    id: 1,
    name: "Diamond Design",
    image: "https://www.bing.com/th?id=OPAC.Qpw6Ty8f6LN%2bZA474C474&o=5&pid=21.1&w=160&h=235&rs=1&qlt=100&dpr=1.3&c=8&pcl=f5f5f5",
    price: "₹5,436",
    description: "White 33 Pieces Diamond Design 3D PVC Wall Panels.",
  },
  {
    id: 2,
    name: "Aura",
    image: "https://www.bing.com/th?id=OPAC.jve45o9w1%2fTp2g474C474&o=5&pid=21.1&w=160&h=235&rs=1&qlt=100&dpr=1.3&c=8&pcl=f5f5f5",
    price: "₹1,874",
    description: "Blue & White Printed PVC Self Adhesive 3D Wall Panels.",
  },
  {
    id: 3,
    name: "Blue Circle Design",
    image: "https://www.bing.com/th?id=OPAC.QHgdUUlWIpxFoA474C474&o=5&pid=21.1&w=160&h=235&rs=1&qlt=100&dpr=1.3&pcl=f5f5f5",
    price: "₹3,059",
    description: "Blue 3 Pieces Quarter Circle Design 3D Self Adhesive PVC Wall Panel.",
  },
  {
    id: 4,
    name: "Black & White PVC Panel",
    image: "https://www.bing.com/th?id=OPAC.mXQrrXxwX9HloQ474C474&o=5&pid=21.1&w=160&h=235&rs=1&qlt=100&dpr=1.3&pcl=f5f5f5",
    price: "₹3,059",
    description: "Black & White 3 Pieces Flower Design 3D Self Adhesive PVC Wall Panel.",
  },
];

const ProductPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore Our Premium PVC Panels</h1>
        <p className="text-lg md:text-xl">
          Stylish, durable, and affordable solutions for your interior needs.
        </p>
      </header>

      {/* Product Grid */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Best-Selling PVC Panels
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Our PVC Panels?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Durable & Long-Lasting
              </h3>
              <p className="text-gray-600">
                Designed to withstand wear and tear, our PVC panels last for
                years without fading or cracking.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Elegant Finishes
              </h3>
              <p className="text-gray-600">
                From modern to classic designs, our panels add a touch of
                sophistication to any space.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Easy Installation
              </h3>
              <p className="text-gray-600">
                Lightweight and easy to install, saving you time and effort.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ProductPage;
