import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Styles/Navbar.module.css";
import logo from "../../images/softnovaLogo.webp";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const timeoutRef = useRef(null);
  const DESKTOP_BREAKPOINT = 1024;

  const services = [
    { name: "Web Development", path: "/services/WebDevelopment" },
    { name: "Mobile App Development", path: "/services/MobileAppSection" },
    { name: "E-Commerce", path: "/services/ECommerce" },
    { name: "Software Development", path: "/services/SoftwareDevelopment" },
    { name: "Graphics Design", path: "/services/GraphicDesign" },
    { name: "Digital Marketing", path: "/services/DigitalMarketing" },
    { name: "Cloud and IT", path: "/services/CloudandIT" },
    { name: "Other Services", path: "/services/OtherServices" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleMouseEnter = () => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT + 1) {
      clearTimeout(timeoutRef.current);
      setServiceOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT + 1) {
      timeoutRef.current = setTimeout(() => setServiceOpen(false), 200);
    }
  };

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.button} ${styles.active}` : styles.button;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>

      {/* ── Decorative Geometric Shapes ── */}
      <div className={styles.navShapes} aria-hidden="true">
        <svg width="100%" height="70" viewBox="0 0 1440 70" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "70px" }}>

          {/* ── FAR LEFT: Corner bracket + filled triangle ── */}
          <polygon points="0,0 36,0 0,36" fill="rgba(254,133,30,0.28)" />
          <polyline points="42,0 42,12 54,12" stroke="rgba(254,133,30,0.55)" strokeWidth="1.5" fill="none" />

          {/* ── LEFT ZONE: Diamond cluster ── */}
          <polygon points="110,8 124,35 110,62 96,35"
            stroke="rgba(254,133,30,0.55)" strokeWidth="1.5" fill="rgba(254,133,30,0.06)" />
          <polygon points="140,22 150,35 140,48 130,35"
            stroke="rgba(254,133,30,0.4)" strokeWidth="1.2" fill="rgba(254,133,30,0.08)" />
          <circle cx="162" cy="35" r="2.5" fill="rgba(254,133,30,0.6)" />
          <line x1="168" y1="35" x2="192" y2="35" stroke="rgba(254,133,30,0.35)" strokeWidth="1" strokeDasharray="3 3" />

          {/* ── CENTER-LEFT: Hexagon ── */}
          <polygon points="290,12 306,5 322,12 322,28 306,35 290,28"
            stroke="rgba(254,133,30,0.45)" strokeWidth="1.4" fill="rgba(254,133,30,0.07)" />
          <circle cx="306" cy="20" r="3" fill="rgba(254,133,30,0.5)" />

          {/* ── CENTER: Scanning / signal lines ── */}
          <line x1="560" y1="20" x2="610" y2="20" stroke="rgba(254,133,30,0.5)" strokeWidth="1.2" strokeDasharray="6 4" />
          <line x1="560" y1="28" x2="595" y2="28" stroke="rgba(254,133,30,0.3)" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="560" y1="36" x2="605" y2="36" stroke="rgba(254,133,30,0.4)" strokeWidth="1" strokeDasharray="5 3" />
          <circle cx="555" cy="28" r="3" fill="rgba(254,133,30,0.55)" />
          <circle cx="555" cy="28" r="7" stroke="rgba(254,133,30,0.2)" strokeWidth="1" fill="none" />

          {/* ── CENTER-RIGHT: Large rotating ring (visible outline) ── */}
          <circle cx="820" cy="35" r="28" stroke="rgba(254,133,30,0.25)" strokeWidth="1.2" fill="none" strokeDasharray="6 5" />
          <circle cx="820" cy="35" r="16" stroke="rgba(254,133,30,0.35)" strokeWidth="1.5" fill="rgba(254,133,30,0.04)" />
          <circle cx="820" cy="35" r="4" fill="rgba(254,133,30,0.55)" />
          {/* Crosshair on ring */}
          <line x1="820" y1="14" x2="820" y2="56" stroke="rgba(254,133,30,0.18)" strokeWidth="1" />
          <line x1="799" y1="35" x2="841" y2="35" stroke="rgba(254,133,30,0.18)" strokeWidth="1" />

          {/* ── RIGHT ZONE: Circuit node cluster ── */}
          <circle cx="1060" cy="18" r="3.5" fill="rgba(254,133,30,0.6)" />
          <circle cx="1090" cy="30" r="2.5" fill="rgba(254,133,30,0.45)" />
          <circle cx="1075" cy="52" r="2" fill="rgba(254,133,30,0.38)" />
          <line x1="1060" y1="18" x2="1090" y2="30" stroke="rgba(254,133,30,0.4)" strokeWidth="1.2" />
          <line x1="1090" y1="30" x2="1075" y2="52" stroke="rgba(254,133,30,0.3)" strokeWidth="1" />
          <line x1="1060" y1="18" x2="1075" y2="52" stroke="rgba(254,133,30,0.22)" strokeWidth="1" />

          {/* ── FAR RIGHT: Large diamond + bracket ── */}
          <polygon points="1310,5 1335,35 1310,65 1285,35"
            stroke="rgba(254,133,30,0.5)" strokeWidth="1.5" fill="rgba(254,133,30,0.07)" />
          <polygon points="1352,18 1368,35 1352,52 1336,35"
            stroke="rgba(254, 135, 30, 0.46)" strokeWidth="1.5" fill="rgba(254,133,30,0.12)" />
          <circle cx="1352" cy="35" r="3" fill="rgba(254, 135, 30, 0.56)" />

          {/* Dashed accent line */}
          <line x1="1382" y1="35" x2="1435" y2="35"
            stroke="rgba(254,133,30,0.45)" strokeWidth="1.2" strokeDasharray="5 3" />

          {/* Arc curve far right */}
          <path d="M1430,70 Q1460,35 1430,0"
            stroke="rgba(254,133,30,0.3)" strokeWidth="1.5" fill="none" />

          {/* Bottom-right corner fill */}
          <polygon points="1440,52 1440,70 1422,70" fill="rgba(254,133,30,0.22)" />

        </svg>
      </div>


      <div className={styles.logo}>
        <NavLink to="/">
          <img loading="lazy" src={logo} alt="Softnova Logo" />
        </NavLink>
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
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <div className={styles.dropdownLabel}>Our Services</div>
                {services.map((s, i) => (
                  <NavLink
                    key={i}
                    to={s.path}
                    className={styles.dropdownItem}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.name}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <NavLink to="/products" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Our Product
        </NavLink>

        <NavLink to="/about" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          About Us
        </NavLink>

        <a
          href="https://softnovatechnology.com/"
          className={getLinkClass({ isActive: false })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Academy
        </a>

        <NavLink to="/career" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Career
        </NavLink>

        <NavLink to="/gallery" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Gallery
        </NavLink>

        <NavLink to="/contact" className={getLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
