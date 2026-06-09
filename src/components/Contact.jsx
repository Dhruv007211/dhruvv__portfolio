import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let tempErrors = {}
    if (!name.trim()) tempErrors.name = 'Name is required'
    if (!email.trim()) tempErrors.email = 'Email is required'
    setErrors(tempErrors)

    if (Object.keys(tempErrors).length === 0) {
      try {
        const response = await fetch("https://formspree.io/f/xeolkkyw", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        })
        if (response.ok) {
          setStatus("✅ Message sent successfully!")
          setName(""); setEmail(""); setMessage("")
        } else setStatus("❌ Something went wrong, please try again.")
      } catch (error) {
        setStatus("⚠️ Error connecting to server.")
      }
    }
  }

  return (
    <section id='contact' className='py-12'>
      <motion.h2 
        className='text-4xl font-bold text-center mb-10 bg-gradient-to-r from-orange-400 via-pink-500 to-red-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,100,50,0.5)]'
        initial={{opacity:0, y:10}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}}
      >
        Contact
      </motion.h2>

      <div className='mt-6 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
        
        {/* Contact Info */}
        <motion.div 
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-black/40 border border-orange-400/20 shadow-[0_0_15px_rgba(255,80,0,0.2)] hover:shadow-[0_0_25px_rgba(255,100,50,0.4)] transition-all duration-300'
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1,y:0}} 
          viewport={{once:true}}
        >
          <div className='text-lg font-semibold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-2'>Get in touch</div>
          <p className='mt-2 text-gray-300'><FaEnvelope className='inline mr-2 text-orange-400' /> dhruv25072006@gmail.com</p>
          <p className='mt-1 text-gray-300'><FaPhone className='inline mr-2 text-pink-400' /> +91 9021889562</p>
          <div className='flex gap-4 mt-4 text-2xl text-orange-400'>
            <a href='https://github.com/Dhruv007211' target='_blank' rel='noreferrer' className='hover:text-pink-400 transition-colors'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/dhruv-singh-88969a333' target='_blank' rel='noreferrer' className='hover:text-pink-400 transition-colors'><FaLinkedin /></a>
            <a href='https://www.instagram.com/dhruvionx' target='_blank' rel='noreferrer' className='hover:text-pink-400 transition-colors'><FaInstagram /></a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className='p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-black/40 border border-orange-400/20 shadow-[0_0_15px_rgba(255,80,0,0.2)] hover:shadow-[0_0_25px_rgba(255,100,50,0.4)] transition-all duration-300 space-y-3'
          initial={{opacity:0, y:10}} 
          whileInView={{opacity:1,y:0}} 
          viewport={{once:true}}
        >
          <input 
            className='w-full p-3 rounded bg-transparent border border-white/10 text-gray-100 placeholder-gray-400 focus:border-orange-400 outline-none transition-colors' 
            placeholder='Your name' 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
          />
          {errors.name && <div className='text-red-500 text-sm'>{errors.name}</div>}

          <input 
            type="email"
            className='w-full p-3 rounded bg-transparent border border-white/10 text-gray-100 placeholder-gray-400 focus:border-pink-400 outline-none transition-colors' 
            placeholder='Email' 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
          />
          {errors.email && <div className='text-red-500 text-sm'>{errors.email}</div>}

          <textarea 
            className='w-full p-3 rounded bg-transparent border border-white/10 text-gray-100 placeholder-gray-400 focus:border-red-400 outline-none transition-colors' 
            rows='4' 
            placeholder='Message' 
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
          />

          <button 
            type='submit' 
            className='px-5 py-2 rounded font-semibold text-black bg-gradient-to-r from-orange-400 via-pink-500 to-red-400 hover:scale-105 transition-transform duration-300'
          >
            Send
          </button>

          {status && <p className="mt-2 text-sm text-pink-400">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}