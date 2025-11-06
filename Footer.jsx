import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4 hover:text-pink-500 transition">About</h3>
          <p className="text-sm text-gray-600">
            I’m Ayomide Muhammad, frontend developer building modern, responsive and user-friendly websites.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4 hover:text-pink-500 transition">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-pink-500 transition">Projects</a></li>
            <li><a href="#services" classNumber="hover:text-pink-500 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Legal & Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4 hover:text-pink-500 transition">Support & Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-pink-500 transition">FAQ</a></li>
            <li><a href="#privacy" className="hover:text-pink-500 transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-pink-500 transition">Terms of Service</a></li>
            <li><a href="#help" className="hover:text-pink-500 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Column 4: Follow & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-4 hover:text-pink-500 transition">Follow & Contact</h3>
          <div className="flex space-x-4 mb-4 text-xl">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaLinkedin /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition"><FaTwitter /></a>
          </div>
          <p className="text-sm text-gray-600">
            Have a project? <br/>
            <a href="#contact" className="text-pink-500 hover:underline">Get in touch</a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AyomideDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
