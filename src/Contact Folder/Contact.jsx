import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 text-gray-800 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Contact <span className="text-pink-500">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind, or just want to say hello? Fill out the form
            below or reach me through my contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Let’s Connect
            </h3>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-pink-500 text-2xl" />
                <span>fapszsamuelfapohunda@.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-pink-500 text-2xl" />
                <span>+234 09068018420,09046530397</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-pink-500 text-2xl" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-8 text-2xl">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
