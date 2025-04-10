/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaImage, FaShare } from "react-icons/fa";

const features = [
  {
    icon: <FaCamera className="w-12 h-12" />,
    title: "High-Quality Photos",
    description: "Capture stunning photos with our advanced camera technology.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaVideo className="w-12 h-12" />,
    title: "4K Video Recording",
    description: "Record your memories in crystal clear 4K resolution.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <FaImage className="w-12 h-12" />,
    title: "Photo Editing",
    description: "Enhance your photos with our built-in editing tools.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    icon: <FaShare className="w-12 h-12" />,
    title: "Easy Sharing",
    description: "Share your moments instantly with friends and family.",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

function Features() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-medium mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Capture, edit, and share your precious moments with our powerful
            features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-glow">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
