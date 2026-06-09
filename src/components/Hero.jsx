import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa'

// 🧠 Smooth-Pulsing Cinematic Neuron Engine with Multi-Directional Code Floating
const ImmersiveAvatarEngine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = 550);
    let height = (canvas.height = 320);

    // 1. बैकग्राउंड न्यूरॉन नेटवर्क
    const synapses = [];
    for (let i = 0; i < 32; i++) {
      synapses.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.2 + 1
      });
    }

    // 2. कोडिंग सिम्बल्स - अब ये हर दिशा में तैरेंगे (Omnidirectional)
    const codeSymbols = ['{...data}', '</>','==','!=','Error','404', '=>', 'import', '[ ]', '0110', 'f(x)', 'connect()', 'const', 'deploy'];
    const floatingCodes = [];
    for (let i = 0; i < 12; i++) {
      // अलग-अलग एंगल्स पर तैरने के लिए वेलोसिटी (vx, vy)
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.2 + 0.15; // स्पीड को एकदम धीमा और स्मूथ रखा है
      floatingCodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        opacity: Math.random() * 0.4 + 0.2,
        size: Math.floor(Math.random() * 3) + 11
      });
    }

    // 3. स्मूथ शॉकवेव रिंग्स
    let shockwaves = [];
    let frameCount = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      frameCount++;

      const cx = width / 2;
      const cy = height / 2;

      // --- लेयर 1: सिनैप्स बैकग्राउंड नेटवर्क ---
      synapses.forEach((s) => {
        s.x += s.vx; s.y += s.vy;
        if (s.x < 0 || s.x > width) s.vx *= -1;
        if (s.y < 0 || s.y > height) s.vy *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.fill();
      });

      // बैकग्राउंड कनेक्शन लाइन्स
      for (let i = 0; i < synapses.length; i++) {
        for (let j = i + 1; j < synapses.length; j++) {
          let dist = Math.hypot(synapses[i].x - synapses[j].x, synapses[i].y - synapses[j].y);
          if (dist < 85) {
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - dist / 85) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(synapses[i].x, synapses[i].y);
            ctx.lineTo(synapses[j].x, synapses[j].y);
            ctx.stroke();
          }
        }
      }

      // --- धीमा और गहरा पंपिंग मैकेनिक्स (Calm & Deep Pulse) ---
      // टाइमिंग बढ़ा दी (90 फ्रेम्स) ताकि धड़कन झटकेदार न लगे, बल्कि सांस लेने जैसी स्मूथ लगे
      let pumpCycle = (frameCount % 90) / 90; 
      let beatIntensity = Math.pow(Math.sin(pumpCycle * Math.PI), 2); 
      let coreSize = 34 + beatIntensity * 8; // बैलेंस साइज़ चेंज

      // हर साइकिल में एक बहुत हल्की शॉकवेव
      if (frameCount % 90 === 1) {
        shockwaves.push({ radius: coreSize, maxRadius: 160, opacity: 0.5 });
      }

      // --- लेयर 2: कोडिंग सिम्बल्स का तैरना (Omnidirectional Floating) ---
      floatingCodes.forEach((code) => {
        code.x += code.vx;
        code.y += code.vy;

        // बाउंड्री रीसेट (स्क्रीन से बाहर जाने पर दूसरी तरफ से एंट्री)
        if (code.x < -40) code.x = width + 40;
        if (code.x > width + 40) code.x = -40;
        if (code.y < -20) code.y = height + 20;
        if (code.y > height + 20) code.y = -20;

        ctx.font = `500 ${code.size}px monospace`;
        ctx.fillStyle = `rgba(34, 211, 238, ${code.opacity + beatIntensity * 0.15})`;
        ctx.shadowBlur = beatIntensity * 4;
        ctx.shadowColor = '#06b6d4';
        ctx.fillText(code.text, code.x, code.y);
      });
      ctx.shadowBlur = 0;

      // --- लेयर 3: स्मूथ शॉकवेव रिंग्स ---
      shockwaves.forEach((sw, idx) => {
        sw.radius += 1.8; // फैलने की स्पीड कम की
        sw.opacity -= 0.008; // धीरे-धीरे गायब होगी

        if (sw.opacity <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(idx, 1);
          return;
        }

        ctx.strokeStyle = `rgba(6, 182, 212, ${sw.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#06b6d4';
        ctx.beginPath();
        ctx.arc(cx, cy, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.shadowBlur = 0;

      // --- लेयर 4: मुख्य न्यूरॉन कैरेक्टर ---
      let floatY = Math.sin(frameCount * 0.03) * 5; // धीमा फ्लोटिंग इफ़ेक्ट
      const coreX = cx;
      const coreY = cy + floatY;

      // 6 बायो-मैकेनिकल नसें (Dendrites)
      const branches = [
        { tx: coreX - 120, ty: coreY - 50, cx1: coreX - 60, cy1: coreY - 40 },
        { tx: coreX + 120, ty: coreY - 50, cx1: coreX + 60, cy1: coreY - 40 },
        { tx: coreX - 130, ty: coreY + 30, cx1: coreX - 70, cy1: coreY },
        { tx: coreX + 130, ty: coreY + 30, cx1: coreX + 70, cy1: coreY },
        { tx: coreX - 80, ty: coreY + 110, cx1: coreX - 40, cy1: coreY + 70 },
        { tx: coreX + 80, ty: coreY + 110, cx1: coreX + 40, cy1: coreY + 70 }
      ];

      branches.forEach((b, idx) => {
        ctx.lineWidth = 2 + beatIntensity * 1.5;
        ctx.strokeStyle = '#2563eb';
        ctx.shadowBlur = 8 + beatIntensity * 8;
        ctx.shadowColor = '#06b6d4';

        ctx.beginPath();
        ctx.moveTo(coreX, coreY);
        ctx.quadraticCurveTo(b.cx1, b.cy1, b.tx, b.ty);
        ctx.stroke();

        // नसों के सिरे
        ctx.beginPath();
        ctx.arc(b.tx, b.ty, 3.5 + beatIntensity * 1, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.fill();

        // स्मूथ रनिंग सिग्नल्स (Electrical Impluses - Calm Speed)
        let signalPos = (frameCount * 0.012 + idx * 0.16) % 1;
        let sx = coreX + (b.tx - coreX) * signalPos;
        let sy = coreY + (b.ty - coreY) * signalPos;

        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      // न्यूरॉन कोर बॉडी (Soma)
      ctx.shadowBlur = 25 + beatIntensity * 20;
      ctx.shadowColor = '#06b6d4';
      
      // आउटर शैल
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreSize, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();

      // इनर न्यूक्लियस (Center Energy Source)
      ctx.shadowBlur = 35 + beatIntensity * 15;
      ctx.shadowColor = '#ffffff';
      ctx.beginPath();
      ctx.arc(coreX, coreY, coreSize * 0.38, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.shadowBlur = 0; // रीसेट

 

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className='relative w-full max-w-xl h-[320px] border border-cyan-500/15 rounded-3xl bg-slate-950/50 backdrop-blur-xl overflow-hidden shadow-[inset_0_0_40px_rgba(6,182,212,0.03)] flex items-center justify-center mt-6'>
      {/* टेक ग्रिड लाइन बैकग्राउंड */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <canvas ref={canvasRef} className='absolute inset-0 w-full h-full pointer-events-none' />
    </div>
  );
};

export default function Hero() {
  const roles = [
    'Data Scientist',
    'Machine Learning Enthusiast',
    'Problem Solver',
    'Data Analyst',
  ]
  const [currentRole, setCurrentRole] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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

  return (
    <section className='min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-slate-950 text-gray-100 py-12'>

      {/* Floating Ambient Glow Orbs */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full pointer-events-none'
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-32 h-32 rounded-full blur-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-25'
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, 25, 0],
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
        className='w-40 h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] object-cover hover:shadow-[0_0_50px_rgba(37,99,235,0.8)] transition-all duration-500'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name Heading */}
      <motion.h1
        className='text-4xl md:text-5xl font-extrabold mt-6 text-gray-100 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]'
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm{' '}
        <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-pulse'>
          Dhruv Singh
        </span>
      </motion.h1>

      {/* Typing Subtitle Engine */}
      <motion.h2
        className='text-xl md:text-2xl font-medium mt-3 text-cyan-300 h-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {currentRole}
        <span className='border-r-2 border-cyan-400 animate-pulse ml-1'></span>
      </motion.h2>

      {/* NEURON ENGINE BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full flex justify-center"
      >
        <ImmersiveAvatarEngine />
      </motion.div>

      {/* Social HUD Links Layout */}
      <motion.div
        className='flex gap-6 mt-10 text-2xl flex-wrap justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
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
            className='text-cyan-400 hover:text-blue-300 transition-all duration-300 
            hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]'
            whileHover={{ rotate: 5 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}