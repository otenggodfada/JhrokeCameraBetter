/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VoiceChanger = () => {
  const navigate = useNavigate();

  const handleTryNowClick = () => {
    navigate("/#pricing");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="voice-changer-page bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <Helmet>
        <title>AI Voice Changer for Video Calls | Jhroke Camera</title>
        <meta
          name="description"
          content="Transform your voice in real-time with our AI voice changer. Perfect for video calls, gaming, and content creation. Try different voices and effects instantly."
        />
        <meta
          name="keywords"
          content="AI voice changer, voice effects, real-time voice changer, video call voice changer, voice filter, voice modulation"
        />
      </Helmet>

      <motion.main
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500">
            AI Voice Changer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your voice in real-time with advanced AI technology.
            Perfect for professional meetings, gaming, and content creation.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50"
            >
              <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Voice Effects
              </h3>
              <p className="text-gray-400">
                Transform your voice instantly with our advanced AI processing
                technology.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50"
            >
              <div className="h-12 w-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multiple Voice Presets
              </h3>
              <p className="text-gray-400">
                Choose from a variety of voice presets or create your custom
                voice effect.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50"
            >
              <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Low Latency</h3>
              <p className="text-gray-400">
                Experience minimal delay with our optimized voice processing
                technology.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 text-center"
            >
              <div className="h-16 w-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Select Your Voice</h3>
              <p className="text-gray-400">
                Choose from our library of voice presets or create your custom
                effect.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 text-center"
            >
              <div className="h-16 w-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Apply to Calls</h3>
              <p className="text-gray-400">
                Use our virtual audio device to apply the effect to any video
                call application.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 text-center"
            >
              <div className="h-16 w-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enjoy the Magic</h3>
              <p className="text-gray-400">
                Your voice is transformed in real-time with no noticeable delay.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Video Calls", "Gaming", "Content Creation", "Streaming"].map(
              (useCase, index) => (
                <motion.div
                  key={useCase}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 text-center"
                >
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{useCase[0]}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{useCase}</h3>
                </motion.div>
              )
            )}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleTryNowClick}
            className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try Voice Changer Now
          </motion.button>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default VoiceChanger;
