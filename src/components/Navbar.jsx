import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-4xl font-bold">PVCPanel</div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`fixed inset-0 bg-gray-900 text-white transform transition-transform duration-500 ease-in-out md:static md:transform-none ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:flex items-center md:bg-transparent`}
        >
          <div className="relative h-screen md:h-auto w-full md:w-auto">
            {/* Cancel Icon */}
            <button
              className="md:hidden absolute top-4 right-4 text-2xl text-white hover:text-gray-400 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Links */}
            <ul className="bg-gray-600 md:bg-transparent flex flex-col justify-center items-center h-full md:h-auto md:flex-row md:space-x-6">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="block py-2 px-4 text-center text-xl hover:text-blue-600"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block py-2 px-4 text-center text-xl hover:text-blue-600"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("works")}
                  className="block py-2 px-4 text-center text-xl hover:text-blue-600"
                >
                  Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block py-2 px-4 text-center text-xl hover:text-blue-600"
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
