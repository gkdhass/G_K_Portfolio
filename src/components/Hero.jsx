import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Profile from '../assets/profile.jpeg'

const Hero = () => {
  /* ================= CONTACT SCROLL ================= */
  const scrollToContact = () => {
    const section = document.getElementById('contact')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  /* ================= ANIMATIONS ================= */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.35, delayChildren: 0.6 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  }

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/gkdhass', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/mohandhassg05/', label: 'LinkedIn' },
    { Icon: FaXTwitter, href: 'https://x.com/Mohandhass125', label: 'X.com' },
    { Icon: Mail, action: 'contact', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE ================= */}
          <div className="flex justify-center order-1 lg:order-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="relative"
            >
              {/* GLOW SHADOW */}
              <div
                className="
                  absolute inset-0 rounded-full
                  blur-[90px] scale-125
                  bg-portfolio-highlight/40
                  -z-10
                "
              />

              {/* IMAGE */}
              <div
                className="
                  w-72 h-72
                  sm:w-80 sm:h-80
                  md:w-96 md:h-96
                  lg:w-[30rem] lg:h-[30rem]
                  rounded-full overflow-hidden
                  shadow-[0_40px_100px_rgba(0,0,0,0.6)]
                  border border-portfolio-highlight/30
                "
              >
                <img
                  src={Profile}
                  alt="Mohan Dhass G"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* ================= TEXT ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-lg sm:text-xl text-portfolio-muted mb-2">
                Hi, I am
              </h2>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              >
                Mohan Dhass G
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-portfolio-highlight"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              >
                Full Stack Developer
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-portfolio-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
            >
              Crafting elegant solutions with modern web technologies.
              Passionate about building scalable applications and delightful user experiences.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-7 py-3 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg"
              >
                Hire Me
              </a>

              <a
                href="#projects"
                className="px-7 py-3 border-2 border-portfolio-highlight text-portfolio-highlight font-semibold rounded-lg hover:bg-portfolio-highlight hover:text-portfolio-bg-main"
              >
                See Projects
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-6 justify-center lg:justify-start"
            >
              {socialLinks.map(({ Icon, href, label, action }) => (
                <motion.a
                  key={label}
                  href={href || '#'}
                  onClick={(e) => {
                    if (action === 'contact') {
                      e.preventDefault()
                      scrollToContact()
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-portfolio-muted hover:text-portfolio-highlight"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
