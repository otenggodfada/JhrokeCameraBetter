/** @format */

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            About JhrokeCamera
          </h1>
          <p className="text-gray-400">Transforming Video Calls Since 2024</p>
        </motion.div>

        <div className="space-y-8 text-gray-300">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Story
            </h2>
            <p className="mb-4">
              JhrokeCamera was born from a simple idea: video calls should be
              fun, engaging, and expressive. In a world where virtual meetings
              have become the norm, we saw an opportunity to bring creativity
              and personality back to digital communication.
            </p>
            <p>
              Founded in 2024, our team of passionate developers and designers
              set out to create a tool that would transform ordinary video calls
              into extraordinary experiences.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h2>
            <p className="mb-4">
              We believe that technology should enhance human connection, not
              replace it. Our mission is to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Make video calls more engaging and enjoyable</li>
              <li>Provide tools for creative self-expression</li>
              <li>Ensure privacy and security in all our products</li>
              <li>
                Continuously innovate to improve the virtual meeting experience
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Technology
            </h2>
            <p className="mb-4">
              JhrokeCamera leverages cutting-edge technology to provide seamless
              face and voice transformation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Advanced AI-powered face detection and tracking</li>
              <li>Real-time voice processing and modification</li>
              <li>Browser-based processing for maximum privacy</li>
              <li>Cross-platform compatibility</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Privacy First
                </h3>
                <p>
                  All processing happens locally in your browser. We never store
                  your video or audio data.
                </p>
              </div>
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  User Experience
                </h3>
                <p>
                  We prioritize intuitive design and seamless performance in
                  everything we build.
                </p>
              </div>
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Innovation
                </h3>
                <p>
                  We're constantly exploring new ways to enhance virtual
                  communication.
                </p>
              </div>
              <div className="p-4 bg-gray-700/30 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Community
                </h3>
                <p>
                  We value our users' feedback and actively incorporate it into
                  our development process.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="mb-4">
              We're always looking for passionate individuals to join our team
              and help shape the future of virtual communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://instagram.com/jhrokecamera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                Follow Us on Instagram
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:contact@jhrokecamera.com"
                className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-all duration-300"
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
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
