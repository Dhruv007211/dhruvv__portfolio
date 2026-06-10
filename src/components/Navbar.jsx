import React, { useEffect, useState, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ dark, setDark }) {
  const canvasRef = useRef(null);
  const quotes = [
    "“Data is the new oil, but intelligence is the refinery.”",
    "“Code is the closest thing to magic humans have built.”",
    "“Machine learning is not about models, it's about understanding reality.”",
    "“In a world of noise, algorithms create signal.”",
    "“Every dataset tells a story — few know how to listen.”",
    "“AI doesn't replace humans, it amplifies intelligence.”"
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  // 1. Auto rotating quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [quotes.length]);

  // 2. Apply theme class to document
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  // 3. Falling Code Effect (Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters (Binary & Sci-Fi)
    const alphabet = "01010110100101110011010110101010101011010101001";
    const fontSize = 10;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops = Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent background to create trailing effect
      ctx.fillStyle = dark ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = dark ? "rgba(6, 182, 212, 0.35)" : "rgba(0, 0, 0, 0.15)"; // Cyan in dark, subtle gray in light
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dark]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 backdrop-blur-md transition-all duration-500 border-b overflow-hidden h-20 ${
        dark ? "bg-black/60 border-cyan-500/10" : "bg-white/60 border-black/10"
      }`}
    >
      {/* BACKGROUND: Falling Code Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        
        {/* LEFT: Neural Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold shadow-lg ${
                dark
                  ? "bg-gradient-to-br from-cyan-500 to-indigo-600 text-black"
                  : "bg-gradient-to-br from-yellow-400 to-pink-500 text-white"
              }`}
            >
              DS
            </div>
            {/* Neural pulse ring */}
            <span className="absolute inset-0 rounded-lg animate-ping bg-cyan-400/20"></span>
          </div>

          <div>
            <div className={`text-sm font-semibold ${dark ? "text-white" : "text-black"}`}>
              Dhruv Singh
            </div>
            <div className={`text-xs ${dark ? "text-gray-400" : "text-gray-600"}`}>
              Data Science • AI • Cyber Systems
            </div>
          </div>
        </div>

        {/* CENTER: LIVE AI QUOTE STREAM */}
        <div className="hidden md:flex flex-1 justify-center px-6">
          <div
            className={`text-xs font-mono px-4 py-2 rounded-md border backdrop-blur-md max-w-md text-center ${
              dark
                ? "border-cyan-500/20 text-cyan-300 bg-black/40"
                : "border-black/10 text-gray-700 bg-white/50"
            }`}
          >
            <span className="text-cyan-400 font-bold">NEURAL_FEED:</span>{" "}
            {quotes[quoteIndex]}
          </div>
        </div>

        {/* RIGHT: 3D BRAIN + THEME TOGGLE */}
        <div className="flex items-center gap-6">
          
          {/* 🧠 3D Rotating & Glowing Neural Brain Core */}
          <div className="relative hidden sm:flex items-center justify-center w-12 h-12">
            {/* Outer Rotating Orbit Line */}
            <div className="absolute w-12 h-12 rounded-full border border-dashed border-cyan-400/30 animate-[spin_8s_linear_infinite]" />
            {/* Reverse Rotating Neuron Orbit */}
            <div className="absolute w-10 h-10 rounded-full border border-cyan-500/20 animate-[spin_4s_linear_infinite_reverse]" />
            
            {/* Glowing Core & Neurons Cluster Animation */}
            <div className="relative w-8 h-8 flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite]">
              {/* Core Brain Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-md animate-pulse"></div>
              
              {/* Simulated 3D Neurons (Rotating Nodes) */}
              <div className="absolute w-6 h-6 border-2 border-cyan-400/60 rounded-full animate-[spin_3s_linear_infinite]">
                <div className="absolute -top-1 left-2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#fff]"></div>
                <div className="absolute -bottom-1 right-2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#22d3ee]"></div>
              </div>
              <div className="absolute w-4 h-4 border border-indigo-400 rounded-full animate-[spin_2s_linear_infinite_reverse]">
                <div className="absolute top-1 -left-1 w-1 h-1 rounded-full bg-cyan-200"></div>
              </div>
              
              {/* Center Synapse Node */}
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#22d3ee] z-10"></div>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-md border transition-all duration-300 hover:scale-110 z-10 ${
              dark
                ? "border-cyan-500/30 bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                : "border-black/10 bg-yellow-400 text-white"
            }`}
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

      </div>
    </nav>
  );
}