import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-pink-100 text-gray-800 relative"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I’m <span className="text-pink-500">Ayomide Muhammad Fapohunda</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
            A Passionate <span className="text-pink-600">Frontend Developer</span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I build modern, responsive websites with clean design and 
            smooth user experience using React, Tailwind CSS, and JavaScript.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-8">
            <a
              href="#projects"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Hire Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-pink-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition"></div>
            <img
              src="fapohunda.jpg"
              alt="fapohunda.jpg"
              className="relative z-10 w-78 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-pink-500 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default Home;
