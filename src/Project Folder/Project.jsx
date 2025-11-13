import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const myWorks = [
  {
    id: 1,
    title: "Dream Hotel Website",
    description:
      "An elegant hotel management website built with React and Tailwind CSS. Includes product filtering, add-to-cart system, and responsive design and backend javascript.",
    image:
      "https://images.unsplash.com/photo-1616394584738-d8b6f6f3b9d3?auto=format&fit=crop&w=800&q=80",
    link: "https://My-project-seven-sage.vercel.app",
  },
  {
    id: 2,
    title: "AyomideDev Portfolio",
    description:
      "A modern personal portfolio showcasing my web development projects and skills with smooth animations and contact form.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "https://my-portfolio-eignt-sandy-75.vercel.app",
  },
  {
    id: 3,
    title: "Food Order Web App",
    description:
      "A frontend web app for ordering food online. Users can browse menus, add to cart, and place orders with a simple UI.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    link: "https://your-live-demo-link.com",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 text-gray-800 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Pro <span className="text-pink-500">Ject</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A collection of projects I’ve built — each one designed with
            creativity, functionality, and attention to detail.
          </p>
        </div>

        {/* Work Showcase */}
        <div className="space-y-16">
          {myWorks.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-10`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-pink-500/10 rounded-2xl group-hover:bg-pink-500/20 transition"></div>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-3xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-medium transition"
                >
                  <FaExternalLinkAlt /> <span>View Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
