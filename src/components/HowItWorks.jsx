/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FaCamera, FaEdit, FaShare } from "react-icons/fa";

const steps = [
  {
    icon: <FaCamera className="text-4xl" />,
    title: "Capture",
    description: "Take photos and videos with our intuitive camera interface",
  },
  {
    icon: <FaEdit className="text-4xl" />,
    title: "Edit",
    description: "Enhance your media with our powerful editing tools",
  },
  {
    icon: <FaShare className="text-4xl" />,
    title: "Share",
    description: "Share your creations with friends and family instantly",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-300">
            Simple steps to capture and share your moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-500">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
