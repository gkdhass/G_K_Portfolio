import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 ${
        isScrolled
          ? "bg-portfolio-bg-secondary/90 backdrop-blur-md shadow-lg"
          : "bg-portfolio-bg-secondary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3 max-w-full overflow-hidden">
            <img
              src={logo}
              alt="Logo"
              className="
                h-14 w-14
                sm:h-16 sm:w-16
                md:h-16 md:w-16
                lg:h-20 lg:w-20
                object-contain
                max-w-full
              "
            />

            <span
              className="
                font-bold text-portfolio-highlight
                text-lg
                sm:text-xl
                md:text-xl
                lg:text-2xl
                whitespace-nowrap
              "
              style={{
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.6), 0 0 12px rgba(250,161,20,0.4)",
              }}
            >
              Mohan<span className="text-white">Dhass</span>
            </span>
          </div>

          {/* DESKTOP / TABLET MENU */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-portfolio-muted hover:text-portfolio-highlight transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-portfolio-highlight group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-portfolio-highlight"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden w-full overflow-hidden bg-portfolio-bg-secondary"
      >
        <div className="px-4 py-3 space-y-1 max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block rounded-md px-3 py-2 text-portfolio-muted hover:text-portfolio-highlight hover:bg-portfolio-card transition-all duration-300"
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
