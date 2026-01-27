import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Styles/Navbar.module.css";
import logo from "../../images/softnovaLogo.png";

const Navbar = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.button} ${styles.active}` : styles.button;

  // Close dropdown when click outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(`.${styles.dropdown}`)) {
        setServiceOpen(false);
      }
    };
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

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
        <div
          className={styles.dropdown}
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <NavLink className={styles.button} to="/services">
            Our Services ▼
          </NavLink>

          {serviceOpen && (
            <div className={styles.dropdownContent}>
              {[...Array(7)].map((_, i) => (
                <NavLink
                  key={i}
                  to={`/services/service-${i + 1}`}
                  className={getLinkClass}
                  onClick={() => setServiceOpen(false)} // ✅ Close dropdown on click
                >
                  Service {i + 1}
                </NavLink>
              ))}
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
