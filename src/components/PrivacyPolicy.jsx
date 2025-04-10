/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
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
        <title>Privacy Policy - Jhroke Camera</title>
        <meta
          name="description"
          content="Learn about Jhroke Camera's commitment to privacy and how we protect your data in our video call software."
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
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
                  1. Introduction
                </h2>
                <p className="text-gray-300 mb-4">
                  At JhrokeCamera, we take your privacy seriously. This Privacy
                  Policy explains how we collect, use, and protect your personal
                  information when you use our Service.
                </p>
                <p className="text-gray-300">
                  By using JhrokeCamera, you agree to the collection and use of
                  information in accordance with this policy.
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-300 mb-4">
                  JhrokeCamera processes video and audio data locally in your
                  browser. We do not store or transmit any of the following:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Video or audio recordings",
                    "Face or voice data",
                    "Personal identification information",
                    "Meeting content or conversations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  The only information we collect is:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "License key information for authentication",
                    "Basic usage statistics (anonymized)",
                    "Error reports (optional)",
                  ].map((item, index) => (
                    <div
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
                  3. How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "License Verification",
                      description:
                        "Verify your license and provide access to features",
                    },
                    {
                      title: "Service Improvement",
                      description:
                        "Improve our service through anonymous usage data",
                    },
                    {
                      title: "Bug Fixing",
                      description:
                        "Fix bugs and improve performance through error reports",
                    },
                    {
                      title: "Customer Support",
                      description: "Provide customer support when needed",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  4. Data Security
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Local Processing",
                      description:
                        "All processing happens locally in your browser",
                    },
                    {
                      title: "No Server Storage",
                      description:
                        "No video or audio data is stored on our servers",
                    },
                    {
                      title: "Secure Encryption",
                      description:
                        "Secure encryption for license key transmission",
                    },
                    {
                      title: "Regular Audits",
                      description: "Regular security audits and updates",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
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
              <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-green-500"
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
                  5. Third-Party Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Payment Processing",
                      description: "Payment processors for license purchases",
                    },
                    {
                      title: "Analytics",
                      description: "Analytics services (anonymized data only)",
                    },
                    {
                      title: "Error Tracking",
                      description: "Error tracking services (optional)",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 mt-6">
                  These services have their own privacy policies, which we
                  encourage you to review.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-yellow-500"
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
                  6. Your Rights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Data Access",
                      description: "Access your personal information",
                    },
                    {
                      title: "Data Deletion",
                      description: "Request deletion of your data",
                    },
                    {
                      title: "Opt-Out",
                      description: "Opt-out of analytics and error reporting",
                    },
                    {
                      title: "Data Portability",
                      description:
                        "Receive a copy of your data in a portable format",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
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
              <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  7. Changes to This Policy
                </h2>
                <p className="text-gray-300 mb-4">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
                <p className="text-gray-300">
                  You are advised to review this Privacy Policy periodically for
                  any changes.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50"
          >
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-indigo-500"
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
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  8. Contact Us
                </h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/jhroke_camera" target="_blank"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Email Us
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
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://instagram.com/jhroke_camera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 hover:shadow-lg transition-all duration-300"
                  >
                    Follow on Instagram
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

export default PrivacyPolicy;
