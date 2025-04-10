/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FaVideo, FaMicrophone, FaUsers, FaRobot } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "/month",
    features: [
      "HD Video Calls",
      "Basic Voice Effects",
      "Up to 4 Participants",
      "Browser Based",
    ],
    icon: <FaVideo className="w-8 h-8" />,
    gradient: "from-neon-blue to-neon-cyan",
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    features: [
      "HD Video Calls",
      "Advanced Voice Effects",
      "Up to 10 Participants",
      "Custom Voice Filters",
      "Screen Sharing",
    ],
    icon: <FaMicrophone className="w-8 h-8" />,
    gradient: "from-neon-purple to-neon-pink",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "/month",
    features: [
      "All Pro Features",
      "Unlimited Participants",
      "Custom Voice Effects",
      "Priority Support",
      "API Access",
      "Custom Integration",
    ],
    icon: <FaRobot className="w-8 h-8" />,
    gradient: "from-neon-pink to-neon-purple",
  },
];

function Pricing() {
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
          <span className="text-neon-blue font-medium mb-4 block">Pricing</span>
          <h2 className="tech-heading mb-6">Choose Your Plan</h2>
          <p className="tech-subheading max-w-2xl mx-auto">
            Select the perfect plan for your video calling needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? "md:scale-110" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium backdrop-blur-tech border border-neon-purple/20">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="tech-card h-full p-8">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} p-3 text-white mb-6`}
                >
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full tech-button ${
                    plan.popular
                      ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white border-0"
                      : ""
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
