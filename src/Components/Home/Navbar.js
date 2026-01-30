import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Styles/Navbar.module.css";
import logo from "../../images/softnovaLogo.png";
import { motion, AnimatePresence } from "framer-motion"; // Animation add pannirukom

const Navbar = () => {
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

  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null); // Mouse out aagum pothu delay kudukka

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse mela varum pothu
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServiceOpen(true);
  };

  // Mouse veliya pogum pothu chinna delay (Ithuthaan main fix)
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServiceOpen(false);
    }, 200); // 200ms delay - ithu dropdown-ah nirkavaikum
  };

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.button} ${styles.active}` : styles.button;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <NavLink to="/"><img src={logo} alt="Softnova Logo" /></NavLink>
      </div>

      <div className={styles.menuLeft}>
        <NavLink to="/" className={getLinkClass}>Home</NavLink>

        <div
          ref={dropdownRef}
          className={styles.dropdown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/services" className={styles.button}>
            Our Services ▼
          </NavLink>

          <AnimatePresence>
            {serviceOpen && (
              <motion.div 
                className={styles.dropdownContent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {services.map((service, i) => (
                  <NavLink
                    key={i}
                    to={service.path}
                    className={getLinkClass}
                    onClick={() => setServiceOpen(false)}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink to="/products" className={getLinkClass}>Our Product</NavLink>
        <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
      </div>

      <div className={styles.menuRight}>
        <NavLink to="/academy" className={getLinkClass}>Academy</NavLink>
        <NavLink to="/foundation" className={getLinkClass}>Foundation</NavLink>
        <NavLink to="/career" className={getLinkClass}>Career</NavLink>
        <NavLink to="/gallery" className={getLinkClass}>Gallery</NavLink>
        <NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;