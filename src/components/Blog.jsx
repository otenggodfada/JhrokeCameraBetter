/** @format */

import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "The Future of Virtual Meetings: How Face and Voice Technology is Changing the Game",
      excerpt:
        "Explore how advanced face and voice technology is revolutionizing virtual meetings and making them more engaging than ever before.",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Privacy in the Digital Age: Why Local Processing Matters",
      excerpt:
        "Learn why processing video and audio data locally in the browser is crucial for maintaining privacy in today's digital landscape.",
      date: "March 10, 2024",
      category: "Privacy",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Making Video Calls Fun Again: Creative Ways to Use JhrokeCamera",
      excerpt:
        "Discover creative ways to use JhrokeCamera to make your video calls more engaging and entertaining.",
      date: "March 5, 2024",
      category: "Tips & Tricks",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-400">
            Latest news, tips, and insights about virtual communication
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-400 text-sm">
                  {blogPosts[0].date}
                </span>
                <span className="text-gray-400 text-sm">
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-300 mb-6">{blogPosts[0].excerpt}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                Read More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, tips, and
              exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
