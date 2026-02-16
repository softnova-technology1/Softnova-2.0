import React from "react";
import styles from "../../Styles/Company.module.css";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaJsSquare,
  FaHtml5,
} from "react-icons/fa";
import aboutimg from "../../images/aboutimg.webp";
const CompanySection = () => {

  const StarSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53" className={styles.svg}>
      <path
        className={styles.fil0}
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
           207.96,29.37 371.12,197.68 392.05,407.74
           20.93,-210.06 184.09,-378.37 392.05,-407.74
           -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
      />
    </svg>
  );
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>About Our Company</h2>
        <p className={styles.para}>
          At Softnova, we create tailored digital solutions that help businesses stand out. From custom websites and e-commerce platforms to mobile applications, we combine technical expertise with creative strategy to deliver measurable results. With a client-centric approach, we align every solution with your goals—because we’re not just service providers, we’re your partners in growth
        </p>
        <a href="/about"> <button className={styles.starButton}>
          Show More
          <div className={styles.star1}><StarSvg /></div>
          <div className={styles.star2}><StarSvg /></div>
          <div className={styles.star3}><StarSvg /></div>
          <div className={styles.star4}><StarSvg /></div>
          <div className={styles.star5}><StarSvg /></div>
          <div className={styles.star6}><StarSvg /></div>
        </button></a>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.borderCircle}>
          <img
            src={aboutimg}
            alt="Company"
            className={styles.companyImage}
          />

          <FaReact className={`${styles.icon} ${styles.i1}`} />
          <FaNodeJs className={`${styles.icon} ${styles.i2}`} />
          <FaFigma className={`${styles.icon} ${styles.i3}`} />
          <FaGithub className={`${styles.icon} ${styles.i4}`} />
          <FaJsSquare className={`${styles.icon} ${styles.i5}`} />
          <FaHtml5 className={`${styles.icon} ${styles.i6}`} />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
