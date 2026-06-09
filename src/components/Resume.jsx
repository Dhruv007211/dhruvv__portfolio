import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumePath = "/resume.html"; // public folder me

  // Parent Container Variants (For Staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Buttons aur heading ek ke baad ek aayenge
      },
    },
  };

  // Text aur Buttons ke liye entrance animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Buttons ke liye hover aur click (tap) animations
  const buttonHoverTap = {
    hover: {
      scale: 1.05,
      y: -4,
      boxShadow: "0px 0px 30px rgba(217, 70, 239, 0.9), 0px 0px 10px rgba(168, 85, 247, 0.6)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95, y: 0 },
  };

  return (
    <section id="resume" className="relative py-28 overflow-hidden bg-slate-950">
      
      {/* ─── NEW & IMPROVED SMOOTH PREMIUM GLOW BLOBS ─── */}
      {/* Left-Center Glow: Ekdum soft aur smooth edges ke liye blur ki value 150px ki hai */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />
      
      {/* Right-Center Glow */}
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-fuchsia-600/15 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />

      {/* Center Ultra Glow (Heading ke exact peeche) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ─── BACKGROUND NEON CURVES (SMOOTH & ULTRA GLOW) ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-50">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Neon Gradient Definition */}
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="30%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
            
            {/* Super Smooth Glow Filter (stdDeviation ko 12 se badhakar 24 kiya hai smooth curves ke liye) */}
            <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="24" result="blur1" />
              <feGaussianBlur stdDeviation="12" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Curve Line 1 (Main Super Glow) */}
          <path
            d="M-100,150 C300,400 600,0 1100,250 C1300,350 1500,200 1600,150"
            stroke="url(#neonGradient)"
            strokeWidth="6"
            filter="url(#neonGlow)"
            fill="none"
            strokeLinecap="round"
          />

          {/* Curve Line 2 (Subtle Offset Line for depth) */}
          <path
            d="M-50,200 C350,450 550,50 1050,300 C1250,400 1450,250 1550,200"
            stroke="url(#neonGradient)"
            strokeWidth="2"
            strokeDasharray="12 20"
            opacity="0.4"
            fill="none"
          />
        </svg>
      </div>

      {/* ─── CONTENT CONTAINER ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Animated Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
        >
          My Resume
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="mt-3 text-slate-400 max-w-md mx-auto text-sm md:text-base px-4 tracking-wide"
        >
          Check out my professional journey or grab a copy for later.
        </motion.p>

        {/* Buttons Wrapper */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex justify-center gap-6 flex-wrap px-4"
        >
          {/* Open Resume Button */}
          <motion.button
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
            onClick={() => window.open(resumePath, "_blank")}
            className="cursor-pointer px-8 py-3.5 rounded-xl font-bold text-white tracking-wide
            bg-gradient-to-r from-purple-600 to-violet-600
            shadow-[0_0_20px_rgba(147,51,234,0.45)]
            border border-purple-500/30 backdrop-blur-sm"
          >
            Open Resume
          </motion.button>

          {/* Download Resume Button */}
          <motion.a
            href={resumePath}
            download="Dhruv_Singh_Resume.html"
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
            className="cursor-pointer px-8 py-3.5 rounded-xl font-bold text-white tracking-wide
            bg-gradient-to-r from-violet-600 to-fuchsia-600
            shadow-[0_0_20px_rgba(124,58,237,0.45)]
            border border-violet-500/30 text-center backdrop-blur-sm"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}