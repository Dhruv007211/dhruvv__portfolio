import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

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
    title: 'Mini Data Analyst – Automated Data Manipulation & Analysis', 
    desc: 'Automatically cleans, manipulates, and analyzes datasets, generating instant insights and visual reports.', 
    tech: ['Python','Pandas','NumPy','Matplotlib','Seaborn'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit/Flask', 'MS Excel', 'VS Code', 'Jupyter Notebook'],
    link: 'https://mini-data-analyst-1.onrender.com'
  },
]

export default function Projects(){
  return (
    <section id='projects' className='py-12'>
      {/* Heading */}
      <motion.h2 
        className='text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg'
        initial={{opacity:0, y:10}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        {projects.map((p,i)=>(
          <motion.article 
            key={i} 
            className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 border border-gray-700/50 shadow-[0_0_10px_rgba(255,0,255,0.15)] hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all duration-300 backdrop-blur-md'
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            transition={{delay:i*0.1, duration:0.4}} 
            viewport={{once:true}}
          >
            {/* Title */}
            <div className='font-semibold text-lg bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(255,0,255,0.3)]'>
              {p.title}
            </div>

            {/* Description */}
            <div className='text-sm text-gray-400 mt-2 leading-relaxed'>
              {p.desc}
            </div>

            {/* Tech Stack */}
            <div className='text-xs text-gray-500 mt-3'>
              <b className='text-gray-300'>Tech:</b> {p.tech.join(' • ')}
            </div>

            {/* Tools */}
            <div className='text-xs text-gray-500 mt-1'>
              <b className='text-gray-300'>Tools:</b> {p.tools.join(' • ')}
            </div>

            {/* Live Project Link */}
            {p.link && (
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-400 text-sm mt-3 inline-flex items-center gap-1 hover:text-pink-300 transition-all"
              >
                <FiExternalLink className='inline-block' /> Live Project
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
