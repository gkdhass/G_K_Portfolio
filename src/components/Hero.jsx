import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Mail, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl text-portfolio-muted mb-2">Hi, I am</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
                Mohan Dhass G
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-portfolio-highlight">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-portfolio-muted text-lg leading-relaxed max-w-xl"
            >
              Crafting elegant solutions with modern web technologies. Passionate about building
              scalable applications and delivering exceptional user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(204, 208, 207, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg glow-effect-hover transition-all duration-300"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border-2 border-portfolio-highlight text-portfolio-highlight font-semibold rounded-lg hover:bg-portfolio-highlight hover:text-portfolio-bg-main transition-all duration-300"
              >
                See Projects
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-6 pt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-portfolio-muted hover:text-portfolio-highlight transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden animate-glow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                  alt="Mohan Dhass G"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-portfolio-highlight/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
