/** @format */

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
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
              At JhrokeCamera, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, and protect your personal
              information when you use our Service.
            </p>
            <p>
              By using JhrokeCamera, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              JhrokeCamera processes video and audio data locally in your
              browser. We do not store or transmit any of the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Video or audio recordings</li>
              <li>Face or voice data</li>
              <li>Personal identification information</li>
              <li>Meeting content or conversations</li>
            </ul>
            <p className="mt-4">The only information we collect is:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>License key information for authentication</li>
              <li>Basic usage statistics (anonymized)</li>
              <li>Error reports (optional)</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">The information we collect is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify your license and provide access to features</li>
              <li>Improve our service through anonymous usage data</li>
              <li>Fix bugs and improve performance through error reports</li>
              <li>Provide customer support when needed</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Data Security
            </h2>
            <p className="mb-4">
              We implement several security measures to protect your
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All processing happens locally in your browser</li>
              <li>No video or audio data is stored on our servers</li>
              <li>Secure encryption for license key transmission</li>
              <li>Regular security audits and updates</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Third-Party Services
            </h2>
            <p className="mb-4">We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors for license purchases</li>
              <li>Analytics services (anonymized data only)</li>
              <li>Error tracking services (optional)</li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies, which we encourage
              you to review.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of analytics and error reporting</li>
              <li>Receive a copy of your data in a portable format</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Changes to This Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
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

export default PrivacyPolicy;
