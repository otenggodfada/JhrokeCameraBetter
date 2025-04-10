/** @format */

import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            Terms of Service
          </h1>
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
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using JhrokeCamera ("the Service"), you accept
              and agree to be bound by the terms and provision of this
              agreement.
            </p>
            <p>
              If you do not agree to abide by the above, please do not use this
              Service.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. License and Usage
            </h2>
            <p className="mb-4">
              JhrokeCamera grants you a personal, non-exclusive,
              non-transferable, limited license to use the Service in accordance
              with these Terms.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You may not modify, copy, distribute, transmit, display,
                perform, reproduce, publish, license, create derivative works
                from, transfer, or sell any information obtained from the
                Service.
              </li>
              <li>
                You may not use the Service for any illegal or unauthorized
                purpose.
              </li>
              <li>
                You may not use the Service in any manner that could damage,
                disable, overburden, or impair the Service.
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
              3. Privacy Policy
            </h2>
            <p className="mb-4">
              Your use of the Service is also governed by our Privacy Policy.
              Please review our Privacy Policy, which also governs the Service
              and informs users of our data collection practices.
            </p>
            <p>
              We process all video and audio data locally in your browser and do
              not store any personal data on our servers.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Payment and Refunds
            </h2>
            <p className="mb-4">
              All payments for the Service are processed through secure
              third-party payment processors. We do not store your payment
              information.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All purchases are final and non-refundable.</li>
              <li>Prices are subject to change without notice.</li>
              <li>
                Your license is valid for lifetime use on multiple devices.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality
              are owned by JhrokeCamera and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <p>
              You agree not to reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the Service without express written
              permission from us.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              In no event shall JhrokeCamera, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect.
            </p>
            <p>
              What constitutes a material change will be determined at our sole
              discretion.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="bg-gray-800/50 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: support@jhrokecamera.com</li>
              <li>Instagram: @jhrokecamera</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
