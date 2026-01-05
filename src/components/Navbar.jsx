import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-portfolio-bg-secondary/90 backdrop-blur-md shadow-lg"
          : "bg-portfolio-bg-secondary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* 🔥 LOGO (RESPONSIVE) */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Logo Image */}
            <motion.img
              src={logo}
              alt="Logo"
              className="
                h-12 w-12
                md:h-14 md:w-14
                lg:h-16 lg:w-16
                object-contain
              "
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6 },
                },
              }}
              whileHover={{ scale: 1.08 }}
            />

            {/* Logo Text */}
            <motion.span
              className="
                font-bold text-portfolio-highlight
                text-lg
                md:text-xl
                lg:text-2xl
              "
              style={{
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.6), 0 0 12px rgba(250,161,20,0.4)",
              }}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
            >
              Mohan<span className="text-white">Dhass</span>
            </motion.span>
          </motion.div>

          {/* DESKTOP + TABLET MENU */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="
                  relative text-portfolio-muted
                  hover:text-portfolio-highlight
                  transition-colors duration-300 group
                "
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-portfolio-highlight transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-portfolio-highlight"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-portfolio-bg-secondary"
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="
                block rounded-md px-3 py-2
                text-portfolio-muted
                hover:text-portfolio-highlight
                hover:bg-portfolio-card
                transition-all duration-300
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
