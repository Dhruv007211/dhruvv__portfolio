import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'

// Counter Component for Smooth Count-up Animation
const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default function Achievements() {
  // Yahan humne default values tumhare naye milestone (200+ aur 70+) par set kar di hain
  // Isse agar API kabhi slow bhi chale, toh bhi tumhara real achievement hi dikhega
  const [leetcodeCount, setLeetcodeCount] = useState(200); 
  const [gfgCount, setGfgCount] = useState(70);

  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        // 1. LeetCode API Fetch (Username changed to small 'dhruvionx')
        const lcResponse = await fetch('https://leetcode-api-faisalshabbir.vercel.app/dhruvionx/');
        if (lcResponse.ok) {
          const lcData = await lcResponse.json();
          // Agar data mil gaya toh live count set ho jayega
          if (lcData && lcData.totalSolved) {
            setLeetcodeCount(lcData.totalSolved);
          }
        }

        // 2. GeeksforGeeks API Fetch
        // GFG ka HTML structure change hota rehta h, isliye safe-side fetch ko try-catch mein rakha h
        const gfgResponse = await fetch('https://geeks-for-geeks-api.vercel.app/user/dhruv252o9e/');
        if (gfgResponse.ok) {
          const gfgData = await gfgResponse.json();
          if (gfgData && gfgData.totalSolved) {
            setGfgCount(gfgData.totalSolved);
          }
        }
      } catch (error) {
        console.error("Live stats fetch karne mein dikkat aayi, using current updates:", error);
      }
    };

    fetchLiveStats();
  }, []);

  const achievements = [
    { 
      title: 'DSA Proficiency (Java)', 
      detail: (
        <span>
          Strong problem solving & OOP, solved <span className="text-yellow-400 font-bold"><Counter value={leetcodeCount} />+</span> problems on LeetCode & <span className="text-green-400 font-bold"><Counter value={gfgCount} />+</span> problems on GeeksforGeeks
        </span>
      ),
      links: [
        { icon: <SiLeetcode className='text-yellow-400 hover:text-yellow-300 text-2xl transition-all duration-300 hover:scale-110' />, url: 'https://leetcode.com/dhruvionx/' },
        { icon: <SiGeeksforgeeks className='text-green-400 hover:text-green-300 text-2xl transition-all duration-300 hover:scale-110' />, url: 'https://www.geeksforgeeks.org/user/dhruv252o9e/' }
      ]
    },
    { 
      title: 'Multiple DS Projects', 
      detail: 'Handled and preprocessed datasets: cleaned, transformed, and managed data effectively'  
    },
    { 
      title: 'Data Visualization', 
      detail: 'Built interactive dashboards & visual reports using Python and Tableau to communicate insights effectively' 
    },
    { 
      title: 'Competition Participation', 
      detail: 'Participated in Anand ICE Ideathon and showcased innovative tech ideas' 
    },
  ];

  return (
    <section id='achievements' className='py-12'>
      <motion.h2 
        className='text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg'
        initial={{opacity:0,y:10}} 
        whileInView={{opacity:1,y:0}} 
        viewport={{once:true}}
      >
        Achievements
      </motion.h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6'>
        {achievements.map((a,i)=>(
          <motion.div 
            key={i} 
            className='p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-black/40 border border-gray-700/50 shadow-[0_0_10px_rgba(0,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 backdrop-blur-md'
            initial={{scale:0.96, opacity:0}} 
            whileInView={{scale:1, opacity:1}} 
            viewport={{once:true}}
          >
            <div className='font-semibold text-lg bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]'>
              {a.title}
            </div>

            <div className='text-sm text-gray-400 mt-2 leading-relaxed'>
              {a.detail}
            </div>

            {a.links && (
              <div className='flex items-center gap-4 mt-4'>
                {a.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}