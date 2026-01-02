import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'December 2023',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      credentialUrl: '#',
    },
    {
      title: 'React - The Complete Guide',
      issuer: 'Coursera',
      date: 'November 2023',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      credentialUrl: '#',
    },
    {
      title: 'Node.js Advanced Concepts',
      issuer: 'Udemy',
      date: 'October 2023',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
      credentialUrl: '#',
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: 'September 2023',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
      credentialUrl: '#',
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: 'August 2023',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
      credentialUrl: '#',
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'July 2023',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      credentialUrl: '#',
    },
  ]

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Professional certifications and courses I've completed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-portfolio-card rounded-lg overflow-hidden border border-portfolio-card-hover/30 hover:border-portfolio-card-hover transition-all duration-300 shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-portfolio-highlight/90 p-2 rounded-full">
                    <Award className="text-portfolio-bg-main" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-highlight mb-2">
                  {cert.title}
                </h3>
                <p className="text-portfolio-muted mb-1">{cert.issuer}</p>
                <p className="text-portfolio-muted text-sm mb-4">{cert.date}</p>

                <motion.a
                  href={cert.credentialUrl}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(204, 208, 207, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-bg-secondary text-portfolio-highlight rounded-lg hover:bg-portfolio-card-hover transition-all duration-300"
                >
                  View Credential
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
