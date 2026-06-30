import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { FaTerminal } from 'react-icons/fa'

const projects = [
  { 
    title: 'Apple Inc. 10-Year Sales Trend Analysis', 
    desc: 'Analyzed 10 years of Apple sales data to identify key trends, visualize growth, and forecast future sales.', 
    tech: ['Python','Pandas','NumPy','Matplotlib','Seaborn'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: null
  },
  { 
    title: 'Retail Sales Data Cleaning and Visualization', 
    desc: 'Performed data cleaning, preprocessing, and visualized retail sales data for actionable insights.', 
    tech: ['Python','NumPy','Pandas','Seaborn','Matplotlib'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    link: null
  },
  { 
    title: 'Zomato Data Analysis & Visualization', 
    desc: 'Analyzed Zomato restaurant dataset to understand user preferences, trends, and visualized cuisine & ratings.', 
    tech: ['Python','Pandas','Matplotlib','Seaborn'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MS Excel', 'VS Code', 'Jupyter Notebook'],
    link: null
  },
 {
  title: 'Heart Disease Analytics Dashboard',
  desc: 'Developed an interactive healthcare analytics platform using MySQL, Tableau, SQL, Python, and Flask. The project includes SQL-based data analysis, KPI cards, interactive dashboards, Tableau Story, and responsive web integration for visualizing heart disease trends and supporting data-driven healthcare decisions.',
  tech: ['Tableau', 'MySQL', 'SQL', 'Python', 'Flask'],
  tools: [
    'Tableau',
    'MySQL',
    'Flask',
    'Python',
    'SQL',
    'VS Code',
    'Git',
    'GitHub',
    'Render'
  ],
  link: 'https://heart-analysis-2.onrender.com'
},
]

export default function Projects(){
  return (
    // 🔴 यहाँ id='projects' पहले से मौजूद है, जो जार्विस वॉयस कमांड के स्क्रॉल को सीधा यहाँ लाएगा
    <section id='projects' className='py-24 bg-transparent relative overflow-hidden'>
      
      {/* ================= MAIN HEADING (PURPLE TO BLUE-PINK GLOW) ================= */}
      <div className='text-center mb-16 relative z-10'>
        <span className='text-xs font-bold tracking-[0.4em] text-purple-400 uppercase block mb-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]'>
          Deployment Log
        </span>
        <motion.h2 
          className='text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text tracking-tight uppercase drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]'
          initial={{ opacity: 0, scale: 0.98 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Operations
        </motion.h2>
      </div>

      {/* ================= PROJECT CARDS MATRIX (PURPLE & BLUE & YELLOW AURA) ================= */}
      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto relative z-10'>
        {projects.map((p, i) => (
          <motion.article 
            key={i} 
            className='p-8 rounded-3xl bg-gradient-to-br from-gray-900/40 via-zinc-950/60 to-black/40 border border-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.05)] relative overflow-hidden group/project'
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01, 
              borderColor: "rgba(168,85,247,0.4)", 
              boxShadow: "0_0_30px_rgba(59,130,246,0.15), 0_0_50px_rgba(168,85,247,0.1)" 
            }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: i * 0.05 }} 
          >
            {/* Ambient Inner Tech Mask */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-transparent to-blue-500/[0.02] pointer-events-none" />

            {/* Title Block */}
            <div className='flex items-start justify-between gap-4 mb-3'>
              <div className='font-black text-xl bg-gradient-to-r from-purple-300 via-pink-400 to-yellow-200 bg-clip-text text-transparent tracking-wide uppercase group-hover/project:from-purple-400 group-hover/project:to-yellow-400 transition-all duration-300'>
                {p.title}
              </div>
              <FaTerminal className="text-purple-500/40 group-hover/project:text-yellow-400/70 transition-colors duration-300 mt-1 flex-shrink-0" />
            </div>

            {/* Description Subtext */}
            <p className='text-sm text-zinc-400 font-medium leading-relaxed mb-6 group-hover/project:text-zinc-200 transition-colors duration-300'>
              {p.desc}
            </p>

            <div className='space-y-4 border-t border-purple-950/30 pt-4 group-hover/project:border-purple-500/20 transition-colors duration-500'>
              {/* Tech Stack Badges (Blue/Purple hints) */}
              <div className='flex flex-wrap items-center gap-2'>
                <span className='text-xs font-black text-purple-400/60 uppercase tracking-wider mr-1'>Tech:</span>
                {p.tech.map((t, idx) => (
                  <span key={idx} className='text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-purple-950/10 border border-purple-500/10 text-purple-300 cursor-default hover:text-white hover:border-blue-500/40 transition-all'>
                    {t}
                  </span>
                ))}
              </div>

              {/* Tools Badges (Yellow/Zinc contrast) */}
              <div className='flex flex-wrap items-center gap-2'>
                <span className='text-xs font-black text-yellow-500/60 uppercase tracking-wider mr-1'>Tools:</span>
                {p.tools.map((tool, idx) => (
                  <span key={idx} className='text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-zinc-900/40 border border-zinc-800 text-zinc-400 cursor-default hover:text-yellow-200 hover:border-yellow-500/30 transition-all'>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Project Action Link (Glowing Yellow/Pink Blast) */}
            {p.link && (
              <div className="mt-6 pt-2">
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.2)] hover:from-purple-600 hover:to-yellow-500 hover:text-black hover:border-transparent transition-all duration-300"
                >
                  <FiExternalLink className='text-sm stroke-[2.5]' /> Live Deployment
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}