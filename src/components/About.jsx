import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id='about' className='py-12 relative'>
      {/* Section Heading */}
      <motion.h2
        className='text-3xl font-bold text-center 
        bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-500 
        bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Intro Paragraph */}
      <motion.p
        className='mt-6 text-gray-200 max-w-4xl mx-auto text-justify leading-relaxed'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        I am an aspiring <span className="text-cyan-400 font-semibold">Data Scientist</span> with a strong passion for turning messy and complex data into meaningful insights. 
        My expertise lies in <span className="text-emerald-400">data analysis, manipulation, and visualization</span> using Python (Pandas, NumPy, Matplotlib, Seaborn), 
        along with solid foundations in Java (DSA & OOP) and C. I enjoy exploring new technologies and solving challenging problems.
      </motion.p>

      {/* Personal Interests */}
      <motion.div
        className='mt-8 max-w-4xl mx-auto text-gray-200 space-y-3 text-justify leading-relaxed'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>
          Outside of technology, I am an active <span className="text-cyan-400">sports enthusiast</span>. I enjoy playing cricket, focusing on fitness routines, 
          and maintaining a healthy lifestyle. Music is another passion of mine that keeps me inspired and focused. 
        </p>

        <p>
          I also love exploring <span className="text-emerald-400">new technical domains</span> and learning modern tools in Data Science, keeping my curiosity alive and skills sharp.
        </p>

        <p>
          I believe that balancing <span className="text-cyan-300">personal growth</span> and <span className="text-teal-400">technical learning</span> helps me stay creative, productive, and motivated in every aspect of life.
        </p>
      </motion.div>

      {/* Floating Aqua Glow Orbs */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='w-6 h-6 rounded-full absolute bg-gradient-to-br from-cyan-400 to-teal-500 blur-md'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], x: [0, 10, -10, 0] }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}
