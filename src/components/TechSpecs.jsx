/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaMicrophone,
  FaRobot,
  FaGlobe,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const specs = [
  {
    icon: <FaVideo className="w-8 h-8" />,
    title: "Real-time Video",
    description: "High-quality video streaming with ultra-low latency",
    value: "60fps",
    unit: "Frame Rate",
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    icon: <FaMicrophone className="w-8 h-8" />,
    title: "Voice Effects",
    description: "Real-time voice modulation with multiple effects",
    value: "12+",
    unit: "Effects",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Browser Based",
    description: "No installation required, works in any modern browser",
    value: "100%",
    unit: "Web Ready",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Group Calls",
    description: "Support for multiple participants in video calls",
    value: "10+",
    unit: "Participants",
    gradient: "from-neon-cyan to-neon-blue",
  },
];

function TechSpecs() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-neon-blue font-medium mb-4 block">
            Technical Specifications
          </span>
          <h2 className="tech-heading mb-6">Real-time Communication</h2>
          <p className="tech-subheading max-w-2xl mx-auto">
            Experience seamless video calls with advanced voice effects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="tech-card h-full p-8">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${spec.gradient} p-3 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {spec.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {spec.title}
                </h3>

                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">
                    {spec.value}
                  </span>
                  <span className="text-gray-400 ml-2">{spec.unit}</span>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSpecs;
