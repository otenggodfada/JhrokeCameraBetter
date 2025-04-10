/** @format */

import React from "react";
import { motion } from "framer-motion";

function Demo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-gray-300">
            Watch how our app makes capturing moments effortless
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l17-7z" />
                </svg>
              </div>
              <p className="text-xl text-gray-300">Watch Demo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Demo;
