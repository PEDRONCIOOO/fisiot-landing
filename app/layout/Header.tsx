"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Nunito } from "next/font/google"; // Adding a readable font

// Load Nunito font - highly readable across age groups
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active link based on current path when component mounts
    setActiveLink(window.location.pathname);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { text: "Início", href: "/" },
    { text: "Sobre", href: "/about" },
    { text: "Especialidade", href: "/services" },
    { text: "Contato", href: "/contact" },
  ];

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <motion.header
      className={`fixed w-full max-w-[1200px] left-1/2 transform -translate-x-1/2 z-50 ${nunito.className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`w-full rounded-xl transition-all duration-500 ${
          isScrolled
            ? "bg-white rounded-xl shadow-md py-2"
            : "bg-transparent py-4"
        }`}
        animate={{
          backgroundColor: isScrolled ? "#ffffff" : "transparent",
          boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <span className="sr-only">FisioT</span>
              <div className="w-32 h-10 relative">
                <Image
                  src="/FTLOGO.png"
                  alt="FisioT Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered with stagger effect */}
          <motion.nav
            className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-green-600 font-medium py-2 px-1 text-[1.05rem] tracking-wide"
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.text}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Contact Button on Desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold text-[1.05rem]"
            >
              Ligue Agora
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation with improved stagger effect */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg rounded-b-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <motion.nav
                className="flex flex-col space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-800 hover:text-green-600 py-2 font-medium block text-[1.1rem]"
                      onClick={() => {
                        setActiveLink(link.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <Link
                    href="/contact"
                    className="bg-green-600 text-white px-5 py-3 rounded-full hover:bg-green-700 transition-colors inline-block text-center font-semibold text-[1.05rem]"
                  >
                    Ligue Agora
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
