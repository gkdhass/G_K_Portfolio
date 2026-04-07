import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Event from '../assets/Event.jpg'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Campus EventHub',
      description:
        'Campus EventHub is a modern web application that enables students to easily discover, register for, and manage campus events through an intuitive and user-friendly interface.',
      image: Event,
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Chart.js',
        'JWT Authentication',
      ],
      githubUrl: 'https://github.com/gkdhass/Event-Hub.git',
      liveUrl: 'https://gkeventhub.vercel.app',
    },
    {
      title: 'Spotify Clone',
      description:
        'A full-stack Spotify clone with authentication, playlists, real-time playback controls, and a smooth responsive UI.',
      image:
        'https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg',
      technologies: ['React', 'Node.js', 'Express.js', 'Mongo_DB'],
      liveUrl: 'https://mohanmusic.vercel.app/',
      githubUrl: 'https://github.com/gkdhass/Spotify-clone.git',
    },
    {
      title: 'Portfolio GK',
      description:
        'Personal portfolio showcasing projects, skills, animations, and responsive design.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://mohandhass.vercel.app/',
      githubUrl: 'https://github.com/gkdhass/G_K_Portfolio.git',
    },
    {
      title: 'Car Expo',
      description:
        'A car showcase website with immersive visuals, smooth scrolling, and interactive animations.',
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/auto_lead-sixteen_nine.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://car-dusky-iota.vercel.app/',
      githubUrl: 'https://github.com/gkdhass/gkdhass-car-exp.git',
    },
    {
      title: 'Tasty Food',
      description:
        'Frontend food website for browsing dishes, menus, and food presentation with rich UI.',
      image:
        'https://img.delicious.com.au/8M8wjiSn/del/2024/11/digi_pasta-primavera-220813-1.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://tastefood-rho.vercel.app/',
      githubUrl: 'https://github.com/gkdhass/taste.git',
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full" />
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{
                y: -12,
                scale: 1.04,
                boxShadow: '0 0 40px rgba(0,255,255,0.25)',
              }}
              className="bg-portfolio-card rounded-xl overflow-hidden
                         border border-portfolio-card-hover/30
                         hover:border-portfolio-highlight
                         transition-all duration-300
                         shadow-[0_10px_30px_rgba(0,0,0,0.45)]
                         active:scale-[0.98] lg:active:scale-100"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover
                             transition-transform duration-700 ease-out
                             group-hover:scale-110
                             brightness-95 group-hover:brightness-110"
                />

                {/* HOVER ICONS */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-black/90 via-black/40 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-400
                             flex items-end justify-center pb-4 gap-4"
                >
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.15 }}
                      className="p-2 bg-portfolio-highlight
                                 rounded-full text-portfolio-bg-main"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.15 }}
                      className="p-2 bg-portfolio-highlight
                                 rounded-full text-portfolio-bg-main"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-highlight mb-2">
                  {project.title}
                </h3>
                <p className="text-portfolio-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full
                                 bg-white/5 backdrop-blur
                                 border border-white/10
                                 text-portfolio-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
