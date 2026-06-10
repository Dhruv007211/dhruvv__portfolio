import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

// 🔥 1. CYBERNETIC JARVIS ANIMATION CORE (UPDATED COLORS & DYNAMICS)
const JarvisCoreEngine = ({ isListening, systemStatus }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = 500);
    let height = (canvas.height = 320);
    let angle = 0;
    let particlePulse = 0;

    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        radius: Math.random() * 80 + 20,
        speed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 1.5 + 0.5,
        angle: Math.random() * Math.PI * 2,
        // Default colors initialized, updated dynamically on draw
        color: i % 2 === 0 ? '#06b6d4' : '#ef4444'
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      
      // Setup states based on user requirement
      // Listening = Red & Spread | Processing (Speaking) = Blue & Shrink
      const isSpeaking = systemStatus === 'processing';
      
      let speedMultiplier = 1;
      if (isListening) speedMultiplier = 3.5;
      if (isSpeaking) speedMultiplier = 7; // Fast spinning when speaking

      angle += 0.008 * speedMultiplier;
      particlePulse += 0.05 * speedMultiplier;

      // Hexagon Ring Background Glow
      ctx.strokeStyle = isListening && !isSpeaking ? 'rgba(239, 68, 68, 0.08)' : 'rgba(6, 182, 212, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        let hAngle = (Math.PI / 3) * i + angle * 0.1;
        let x = cx + Math.cos(hAngle) * 130;
        let y = cy + Math.sin(hAngle) * 130;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Outer Particles Dynamics
      particles.forEach((p) => {
        p.angle += p.speed * speedMultiplier;
        // Spread out more when user is talking (Listening), pull closer when Jarvis speaks
        let pulseRadius = p.radius + Math.sin(particlePulse) * (isListening && !isSpeaking ? 12 : 4);
        let x = cx + Math.cos(p.angle) * pulseRadius;
        let y = cy + Math.sin(p.angle) * pulseRadius;
        
        ctx.fillStyle = isListening && !isSpeaking ? '#ef4444' : '#06b6d4';
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Outer Rotating Arcs Setup
      ctx.shadowBlur = isListening && !isSpeaking ? 22 : 12;
      ctx.shadowColor = isListening && !isSpeaking ? '#ef4444' : '#06b6d4';
      ctx.strokeStyle = isListening && !isSpeaking ? '#ef4444' : '#06b6d4';
      ctx.lineWidth = 1.8;
      
      // Dynamic arc size change: Spread vs Shrink
      let arcRadius = isListening && !isSpeaking ? 105 : 75;

      ctx.beginPath();
      ctx.arc(cx, cy, arcRadius, angle, angle + Math.PI * 0.6);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, arcRadius, angle + Math.PI, angle + Math.PI * 1.6);
      ctx.stroke();

      // Core Engine Pulse Configuration
      // Red + Spread (45px to 55px) OR Blue + Shrink (20px to 24px)
      let corePulse;
      if (isListening && !isSpeaking) {
        corePulse = 50 + Math.sin(particlePulse * 2) * 5; // Red Spread
      } else {
        corePulse = 22 + Math.sin(particlePulse * 2) * 2; // Blue Shrink
      }

      let gradient = ctx.createRadialGradient(cx, cy, 2, cx, cy, corePulse);
      if (isListening && !isSpeaking) {
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.3, '#f87171');
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
      } else {
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.3, '#22d3ee');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, corePulse, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isListening, systemStatus]);

  return (
    <div className={`relative w-full max-w-lg h-[320px] border rounded-3xl bg-slate-950/40 backdrop-blur-xl overflow-hidden mt-6 transition-all duration-500 ${isListening && systemStatus !== 'processing' ? 'border-red-500/30 shadow-[inset_0_0_40px_rgba(239,68,68,0.05)]' : 'border-cyan-500/15 shadow-[inset_0_0_40px_rgba(6,182,212,0.03)]'}`}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <canvas ref={canvasRef} className='absolute inset-0 w-full h-full pointer-events-none' />
      
      <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-500">
        <div>SYS_STATUS: <span className={isListening && systemStatus !== 'processing' ? "text-red-400 animate-pulse" : "text-cyan-400"}>{systemStatus === 'processing' ? 'SPEAKING' : isListening ? 'LISTENING' : 'ONLINE'}</span></div>
        <div>JARVIS_VOICE: V3_LIVE</div>
      </div>
    </div>
  );
};

