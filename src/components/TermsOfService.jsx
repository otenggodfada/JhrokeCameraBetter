/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: (
        <>
          <p className="mb-4">
            By accessing and using JhrokeCamera ("the Service"), you accept and
            agree to be bound by the terms and provision of this agreement.
          </p>
          <p>
            If you do not agree to abide by the above, please do not use this
            Service.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "License and Usage",
      content: (
        <>
          <p className="mb-4">
            JhrokeCamera grants you a personal, non-exclusive, non-transferable,
            limited license to use the Service in accordance with these Terms.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You may not modify, copy, distribute, transmit, display, perform,
              reproduce, publish, license, create derivative works from,
              transfer, or sell any information obtained from the Service.
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
        </>
      ),
    },
    {
      id: 3,
      title: "Privacy Policy",
      content: (
        <>
          <p className="mb-4">
            Your use of the Service is also governed by our Privacy Policy.
            Please review our Privacy Policy, which also governs the Service and
            informs users of our data collection practices.
          </p>
          <p>
            We process all video and audio data locally in your browser and do
            not store any personal data on our servers.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Payment and Refunds",
      content: (
        <>
          <p className="mb-4">
            All payments for the Service are processed through secure
            third-party payment processors. We do not store your payment
            information.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All purchases are final and non-refundable.</li>
            <li>Prices are subject to change without notice.</li>
            <li>Your license is valid for lifetime use on multiple devices.</li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: "Intellectual Property",
      content: (
        <>
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
        </>
      ),
    },
    {
      id: 6,
      title: "Limitation of Liability",
      content: (
        <p className="mb-4">
          In no event shall JhrokeCamera, nor its directors, employees,
          partners, agents, suppliers, or affiliates, be liable for any
          indirect, incidental, special, consequential, or punitive damages,
          including without limitation, loss of profits, data, use, goodwill, or
          other intangible losses.
        </p>
      ),
    },
    {
      id: 7,
      title: "Changes to Terms",
      content: (
        <>
          <p className="mb-4">
            We reserve the right to modify or replace these Terms at any time.
            If a revision is material, we will provide at least 30 days' notice
            prior to any new terms taking effect.
          </p>
          <p>
            What constitutes a material change will be determined at our sole
            discretion.
          </p>
        </>
      ),
    },
    {
      id: 8,
      title: "Contact Information",
      content: (
        <>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: support@jhrokecamera.com</li>
            <li>Instagram: @jhrokecamera</li>
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
            Terms of Service
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

export default TermsOfService;
