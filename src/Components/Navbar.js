import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import logo from "../images/softnovaLogo.png";

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link class
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.button} ${styles.active}` : styles.button;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logo} alt="Softnova Logo" />
        </NavLink>
      </div>

      {/* Left menu */}
      <div className={styles.menuLeft}>
        <NavLink to="/" className={getLinkClass}>
          Home
        </NavLink>

        {/* Services Dropdown */}
        <div className={styles.dropdown}>
          <span
            className={styles.button}
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            Our Service ▼
          </span>

          {serviceOpen && (
            <div className={styles.dropdownContent}>
              <NavLink
                to="/services/service-1"
                className={getLinkClass}
                onClick={() => setServiceOpen(false)}
              >
                Service 1
              </NavLink>
              <NavLink
                to="/services/service-2"
                className={getLinkClass}
                onClick={() => setServiceOpen(false)}
              >
                Service 2
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/products" className={getLinkClass}>
          Our Product
        </NavLink>
        <NavLink to="/about" className={getLinkClass}>
          About Us
        </NavLink>
      </div>

      {/* Right menu */}
      <div className={styles.menuRight}>
        <NavLink to="/academy" className={getLinkClass}>
          Academy
        </NavLink>
        <NavLink to="/foundation" className={getLinkClass}>
          Foundation
        </NavLink>
        <NavLink to="/career" className={getLinkClass}>
          Career
        </NavLink>
        <NavLink to="/gallery" className={getLinkClass}>
          Gallery
        </NavLink>
        <NavLink to="/contact" className={getLinkClass}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
