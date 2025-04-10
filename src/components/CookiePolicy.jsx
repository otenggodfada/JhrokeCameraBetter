/** @format */

import React from "react";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="space-y-8 text-gray-300">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              This Cookie Policy explains how JhrokeCamera ("we", "us", or
              "our") uses cookies and similar technologies to recognize you when
              you visit our website and use our service.
            </p>
            <p>
              By using our website and service, you consent to the use of
              cookies in accordance with this policy.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. What Are Cookies
            </h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide useful information
              to website owners.
            </p>
            <p>
              Cookies do not contain any information that personally identifies
              you, but personal information that we store about you may be
              linked to the information stored in and obtained from cookies.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Essential Cookies
                </h3>
                <p className="mb-2">
                  These cookies are necessary for the website to function
                  properly. They enable basic functions like page navigation and
                  access to secure areas of the website.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Authentication cookies</li>
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Analytics Cookies
                </h3>
                <p className="mb-2">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics cookies</li>
                  <li>Performance monitoring cookies</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Preference Cookies
                </h3>
                <p className="mb-2">
                  These cookies enable the website to remember information that
                  changes the way the website behaves or looks, like your
                  preferred language or region.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Language preference cookies</li>
                  <li>Theme preference cookies</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. How to Control Cookies
            </h2>
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
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Third-Party Cookies
            </h2>
            <p className="mb-4">
              In some special cases, we also use cookies provided by trusted
              third parties. The following section details which third party
              cookies you might encounter through this site:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics - for understanding how our site is used</li>
              <li>Payment processors - for secure payment processing</li>
              <li>Social media plugins - for social sharing functionality</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons.
            </p>
            <p>
              We will notify you of any material changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact
              us at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: privacy@jhrokecamera.com</li>
              <li>Instagram: @jhrokecamera</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
