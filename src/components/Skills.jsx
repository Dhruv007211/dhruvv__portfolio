import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaDatabase,
  FaChartBar,
  FaWater,
  FaSitemap,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaCode,
  FaTerminal,
  FaBrain,
  FaLock,
  FaBriefcase,
  FaCrown,
  FaMicrochip,
  FaSearch,
  FaLayerGroup,
  FaFont,
  FaLink,
  FaBuffer,
  FaHashtag,
  FaSyncAlt,
  FaTree,
  FaNetworkWired
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiScikitlearn,
  SiTableau,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const dsaMastery = [
  { title: "Languages", skills: ["Java"], icons: [<FaJava className="text-orange-400 animate-pulse" />] },
  { title: "Searching & Sorting", skills: ["Linear & Binary Search", "Bubble, Selection & Insertion Sort", "Merge Sort"], icons: [<FaSearch className="text-amber-400" />] },
  { title: "Array Techniques", skills: ["Two Pointer", "Sliding Window", "Prefix Sum", "Binary Search", "Fast Slow Pointer", "Kadane Algorithm", "Dutch National Flag"], icons: [<FaLayerGroup className="text-blue-400" />] },
  { title: "Bit Manipulation", skills: ["Bitwise Ops (AND, OR, XOR, NOT)", "Get/Set/Clear/Update Bits", "Count Set Bits (Kernighan's)", "Power of 2 & Subsets", "Find Unique Element"], icons: [<FaMicrochip className="text-emerald-400 animate-pulse" />] },
  { title: "String Mastery", skills: ["Pattern Matching", "KMP Algorithm", "Rabin-Karp Algorithm"], icons: [<FaFont className="text-purple-400" />] },
  { title: "Linked List", skills: ["Reverse LL", "Cycle Detection", "Merge LL", "Fast Slow Pointer"], icons: [<FaLink className="text-teal-400" />] },
  { title: "Stack & Queue", skills: ["Monotonic Stack", "Next Greater Element", "Histogram", "Deque", "Circular Queue"], icons: [<FaBuffer className="text-pink-400" />] },
  { title: "Hashing & Hashing Sets", skills: ["HashMap", "HashSet"], icons: [<FaHashtag className="text-red-400" />] },
  { title: "Recursion & Backtracking", skills: ["Recursion", "Backtracking"], icons: [<FaSyncAlt className="text-indigo-400" />] },
  { title: "Trees & Heaps", skills: ["DFS & BFS", "Diameter & LCA", "BST", "Priority Queue", "Top K"], icons: [<FaTree className="text-emerald-500" />] },
  { title: "Graph", skills: ["BFS", "DFS", "Topological Sort", "Dijkstra", "Union Find"], icons: [<FaNetworkWired className="text-cyan-400" />] },
];

