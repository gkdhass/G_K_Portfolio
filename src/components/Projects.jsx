import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Clone',
      description: 'Full-stack social media application with posts, comments, likes, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for portfolio websites with drag-and-drop builder and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Sanity', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking app with workout plans, progress charts, and calorie counter.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-portfolio-card rounded-lg overflow-hidden border border-portfolio-card-hover/30 hover:border-portfolio-card-hover hover:bg-portfolio-card-hover/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-bg-main/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-portfolio-highlight rounded-full text-portfolio-bg-main"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-portfolio-highlight rounded-full text-portfolio-bg-main"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

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
                      className="px-3 py-1 bg-portfolio-bg-secondary text-portfolio-muted text-xs rounded-full"
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
