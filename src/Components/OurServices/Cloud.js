import React, { useEffect, useRef } from "react";
import styles from "../../Styles/Cloud.module.css";
import shieldImg from "../../images/Ourservices-images/cloudit.png";
import img1 from "../../images/Ourservices-images/cloudd.png";
import img2 from "../../images/Ourservices-images/It_Consulting.webp";
import img4 from "../../images/Ourservices-images/backup.jpeg";
import Breadcrumb from "../BreadCrumb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className={styles.svg}>
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

const CloudandIT = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Breadcrumb />

      {/* HERO SECTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.flexWrapper}>
            <div
              className={styles.content}
              ref={(el) => (revealRefs.current[0] = el)}
            >
              <span className={styles.tag}>Cloud & IT Service</span>
              <h1 className={styles.title}>
                Secure, efficient, and scalable <span>IT and cloud services</span>
              </h1>
              <p className={styles.desc}>
                Softnova Technology’s Cloud & IT expertise empowers businesses with
                high-performance infrastructure, scalable architecture, and enterprise-grade security.
              </p>

              <Link to="/Contact" className={styles.buttonLink}>
                <button className={styles.starButton}>
                  Connect With Us
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className={styles[`star${i + 1}`]}>
                      <StarSvg />
                    </span>
                  ))}
                </button>
              </Link>
            </div>

            <div
              className={styles.imageWrap}
              ref={(el) => (revealRefs.current[1] = el)}
            >
              <motion.div
                className={styles.imageWrapper}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  loading="lazy"
                  src={shieldImg}
                  alt="Cloud & IT Security"
                  className={styles.heroImg}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className={styles.projectsHeader}
          >
            <div className={styles.orangeLine}></div>
            <h2>OUR SERVICES</h2>
          </motion.div>

          {/* Service 1 */}
          <div
            className={styles.serviceRow}
            ref={(el) => (revealRefs.current[2] = el)}
          >
            <div className={styles.mediaArea}>
              <img loading="lazy" src={img1} alt="Cloud Hosting" />
            </div>
            <div className={styles.contentArea}>
              <span className={styles.accentBar}></span>
              <h2 className={styles.serviceTitle}>
                Cloud Infrastructure & Server Management
              </h2>
              <p className={styles.serviceDesc}>
                High-performance cloud hosting solutions with auto-scaling, real-time monitoring,
                and 99.9% uptime reliability to ensure uninterrupted business operations.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className={`${styles.serviceRow} ${styles.rowReverse}`}
            ref={(el) => (revealRefs.current[3] = el)}
          >
            <div className={styles.mediaArea}>
              <img loading="lazy" src={img2} alt="IT Consulting" />
            </div>
            <div className={styles.contentArea}>
              <span className={styles.accentBar}></span>
              <h2 className={styles.serviceTitle}>
                Strategic IT Consulting & Technical Support
              </h2>
              <p className={styles.serviceDesc}>
                End-to-end IT consulting services that help businesses optimize workflows,
                improve system efficiency, and ensure reliable technical support anytime.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            className={styles.serviceRow}
            ref={(el) => (revealRefs.current[4] = el)}
          >
            <div className={styles.mediaArea}>
              <img loading="lazy" src={img4} alt="Cloud Security" />
            </div>
            <div className={styles.contentArea}>
              <span className={styles.accentBar}></span>
              <h2 className={styles.serviceTitle}>
                Advanced Data Security & Backup Solutions
              </h2>
              <p className={styles.serviceDesc}>
                Comprehensive data protection with encrypted backups, proactive threat detection,
                and instant recovery systems to ensure complete business continuity.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CloudandIT;