import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const resumePath = "/resume.html"; // public folder me

  return (
    <section id="resume" className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="mt-6 flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Open Resume */}
        <button
          onClick={() => window.open(resumePath, "_blank")}
          className="px-6 py-2.5 rounded-lg font-semibold text-white 
          bg-gradient-to-r from-purple-700 to-violet-600
          hover:from-fuchsia-500 hover:to-violet-500
          shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:shadow-[0_0_20px_rgba(217,70,239,0.9)]
          transition-all duration-300"
        >
          Open Resume
        </button>

        {/* Download Resume */}
        <a
          href={resumePath}
          download="Dhruv_Singh_Resume.html"
          className="px-6 py-2.5 rounded-lg font-semibold text-white 
          bg-gradient-to-r from-violet-600 to-fuchsia-600
          hover:from-purple-700 hover:to-fuchsia-500
          shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:shadow-[0_0_20px_rgba(236,72,153,0.9)]
          transition-all duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
