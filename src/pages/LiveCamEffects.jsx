/** @format */

import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const LiveCamEffects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const navigate = useNavigate();
  const handleTryNowClick = () => {
    navigate("/#pricing");
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
    <div className="live-cam-effects-page bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <Helmet>
        <title>Live Cam Effects & Filters | Jhroke Camera</title>
        <meta
          name="description"
          content="Enhance your video calls with real-time AI effects and filters. Transform your appearance with our deep live cam technology. Perfect for Zoom, Teams, and all video platforms."
        />
        <meta
          name="keywords"
          content="live cam effects, video filters, deep live cam, real-time video effects, video call filters, AI video effects, virtual background, face filters"
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
            Live Cam Effects & Filters
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your video presence with cutting-edge AI effects. Perfect
            for professional meetings, content creation, and social
            interactions.
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
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Face Filters</h3>
              <p className="text-gray-400">
                Transform your appearance with realistic AI-powered face effects
                and enhancements.
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Virtual Backgrounds
              </h3>
              <p className="text-gray-400">
                Replace your background with stunning virtual environments and
                custom scenes.
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
              <h3 className="text-xl font-semibold mb-2">Real-Time Effects</h3>
              <p className="text-gray-400">
                Apply filters and effects that update instantly as you move and
                interact.
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
              <h3 className="text-xl font-semibold mb-4">Choose Your Effect</h3>
              <p className="text-gray-400">
                Select from our extensive library of premium effects and
                filters.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 text-center"
            >
              <div className="h-16 w-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-500">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Apply to Camera</h3>
              <p className="text-gray-400">
                Our virtual camera device applies effects to any video
                application.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 text-center"
            >
              <div className="h-16 w-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Streaming</h3>
              <p className="text-gray-400">
                Your enhanced video feed is ready for any platform or
                application.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Compatible With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Zoom", "Teams", "Meet", "Discord"].map((platform, index) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 text-center"
              >
                <div className="h-12 w-12 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{platform[0]}</span>
                </div>
                <h3 className="text-lg font-semibold">{platform}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="text-center">
          <motion.button
           onClick={handleTryNowClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Try Live Cam Effects Now
          </motion.button>
        </motion.section>
      </motion.main>
    </div>
  );
};

export default LiveCamEffects;
