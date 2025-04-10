/** @format */

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Photographer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "This app has revolutionized how I capture and share my work. The quality is outstanding!",
  },
  {
    name: "Michael Chen",
    role: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "The best camera app I've ever used. It's become an essential part of my travel kit.",
  },
  {
    name: "Emily Rodriguez",
    role: "Social Media Influencer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "My followers love the quality of my content since I started using this app.",
  },
];

function Testimonials() {
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
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
