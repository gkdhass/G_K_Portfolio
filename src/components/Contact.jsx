import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'mohan.dhass@example.com',
      href: 'mailto:mohan.dhass@example.com',
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+91 12345 67890',
      href: 'tel:+911234567890',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: '#',
    },
  ]

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { Icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full"></div>
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-portfolio-highlight mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-portfolio-card rounded-lg border border-portfolio-card-hover/30 hover:border-portfolio-card-hover transition-all duration-300"
                  >
                    <div className="p-3 bg-portfolio-bg-secondary rounded-lg">
                      <info.Icon className="text-portfolio-highlight" size={24} />
                    </div>
                    <div>
                      <h4 className="text-portfolio-highlight font-semibold mb-1">{info.title}</h4>
                      <p className="text-portfolio-muted">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-portfolio-highlight mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-portfolio-card rounded-lg border border-portfolio-card-hover/30 hover:border-portfolio-card-hover transition-all duration-300 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-portfolio-highlight font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg text-portfolio-highlight placeholder-portfolio-muted focus:outline-none focus:border-portfolio-highlight focus:ring-2 focus:ring-portfolio-highlight/30 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-portfolio-highlight font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg text-portfolio-highlight placeholder-portfolio-muted focus:outline-none focus:border-portfolio-highlight focus:ring-2 focus:ring-portfolio-highlight/30 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-portfolio-highlight font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg text-portfolio-highlight placeholder-portfolio-muted focus:outline-none focus:border-portfolio-highlight focus:ring-2 focus:ring-portfolio-highlight/30 transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-portfolio-highlight font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg text-portfolio-highlight placeholder-portfolio-muted focus:outline-none focus:border-portfolio-highlight focus:ring-2 focus:ring-portfolio-highlight/30 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(204, 208, 207, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg glow-effect-hover transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-portfolio-card-hover/30 text-center"
        >
          <p className="text-portfolio-muted">
            © 2026 Mohan Dhass G. All rights reserved. Built with React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
