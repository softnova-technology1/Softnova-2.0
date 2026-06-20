import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Mobile.module.css";
import Mobileapps1 from "../../images/Ourservices-images/booking.webp";
import Mobileapps2 from "../../images/Ourservices-images/delivery.webp";
import Mobileapps3 from "../../images/Ourservices-images/management.jpg";
import Mobileapps4 from "../../images/Ourservices-images/ticket.webp";
import Mobileapps5 from "../../images/Ourservices-images/ecommercee.webp";
import mobile from "../../images/Ourservices-images/mobilefront1.png";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    img: Mobileapps1,
    title: "Booking App",
    desc: "A seamless booking experience with intuitive design, secure payment integration, and real-time availability tracking for hassle-free reservations.",
    details: "A complete booking platform designed to provide users with a smooth and hassle-free reservation experience. Our solutions include real-time availability tracking, secure payment gateway integration, and user-friendly navigation. Customers can easily book services, manage schedules, and receive instant confirmations. The platform is optimized for both mobile and web applications to ensure accessibility across devices. Advanced analytics and management tools help businesses monitor bookings efficiently. Built with modern UI/UX principles to deliver speed, convenience, and reliability."
  },
  {
    id: 2,
    img: Mobileapps2,
    title: "Delivery App",
    desc: "Fast and reliable delivery solutions with live order tracking, smart route optimization, and smooth customer experience management.",
    details: "A smart delivery management solution built to simplify and speed up the entire delivery process. The application supports live order tracking, instant notifications, and route optimization for efficient operations. Customers can place orders seamlessly while businesses can manage deliveries in real time. Integrated payment systems and automated updates improve customer satisfaction and engagement. The platform is scalable for food delivery, courier services, and e-commerce logistics. Designed with performance-focused architecture and an intuitive user experience."
  },
  {
    id: 3,
    img: Mobileapps3,
    title: "Management App",
    desc: "Efficient management systems designed to streamline workflows, organize tasks, improve collaboration, and deliver insightful analytics.",
    details: "An all-in-one management platform created to streamline business workflows and team operations. The system includes task management, project tracking, employee coordination, and reporting tools. Businesses can monitor progress, manage resources, and improve productivity from a centralized dashboard. Real-time analytics and smart insights help organizations make informed decisions quickly. The application supports secure access control and smooth collaboration between departments. Built with scalable technology and modern interfaces for efficient day-to-day management."
  },
  {
    id: 4,
    img: Mobileapps4,
    title: "Ticket Booking App",
    desc: "Smart ticket booking platforms for travel, events, and entertainment with instant confirmation, digital passes, and secure transactions.",
    details: "A modern ticket booking application developed for travel, entertainment, and event reservations. Users can search, compare, and book tickets instantly with secure payment integration. The platform offers digital ticket generation, booking history, and real-time seat availability updates. Advanced filtering and quick checkout features ensure a seamless booking experience. Businesses can manage schedules, pricing, and customer data efficiently through admin tools. Designed to deliver convenience, speed, and reliability across mobile and web platforms."
  },
  {
    id: 5,
    img: Mobileapps5,
    title: "E-Commerce",
    desc: "Modern e-commerce solutions with responsive design, advanced product management, personalized shopping experiences, and secure checkout systems.",
    details: "A scalable e-commerce platform crafted to deliver powerful online shopping experiences. The system supports advanced product management, secure checkout, and personalized customer journeys. Features include smart search, wishlist functionality, order tracking, and multiple payment integrations. Businesses can manage inventory, promotions, and customer engagement through an intuitive dashboard. The platform is optimized for performance, responsiveness, and seamless multi-device accessibility. Built with modern technologies to support business growth and high-volume online sales."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const MobileAppSection = () => {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openCanvas = (project) => {
    setSelectedProject(project);
    setIsCanvasOpen(true);
  };

  const closeCanvas = () => {
    setIsCanvasOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Breadcrumb />
      <section className={styles.mobileAppSection}>
        <div className={styles.container}>

          <motion.div
            className={styles.hero}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.heroText}>
              <motion.span
                initial={{ letterSpacing: "0px" }}
                whileInView={{ letterSpacing: "3px" }}
                className={styles.tagLine}
              >
                MOBILE APP DEVELOPMENT
              </motion.span>
              <h1 className={styles.title}>
                <span>Mobile apps</span> <br />
                designed for speed, usability, and impact
              </h1>
              <p className={styles.description}>
                We develop intuitive, high-performance mobile applications for iOS
                and Android, tailored to your business objectives.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fe851e", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaBtn}
              >
                <Link to="/Contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Connect With Us
                </Link>
              </motion.button>
            </div>

            <motion.div
              className={styles.heroImageWrapper}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              <img loading="lazy" src={mobile} alt="Mobile App" className={styles.floatingImage} />
              <div className={styles.orangeGlow}></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.projectsWrapper}>
        <div className={styles.container}>
          <div className={styles.projectsSection}>
            <div className={styles.projectsHeader}>
              <div className={styles.orangeLine}></div>
              <h2>OUR PROJECTS</h2>
            </div>
            <motion.div
              className={styles.projectsGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className={styles.projectCard}
                  variants={cardVariants}
                  whileHover={{ y: -15 }}
                >
                  <div className={styles.cardImageContainer}>
                    <img loading="lazy" src={project.img} alt={project.title} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <div className={styles.cardFooter}>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className={styles.arrow}
                        style={{ cursor: 'pointer' }}
                        onClick={() => openCanvas(project)}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <AnimatePresence>
        {isCanvasOpen && (
          <>
            <motion.div
              className={styles.canvasOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCanvas}
            />
            <motion.div
              className={styles.sideCanvas}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button className={styles.closeBtn} onClick={closeCanvas}>
                ✕ Remove
              </button>

              <div className={styles.canvasBody}>
                {selectedProject && (
                  <>
                    <img loading="lazy" src={selectedProject.img} alt={selectedProject.title} className={styles.canvasImg} />
                    <h2>{selectedProject.title}</h2>
                    <p>{selectedProject.desc}</p>
                    <div className={styles.canvasDetails}>
                      <p><strong>Project Overview:</strong> {selectedProject.details}</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileAppSection;