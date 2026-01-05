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
      githubUrl: 'https://github.com/gkdhass/EventHub.git',
    },
    {
      title: 'Spotify Clone',
      description:
        'A full-stack Spotify clone that lets users stream music, browse albums and playlists, and discover new tracks seamlessly.Includes user authentication, real-time playback controls, personalized playlists, and a smooth, responsive UI.',
      image:
        'https://martech.org/wp-content/uploads/2017/09/spotify-logo-1920x1080.jpg',
      technologies: ['React', 'Node.js', 'Express.js', 'Mongo_DB'],
      liveUrl: 'https://spotify-ebon-six.vercel.app/',
      githubUrl: 'https://github.com/gkdhass/Spotify-clone.git',
    },
    {
      title: 'Portfolio CMS',
      description:
        'Content management system for portfolio websites with drag-and-drop builder and SEO optimization.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Sanity', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Car Expo',
      description:
        'A car experience showcase website that highlights vehicle design and features through immersive visuals, smooth scrolling, and interactive animations.',
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/auto_lead-sixteen_nine.jpg?VersionId=TBALfgUHqFcEndT.anUS_OZgXg2Oj.Nq&size=690:388',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://car-dusky-iota.vercel.app/',
      githubUrl: 'https://github.com/gkdhass/gkdhass-car-exp.git',
    },
    {
      title: 'Fitness Tracker',
      description:
        'Mobile-responsive fitness tracking app with workout plans, progress charts, and calorie counter.',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full" />
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-portfolio-card rounded-lg overflow-hidden
                         border border-portfolio-card-hover/30
                         hover:border-portfolio-card-hover
                         hover:bg-portfolio-card-hover/50
                         transition-all duration-300 shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover
                             group-hover:scale-110
                             transition-transform duration-500"
                />

                {/* HOVER ICONS */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-portfolio-bg-main/90 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300
                             flex items-end justify-center pb-4 gap-4"
                >
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-portfolio-highlight
                                 rounded-full text-portfolio-bg-main"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}

                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
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
                      className="px-3 py-1 bg-portfolio-bg-secondary
                                 text-portfolio-muted text-xs rounded-full"
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
