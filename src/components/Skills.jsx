import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaCode,
  FaDatabase,
  FaChartBar,
  FaWater,
  FaCogs,
  FaSitemap,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiC,
  SiPandas,
  SiNumpy,
  SiJupyter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // ✅ Fixed import

// Skill data
const programming = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: "C", icon: <SiC className="text-blue-400" /> },
];

const coreCS = [
  { name: "Data Structures & Algorithms (DSA)", icon: <FaSitemap className="text-green-400" /> },
  { name: "Object Oriented Programming (OOP)", icon: <FaCogs className="text-cyan-400" /> },
  { name: "Problem Solving", icon: <FaCode className="text-purple-400" /> },
];

const libraries = [
  { name: "Pandas", icon: <SiPandas className="text-pink-400" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
  { name: "Matplotlib", icon: <FaChartBar className="text-orange-400" /> },
  { name: "Seaborn", icon: <FaWater className="text-cyan-400" /> },
];

const dataHandling = [
  { name: "Data Manipulation", icon: <FaDatabase className="text-yellow-400" /> },
  { name: "Data Visualization", icon: <FaDatabase className="text-red-400" /> },
  { name: "Data Analysis", icon: <FaDatabase className="text-purple-400" /> },
];

const tools = [
  { name: "MS Excel", icon: <FaFileExcel className="text-green-400" /> },
  { name: "VS Code", icon: <VscVscode className="text-blue-400" /> }, // ✅ Fixed here
  { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-400" /> },
];

export default function Skills() {
  const renderList = (arr) =>
    arr.map((item, i) => (
      <li
        key={i}
        className="flex items-center gap-2 text-gray-300 text-sm hover:text-green-300 transition-all duration-200"
      >
        {item.icon || "•"} {item.name}
      </li>
    ));

  const skillCategories = [
    { title: "Programming Skills", items: programming },
    { title: "Core Computer Science", items: coreCS },
    { title: "Libraries & Frameworks", items: libraries },
    { title: "Data Handling & Analysis", items: dataHandling },
    { title: "Tools", items: tools },
  ];

  return (
    <section id="skills" className="py-12">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 border border-gray-700/50 shadow-[0_0_10px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-3">
              {cat.title}
            </h3>
            <ul className="space-y-2">{renderList(cat.items)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
