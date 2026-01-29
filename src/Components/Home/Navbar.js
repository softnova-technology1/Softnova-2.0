import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Styles/Navbar.module.css";
import logo from "../../images/softnovaLogo.png";

const Navbar = () => {
  const services = [
    { name: "Web Development", path: "/services/WebDevelopment" },
    { name: "Mobile App Development", path: "/services/MobileAppSection" },
    { name: "E-Commerce", path: "/services/ProjectsFlip" },
    { name: "Software Development", path: "/services/Software" },
    { name: "Graphics Design", path: "/services/GraphicDesign" },
    { name: "Digital Marketing", path: "/services/DigitalMarketing" },
    { name: "Cloud and IT", path: "/services/CloudIT" },
      { name: "other Services", path: "/services/ OtherServices" },
    { name: "Graphics Design", path: "/services/cloud" },
    { name: "Digital Marketing", path: "/services/ai" },
    { name: "Cloud and IT", path: "/services/support" },
    { name: "Other Services", path: "/services/support" },
  ];

  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.button} ${styles.active}` : styles.button;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
          ref={dropdownRef}
          className={styles.dropdown}
          onMouseEnter={() => setServiceOpen(true)}
          onMouseLeave={() => setServiceOpen(false)}
        >
          <NavLink to="/services" className={styles.button}>
            Our Services ▼
          </NavLink>

          {serviceOpen && (
            <div className={styles.dropdownContent}>
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
  