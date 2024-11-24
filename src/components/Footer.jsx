import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-400">
            We are dedicated to providing top-notch solutions and services to
            our clients. With a history of delivering excellence, we continue
            to innovate and achieve remarkable milestones in our field.
          </p>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Address:</span> Sanjay Colony,
              Sector 23, Faridabad
            </li>
            <li>
              <span className="font-bold">Phone:</span>{" "}
              <a
                href="tel:+917529986615"
                className="text-blue-400 hover:text-blue-300"
              >
                +917529986615
              </a>
            </li>
            <li>
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:contact@company.com"
                className="text-blue-400 hover:text-blue-300"
              >
                mohitbadgujjar2@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Send a Mail Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Send a Mail</h2>
          <p>mohitbadgujjar2@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-gray-800 pt-6">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
