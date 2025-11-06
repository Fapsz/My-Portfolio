import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 text-gray-800 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="fapohunda.jpg"
            alt="fapohunda.jpg"
            className="rounded-2xl shadow-lg w-80 h-100 object-cover border-4 border-pink-500"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            About <span className="text-pink-500">Me</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Hi! I'm <span className="font-semibold text-gray-800">Ayomide Muhammad Fapohunda</span>, 
            a passionate <span className="text-pink-500 font-medium">Frontend Developer</span> 
            based in Nigeria. I specialize in building responsive, user-friendly websites 
            using modern technologies like React and Tailwind CSS and Javascript.  
            <br /><br />
            I love turning ideas into elegant digital experiences that make people smile. 
            When I’m not coding, I’m learning new tech skills or exploring UI/UX design trends.
          </p>

          {/* Skills Section */}
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">My Skills</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "HTML5",
              "CSS3",
              "JavaScript (HTML )",
              "React.js",
              "Tailwind CSS",
              "Node.js",
              "Git & GitHub",
              "Responsive Design",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-pink-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href="/Ayomide-CV.pdf"
            download
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
