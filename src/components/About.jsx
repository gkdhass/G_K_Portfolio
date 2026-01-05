import React, { useRef, useEffect, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { Code2, Rocket, Users } from 'lucide-react'
import Photo from '../assets/profile.jpg'
import CV from '../assets/Mohandhass.pdf'

/* ================= DEVICE DETECTION ================= */
const useDevice = () => {
  const [device, setDevice] = useState('desktop')

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setDevice('mobile')
      else if (window.innerWidth < 1024) setDevice('tablet')
      else setDevice('desktop')
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return device
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const device = useDevice()
  const reducedMotion = useReducedMotion()

  const enable3D = device === 'desktop' && !reducedMotion
  const tablet3D = device === 'tablet' && !reducedMotion

  /* ================= 3D PARALLAX ================= */
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const depth = enable3D ? 14 : tablet3D ? 6 : 0
  const rotateX = useTransform(y, [-0.5, 0.5], [depth, -depth])
  const rotateY = useTransform(x, [-0.5, 0.5], [-depth, depth])

  const handleMouseMove = (e) => {
    if (!enable3D) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

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
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary overflow-hidden"
      style={{ perspective: enable3D ? '1200px' : 'none' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4"
            animate={enable3D ? { y: [-2, 2, -2] } : {}}
            transition={enable3D ? { duration: 4, repeat: Infinity } : {}}
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ================= IMAGE (3D PARALLAX) ================= */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            style={{
              rotateX: enable3D || tablet3D ? rotateX : 0,
              rotateY: enable3D || tablet3D ? rotateY : 0,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative max-w-md rounded-xl">
              <img
                src={Photo}
                alt="Profile"
                className="rounded-xl w-full shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-400/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-portfolio-muted text-lg leading-relaxed">
              I'm a passionate Full Stack Developer focused on building modern,
              responsive, and performance-driven web applications.
            </p>

            <p className="text-portfolio-muted text-lg leading-relaxed">
              I work with React, Node.js, and modern UI systems to deliver clean,
              scalable, and premium user experiences.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
                  whileHover={
                    enable3D
                      ? { scale: 1.06 }
                      : tablet3D
                      ? { scale: 1.03 }
                      : {}
                  }
                  className="bg-portfolio-card p-4 rounded-xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
                >
                  <feature.Icon className="text-portfolio-highlight mb-2" size={30} />
                  <h4 className="text-portfolio-highlight font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-portfolio-muted text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ================= DOWNLOAD CV ================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a href={CV} download>
                <motion.button
                  whileHover={
                    enable3D ? { scale: 1.08 } : tablet3D ? { scale: 1.04 } : {}
                  }
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg shadow-[0_0_35px_rgba(0,255,255,0.35)] transition-all"
                >
                  Download CV
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
