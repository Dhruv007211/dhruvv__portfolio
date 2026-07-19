import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  // ⚡ PERMANENT FIX: तुम्हारी नई फाइल 'REsume.pdf' के नाम के हिसाब से पाथ सेट कर दिया है
  // साथ ही डायनेमिक टाइमस्टैम्प भी लगा दिया है ताकि फोन और लैपटॉप पर हमेशा तुरंत अपडेट हो
  const getFreshResumePath = () => `/REsume.pdf?t=${new Date().getTime()}`;

  // 1️⃣ Main Layout Stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  // 2️⃣ Text Reveal
  const textVariants = {
    hidden: { opacity: 0, y: -30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  // 3️⃣ Premium Horizontal Expand for Buttons
  const buttonRevealVariants = {
    hidden: { opacity: 0, scaleX: 0.4, scaleY: 0.85, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 140, damping: 16 },
    },
  };

  // 4️⃣ Button Hover & Cyber Glow Effects
  const buttonHoverTap = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow:
        "0px 0px 35px rgba(147, 51, 234, 0.75), 0px 0px 15px rgba(219, 39, 119, 0.4)",
      textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 12 },
    },
    tap: { scale: 0.96, y: 0 },
  };

  // 5️⃣ Infinite Floating Cycle for Data Science Background Elements
  const floatingAnimation = (delay = 0, duration = 6) => ({
    animate: {
      y: [0, -18, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section id="resume" className="relative py-32 overflow-hidden bg-slate-950 select-none">
      
      {/* 🌌 --- DATA SCIENCE BACKGROUND FLOATING MATRIX --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[140px] mix-blend-screen" />

        <motion.div 
          variants={floatingAnimation(0, 7)} 
          animate="animate"
          className="absolute top-16 left-[12%] text-purple-500/20 font-mono text-xs border border-purple-500/10 p-3 rounded-xl bg-purple-950/5 shadow-[0_0_20px_rgba(147,51,234,0.05)]"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-purple-400/40 font-bold">CLUSTER_NODE_01</span>
          </div>
          <div>μ = 0.66 | σ² = 0.15</div>
          <div>loss: 0.0234</div>
        </motion.div>

        <motion.div 
          variants={floatingAnimation(2, 8)} 
          animate="animate"
          className="absolute bottom-20 right-[10%] text-fuchsia-500/20 font-mono text-xs border border-fuchsia-500/10 p-3 rounded-xl bg-fuchsia-950/5 shadow-[0_0_20px_rgba(217,70,239,0.05)]"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
            <span className="text-fuchsia-400/40 font-bold">MODEL_TRAIN_OPTIM</span>
          </div>
          <div>epochs: 180 / 3000+</div>
          <div>accuracy: 98.4%</div>
        </motion.div>

        <motion.div 
          variants={floatingAnimation(1, 6.5)}
          animate="animate"
          className="absolute top-1/2 left-[8%] opacity-20 w-24 h-16 border-b-2 border-l-2 border-slate-700/40 flex items-end"
        >
          <svg className="w-full h-full text-indigo-500/30" viewBox="0 0 100 50">
            <path d="M0,50 Q25,0 50,25 T100,0" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
          </svg>
          <span className="absolute -top-4 left-2 text-[10px] font-mono text-slate-600">f(x) weight</span>
        </motion.div>

        <motion.div 
          variants={floatingAnimation(3, 5)} 
          animate="animate"
          className="absolute top-1/3 right-[15%] w-3 h-3 bg-indigo-500/30 rounded-full blur-[1px] shadow-[0_0_12px_#6366f1]"
        />
        <motion.div 
          variants={floatingAnimation(0.5, 9)} 
          animate="animate"
          className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-purple-500/40 rounded-full blur-[1px] shadow-[0_0_10px_#a855f7]"
        />
      </div>

      {/* 💠 --- MAIN CONTENT LAYER --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <motion.h2
          variants={textVariants}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        >
          My Resume
        </motion.h2>

        <motion.p
          variants={textVariants}
          className="mt-4 text-slate-400 text-lg max-w-md mx-auto tracking-wide"
        >
          Check out my professional journey or download my resume.
        </motion.p>

        <motion.div className="mt-14 flex justify-center gap-6 flex-wrap items-center">
          
          {/* OPEN RESUME */}
          <motion.a
            href={getFreshResumePath()}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            variants={buttonRevealVariants}
            whileHover={buttonHoverTap.hover}
            whileTap={buttonHoverTap.tap}
            className="px-9 py-4 rounded-xl font-bold text-white tracking-wide
            bg-gradient-to-r from-purple-600 to-violet-600
            shadow-[0_0_25px_rgba(147,51,234,0.35)]
            border border-purple-500/40 cursor-pointer transition-colors duration-200"
          >
            Open Resume
          </motion.a>

          {/* DOWNLOAD RESUME */}
          <motion.a
            href={getFreshResumePath()}
            download="Dhruv_Singh_Resume.pdf"
            variants={buttonRevealVariants}
            whileHover={buttonHoverTap.hover}
            whileTap={buttonHoverTap.tap}
            className="px-9 py-4 rounded-xl font-bold text-white tracking-wide
            bg-gradient-to-r from-violet-600 to-fuchsia-600
            shadow-[0_0_25px_rgba(124,58,237,0.35)]
            border border-violet-500/40 cursor-pointer transition-colors duration-200"
          >
            Download Resume
          </motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}