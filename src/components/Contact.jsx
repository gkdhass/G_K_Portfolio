import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  X,
} from 'lucide-react'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import Confetti from 'react-confetti'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLocked, setIsLocked] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .send(
        'service_m8prvnc',
        'template_049akar',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'C3kSMsITJ-JZMpXE7'
      )
      .then(() => {
        setIsLoading(false)
        setIsSuccess(true)
        setIsLocked(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch((err) => {
        setIsLoading(false)
        console.error(err)
        alert('Something went wrong. Please try again.')
      })
  }

  const closeSuccessPopup = () => {
    setIsSuccess(false)
    setIsLocked(false)
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
    {
      Icon: Github,
      href: 'https://github.com/gkdhass',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/mohandhassg05/',
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      Icon: FaXTwitter,
      href: 'https://x.com/Mohandhass125',
      label: 'X',
      color: 'hover:text-white',
    },
    {
      Icon: FaInstagram,
      href: 'https://www.instagram.com/g_k_dhass/', 
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-portfolio-bg-secondary"
    >
      {/* CONFETTI */}
      {isSuccess && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={350}
          gravity={0.3}
          recycle={false}
        />
      )}

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-portfolio-card border border-portfolio-card-hover/40 rounded-2xl px-10 py-8 text-center max-w-sm w-full"
            >
              <button
                onClick={closeSuccessPopup}
                className="absolute top-4 right-4 text-portfolio-muted hover:text-portfolio-highlight"
              >
                <X size={20} />
              </button>

              <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-green-400 mb-2">
                Message Sent Successfully 🎉
              </h3>

              <p className="text-portfolio-muted text-sm mb-6">
                Thank you for reaching out!  
                I’ll get back to you as soon as possible 😊
              </p>

              <button
                onClick={closeSuccessPopup}
                className="px-8 py-3 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg hover:opacity-90 transition"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className={`max-w-7xl mx-auto ${isLocked ? 'pointer-events-none blur-sm' : ''}`}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex gap-4 p-4 bg-portfolio-card rounded-lg border border-portfolio-card-hover/30"
              >
                <info.Icon className="text-portfolio-highlight" />
                <div>
                  <p className="font-semibold text-portfolio-highlight">
                    {info.title}
                  </p>
                  <p className="text-portfolio-muted">{info.value}</p>
                </div>
              </a>
            ))}

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-portfolio-card rounded-lg border border-portfolio-card-hover/30 ${color}`}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLocked || isLoading}
              required
              className="w-full px-4 py-3 bg-black/40 backdrop-blur-lg border border-white/5 rounded-lg text-[#E5E7EB]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLocked || isLoading}
              required
              className="w-full px-4 py-3 bg-black/40 backdrop-blur-lg border border-white/5 rounded-lg text-[#E5E7EB]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Project / Subject"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLocked || isLoading}
              required
              className="w-full px-4 py-3 bg-black/40 backdrop-blur-lg border border-white/5 rounded-lg text-[#E5E7EB]"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              disabled={isLocked || isLoading}
              required
              className="w-full px-4 py-3 bg-black/40 backdrop-blur-lg border border-white/5 rounded-lg text-[#E5E7EB] resize-none"
            />

            <motion.button
              type="submit"
              disabled={isLocked || isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-8 py-4 bg-portfolio-highlight text-portfolio-bg-main font-semibold rounded-lg flex justify-center items-center gap-2"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </motion.button>
          </form>
        </div>

        <div className="mt-16 pt-8 border-t border-portfolio-card-hover/30 text-center">
          <p className="text-portfolio-muted">@ Mohan Dhass G.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
