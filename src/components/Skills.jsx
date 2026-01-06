import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Database, Layout, Server, Zap } from 'lucide-react'

/* ================= TECH ICONS ================= */
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaFigma,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skillCategories = [
    {
      Icon: Layout,
      iconColor: 'text-cyan-400',
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
        { name: 'HTML / CSS', icon: FaHtml5, color: 'text-orange-500' },
      ],
    },
    {
      Icon: Server,
      iconColor: 'text-green-400',
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Java', icon: FaJava, color: 'text-red-500' },
      ],
    },
    {
      Icon: Database,
      iconColor: 'text-emerald-400',
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-sky-500' },
      ],
    },
    {
      Icon: Code2,
      iconColor: 'text-purple-400',
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', icon: FaGithub, color: 'text-neutral-200' },
        { name: 'Figma', icon: FaFigma, color: 'text-pink-400' },
        { name: 'Thunder Client', icon: Zap, color: 'text-indigo-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
        { name: 'Vercel', icon: SiVercel, color: 'text-neutral-100' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full" />
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="
                p-6 rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                shadow-lg
                hover:shadow-cyan-500/20
                transition-all duration-300
              "
            >
              {/* CATEGORY HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  className={`${category.iconColor} drop-shadow-lg`}
                >
                  <category.Icon size={30} />
                </motion.div>

                <h3 className="text-2xl font-bold text-portfolio-highlight">
                  {category.category}
                </h3>
              </div>

              {/* TECH STACK */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.07 }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: '0 0 20px currentColor',
                    }}
                    className={`
                      flex items-center gap-3
                      p-3 rounded-xl
                      bg-white/5
                      backdrop-blur-md
                      border border-white/10
                      cursor-pointer
                      transition-all duration-300
                      ${skill.color}
                    `}
                  >
                    <skill.icon className="text-2xl" />
                    <span className="font-medium text-portfolio-highlight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
