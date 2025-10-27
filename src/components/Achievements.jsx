import React from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

const achievements = [
  { 
    title: 'DSA Proficiency (Java)', 
    detail: 'Strong problem solving & OOP, solved 90+ problems on LeetCode & 30+ problems on GeeksforGeeks',
    links: [
      { icon: <SiLeetcode className='text-yellow-400 hover:text-yellow-300 text-2xl transition-all duration-300 hover:scale-110' />, url: 'https://leetcode.com/Dhruvionx/' },
      { icon: <SiGeeksforgeeks className='text-green-400 hover:text-green-300 text-2xl transition-all duration-300 hover:scale-110' />, url: 'https://www.geeksforgeeks.org/user/dhruv252o9e/' }
    ]
  },
  { 
    title: 'Multiple DS Projects', 
    detail: 'Handled and preprocessed datasets: cleaned, transformed, and managed data effectively'  
  },
  { 
    title: 'Data Visualization', 
    detail: 'Built interactive dashboards & visual reports using Python and Power BI' 
  },
  { 
    title: 'Competition Participation', 
    detail: 'Participated in Anand ICE Ideathon and showcased innovative tech ideas' 
  },
]

export default function Achievements(){
  return (
    <section id='achievements' className='py-12'>
      <motion.h2 
        className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg'
        initial={{opacity:0,y:10}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}}
      >
        Achievements
      </motion.h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        {achievements.map((a,i)=>(
          <motion.div 
            key={i} 
            className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 border border-gray-700/50 shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 backdrop-blur-md'
            initial={{scale:0.96, opacity:0}} 
            whileInView={{scale:1, opacity:1}} 
            viewport={{once:true}}
          >
            {/* Heading */}
            <div className='font-semibold text-lg bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]'>
              {a.title}
            </div>

            {/* Description */}
            <div className='text-sm text-gray-400 mt-2 leading-relaxed'>
              {a.detail}
            </div>

            {/* Social icons under DSA section */}
            {a.links && (
              <div className='flex items-center gap-4 mt-4'>
                {a.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
