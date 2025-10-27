import React from 'react'
import { motion } from 'framer-motion'

// Categories
const programming = ['Python', 'Java', 'C']
const coreCS = ['Data Structures & Algorithms (DSA)', 'Object Oriented Programming (OOP)', 'Problem Solving']
const libraries = ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
const dataHandling = ['Data Manipulation', 'Data Visualization', 'Data Analysis']
const tools = ['MS Excel','VS Code','Jupyter Notebook']

export default function Skills() {
  const renderList = (arr) =>
    arr.map((item, i) => (
      <li 
        key={i} 
        className='text-gray-400 text-sm hover:text-green-300 transition-colors duration-200'
      >
        {item}
      </li>
    ))

  const skillCategories = [
    { title: 'Programming Skills', items: programming },
    { title: 'Core Computer Science', items: coreCS },
    { title: 'Libraries & Frameworks', items: libraries },
    { title: 'Data Handling & Analysis', items: dataHandling },
    { title: 'Tools', items: tools },
  ]

  return (
    <section id='skills' className='py-12'>
      {/* Heading */}
      <motion.h2
        className='text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Skill Cards */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        {skillCategories.map((cat, index) => (
          <motion.div
            key={index}
            className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 border border-gray-700/50 shadow-[0_0_10px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 backdrop-blur-md'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Category Title */}
            <h3 className='font-semibold text-lg bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(16,185,129,0.3)] mb-3'>
              {cat.title}
            </h3>

            {/* Skill List */}
            <ul className='space-y-2'>{renderList(cat.items)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
