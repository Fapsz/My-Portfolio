import React from "react";
import { FaCode, FaLaptopCode, FaPalette, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-pink-500 mb-4" />,
    title: "Frontend Development",
    description:
      "I build clean, responsive, and high-performance websites using React, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    id: 2,
    icon: <FaPalette className="text-4xl text-pink-500 mb-4" />,
    title: "UI/UX Design",
    description:
      "I create user-centered interface designs with smooth layouts and modern color palettes that engage and convert.",
  },
  {
    id: 3,
    icon: <FaLaptopCode className="text-4xl text-pink-500 mb-4" />,
    title: "Website Maintenance",
    description:
      "I help maintain and optimize your website performance, ensuring fast load times and smooth user experiences.",
  },
  {
    id: 4,
    icon: <FaMobileAlt className="text-4xl text-pink-500 mb-4" />,
    title: "Responsive Design",
    description:
      "Your site will look great on every device. I design layouts that adapt perfectly to desktops, tablets, and smartphones.",
  },
];

const Service = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white text-gray-800 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          My <span className="text-pink-500">Services</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          I provide a range of web development and design services to bring your
          brand and ideas to life. Here’s what I can do for you.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <a
            href="#contact"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
