import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Database, Layout, Server, Smartphone, Palette } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true)
    }
  }, [isInView, animated])

  const skillCategories = [
    {
      Icon: Layout,
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      Icon: Server,
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'Python', level: 75 },
      ],
    },
    {
      Icon: Database,
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'MySQL', level: 70 },
      ],
    },
    {
      Icon: Code2,
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Docker', level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-portfolio-card p-6 rounded-lg border border-portfolio-card-hover/30 hover:border-portfolio-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={animated ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="animate-pulse-slow"
                >
                  <category.Icon className="text-portfolio-highlight" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-portfolio-highlight">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-portfolio-highlight font-medium">{skill.name}</span>
                      <span className="text-portfolio-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-portfolio-bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={animated ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-portfolio-highlight to-portfolio-muted rounded-full"
                      ></motion.div>
                    </div>
                  </div>
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
