/** @format */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Routes, Route, Link } from "react-router-dom";
import androidApp from "./images/andr.png";
import iosApp from "./images/ioss.png";
import macApp from "./images/macb.png";
import windowsApp from "./images/winds.png";
import stp1 from "./images/tutorials/stp1.png";
import stp2 from "./images/tutorials/stp2.png";
import stp3 from "./images/tutorials/stp3.png";
import stp4 from "./images/tutorials/stp4.png";
import stp5 from "./images/tutorials/stp5.png";
import Footerlogo from "./images/Group 41.png";
import logo from "./images/Group 46.png";
import discount from "./images/discount.png";
import Checkout from "./Checkout";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import About from "./components/About";
import Blog from "./components/Blog";
import VoiceChanger from "./pages/VoiceChanger";
import LiveCamEffects from "./pages/LiveCamEffects";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const MainContent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSlide = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slideWidth = carousel.offsetWidth;
    const totalSlides = 3; // Number of slides

    let newSlide;
    if (direction === "prev") {
      newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    } else if (direction === "next") {
      newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    } else if (typeof direction === "number") {
      newSlide = direction;
    }

    setCurrentSlide(newSlide);
    carousel.scrollTo({
      left: slideWidth * newSlide,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slideWidth = carousel.offsetWidth;
    const scrollPosition = carousel.scrollLeft;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    setCurrentSlide(currentIndex);

    carousel.scrollTo({
      left: slideWidth * currentIndex,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const slideWidth = carousel.offsetWidth;
      const scrollPosition = carousel.scrollLeft;
      const currentIndex = Math.round(scrollPosition / slideWidth);
      setCurrentSlide(currentIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("mousemove", handleMouseMove);
    carousel.addEventListener("mouseup", handleMouseUp);
    carousel.addEventListener("mouseleave", handleMouseUp);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("mousemove", handleMouseMove);
      carousel.removeEventListener("mouseup", handleMouseUp);
      carousel.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 4); // Set end date to 4 days from now

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={Footerlogo}
                  alt="JhrokeCamera Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/voice-changer"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Voice Changer
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/live-cam-effects"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Live Cam Effects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#features"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#tutorials"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Tutorials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/blog"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white hover:opacity-90 transition-opacity"
              >
                Contact Us
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}

        {isMobileMenuOpen && (
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/80 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/voice-changer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Voice Changer
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/live-cam-effects"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Live Cam Effects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Pricing
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Features
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#tutorials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Tutorials
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Blog
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                About
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Sale Banner */}
      <div
        className={`bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 relative overflow-hidden transition-all duration-300 ${
          isScrolled ? "h-0 py-0 opacity-0" : "h-auto py-2 sm:py-3 opacity-100"
        } z-50 fixed top-0 w-full`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-sm sm:text-lg">🌞</span>
              </motion.div>
              <div className="flex flex-col sm:flex-row items-center space-x-2">
                <span className="text-white font-bold text-base sm:text-lg">
                  Sunny Spring Sale!
                </span>
                <span className="text-white/90 text-sm sm:text-base">
                  Save up to 50% on all plans
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    backgroundColor: [
                      "rgba(0,0,0,0.2)",
                      "rgba(0,0,0,0.3)",
                      "rgba(0,0,0,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-black/20 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {timeLeft.days}
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm ml-1">
                    d
                  </span>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    backgroundColor: [
                      "rgba(0,0,0,0.2)",
                      "rgba(0,0,0,0.3)",
                      "rgba(0,0,0,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="bg-black/20 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {timeLeft.hours}
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm ml-1">
                    h
                  </span>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    backgroundColor: [
                      "rgba(0,0,0,0.2)",
                      "rgba(0,0,0,0.3)",
                      "rgba(0,0,0,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="bg-black/20 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm ml-1">
                    m
                  </span>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    backgroundColor: [
                      "rgba(0,0,0,0.2)",
                      "rgba(0,0,0,0.3)",
                      "rgba(0,0,0,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="bg-black/20 px-2 sm:px-3 py-1 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-base sm:text-lg">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-white/80 text-xs sm:text-sm ml-1">
                    s
                  </span>
                </motion.div>
              </div>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black/20 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-medium hover:bg-black/30 transition-colors backdrop-blur-sm flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base"
              >
                <span>Claim Offer</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Floating elements */}
          <div
            className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500/20 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-orange-500/20 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
              >
                <span className="text-white font-medium">
                  🎉 New Voice Effects Available!
                </span>
              </motion.div>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                className="mb-8"
              >
                <img
                  src={logo}
                  alt="JhrokeCamera Logo"
                  className="w-64 h-auto mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
              >
                <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Transform Your Video Calls
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0"
              >
                Experience crystal clear video calls with real-time voice
                effects and face transformations. No downloads required. Join
                the future of communication.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              >
                <motion.a
                  href="#pricing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <span>Get Started</span>
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  href="#demo"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium text-lg hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <span>Watch Demo</span>
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-12 flex items-center justify-center lg:justify-start space-x-8"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-gray-800 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 flex items-center justify-center text-white font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-gray-400">
                  <span className="font-semibold text-white">1000+</span> Happy
                  Users
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full animate-pulse" />

                {/* Rotating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-2 border-blue-500/20 rounded-full animate-spin-slow" />
                  <div className="w-1/2 h-1/2 border-2 border-pink-500/20 rounded-full animate-spin-slow-reverse" />
                </div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5,
                    }}
                    className="w-32 h-32 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white text-4xl font-bold"
                  >
                    🎤
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">🎥 Watch & Learn</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              See JhrokeCamera in Action
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Watch how our app transforms your video calls with real-time
              effects
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-7xl mx-auto"
          >
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={() => handleSlide("prev")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <svg
                  className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleSlide("next")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300 group"
              >
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
              >
                {/* Video 1 */}
                <div className="flex-none w-full snap-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group mx-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float" />
                      <div
                        className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500/20 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                      />

                      <div className="aspect-video rounded-lg overflow-hidden shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                        <iframe
                          src="https://www.youtube.com/embed/q9tJvdfAJJI"
                          title="JhrokeCamera Demo 1"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        ></iframe>
                      </div>
                      <div className="mt-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                          Face Effects Demo
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                          Watch how our advanced face transformation technology
                          works in real-time
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Video 2 */}
                <div className="flex-none w-full snap-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group mx-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/20 rounded-full animate-float" />
                      <div
                        className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500/20 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                      />

                      <div className="aspect-video rounded-lg overflow-hidden shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300">
                        <iframe
                          src="https://www.youtube.com/embed/hR2aexq-VME"
                          title="JhrokeCamera Demo 2"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        ></iframe>
                      </div>
                      <div className="mt-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                          Voice Effects Demo
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                          Experience our real-time voice modulation technology
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Video 3 */}
                <div className="flex-none w-full snap-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group mx-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-blue-500/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-pink-500/50 transition-all duration-300">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500/20 rounded-full animate-float" />
                      <div
                        className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                      />

                      <div className="aspect-video rounded-lg overflow-hidden shadow-2xl group-hover:shadow-pink-500/20 transition-all duration-300">
                        <iframe
                          src="https://www.youtube.com/embed/C7YS2aHOXHo"
                          title="JhrokeCamera Demo 3"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        ></iframe>
                      </div>
                      <div className="mt-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-500 transition-all duration-300">
                          Full Features Demo
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                          See all our features working together in a complete
                          demo
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Video 4 */}
                <div className="flex-none w-full snap-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group mx-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-blue-500/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-pink-500/50 transition-all duration-300">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500/20 rounded-full animate-float" />
                      <div
                        className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full animate-float"
                        style={{ animationDelay: "1s" }}
                      />

                      <div className="aspect-video rounded-lg overflow-hidden shadow-2xl group-hover:shadow-pink-500/20 transition-all duration-300">
                        <iframe
                          src="https://www.youtube.com/embed/-ez0E-dnADM"
                          title="JhrokeCamera Demo 4"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        ></iframe>
                      </div>
                      <div className="mt-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-orange-500 transition-all duration-300">
                          Full Features Demo
                        </h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                          See all our features working together in a complete
                          demo
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {[1, 2, 3, 4].map((dot) => (
                  <button
                    key={dot}
                    onClick={() => handleSlide(dot - 1)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === dot - 1
                        ? "bg-white"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Discount Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 filter blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white text-sm font-semibold">
                  Limited Time Offer
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 text-4xl sm:text-5xl font-bold text-white"
              >
                Special{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500">
                  Discount
                </span>{" "}
                for You!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-4 text-xl text-gray-300"
              >
                Upgrade your video calls with our exclusive offer. Get premium
                features at an unbeatable price.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#pricing"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Claim Your Discount
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#features"
                  className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group">
                <motion.img
                  src={discount}
                  alt="Special Discount"
                  className="w-full h-auto transform transition-all duration-500 group-hover:scale-105"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-float"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-500/20 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <div id="features" className="py-32 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">
                ✨ Why Choose JhrokeCamera
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Available on All Platforms
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Change your face and voice in real-time during video calls
            </motion.p>
          </div>

          {/* Main Feature Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Left Column - Mobile Apps */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl filter blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">📱</span> Mobile Experience
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <img
                        src={androidApp}
                        alt="Android App"
                        className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm flex items-center">
                        <span className="mr-1">🤖</span> Android
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-xs text-white">
                        Real-time Effects
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src={iosApp}
                        alt="iOS App"
                        className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm flex items-center">
                        <span className="mr-1">🍎</span> iOS
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-orange-500 px-3 py-1 rounded-full text-xs text-white">
                        Face Transform
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">
                        Voice Changer
                      </span>
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">
                        Face Effects
                      </span>
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">Easy Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Desktop Apps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl filter blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">💻</span> Desktop Experience
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <img
                        src={macApp}
                        alt="macOS App"
                        className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm flex items-center">
                        <span className="mr-1">🍎</span> macOS
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-xs text-white">
                        Multi-Platform
                      </div>
                    </div>
                    <div className="relative group">
                      <img
                        src={windowsApp}
                        alt="Windows App"
                        className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm flex items-center">
                        <span className="mr-1">🪟</span> Windows
                      </div>
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-orange-500 px-3 py-1 rounded-full text-xs text-white">
                        All Features
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">WhatsApp</span>
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">Facebook</span>
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">Instagram</span>
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg text-center">
                      <span className="text-sm text-gray-400">More Apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎭",
                title: "Face Transformation",
                description:
                  "Change your appearance instantly during video calls with our advanced face-swapping technology",
                features: [
                  "Multiple face effects",
                  "Instant transformation",
                  "Smooth transitions",
                ],
              },
              {
                icon: "🎤",
                title: "Voice Changer",
                description:
                  "Transform your voice with various effects to match your new appearance or just for fun",
                features: [
                  "Multiple voice effects",
                  "Real-time processing",
                  "Natural sound quality",
                ],
              },
              {
                icon: "🌐",
                title: "Platform Support",
                description:
                  "Connect with popular platforms like WhatsApp, Facebook, Instagram, and more",
                features: [
                  "Wide platform support",
                  "Easy integration",
                  "Seamless experience",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + i * 0.1,
                      }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-32 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">
                🌟 Real User Reviews
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Join thousands of satisfied users who transformed their video
              calls
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Content Creator",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                review:
                  "JhrokeCamera has completely transformed my live streams! The face and voice effects are incredibly fun and my audience loves them. The best part? No downloads required!",
                rating: 5,
                platform: "YouTube",
              },
              {
                name: "Michael Chen",
                role: "Remote Team Lead",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                review:
                  "Our remote team meetings have never been more engaging! The face transformations and voice effects add a fun element to our daily standups, and the browser-based solution makes it super easy for everyone to join.",
                rating: 5,
                platform: "Microsoft Teams",
              },
              {
                name: "Emma Rodriguez",
                role: "Online Teacher",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                review:
                  "My students absolutely love the face and voice effects! It makes our online classes more interactive and fun. The platform is so easy to use, and the quality is excellent.",
                rating: 5,
                platform: "Zoom",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float" />
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500/20 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />

                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-colors group">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-700 group-hover:border-blue-500 transition-colors duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">
                          Verified on {testimonial.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.review}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Join Our Happy Users
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        id="how-it-works"
        className="py-32 bg-gray-900 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">
                🚀 Quick Start Guide
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Get started with JhrokeCamera in just 5 simple steps
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Allow Camera Permission",
                description: "Grant camera access to start using JhrokeCamera",
                icon: "📷",
                steps: [
                  "Click 'Allow' when prompted",
                  "Ensure your camera is properly connected",
                  "Test your camera feed",
                ],
              },
              {
                number: "2",
                title: "Import Static Image",
                description:
                  "Upload the image you want to use for transformation",
                icon: "🖼️",
                steps: [
                  "Click the 'Import' button",
                  "Select your image file",
                  "Wait for the image to load",
                ],
              },
              {
                number: "3",
                title: "Activate License",
                description: "Enter your license key to unlock all features",
                icon: "🔑",
                steps: [
                  "Click 'Activate License'",
                  "Enter your license key",
                  "Click 'Verify' to confirm",
                ],
              },
              {
                number: "4",
                title: "Insert All Licenses",
                description: "Add all your license keys for full functionality",
                icon: "📝",
                steps: [
                  "Navigate to License section",
                  "Add each license key",
                  "Save all licenses",
                ],
              },
              {
                number: "5",
                title: "Apply Filters",
                description: "Transform your image with amazing effects",
                icon: "✨",
                steps: [
                  "Select your desired filter",
                  "Adjust filter intensity",
                  "Click 'Apply' to transform",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float" />
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500/20 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />

                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-colors group">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="text-4xl ml-4 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.steps.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-32 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6 relative group"
            >
              <span className="text-white font-medium relative z-10">
                💰 Spring Sale - 50% OFF
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur group-hover:blur-xl transition-all duration-300"></div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 mb-4"
            >
              Choose Your Perfect Plan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Transform your video calls with our powerful features. Limited
              time offer - get lifetime access at 50% off!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-xl rounded-2xl h-full flex flex-col border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Standard
                  </h3>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-400 line-through mb-1">
                      $38
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      $19
                      <span className="text-lg text-gray-400">/lifetime</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-8">
                  Perfect for content creators
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Advanced video effects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Extended platform support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Limited Socials integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Premium filters
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Priority support
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  <Link to="/checkout?plan=standard" className="block w-full">
                    Get Standard Plan
                  </Link>
                </motion.button>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-xl rounded-2xl h-full flex flex-col border border-pink-500/30 group-hover:border-pink-500/50 transition-all duration-300">
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">Pro</h3>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-400 line-through mb-1">
                      $58
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                      $29
                      <span className="text-lg text-gray-400">/lifetime</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-8">
                  Complete package with all features
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    All Standard features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Voice changer
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Full platform support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Advanced filters
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    All Socials integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    24/7 Priority support
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-pink-500/25"
                >
                  <Link to="/checkout?plan=pro" className="block w-full">
                    Get Pro Plan
                  </Link>
                </motion.button>
              </div>
            </motion.div>

            {/* Plus Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 bg-gray-900/80 backdrop-blur-xl rounded-2xl h-full flex flex-col border border-blue-500/30 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white">Plus</h3>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-400 line-through mb-1">
                      $78
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                      $39
                      <span className="text-lg text-gray-400">/lifetime</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-8">
                  Ultimate package for professionals
                </p>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    All Pro features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Advanced voice effects
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Custom filter creation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Multi-platform streaming
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Premium support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-5 h-5 mr-2 text-green-500 flex items-center justify-center">
                      ✓
                    </div>
                    Early access to new features
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  <Link to="/checkout?plan=plus" className="block w-full">
                    Get Plus Plan
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">💬 Contact Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Message Us on Instagram
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 mb-12"
            >
              Have questions? We'd love to hear from you
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-pink-500/50 transition-all duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300">
                    Connect with Us
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-md">
                    Send us a direct message on Instagram for any questions,
                    support, or feedback. We're here to help!
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.instagram.com/direct/t/17846796534096069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                    Message Us on Instagram
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tutorial Section */}
      <div id="tutorials" className="py-32 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">
                📚 Step-by-Step Guide
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              How to Use JhrokeCamera
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Follow these simple steps to get started with your video
              transformations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Step 1: Allow Camera Permission",
                description: "Grant camera access to start using JhrokeCamera",
                image: stp1,
                steps: [
                  "Click 'Allow' when prompted",
                  "Ensure your camera is properly connected",
                  "Test your camera feed",
                ],
                icon: "📷",
              },
              {
                title: "Step 2: Import Static Image",
                description:
                  "Upload the image you want to use for transformation",
                image: stp2,
                steps: [
                  "Click the 'Import' button",
                  "Select your image file",
                  "Wait for the image to load",
                ],
                icon: "🖼️",
              },
              {
                title: "Step 3: Activate License",
                description: "Enter your license key to unlock all features",
                image: stp3,
                steps: [
                  "Click 'Activate License'",
                  "Enter your license key",
                  "Click 'Verify' to confirm",
                ],
                icon: "🔑",
              },
              {
                title: "Step 4: Insert All Licenses",
                description: "Add all your license keys for full functionality",
                image: stp4,
                steps: [
                  "Navigate to License section",
                  "Add each license key",
                  "Save all licenses",
                ],
                icon: "📝",
              },
              {
                title: "Step 5: Apply Filters",
                description: "Transform your image with amazing effects",
                image: stp5,
                steps: [
                  "Select your desired filter",
                  "Adjust filter intensity",
                  "Click 'Apply' to transform",
                ],
                icon: "✨",
              },
            ].map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl filter blur-xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 flex items-center justify-center text-2xl mr-4">
                      {tutorial.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      {tutorial.title}
                    </h3>
                  </div>
                  <div className="h-48 rounded-lg overflow-hidden mb-6">
                    <img
                      src={tutorial.image}
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-gray-400 mb-4">{tutorial.description}</p>
                  <ul className="space-y-2">
                    {tutorial.steps.map((step, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2 + i * 0.1,
                        }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {step}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full mb-6"
            >
              <span className="text-white font-medium">
                ❓ Frequently Asked Questions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Got Questions? We've Got Answers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Find quick answers to common questions about JhrokeCamera
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What platforms does JhrokeCamera support?",
                answer:
                  "JhrokeCamera works with popular video calling platforms including Zoom, Microsoft Teams, Google Meet, and more. Our browser-based solution ensures compatibility across all major operating systems.",
              },
              {
                question: "Do I need to download any software?",
                answer:
                  "No downloads required! JhrokeCamera works directly in your browser. Simply allow camera access and you're ready to transform your video calls.",
              },
              {
                question: "How does the voice changer work?",
                answer:
                  "Our advanced voice changer processes your audio in real-time, allowing you to modify your voice with various effects. The changes are applied instantly during your calls.",
              },
              {
                question: "Can I use multiple effects at once?",
                answer:
                  "Yes! You can combine face transformations with voice effects for a complete transformation experience. All effects work together seamlessly.",
              },
              {
                question: "Is my data secure?",
                answer:
                  "Absolutely. All processing happens locally in your browser. We don't store any of your video or audio data. Your privacy is our top priority.",
              },
              {
                question: "What happens after I purchase a plan?",
                answer:
                  "After purchase, you'll receive a license key via email. Simply enter this key in the app to unlock all features. The license is valid for lifetime use.",
              },
              {
                question: "Can I use JhrokeCamera on multiple devices?",
                answer:
                  "Yes! Your license allows you to use JhrokeCamera on multiple devices. Just log in with your account on any supported device.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide 24/7 priority support for all our users. You can reach us through our contact form or direct message on Instagram for quick assistance.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative p-6 bg-gray-900/80 backdrop-blur-xl rounded-2xl h-full flex flex-col border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              Still have questions? We're here to help!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Contact Support
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="mb-6 relative group"
              >
                <img
                  src={Footerlogo}
                  alt="JhrokeCamera Footer Logo"
                  className="w-48 h-auto transform transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-orange-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float" />
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500/20 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </motion.div>
              <p className="text-gray-400 mb-6 text-center md:text-left">
                Transform your video calls with real-time voice effects and
                seamless browser-based calling.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/direct/t/17846796534096069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.tiktok.com/@jhrokecamera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3">
                {["Features", "how-it-works", "Pricing", "Demo"].map(
                  (item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors relative group"
                      >
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a
                    href="#careers"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    to="/privacy"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    Privacy Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    Terms of Service
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Link
                    to="/cookies"
                    className="text-gray-400 hover:text-white transition-colors relative group"
                  >
                    Cookie Policy
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </div>
          <div className=" flex flex-row justify-center items-center w-full mt-10 border-t border-gray-700 pt-4 ">
            <p>
              &copy; {new Date().getFullYear()} JhrokeCamera. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

const App = () => (
  <Routes>
    <Route path="/" element={<MainContent />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/terms" element={<TermsOfService />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/cookies" element={<CookiePolicy />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/voice-changer" element={<VoiceChanger />} />
    <Route path="/live-cam-effects" element={<LiveCamEffects />} />
  </Routes>
);

export default App;
