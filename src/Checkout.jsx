/** @format */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Get the plan from URL parameters
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      // Capitalize first letter for matching plan names
      const formattedPlan =
        plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase();
      if (plans[formattedPlan]) {
        setSelectedPlan(formattedPlan);
      }
    }
  }, []);

  const plans = {
    Standard: {
      price: 19,
      originalPrice: 29,
      features: [
        "Basic video effects",
        "Limited platform support",
        "Basic filters",
      ],
    },
    Pro: {
      price: 29,
      originalPrice: 38,
      features: [
        "All Free features",
        "Advanced video effects",
        "Extended platform support",
        "Premium filters",
        "Priority support",
      ],
    },
    Plus: {
      price: 39,
      originalPrice: 78,
      features: [
        "All Standard features",
        "Voice changer",
        "Full platform support",
        "Advanced filters",
        "Instagram integration",
        "24/7 Priority support",
      ],
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Here you would typically integrate with a payment processor
    // For now, we'll simulate the payment process
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsProcessing(false);
      setIsSuccess(true);
    } catch (error) {
      setIsProcessing(false);
      alert("Payment failed. Please try again.");
    }
  };

  // Don't show checkout for free plan
  if (selectedPlan === "Free") {
    window.location.href = "/";
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
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
            <h2 className="text-4xl font-bold mb-4">Payment Successful!</h2>
            <p className="text-xl text-gray-400 mb-8">
              Thank you for purchasing the {selectedPlan} plan. Your license key
              will be sent to your email shortly.
            </p>
            <motion.a
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Home
            </motion.a>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Plan</span>
                <span className="font-medium">{selectedPlan}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Price</span>
                <div className="text-right">
                  <span className="text-2xl font-bold">
                    ${plans[selectedPlan].price}
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    ${plans[selectedPlan].originalPrice}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Total</span>
                  <span className="text-2xl font-bold">
                    ${plans[selectedPlan].price}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Features Included:</h3>
                <ul className="space-y-2">
                  {plans[selectedPlan].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="123"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity ${
                  isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isProcessing
                  ? "Processing..."
                  : `Pay $${plans[selectedPlan].price}`}
              </motion.button>

              <p className="text-sm text-gray-400 text-center">
                Your payment is secure and encrypted. We never store your card
                details.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
