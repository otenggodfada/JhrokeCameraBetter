/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: (
        <>
          <p className="mb-4">
            This Cookie Policy explains how JhrokeCamera ("we", "us", or "our")
            uses cookies and similar technologies to recognize you when you
            visit our website and use our service.
          </p>
          <p>
            By using our website and service, you consent to the use of cookies
            in accordance with this policy.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "What Are Cookies",
      content: (
        <>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or
            mobile device when you visit a website. They are widely used to make
            websites work more efficiently and provide useful information to
            website owners.
          </p>
          <p>
            Cookies do not contain any information that personally identifies
            you, but personal information that we store about you may be linked
            to the information stored in and obtained from cookies.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Types of Cookies We Use",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Essential Cookies
            </h3>
            <p className="mb-2 text-gray-300">
              These cookies are necessary for the website to function properly.
              They enable basic functions like page navigation and access to
              secure areas of the website.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Authentication cookies</li>
              <li>Session management cookies</li>
              <li>Security cookies</li>
            </ul>
          </div>
          <div className="bg-gray-800/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Analytics Cookies
            </h3>
            <p className="mb-2 text-gray-300">
              These cookies help us understand how visitors interact with our
              website by collecting and reporting information anonymously.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Google Analytics cookies</li>
              <li>Performance monitoring cookies</li>
            </ul>
          </div>
          <div className="bg-gray-800/20 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Preference Cookies
            </h3>
            <p className="mb-2 text-gray-300">
              These cookies enable the website to remember information that
              changes the way the website behaves or looks, like your preferred
              language or region.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Language preference cookies</li>
              <li>Theme preference cookies</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "How to Control Cookies",
      content: (
        <>
          <p className="mb-4">
            You can control and/or delete cookies as you wish. You can delete
            all cookies that are already on your computer and you can set most
            browsers to prevent them from being placed.
          </p>
          <p className="mb-4">To modify your cookie settings, you can:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use your browser settings to manage cookies</li>
            <li>Use our cookie consent banner to manage preferences</li>
            <li>Clear your browser's cache and cookies</li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: "Third-Party Cookies",
      content: (
        <>
          <p className="mb-4">
            In some special cases, we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics - for understanding how our site is used</li>
            <li>Payment processors - for secure payment processing</li>
            <li>Social media plugins - for social sharing functionality</li>
          </ul>
        </>
      ),
    },
    {
      id: 6,
      title: "Changes to This Policy",
      content: (
        <>
          <p className="mb-4">
            We may update our Cookie Policy from time to time to reflect changes
            in our practices or for other operational, legal, or regulatory
            reasons.
          </p>
          <p>
            We will notify you of any material changes by posting the new Cookie
            Policy on this page and updating the "Last updated" date.
          </p>
        </>
      ),
    },
    {
      id: 7,
      title: "Contact Us",
      content: (
        <>
          <p className="mb-4">
            If you have any questions about our use of cookies, please contact
            us at:
          </p>
          <ul className="list-disc pl-6 space-y-2">
        
            <li>Instagram: @jhroke_camera</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 ${
                activeSection === section.id ? "ring-2 ring-blue-500/50" : ""
              }`}
              onClick={() =>
                setActiveSection(
                  activeSection === section.id ? null : section.id
                )
              }
            >
              <motion.h2
                className="text-2xl font-semibold text-white mb-4 flex items-center justify-between cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm mr-3">
                    {section.id}
                  </span>
                  {section.title}
                </span>
                <motion.span
                  animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </motion.h2>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeSection === section.id ? "auto" : 0,
                  opacity: activeSection === section.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="text-gray-300 space-y-4">{section.content}</div>
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
