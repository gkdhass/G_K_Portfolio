import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, X } from 'lucide-react'
import emailjs from '@emailjs/browser'

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

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      },
      (error) => {
        console.error(error)
        alert('Something went wrong. Please try again later.')
      }
    )
  }

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'mohandhassgovind@gmail.com',
      href: 'mailto:mohandhassgovind@gmail.com',
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+91 8610326514',
      href: 'tel:+918610326514',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Karur, Tamil Nadu, India',
      href: 'https://maps.google.com',
    },
  ]

  const socialLinks = [
    { Icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { Icon: X, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary"
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-portfolio-highlight mx-auto rounded-full" />
          <p className="text-portfolio-muted mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
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
                    className="flex gap-4 p-4 bg-portfolio-card rounded-lg border border-portfolio-card-hover/30 hover:border-portfolio-card-hover"
                  >
                    <div className="p-3 bg-portfolio-bg-secondary rounded-lg">
                      <info.Icon size={24} className="text-portfolio-highlight" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-portfolio-highlight">
                        {info.title}
                      </h4>
                      <p className="text-portfolio-muted">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="text-xl font-bold text-portfolio-highlight mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-portfolio-card rounded-lg border border-portfolio-card-hover/30 ${color}`}
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block mb-2 text-sm font-medium text-portfolio-highlight">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg
                    text-portfolio-highlight placeholder-portfolio-muted
                    focus:bg-white focus:text-black focus:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-portfolio-highlight transition-all"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-medium text-portfolio-highlight">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg
                    text-portfolio-highlight placeholder-portfolio-muted
                    focus:bg-white focus:text-black focus:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-portfolio-highlight transition-all"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block mb-2 text-sm font-medium text-portfolio-highlight">
                  Project 
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="CodeCraft"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg
                    text-portfolio-highlight placeholder-portfolio-muted
                    focus:bg-white focus:text-black focus:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-portfolio-highlight transition-all"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 text-sm font-medium text-portfolio-highlight">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-card border border-portfolio-card-hover/30 rounded-lg resize-none
                    text-portfolio-highlight placeholder-portfolio-muted
                    focus:bg-white focus:text-black focus:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-portfolio-highlight transition-all"
                />
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg flex justify-center gap-2"
              >
                Send Message <Send size={20} />
              </motion.button>

            </form>
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-portfolio-card-hover/30 text-center"
        >
          <p className="text-portfolio-muted">@ Mohan Dhass G.</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact











// .send(
//         'service_m8prvnc',//service ID
//         'template_049akar',//template ID
//         {
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         'C3kSMsITJ-JZMpXE7' //public key
//       )