const dataScienceMastery = [
  { title: "Languages", skills: ["Python", "SQL"], icons: [<FaPython className="text-yellow-400" />, <FaDatabase className="text-blue-400" />] },
  { title: "Libraries", skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"], icons: [<SiNumpy className="text-blue-400" />, <SiPandas className="text-pink-400" />, <FaChartBar className="text-orange-400" />, <FaWater className="text-cyan-400" />, <SiScikitlearn className="text-orange-500" />] },
  { title: "Tools Ecosystem", skills: ["Jupyter Notebook", "VS Code", "Tableau", "MySQL Workbench", "Git", "GitHub"], icons: [<SiJupyter className="text-orange-400" />, <VscVscode className="text-blue-400" />, <SiTableau className="text-blue-500" />, <SiMysql className="text-blue-600" />, <FaGitAlt className="text-orange-600" />, <FaGithub className="text-white" />] },
  { title: "Core Concepts", skills: ["EDA (Exploratory Data Analysis)", "Data Cleaning", "Feature Engineering", "Data Visualization", "Machine Learning Lifecycle", "Model Evaluation"], icons: [<FaBrain className="text-purple-400" />] },
  { title: "ML Algorithms", skills: ["Linear Regression", "Logistic Regression", "Decision Tree", "Random Forest", "K-Nearest Neighbors (KNN)", "Support Vector Machines (SVM)", "Clustering Algorithms"], icons: [<FaTerminal className="text-zinc-400" />] },
];

const timelineJourney = [
  { level: "LVL 01", date: "2024", title: "The Genesis", desc: "Entered the tech domain. Initialized terminal setups and basic computational workflows.", icon: <FaTerminal />, status: "unlocked", color: "border-zinc-500", glow: "shadow-[0_0_15px_rgba(113,113,122,0.3)] text-zinc-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" },
  { level: "LVL 02", date: "Early 2025", title: "Compilation Core", desc: "Wrote the first line of code in C. Mastered structural execution paradigms, syntax, and memory pointers.", icon: <FaCode />, status: "unlocked", color: "border-amber-500", glow: "shadow-[0_0_15px_rgba(245,158,11,0.3)] text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" },
  { level: "LVL 03", date: "Mid 2025", title: "Data Paradigm Shift", desc: "Stepped into Data Science. Acquired foundational Python concepts, statistical models, and EDA.", icon: <FaChartBar />, status: "unlocked", color: "border-cyan-500", glow: "shadow-[0_0_15px_rgba(6,182,212,0.3)] text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" },
  { level: "LVL 04", date: "Late 2025", title: "Algorithmic Ascent", desc: "Immersed deeply into DSA. Cracked array patterns, matrix algorithms, and optimized complex logic maps.", icon: <FaSitemap />, status: "unlocked", color: "border-emerald-500", glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)] text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" },
  { level: "LVL 05", date: "Early 2026", title: "Relational Queries", desc: "Integrated structured storage capabilities. Mastered advanced SQL schemas and relational database designs.", icon: <FaDatabase />, status: "unlocked", color: "border-blue-500", glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)] text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" },
  { level: "LVL 06", date: "Mid 2026", title: "Visual Analytics", desc: "Adopted Tableau deployment layers. Transformed backend metrics into commercial grade visual matrices.", icon: <SiTableau />, status: "unlocked", color: "border-indigo-500", glow: "shadow-[0_0_15px_rgba(99,102,241,0.3)] text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" },
  { level: "LVL 07", date: "Late 2026", title: "ML Mastery Node", desc: "Predictive neural systems integration. Deploying continuous pipeline lifecycle matrices.", icon: <FaBrain />, status: "locked", color: "border-red-500/20", glow: "text-zinc-500" },
  { level: "QUEST 08", date: "Coming Soon", title: "The Internship Quest", desc: "Targeting enterprise sandboxes to pressure test system architectures against production workloads.", icon: <FaBriefcase />, status: "locked", color: "border-red-500/20", glow: "text-zinc-500" },
  { level: "FINAL BOSS", date: "Coming Soon", title: "The Ultimate Job", desc: "Securing full stack analytical operational control. Enterprise engineering clearance.", icon: <FaCrown />, status: "locked", color: "border-red-500/20", glow: "text-zinc-500" },
];

