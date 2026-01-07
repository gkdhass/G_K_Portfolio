import React from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import Profile from '../assets/profile.jpg'

const Hero = () => {
  /* ================= CONTACT SCROLL ================= */
  const scrollToContact = () => {
    const section = document.getElementById('contact')
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  /* ================= 3D PARALLAX (DESKTOP ONLY) ================= */
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024

  const handleMouseMove = (e) => {
    if (!isDesktop) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const resetTilt = () => {
    if (!isDesktop) return
    x.set(0)
    y.set(0)
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
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              style={{
                rotateX: isDesktop ? rotateX : 0,
                rotateY: isDesktop ? rotateY : 0,
                transformStyle: 'preserve-3d',
              }}
              whileHover={isDesktop ? { scale: 1.04 } : {}}
              transition={{ type: 'spring', stiffness: 50, damping: 22 }}
              className="relative group"
            >
              {/* SHADOW */}
              <div
                className="
                  absolute inset-0 rounded-full blur-3xl scale-110 -z-10
                  bg-portfolio-highlight/40
                  opacity-100
                  lg:opacity-0 lg:group-hover:opacity-100
                  transition-opacity duration-500
                "
              />

              {/* IMAGE */}
              <div
                className="
                  w-64 h-64
                  sm:w-72 sm:h-72
                  md:w-80 md:h-80
                  lg:w-[26rem] lg:h-[26rem]
                  rounded-full overflow-hidden
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