// 🤖 2. MAIN VOICE-POWERED HERO COMPONENT
export default function Hero() {
  const roles = ['Data Scientist', 'Machine Learning Enthusiast', 'Problem Solver']
  const [currentRole, setCurrentRole] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const [isListening, setIsListening] = useState(false)
  const [jarvisSubtitles, setJarvisSubtitles] = useState('Hello user, how can I help you?')
  const [systemStatus, setSystemStatus] = useState('listening')
  
  const recognitionRef = useRef(null)
  const shouldListenRef = useRef(false) 

  // Role Typing Effect
  useEffect(() => {
    const currentText = roles[index % roles.length]
    let typingSpeed = isDeleting ? 60 : 100

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }
    }, typingSpeed)

    setCurrentRole(currentText.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  // 🔊 TEXT TO SPEECH (Updates state to processing on speak)
  const jarvisSpeak = (textToSpeak, callback) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      utterance.pitch = 0.85; 
      utterance.rate = 1.15;
      
      utterance.onstart = () => {
        setSystemStatus('processing'); // Sets UI to Blue & Shrink
      };
      
      utterance.onend = () => {
        setSystemStatus('listening'); // Goes back to Listening state
        if (callback) callback();
      };
      window.speechSynthesis.speak(utterance);
    } else if (callback) {
      callback();
    }
  };

  // 🚀 AUTOMATIC VOICE CORE INITIALIZATION
  useEffect(() => {
    shouldListenRef.current = true;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setJarvisSubtitles("Speech API not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    
    recognition.lang = 'en-US';
    recognition.continuous = true; 
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onerror = (event) => {
      console.error("Jarvis Matrix Error:", event.error);
    };

    recognition.onend = () => {
      if (shouldListenRef.current) {
        try { recognitionRef.current.start(); } catch (e) {}
      }
    };

    recognition.onresult = (event) => {
      const lastResultIndex = event.results.length - 1;
      const speechToText = event.results[lastResultIndex][0].transcript.toLowerCase().trim();
      
      setJarvisSubtitles(`Command: "${speechToText}"`);

      // ⚡ SHORT & CRISP DIALOGUES ONLY
      if (speechToText.includes('skill')) {
        setJarvisSubtitles("Opening skills.");
        jarvisSpeak("Opening skills.", () => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        });
      } 
      else if (speechToText.includes('resume') || speechToText.includes('cv')) {
        setJarvisSubtitles("Opening resume.");
        jarvisSpeak("Opening resume.", () => {
          document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        });
      } 
      else if (speechToText.includes('achievement') || speechToText.includes('award')) {
        setJarvisSubtitles("Opening milestones.");
        jarvisSpeak("Showing milestones.", () => {
          document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
        });
      } 
      else if (speechToText.includes('about') || speechToText.includes('who are you')) {
        setJarvisSubtitles("Opening profile.");
        jarvisSpeak("Showing profile.", () => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        });
      } 
      else if (speechToText.includes('contact') || speechToText.includes('talk to') || speechToText.includes('mail')) {
        setJarvisSubtitles("Opening contact.");
        jarvisSpeak("Opening contact.", () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        });
      } 
      else if (speechToText.includes('project') || speechToText.includes('work')) {
        setJarvisSubtitles("Opening projects.");
        jarvisSpeak("Loading projects.", () => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
      else if (speechToText.includes('top') || speechToText.includes('clear') || speechToText.includes('home')) {
        setJarvisSubtitles("Going top.");
        jarvisSpeak("Going top.", () => {
          document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
      else if (speechToText.includes('hello') || speechToText.includes('hey') || speechToText.includes('jarvis')) {
        setJarvisSubtitles("Ready, user.");
        jarvisSpeak("Ready, user.");
      } 
      else {
        setJarvisSubtitles(`Tracked: "${speechToText}"`);
        // Reset status to listening if no command matches execution
        setSystemStatus('listening');
      }
    };

    // 🚀 INITIAL BOOT GREETING
    setJarvisSubtitles("Hello user, I am Ai assistant vixi. You can ask me to navigate to skills, resume, projects, achievements, or contact sections.");
    jarvisSpeak("Hello user, I am Ai assistant vixi. You can ask me to navigate to skills, resume, projects, achievements, or contact sections.");
    
    try { recognition.start(); } catch(e) {}

    return () => {
      shouldListenRef.current = false;
      if (recognitionRef.current) recognitionRef.current.stop();
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <section id='hero' className='min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-slate-950 text-gray-100 py-12'>

      <div className='absolute top-0 left-0 w-full h-full pointer-events-none opacity-30'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[140px] bg-cyan-500/20' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px] bg-red-500/10' />
      </div>

      <div className="relative group">
        <motion.img
          src='/profile.jpg'
          alt='Dhruv Singh'
          className='w-36 h-36 rounded-full border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] object-cover group-hover:border-red-500/50 transition-all duration-500'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <motion.h1
        className='text-4xl md:text-5xl font-extrabold mt-6 tracking-tight text-gray-100'
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Hi, I'm <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text font-black'>Dhruv Singh</span>
      </motion.h1>

      <motion.h2
        className='text-lg md:text-xl font-medium mt-2 text-cyan-400 h-6 tracking-wide'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {currentRole}<span className='border-r-2 border-cyan-400 animate-pulse ml-1'></span>
      </motion.h2>

      <div className="w-full flex justify-center relative">
        <JarvisCoreEngine isListening={isListening} systemStatus={systemStatus} />
      </div>

      <div className="mt-4 h-8 max-w-md">
        <p className={`text-xs font-mono tracking-wide transition-all duration-300 ${systemStatus === 'processing' ? 'text-cyan-400' : 'text-red-400'}`}>
          <span className={`${systemStatus === 'processing' ? 'text-cyan-500' : 'text-red-500'} font-bold`}>[JARVIS_LIVE]: </span>{jarvisSubtitles}
        </p>
      </div>

      <motion.div
        className='flex gap-6 mt-6 text-xl justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { iconComp: <FaGithub />, link: 'https://github.com/Dhruv007211' },
          { iconComp: <FaLinkedin />, link: 'https://www.linkedin.com/in/dhruv-singh-88969a333' },
          { iconComp: <FaInstagram />, link: 'https://www.instagram.com/dhruvionx' },
          { iconComp: <FaPhone />, link: 'tel:+919021889562' },
          { iconComp: <FaEnvelope />, link: 'mailto:dhruv25072006@gmail.com' },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target='_blank'
            rel='noreferrer'
            className='text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110'
          >
            {item.iconComp}
          </a>
        ))}
      </motion.div>
    </section>
  )
}