function UnifiedSpiderMap() {
  const nodes = [
    { name: "Logic & Structs", x: 50, y: -16, anchor: "middle" },
    { name: "ML Lifecycle", x: 115, y: 22, anchor: "start" },
    { name: "Data Pipelines", x: 115, y: 78, anchor: "start" },
    { name: "Optimization", x: 50, y: 116, anchor: "middle" },
    { name: "Algo Analysis", x: -15, y: 78, anchor: "end" },
    { name: "Math & Search", x: -15, y: 22, anchor: "end" },
  ];

  return (
    <div className="w-full max-w-[460px] aspect-square mx-auto mb-16 relative flex items-center justify-center group/radar bg-transparent rounded-3xl p-6">
      <svg viewBox="-65 -30 230 160" className="w-full h-full transition-transform duration-500 ease-out group-hover/radar:scale-[1.01]">
        <defs>
          <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="none" stroke="#27272a" strokeWidth="0.8" />
        <polygon points="50,16 82,35 82,65 50,84 18,65 18,35" fill="none" stroke="#1f1f23" strokeWidth="0.6" strokeDasharray="2" />
        <polygon points="50,33 72,45 72,55 50,67 28,55 28,45" fill="none" stroke="#18181b" strokeWidth="0.6" />
        
        <line x1="50" y1="0" x2="50" y2="100" stroke="#27272a" strokeWidth="0.6" />
        <line x1="7" y1="25" x2="93" y2="75" stroke="#27272a" strokeWidth="0.6" />
        <line x1="7" y1="75" x2="93" y2="25" stroke="#27272a" strokeWidth="0.6" />

        <motion.polygon 
          points="50,8 84,33 70,64 50,90 20,70 14,32" 
          fill="rgba(16,185,129,0.06)"
          stroke="#10b981"
          strokeWidth="1.8"
          filter="url(#glow-green)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.polygon 
          points="50,20 91,27 86,72 50,76 34,62 24,36" 
          fill="rgba(6,182,212,0.06)"
          stroke="#06b6d4"
          strokeWidth="1.8"
          filter="url(#glow-cyan)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.1, ease: "easeInOut" }}
        />

        {nodes.map((node, i) => (
          <text 
            key={i} 
            x={node.x} 
            y={node.y} 
            textAnchor={node.anchor} 
            className="text-[4.2px] font-black fill-zinc-300 tracking-wider uppercase transition-colors duration-200 group-hover/radar:fill-white"
          >
            {node.name}
          </text>
        ))}
      </svg>

      <div className="absolute w-2.5 h-2.5 rounded-full bg-black border border-white/30 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
      </div>

      <div className="absolute bottom-[-16px] flex gap-5 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/[0.08] text-[10px] tracking-widest font-black">
        <span className="flex items-center gap-2 text-green-400 drop-shadow-[0_0_6px_rgba(16,185,129,0.5)]">
          <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#10b981]" /> DSA
        </span>
        <span className="flex items-center gap-2 text-cyan-400 drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]">
          <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" /> DATA SCIENCE
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent min-h-screen text-white flex flex-col justify-center relative overflow-hidden">
      
      {/* ================= HEADER SECTION (GLOW GRADIENT) ================= */}
      <div className="text-center mb-14 relative z-10">
        <span className="text-xs font-bold tracking-[0.4em] text-emerald-400 uppercase block mb-3 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
          Capabilities Matrix
        </span>
        <motion.h2
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-500 text-transparent bg-clip-text tracking-tight uppercase drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
      </div>

      {/* ================= RADAR VISUALIZER ================= */}
      <div className="relative z-10 mb-20 px-6">
        <UnifiedSpiderMap />
      </div>

      {/* ================= TECH SKILLS SHEETS ================= */}
      <div className="px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 relative z-10 mb-32">
        
        {/* CARD 1: DSA MASTERY */}
        <motion.div 
          className="p-8 md:p-12 rounded-3xl bg-transparent border border-white/[0.06] shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative overflow-hidden group/card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01, borderColor: "rgba(34,197,94,0.35)", boxShadow: "0_0_30px_rgba(16,185,129,0.12)" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <h3 className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-8 flex items-center gap-3">
            <FaSitemap className="text-green-400 text-3xl drop-shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse" />
            DSA MASTERY
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {dsaMastery.map((section, idx) => (
              <div key={idx} className="space-y-2.5">
                <span className="text-xs font-black text-green-400/80 uppercase tracking-[0.2em] flex items-center gap-2 border-b border-zinc-900 pb-1.5 group-hover/card:border-green-500/20 transition-colors duration-500">
                  {section.icons && section.icons[0] && section.title !== "Languages" && (
                    <span className="text-sm">{section.icons[0]}</span>
                  )}
                  {section.title}
                </span>
                <ul className="text-sm text-zinc-400 space-y-1.5 pl-1">
                  {section.skills.map((skill, sIdx) => {
                    let matchedIcon = (section.title === "Languages" && section.icons) ? section.icons[sIdx] : null;
                    return (
                      <li key={sIdx} className="hover:text-green-300 transform hover:translate-x-2 transition-all duration-200 flex items-center gap-2 cursor-default">
                        {matchedIcon ? (
                          <span className="text-base flex-shrink-0">{matchedIcon}</span>
                        ) : (
                          <span className="inline-block w-1 h-1 bg-green-500 rounded-full flex-shrink-0 shadow-[0_0_4px_#10b981]" />
                        )}
                        <span className="truncate font-medium tracking-wide">{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CARD 2: DATA SCIENCE */}
        <motion.div 
          className="p-8 md:p-12 rounded-3xl bg-transparent border border-white/[0.06] shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative overflow-hidden group/card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01, borderColor: "rgba(6,182,212,0.35)", boxShadow: "0_0_30px_rgba(6,182,212,0.12)" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <h3 className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 mb-8 flex items-center gap-3">
            <FaChartBar className="text-cyan-400 text-3xl drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] animate-pulse" />
            DATA SCIENCE
          </h3>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {dataScienceMastery.map((section, idx) => (
              <div key={idx} className="space-y-2.5">
                <span className="text-xs font-black text-cyan-400/80 uppercase tracking-[0.2em] flex items-center gap-2 border-b border-zinc-900 pb-1.5 group-hover/card:border-cyan-500/20 transition-colors duration-500">
                  {section.icons && section.icons[0] && section.title !== "Languages" && section.title !== "Libraries" && section.title !== "Tools Ecosystem" && (
                    <span className="text-sm">{section.icons[0]}</span>
                  )}
                  {section.title}
                </span>
                <ul className="text-sm text-zinc-400 space-y-1.5 pl-1">
                  {section.skills.map((skill, sIdx) => {
                    let matchedIcon = (section.title === "Languages" || section.title === "Libraries" || section.title === "Tools Ecosystem") && section.icons ? section.icons[sIdx] : null;
                    return (
                      <li key={sIdx} className="hover:text-cyan-300 transform hover:translate-x-2 transition-all duration-200 flex items-center gap-2 cursor-default">
                        {matchedIcon ? (
                          <span className="text-base flex-shrink-0">{matchedIcon}</span>
                        ) : (
                          <span className="inline-block w-1 h-1 bg-cyan-500 rounded-full flex-shrink-0 shadow-[0_0_4px_#06b6d4]" />
                        )}
                        <span className="truncate font-medium tracking-wide">{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= GAMIFIED QUEST ROADMAP SYSTEM ================= */}
      <div className="max-w-4xl mx-auto w-full px-6 relative z-10">
        
        {/* Journey Headers (GLOW WAR GRADIENT) */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.4em] text-red-500 uppercase block mb-3 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">
            Campaign Progress
          </span>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            The Tech Quest Roadmap
          </h3>
        </div>

        {/* Gamified Map Timeline Layout */}
        <div className="relative border-l-2 border-dashed border-zinc-800 ml-4 md:ml-32 space-y-12">
          
          {timelineJourney.map((step, index) => {
            const isLocked = step.status === "locked";
            return (
              <motion.div 
                key={index}
                className="relative pl-8 group/node"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                
                {/* Left Side Static Level Indicator */}
                <div className={`absolute left-[-110px] top-1 text-[11px] font-black tracking-widest uppercase text-right w-20 hidden md:block transition-colors duration-300 ${
                  isLocked ? "text-red-500/30 group-hover/node:text-red-500/50" : "text-zinc-500 group-hover/node:text-white"
                }`}>
                  {step.level}
                </div>

                {/* Neon Glowing Checkpoint Pins */}
                <div className={`absolute left-[-11px] top-1.5 w-5 h-5 rounded-full bg-black border-2 transition-all duration-300 group-hover/node:scale-125 ${step.color} ${
                  !isLocked ? step.glow.split(" ")[0] : "shadow-[0_0_8px_rgba(239,68,68,0.1)]"
                } flex items-center justify-center z-20`}>
                  {isLocked ? (
                    <FaLock className="text-[7px] text-red-500/40 group-hover/node:text-red-500 transition-colors animate-pulse" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-white group-hover/node:animate-ping" />
                  )}
                </div>

                {/* Mission Level Glowing Content Modules */}
                <div className={`p-6 rounded-2xl border transition-all duration-500 ${
                  isLocked 
                    ? "bg-gradient-to-br from-red-950/[0.02] to-transparent border-red-950/40 opacity-40 filter blur-[0.2px] hover:opacity-60" 
                    : "bg-transparent border-white/[0.04] hover:bg-white/[0.01] group-hover/node:border-white/[0.12]"
                }`}
                style={!isLocked ? { boxShadow: "inset 0 0 20px rgba(255,255,255,0.01)" } : {}}
                >
                  
                  {/* Header parameters */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xl transition-transform duration-300 group-hover/node:scale-110 ${!isLocked ? step.glow.split(" ").slice(1).join(" ") : "text-zinc-600"}`}>
                        {step.icon}
                      </span>
                      <h4 className={`text-lg font-black tracking-wide uppercase transition-all duration-300 ${
                        isLocked 
                          ? "text-zinc-600 tracking-widest" 
                          : `${step.glow.split(" ").slice(1).join(" ")} text-white`
                      }`}>
                        {step.title}
                      </h4>
                    </div>
                    
                    {/* Glowing Date Badges */}
                    <span className={`text-xs font-mono font-bold tracking-widest px-3 py-0.5 rounded-md border transition-all duration-300 ${
                      isLocked 
                        ? "text-red-900/50 border-red-950/40 bg-transparent" 
                        : "text-white border-white/[0.1] bg-white/[0.02] shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                    }`}>
                      {step.date}
                    </span>
                  </div>

                  {/* Operational Subtext */}
                  <p className={`text-sm font-medium leading-relaxed max-w-2xl transition-colors duration-300 ${
                    isLocked ? "text-zinc-600 font-normal" : "text-zinc-400 group-hover/node:text-zinc-300"
                  }`}>
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}