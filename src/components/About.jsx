import React from 'react';
import { motion } from 'framer-motion';
// Data science aur programming icons code aesthetic enrich karne ke liye
import { Binary, Database, Cpu, Braces, Layers } from 'lucide-react';

export default function About() {
  // Stagger effect pooray container ke content ke liye
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  // Content segments entrance animation
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  // Right Side Data Matrix Cards animations
  const cardHover = {
    hover: {
      y: -6,
      scale: 1.02,
      borderColor: "rgba(34, 211, 238, 0.6)",
      boxShadow: "0px 0px 35px rgba(34, 211, 238, 0.25), 0px 0px 10px rgba(16, 185, 129, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Floating Micro Badges Animations
  const floatingBadgeVariants = (delay = 0) => ({
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6 + Math.random() * 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 0px 25px rgba(34, 211, 238, 0.6)",
      borderColor: "rgba(34, 211, 238, 0.7)",
    }
  });

  const coreSkills = [
    { name: "Data Science / Analytics", tools: "Python, Pandas, NumPy, Matplotlib, Seaborn", level: "90%" },
    { name: "Core Programming", tools: "Java (DSA & OOPs), C", level: "85%" },
    { name: "Domain Interests", tools: "Machine Learning, Data Manipulation", level: "80%" }
  ];

  return (
    <section id='about' className='py-24 relative overflow-hidden bg-slate-950 px-4 md:px-8'>
      
      {/* ─── ULTRA GLOW AMBIENT BACKDROP ─── */}
      <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen" />

      {/* ─── ADVANCED DATA SCIENCE NODES ANIMATION BACKGROUND ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Neon Glow Filters for Data Lines */}
          <defs>
            <filter id="dataGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid Blueprint */}
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34, 211, 238, 0.04)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Animated SVG Data Paths / Regression Curves */}
          <motion.path
            d="M-50,250 Q200,100 500,280 T1200,120 T1600,200"
            stroke="url(#dataGradient1)"
            strokeWidth="2"
            fill="none"
            filter="url(#dataGlow)"
            animate={{ strokeDashoffset: [2000, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            style={{ strokeDasharray: "1200", strokeDashoffset: "0" }}
          />
          <linearGradient id="dataGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </svg>

        {/* Dynamic Pulsing Cluster Nodes (Data Points) */}
        {[...Array(6)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
            style={{
              top: `${20 + idx * 13}%`,
              left: `${15 + idx * 14}%`,
            }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading with Ultra Glow */}
        <motion.h2
          className='text-4xl md:text-5xl font-extrabold text-center tracking-tight
          bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* TWO COLUMN INTERACTIVE LAYOUT */}
        <motion.div 
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* ─── DATA SCIENCE CODING FLOATING BADGES ─── */}
          {/* Badge 1: np.ndarray matrix symbol */}
          <motion.div 
            variants={floatingBadgeVariants(0)} 
            animate="animate" 
            whileHover="hover"
            className="absolute -top-12 left-[15%] cursor-pointer hidden xl:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-900/90 border border-cyan-500/30 text-cyan-400 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.05)]"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>np.ndarray(<span className="text-amber-400">N, D</span>)</span>
          </motion.div>

          {/* Badge 2: pd.DataFrame vector matrix tracker */}
          <motion.div 
            variants={floatingBadgeVariants(1.8)} 
            animate="animate" 
            whileHover="hover"
            className="absolute top-[35%] -left-20 cursor-pointer hidden xl:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.05)]"
          >
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span>df.loc[:, <span className="text-cyan-400">'metrics'</span>]</span>
          </motion.div>

          {/* Badge 3: ML Model Architecture Logic node */}
          <motion.div 
            variants={floatingBadgeVariants(0.8)} 
            animate="animate" 
            whileHover="hover"
            className="absolute bottom-8 left-[35%] cursor-pointer hidden xl:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-900/90 border border-teal-500/30 text-teal-300 backdrop-blur-md shadow-[0_0_20px_rgba(45,212,191,0.05)]"
          >
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>model.fit(X, y)</span>
          </motion.div>

          {/* LEFT COLUMN: PROFESSIONAL STORY */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div variants={itemVariants} className="border-l-2 border-cyan-500 pl-4 md:pl-6 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 tracking-wide drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Transforming Raw Data into Business Intelligence
              </h3>
              <p className='text-slate-300 text-base md:text-lg leading-relaxed text-left'>
                I am an aspiring <span className="text-cyan-400 font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]">Data Scientist</span> with 
                a strong passion for turning messy, complex data structures into highly structured, actionable insights. 
                My core expertise spans across <span className="text-emerald-400 font-medium drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">data analysis, manipulation, and statistical visualization</span> using the modern Python stack.
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className='text-slate-400 text-sm md:text-base leading-relaxed text-left pl-0 md:pl-6'>
              Beyond analytics, I possess a rock-solid foundation in software engineering fundamentals including <span className="text-teal-400">Java (Data Structures & OOPs)</span> and procedural programming in C. This dual perspective allows me to write optimized, production-ready analysis scripts rather than just scratchpads.
            </motion.p>

            {/* Lifestyle & Balance Sub-cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 pl-0 md:pl-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm transition-all hover:border-cyan-500/20">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider block mb-1">🎯 SPORTS & FITNESS</span>
                <p className="text-xs md:text-sm text-slate-400 leading-normal">
                  Active cricket player and fitness enthusiast. Keeping my lifestyle active keeps my decision-making sharp under crunch situations.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm transition-all hover:border-emerald-500/20">
                <span className="text-emerald-400 text-sm font-semibold tracking-wider block mb-1">🎧 CREATIVE DRIVE</span>
                <p className="text-xs md:text-sm text-slate-400 leading-normal">
                  Music is my parallel escape. It boosts my problem-solving stamina and channels focus when grinding through complex logic sheets.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: ADVANCED TECHNICAL MATRIX ARCHITECTURE */}
          <div className="lg:col-span-5 space-y-6 relative">
            
            {/* Badge 4: Data visualization (Matplotlib replacement) */}
            <motion.div 
              variants={floatingBadgeVariants(2.5)} 
              animate="animate" 
              whileHover="hover"
              className="absolute -top-8 -right-4 cursor-pointer hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono rounded-xl bg-slate-900/90 border border-cyan-500/20 text-cyan-300 backdrop-blur-sm"
            >
              <Binary className="w-3 h-3 text-cyan-400" />
              <span>plt.plot(<span className="text-rose-400">kind='bar'</span>)</span>
            </motion.div>

            {/* Badge 5: Core Engineering / Data Architecture syntax */}
            <motion.div 
              variants={floatingBadgeVariants(1.2)} 
              animate="animate" 
              whileHover="hover"
              className="absolute -bottom-8 -left-8 cursor-pointer hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono rounded-xl bg-slate-900/90 border border-emerald-500/20 text-emerald-300 backdrop-blur-sm"
            >
              <Braces className="w-3 h-3 text-emerald-400" />
              <span>{`{ Map<K, V> }`}</span>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 backdrop-blur-md shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full filter blur-xl pointer-events-none" />
              
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                Technical Competence Grid
              </h4>

              <div className="space-y-6">
                {coreSkills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    variants={cardHover}
                    whileHover="hover"
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 cursor-default transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <h5 className="text-sm md:text-base font-bold text-slate-200 tracking-wide">
                        {skill.name}
                      </h5>
                      <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-900/40 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 font-medium">
                      {skill.tools}
                    </p>

                    {/* Animated Skill Loading Engine with Glow */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3.5 overflow-hidden shadow-inner">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Quote inside matrix */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 text-center">
                <p className="text-xs italic text-slate-500">
                  "Continuous deployment of personal growth & technical expertise."
                </p>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}