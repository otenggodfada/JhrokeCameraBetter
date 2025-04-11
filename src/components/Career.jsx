/** @format */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Career = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    experience: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
    mailtoLink: "",
    emailContent: "",
  });
  const [selectedJob, setSelectedJob] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({
      type: "",
      message: "",
      mailtoLink: "",
      emailContent: "",
    });

    try {
      // Validate form data
      if (
        !formData.name ||
        !formData.email ||
        !formData.position ||
        !formData.experience ||
        !formData.message
      ) {
        throw new Error("Please fill in all fields");
      }

      // Create the email body
      const emailBody = `
        New Job Application Received:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Position: ${formData.position}
        Experience: ${formData.experience} years
        
        Message:
        ${formData.message}
      `;

      // Create a simple mailto link
      const mailtoLink = `mailto:support@jhrokecamera.com?subject=New Job Application - ${
        formData.position
      }&body=${encodeURIComponent(emailBody)}`;

      // Try to open the email client
      window.open(mailtoLink, "_self");

      setSubmitStatus({
        type: "info",
        message:
          "Please check your email client. If it didn't open automatically, copy the information below and send it to support@jhrokecamera.com",
        emailContent: emailBody,
      });
      setFormData({
        name: "",
        email: "",
        position: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "There was an error preparing your application. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setFormData((prev) => ({
      ...prev,
      position: job.title,
      message: `I am interested in applying for the ${job.title} position. I have reviewed the requirements and believe I would be a great fit for this role.\n\nJob Details:\n- Category: ${job.category}\n- Type: ${job.type}\n- Location: ${job.location}\n- Salary: ${job.salary}\n- Registration Fee: ${job.registration}\n\n${job.description}`,
    }));

    // Scroll to the form
    document
      .getElementById("application-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  const jobCategories = [
    {
      id: "all",
      name: "All Positions",
      icon: "👥",
    },
    {
      id: "development",
      name: "Development",
      icon: "💻",
    },
    {
      id: "design",
      name: "Design",
      icon: "🎨",
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: "📈",
    },
    {
      id: "support",
      name: "Support",
      icon: "🤝",
    },
  ];

  const jobPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      category: "development",
      type: "Full-time",
      location: "Remote",
      salary: "$15,000 - $20,000",
      registration: "$150",
      description:
        "Join our team as a Senior Full Stack Developer and work on cutting-edge web applications. You'll be responsible for developing and maintaining our core products.",
      requirements: [
        "5+ years of experience in web development",
        "Strong knowledge of React, Node.js, and MongoDB",
        "Experience with cloud services (AWS/GCP)",
        "Excellent problem-solving skills",
      ],
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "design",
      type: "Full-time",
      location: "Remote",
      salary: "$10,000 - $15,000",
      registration: "$100",
      description:
        "We're looking for a creative UI/UX Designer to create beautiful and intuitive user interfaces for our products.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of user-centered design principles",
      ],
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      category: "marketing",
      type: "Full-time",
      location: "Remote",
      salary: "$8,000 - $12,000",
      registration: "$75",
      description:
        "Help us grow our brand and reach new customers through innovative digital marketing strategies.",
      requirements: [
        "2+ years of digital marketing experience",
        "Knowledge of SEO, SEM, and social media marketing",
        "Experience with analytics tools",
        "Strong communication skills",
      ],
    },
    {
      id: 4,
      title: "Customer Support Lead",
      category: "support",
      type: "Full-time",
      location: "Remote",
      salary: "$5,000 - $8,000",
      registration: "$50",
      description:
        "Lead our customer support team and ensure our users receive the best possible assistance.",
      requirements: [
        "3+ years of customer support experience",
        "Leadership skills",
        "Excellent communication abilities",
        "Problem-solving mindset",
      ],
    },
  ];

  const filteredJobs =
    activeTab === "all"
      ? jobPositions
      : jobPositions.filter((job) => job.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hiring Notification Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
          <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🚀</div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    We're Hiring!
                  </h2>
                  <p className="text-gray-300">
                    Join our growing team of talented professionals
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    {jobCategories.length}
                  </div>
                  <div className="text-sm text-gray-400">Open Positions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    $5k-$20k
                  </div>
                  <div className="text-sm text-gray-400">Monthly Salary</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">100%</div>
                  <div className="text-sm text-gray-400">Remote Work</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Join Our Team
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Work remotely with a talented team, earn competitive salaries, and
            be part of something extraordinary.
          </p>
        </motion.div>

        {/* Enhanced Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: "🌍",
              title: "Remote Work",
              description:
                "Work from anywhere in the world with flexible hours",
              gradient: "from-blue-500/20 to-blue-600/20",
            },
            {
              icon: "💰",
              title: "Competitive Salary",
              description: "Monthly salary ranging from $5,000 to $20,000",
              gradient: "from-purple-500/20 to-purple-600/20",
            },
            {
              icon: "🎯",
              title: "Growth Opportunities",
              description: "Continuous learning and career advancement",
              gradient: "from-pink-500/20 to-pink-600/20",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${benefit.gradient} backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-lg`}
            >
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {jobCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Job Listings */}
        <div className="grid grid-cols-1 gap-8">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative bg-gray-800/40 backdrop-blur-xl rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-700/50 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-8 relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm backdrop-blur-sm">
                        {job.type}
                      </span>
                      <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm backdrop-blur-sm">
                        {job.location}
                      </span>
                      <span className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm backdrop-blur-sm">
                        {job.salary}/month
                      </span>
                      <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm backdrop-blur-sm">
                        Registration: {job.registration}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApplyClick(job)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
                  >
                    Apply Now
                  </motion.button>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {job.description}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Requirements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="text-blue-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Application Form */}
        <motion.div
          id="application-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
          <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Join Us?
              </h2>
              {selectedJob && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20"
                >
                  <p className="text-blue-400 text-xl mb-2">
                    Applying for: {selectedJob.title}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-3">
                    <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      Salary: {selectedJob.salary}/month
                    </span>
                    <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                      Registration: {selectedJob.registration}
                    </span>
                  </div>
                </motion.div>
              )}
              <p className="text-gray-300 text-lg mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-8 p-6 rounded-2xl border backdrop-blur-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border-green-500/20"
                      : submitStatus.type === "error"
                      ? "bg-red-500/10 border-red-500/20"
                      : "bg-blue-500/10 border-blue-500/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`text-2xl ${
                        submitStatus.type === "success"
                          ? "text-green-400"
                          : submitStatus.type === "error"
                          ? "text-red-400"
                          : "text-blue-400"
                      }`}
                    >
                      {submitStatus.type === "success"
                        ? "✅"
                        : submitStatus.type === "error"
                        ? "❌"
                        : "ℹ️"}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-lg font-medium mb-2 ${
                          submitStatus.type === "success"
                            ? "text-green-400"
                            : submitStatus.type === "error"
                            ? "text-red-400"
                            : "text-blue-400"
                        }`}
                      >
                        {submitStatus.message}
                      </p>
                      {submitStatus.emailContent && (
                        <div className="mt-4 space-y-4">
                          <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-gray-400">To:</span>
                              <span className="text-white">
                                support@jhrokecamera.com
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-gray-400">Subject:</span>
                              <span className="text-white">
                                New Job Application - {formData.position}
                              </span>
                            </div>
                            <div className="mt-4">
                              <span className="text-gray-400 block mb-2">
                                Message:
                              </span>
                              <div className="bg-gray-900/50 p-4 rounded-lg text-gray-300 whitespace-pre-wrap font-mono text-sm">
                                {submitStatus.emailContent}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-blue-400">💡</span>
                            <span>
                              If your email client didn't open automatically,
                              you can copy the information above and send it
                              manually.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Position"
                    required
                    className="px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  />
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Experience (Years)"
                    required
                    className="px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself and why you'd be a great fit..."
                  required
                  className="w-full mt-4 px-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-sm h-32"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
