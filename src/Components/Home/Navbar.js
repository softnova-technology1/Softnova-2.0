import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Styles/Navbar.module.css";
import logo from "../../images/softnovaLogo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const timeoutRef = useRef(null);

  const services = [
    { name: "Web Development", path: "/services/WebDevelopment" },
    { name: "Mobile App Development", path: "/services/MobileAppSection" },
    { name: "E-Commerce", path: "/services/ProjectsFlip" },
    { name: "Software Development", path: "/services/Software" },
    { name: "Graphics Design", path: "/services/GraphicDesign" },
    { name: "Digital Marketing", path: "/services/DigitalMarketing" },
    { name: "Cloud and IT", path: "/services/CloudIT" },
    { name: "Other Services", path: "/services/OtherServices" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setServiceOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => setServiceOpen(false), 200);
    }
  };

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.button} ${styles.active}` : styles.button;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <NavLink to="/"><img src={logo} alt="Softnova Logo" /></NavLink>
      </div>

    
      <div className={styles.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span className={isMobileMenuOpen ? styles.lineOpen1 : ""}></span>
        <span className={isMobileMenuOpen ? styles.lineOpen2 : ""}></span>
        <span className={isMobileMenuOpen ? styles.lineOpen3 : ""}></span>
      </div>

     
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobile : ""}`}>
        <NavLink to="/" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>

        <div
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
    
          <NavLink
            to="/services"
            className={getLinkClass}
            onClick={() => {
              if (window.innerWidth <= 768) {
                setServiceOpen(!serviceOpen); 
              } else {
                setIsMobileMenuOpen(false); 
              }
            }}
          >
            Our Services ▼
          </NavLink>
          <AnimatePresence>
            {serviceOpen && (
              <motion.div
                className={styles.dropdownContent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {services.map((s, i) => (
                  <NavLink key={i} to={s.path} className={styles.dropdownItem} onClick={() => setIsMobileMenuOpen(false)}>
                    {s.name}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink to="/products" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Our Product</NavLink>
        <NavLink to="/about" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
        <a
          href="https://softnovatechnology.com/"
          className={getLinkClass({ isActive: false })} 
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Academy
        </a>
        <NavLink to="/career" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Career</NavLink>
        <NavLink to="/gallery" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/contact" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;