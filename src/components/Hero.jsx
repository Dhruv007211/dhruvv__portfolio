import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden'>

      {/* Floating Glow Orbs (soft blue ambience) */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full pointer-events-none'
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-24 h-24 rounded-full blur-3xl bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-500 opacity-40'
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 15, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Profile Image */}
      <motion.img
        src='/profile.jpg'
        alt='Dhruv Singh'
        className='w-40 h-40 rounded-full border-4 border-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.6)] object-cover hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] transition-all duration-500'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name */}
      <motion.h1
        className='text-4xl md:text-5xl font-extrabold mt-6 text-gray-100 drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm{' '}
        <span className='bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text animate-pulse'>
          Dhruv Singh
        </span>
      </motion.h1>

      {/* Short intro */}
      <motion.p
        className='mt-3 text-gray-300 max-w-xl leading-relaxed drop-shadow-[0_0_6px_rgba(37,99,235,0.4)]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Aspiring <span className='text-blue-300 font-semibold'>Data Scientist</span> passionate about
        Data Analysis, Visualization, and Problem Solving.  
        Strong foundations in <span className='text-sky-300'>Python</span>, <span className='text-indigo-300'>Java (DSA & OOP)</span>, and <span className='text-blue-300'>C</span>.  
        I also enjoy sports like cricket, fitness, and listening to music in my free time.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className='flex gap-6 mt-8 text-2xl flex-wrap justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { icon: <FaGithub />, link: 'https://github.com/Dhruv007211' },
          { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/dhruv-singh-88969a333' },
          { icon: <FaInstagram />, link: 'https://www.instagram.com/dhruvionx' },
          { icon: <FaPhone />, link: 'tel:+919021889562' },
          { icon: <FaEnvelope />, link: 'mailto:dhruv25072006@gmail.com' },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 hover:text-sky-300 transition-all duration-300 
            hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.8)]'
            whileHover={{ rotate: 5 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
