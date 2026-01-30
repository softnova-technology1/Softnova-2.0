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
import aboutimg from "../../images/aboutimg.png";
const CompanySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h2>About Our Company</h2>
        <p>
          At SoftNova, we deliver tailored digital solutions designed to help
          businesses stand out. We specialize in custom website development,
          e-commerce platforms, and mobile applications. Our team combines
          technical expertise with creative strategies to drive measurable
          results. We focus on seamless integration and enhanced user
          experiences across all digital channels. With a client-centric
          approach, every solution is aligned with your business goals. At
          SoftNova, we’re not just service providers—we’re your partners in
          growth.
        </p>
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
