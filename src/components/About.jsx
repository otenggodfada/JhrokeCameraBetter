/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Helmet>
        <title>About Jhroke Camera - Transforming Video Communication</title>
        <meta
          name="description"
          content="Learn about Jhroke Camera's mission to transform video calls with AI-powered effects and real-time voice changing technology."
        />
      </Helmet>

      <motion.div
        className="container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500">
            About Jhroke Camera
          </h1>
          <p className="text-xl text-gray-300">
            Transforming Video Calls Since 2024
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Story
                </h2>
                <p className="text-gray-300 mb-4">
                  JhrokeCamera was born from a simple idea: video calls should
                  be fun, engaging, and expressive. In a world where virtual
                  meetings have become the norm, we saw an opportunity to bring
                  creativity and personality back to digital communication.
                </p>
                <p className="text-gray-300">
                  Founded in 2024, our team of passionate developers and
                  designers set out to create a tool that would transform
                  ordinary video calls into extraordinary experiences.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-300 mb-4">
                  We believe that technology should enhance human connection,
                  not replace it. Our mission is to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Make video calls more engaging and enjoyable",
                    "Provide tools for creative self-expression",
                    "Ensure privacy and security in all our products",
                    "Continuously innovate to improve the virtual meeting experience",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Our Technology
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "AI Face Detection",
                      description:
                        "Advanced AI-powered face detection and tracking",
                    },
                    {
                      title: "Voice Processing",
                      description:
                        "Real-time voice processing and modification",
                    },
                    {
                      title: "Privacy Focused",
                      description:
                        "Browser-based processing for maximum privacy",
                    },
                    {
                      title: "Cross-Platform",
                      description:
                        "Works seamlessly across all major platforms",
                    },
                  ].map((tech, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-gray-300">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Join Our Journey
                </h2>
                <p className="text-gray-300 mb-6">
                  We're always looking for passionate individuals to join our
                  team and help shape the future of virtual communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://instagram.com/jhroke_camera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Follow Us on Instagram
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/direct/t/17846796534096069/#" target="_blank"
                    className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 hover:shadow-lg transition-all duration-300"
                  >
                    Contact Us
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
