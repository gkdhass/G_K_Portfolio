import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certifications = [
    {
      title: 'Tech@Bangalore DC',
      issuer: 'Infosys',
      date: 'November 2025',
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202402/Infosys.jpg%3FVersionId%3DHRtTL6C78uQGA5mk4yrabvJZTm.p6dyd?VersionId=zA89rQxSlXLYYJo2X5XB0zZsNwgjtSCc',
      credentialUrl: 'https://drive.google.com/file/d/1PTi-K7IKURtpDyPdNc_JSjPZ259K8sxg/view?usp=sharing',
    },
    {
      title: 'Programming in Java ',
      issuer: 'NPTEL',
      date: 'January-April 2025',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bZNVTSbx_rVcsv-trrFaJxzD4uGc4KSCHw&s',
      credentialUrl: 'https://drive.google.com/file/d/1DVe_blz82yAveWOJatBn7HHN9sEh7yEf/view?usp=sharing',
    },
    {
      title: 'Intership 6.0 on MERN Stack Development',
      issuer: 'Infosys Springboard',
      date: 'September-November 2025',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tzQe2wAA9Dt_ixEGMDTKYEUmC9Riw1I7fQ&s',
      credentialUrl: 'https://drive.google.com/file/d/1Qvk7x--o6mBq1jjiJM6Rets0xgd5eZuz/view?usp=sharing',
    },
    {
      title: 'Software Testing',
      issuer: 'NPTEL',
      date: 'July-October 2025',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bZNVTSbx_rVcsv-trrFaJxzD4uGc4KSCHw&s',
      credentialUrl: 'https://drive.google.com/file/d/1L2ELDc5Qe9zSaG12KZWXFaLfWM3USVpT/view?usp=sharing',
    },
    {
      title: 'Young Professional ',
      issuer: 'TCS ion',
      date: 'June-July 2025',
      image: 'https://mir-s3-cdn-cf.behance.net/projects/404/daca8c154289491.Y3JvcCw4NTAsNjY0LDAsMTY.jpg',
      credentialUrl: 'https://drive.google.com/file/d/1l96a_eol_-g-z4T_fJG-J_RsbLOEnzuh/view?usp=sharing',
    },
    {
      title: 'Java Courses',
      issuer: 'SDLC',
      date: 'July-Decemeber 2024',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGk1SpLwM5i8i0Dn5kDSo0jk-WIpADVF5Ug&s',
      credentialUrl: 'https://drive.google.com/file/d/1L2ygz93UX19Vhlzbd1yh_w7PBvmFfeqw/view?usp=sharing',
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
