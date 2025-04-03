"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const Hero01 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      exit={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b rounded-xl from-green-950 to-green-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Text content */}
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.span
              className="inline-block text-slate-300 font-medium mb-2"
              variants={itemVariants}
            >
              Bem-vindo(a) à Fisio T.
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              {/* Fisioterapia - animate from bottom to top */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Fisioterapia{" "}
              </motion.span>

              {/* Concertando - animate from top to bottom */}
              <motion.span
                className="text-green-700"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Concertando{" "}
              </motion.span>

              {/* Para o mundo moderno - just fade in */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                para o mundo moderno.
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-slate-300 text-lg mb-8 max-w-lg"
              variants={itemVariants}
            >
              Experimente soluções de fisioterapia de ponta que combinam
              atendimento especializado com tecnologia inovadora para entregar
              resultados superiores.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link
                href="/services"
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2"
              >
                <span>Veja Especialidades</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 bg-transparent text-white border border-green-600 font-medium rounded-lg hover:bg-green-800 transition-all duration-300"
              >
                Sobre Nós
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Visual element */}
          <motion.div
            className="lg:w-1/2 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative h-[500px] w-full">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Replace with your actual hero image */}
                  <video
                    src="/videos/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    className="object-cover rounded-2xl w-full h-full opacity-70"
                  />
                </div>
              </div>
            </div>

            {/* Floating badges/stats */}
            <motion.div
              className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-600">Clientes Satisfeitos</p>
                  <p className="text-xl font-bold text-slate-900">1,200+</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-5 right-10 bg-white rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-600">Chance de Sucesso</p>
                  <p className="text-xl font-bold text-slate-900">98%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-slate-400 text-sm mb-2">Role para explorar</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-400"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero01;
