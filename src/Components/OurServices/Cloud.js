import React, { useEffect, useRef } from "react";
import styles from "../../Styles/Cloud.module.css";
import shieldImg from "../../images/Product-images/web3.png";
import img1 from "../../images/Product-images/web2.png";
import img2 from "../../images/Product-images/web1.png";
import { Link } from "react-router-dom";

const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className={styles.svg}
  >
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
      207.96,29.37 371.12,197.68 392.05,407.74
      20.93,-210.06 184.09,-378.37 392.05,-407.74
      -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

const CloudIT = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.25 }
    );

    revealRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <>

      <section className={styles.section}>
        <div
          className={styles.content}
          ref={el => (revealRefs.current[0] = el)}
        >
          <span className={styles.tag}>Cloud & IT Service</span>
          <h1 className={styles.title}>
            Secure, efficient, and scalable <span>IT and cloud services</span>

          </h1>
          <p className={styles.desc}>
            Softnova Technology’s Cloud & IT solutions expertise helps businesses
            stay ahead by delivering high-performance, scalable and secure
            technology solutions.
          </p>

          <button className={styles.starButton}>
           <Link to="/career" style={{ color: 'inherit', textDecoration: 'none' }}>
            Connect With Us
          </Link>
            <span className={styles.star1}><StarSvg /></span>
            <span className={styles.star2}><StarSvg /></span>
            <span className={styles.star3}><StarSvg /></span>
            <span className={styles.star4}><StarSvg /></span>
            <span className={styles.star5}><StarSvg /></span>
            <span className={styles.star6}><StarSvg /></span>
          </button>
        </div>

        <div
          className={styles.imageWrap}
          ref={el => (revealRefs.current[1] = el)}
        >
          <div className={styles.glow}></div>
          <img src={shieldImg} alt="Cloud & IT Security" />
        </div>
      </section>


      <section className={styles.servicesSection}>


        <div
          className={styles.serviceRow}
          ref={el => (revealRefs.current[2] = el)}
        >
          <div className={styles.mediaArea}>
            <img src={img1} alt="Cloud Hosting" />
          </div>

          <div className={styles.contentArea}>
            <span className={styles.accentBar}></span>
            <h2 className={styles.serviceTitle}>
              Cloud Hosting & Server Management
            </h2>
            <p className={styles.serviceDesc}>
              Reliable, scalable, and secure cloud infrastructure solutions.
            </p>
          </div>
        </div>


        <div
          className={`${styles.serviceRow} ${styles.rowReverse}`}
          ref={el => (revealRefs.current[3] = el)}
        >
          <div className={styles.mediaArea}>
            <img src={img2} alt="IT Consulting" />
          </div>

          <div className={styles.contentArea}>
            <span className={styles.accentBar}></span>
            <h2 className={styles.serviceTitle}>
              IT Consulting & Support
            </h2>
            <p className={styles.serviceDesc}>
              Expert guidance and hands-on IT support for smooth operations.
            </p>
          </div>
        </div>


        <div
          className={styles.serviceRow}
          ref={el => (revealRefs.current[4] = el)}
        >
          <div className={styles.mediaArea}>
            <img src={img1} alt="Cloud Security" />
          </div>

          <div className={styles.contentArea}>
            <span className={styles.accentBar}></span>
            <h2 className={styles.serviceTitle}>
              Cloud Security & Monitoring
            </h2>
            <p className={styles.serviceDesc}>
              Advanced monitoring and security for cloud environments.
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default CloudIT;
