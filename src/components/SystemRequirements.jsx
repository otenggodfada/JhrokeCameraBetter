/** @format */

import React from "react";
import { motion } from "framer-motion";

const SystemRequirements = () => {
  const requirements = [
    {
      category: "Browser",
      items: [
        "Google Chrome (latest version)",
        "Mozilla Firefox (latest version)",
        "Microsoft Edge (latest version)",
        "Safari (latest version)",
        "Mobile Chrome (Android)",
        "Mobile Safari (iOS)",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      category: "Operating System",
      items: [
        "Windows 10 or later",
        "macOS 10.15 or later",
        "Linux (latest stable version)",
        "Chrome OS (latest version)",
        "Android 10 or later",
        "iOS 14 or later",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      category: "Hardware",
      items: [
        "Desktop: Dual-core 2.0 GHz or better",
        "Desktop: 4GB RAM or more",
        "Mobile: 3GB RAM or more",
        "Webcam: 720p or higher resolution",
        "Front Camera (Mobile): 5MP or higher",
        "Microphone: Built-in or external",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
    },
    {
      category: "Mobile Devices",
      items: [
        "iPhone 8 or newer",
        "iPad 6th gen or newer",
        "Android devices with 3GB+ RAM",
        "Tablets with front-facing camera",
        "Mobile data or WiFi connection",
        "Touch screen support",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-green-500 to-teal-500",
    },
    {
      category: "Internet Connection",
      items: [
        "Desktop: 5 Mbps download, 1 Mbps upload",
        "Desktop: 10 Mbps download, 2 Mbps upload (recommended)",
        "Mobile: 4G/LTE or better",
        "WiFi: 5GHz band preferred",
        "Stable connection required",
        "Low latency preferred",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      gradient: "from-pink-500 to-rose-500",
    },
    {
      category: "Display & Resolution",
      items: [
        "Desktop: 1920x1080 (Full HD) or higher",
        "Mobile: 720p or higher resolution",
        "Tablet: 1280x800 or higher",
        "Minimum screen size: 5 inches",
        "Recommended: 16:9 or 16:10 aspect ratio",
        "Support for high DPI displays",
      ],
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              System Requirements
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ensure your system meets these requirements for the best experience
            with our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((requirement, index) => (
            <motion.div
              key={requirement.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${requirement.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`}
              />

              <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-6 rounded-2xl hover:border-gray-600/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${requirement.gradient}`}
                  >
                    {requirement.icon}
                  </div>
                  <h3 className="ml-4 text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {requirement.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {requirement.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + itemIndex * 0.1,
                      }}
                      className="flex items-start"
                    >
                      <div
                        className={`w-5 h-5 mr-3 rounded-full bg-gradient-to-r ${requirement.gradient} flex-shrink-0 flex items-center justify-center`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
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
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Note: Performance may vary based on your system configuration and
            internet connection. For the best experience, we recommend using the
            latest versions of supported browsers and operating systems.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemRequirements;
