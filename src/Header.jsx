import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleScrollTo("#home")}
          className="text-2xl font-bold text-gray-900 tracking-wide"
        >
          Ayomide<span className="text-pink-500">Dev</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <button onClick={() => handleScrollTo("#home")} className="hover:text-pink-500 text-red-800 font-bold">Home</button>
          <button onClick={() => handleScrollTo("#about")} className="hover:text-pink-500">About</button>
          <button onClick={() => handleScrollTo("#projects")} className="hover:text-pink-500">Projects</button>
          <button onClick={() => handleScrollTo("#services")} className="hover:text-pink-500">Services</button>
          <button onClick={() => handleScrollTo("#contact")} className="hover:text-pink-500">Contact</button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleScrollTo("#contact")}
            className="hidden md:inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-full transition"
          >
            Hire Me
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-800 text-2xl hover:text-pink-500 transition"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-800">
            <button onClick={() => handleScrollTo("#home")} className="hover:text-pink-500">Home</button>
            <button onClick={() => handleScrollTo("#about")} className="hover:text-pink-500">About</button>
            <button onClick={() => handleScrollTo("#projects")} className="hover:text-pink-500">Projects</button>
            <button onClick={() => handleScrollTo("#services")} className="hover:text-pink-500">Services</button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full transition"
            >
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
