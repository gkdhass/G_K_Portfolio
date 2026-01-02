import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      Icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      Icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      Icon: Users,
      title: 'User Focused',
      description: 'Creating intuitive interfaces that users love',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Coding setup"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-highlight/10 to-transparent rounded-lg"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-portfolio-muted text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless
              digital experiences that make a difference.
            </p>
            <p className="text-portfolio-muted text-lg leading-relaxed">
              My journey in web development has equipped me with skills in React, Node.js, and various
              modern frameworks. I'm constantly learning and adapting to new technologies to deliver
              cutting-edge solutions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-portfolio-card p-4 rounded-lg border border-portfolio-card-hover/30 hover:border-portfolio-card-hover transition-all duration-300"
                >
                  <feature.Icon className="text-portfolio-highlight mb-2" size={32} />
                  <h4 className="text-portfolio-highlight font-semibold mb-1">{feature.title}</h4>
                  <p className="text-portfolio-muted text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(204, 208, 207, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg glow-effect-hover transition-all duration-300"
              >
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
