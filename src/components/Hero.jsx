import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

// 🌌 INTERACTIVE BACKGROUND MATRIX PARTICLES (Ultra-Lightweight & Clean)
const InteractiveBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles = []
    const particleCount = Math.min(60, Math.floor(width / 20))

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        resY: Math.random() * 0.4 + 0.2,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    const resize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight
      }
    }
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)' // Subtle Cyan

      particles.forEach((p) => {
        p.y -= p.resY
        if (p.y < 0) {
          p.y = height
          p.x = Math.random() * width
        }
        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}

export default function Hero() {
  const roles = ['Data Scientist', 'Machine Learning Enthusiast', 'Problem Solver']
  const [currentRole, setCurrentRole] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // 🖱️ PREMIUM 3D MOUSE PARALLAX EFFECT FOR PHOTO
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    x.set(mouseX / width)
    y.set(mouseY / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Typing effect logic
  useEffect(() => {
    const currentText = roles[index % roles.length]
    let typingSpeed = isDeleting ? 30 : 70

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    setCurrentRole(currentText.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id='hero' 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-[#030712] text-gray-100 py-24 select-none'
    >
      
      {/* 🔮 1. INTERACTIVE TEXTURES & LIGHT WRAPS */}
      <InteractiveBackground />
      <div className='absolute inset-0 pointer-events-none z-0'>
        {/* Futuristic Dot Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
        {/* Subtle Horizontal Tech Scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(6,182,212,0.02)_50%,rgba(255,255,255,0))] bg-[size:100%_4px]" />
        
        {/* Hyper-Ambient Light Leak */}
        <div className='absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[180px] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent opacity-80' />
        <div className='absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full blur-[140px] bg-indigo-500/10 opacity-40' />
      </div>

      {/* 🛰️ 2. FLOATING BENTO-STYLE NAVIGATION */}
      <motion.div 
        className="absolute top-8 bg-slate-950/60 backdrop-blur-xl border border-slate-800/80 px-2 py-1.5 rounded-2xl z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center gap-1"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        {['About', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-xs font-semibold tracking-wide text-slate-400 hover:text-cyan-400 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-slate-900/80"
          >
            {item}
          </button>
        ))}
      </motion.div>

      {/* 🎭 3. 3D INTERACTIVE AVATAR WRAPPER */}
      <motion.div 
        className="relative z-10 mt-16 cursor-grab active:cursor-grabbing group"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Back Aura Light Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-500 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700 scale-105" />
        
        {/* Outer Tech Ring */}
        <div className="absolute -inset-3 border border-dashed border-cyan-500/20 rounded-full animate-[spin_40s_linear_infinite] group-hover:border-cyan-400/40 transition-all duration-500" />
        
        <motion.img
          src='/profile.jpg'
          alt='Dhruv Singh'
          className='relative w-40 h-40 rounded-full border-2 border-slate-700/50 object-cover shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 transition-all duration-500 group-hover:border-cyan-400'
          style={{ transform: "translateZ(30px)" }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
        />
      </motion.div>

      {/* 🚀 4. PREMIUM WRAPPED TEXT WRAPPER */}
      <div className="relative z-10 max-w-3xl mt-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
        >
          {/* Subtle Tech Tag */}
          <span className="inline-block text-[10px] font-mono tracking-[0.2em] text-cyan-400/80 bg-cyan-950/40 border border-cyan-800/30 px-3 py-1 rounded-md mb-4 uppercase">
          Data Scientist & Problem Solver
          </span>
          
          <h1 className='text-5xl md:text-7xl font-black tracking-tight text-white leading-none'>
            Hi, I'm <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(6,182,212,0.15)]'>Dhruv Singh</span>
          </h1>
        </motion.div>

        {/* Dynamic Typing Subheading - Enhanced Cyber Theme Cursor */}
        <motion.h2
          className='text-xl md:text-3xl font-bold mt-6 text-slate-200 h-10 tracking-wide font-mono'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            {currentRole}
          </span>
          <span className='inline-block w-[3px] h-6 md:h-8 bg-cyan-400 ml-1.5 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-pulse align-middle' />
        </motion.h2>

        <motion.p 
          className="text-sm md:text-lg text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Building predictive models using Python, analyzing complex data structures, and deploying end-to-end Machine Learning pipelines to solve real-world problems.
        </motion.p>
      </div>

      {/* 🔗 5. HIGH-END GLASSMORPHIC SOCIAL HUB */}
      <motion.div
        className='flex gap-6 mt-12 px-8 py-4 bg-slate-950/40 backdrop-blur-md border border-slate-800/60 rounded-2xl relative z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-cyan-500/30 transition-all duration-500'
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      >
        {[
          { iconComp: <FaGithub />, link: 'https://github.com/Dhruv007211', label: 'GitHub' },
          { iconComp: <FaLinkedin />, link: 'https://www.linkedin.com/in/dhruv-singh-88969a333', label: 'LinkedIn' },
          { iconComp: <FaInstagram />, link: 'https://www.instagram.com/dhruvionx', label: 'Instagram' },
          { iconComp: <FaPhone />, link: 'tel:+919021889562', label: 'Phone' },
          { iconComp: <FaEnvelope />, link: 'mailto:dhruv25072006@gmail.com', label: 'Email' },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target='_blank'
            rel='noreferrer'
            title={item.label}
            whileHover={{ y: -5, scale: 1.15, color: '#22d3ee' }}
            whileTap={{ scale: 0.95 }}
            className='text-slate-400 transition-colors duration-200 text-2xl filter drop-shadow-sm hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]'
          >
            {item.iconComp}
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}