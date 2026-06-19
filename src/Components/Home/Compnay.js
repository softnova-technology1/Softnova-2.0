import React from "react";
import styles from "../../Styles/Company.module.css";
import { ArrowRight } from "lucide-react";
import techControlCenter from "../../images/tech_control_center.png";

const CompanySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={techControlCenter}
            alt="About Our Company"
            className={styles.companyImage}
          />
          <div className={styles.badge}>
            <span className={styles.badgeNumber}>2+</span>
            <span className={styles.badgeText}>Years of Tech Mastery</span>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <span className={styles.subtitle}>THE NARRATIVE</span>
        <h2 className={styles.title}>
          ABOUT OUR <br /> COMPANY
        </h2>
        <div className={styles.divider}></div>
        <p className={styles.para}>
          At Softnova, we create tailored digital solutions that help businesses stand out. From custom websites and e-commerce platforms to mobile applications, we combine technical expertise with creative strategy to deliver measurable results. With a client-centric approach, we align every solution with your goals—because we're not just service providers; we're your partners in growth.
        </p>
        <div className={styles.buttonGroup}>
          <a href="/about" className={styles.showMoreLink}>
            <button className={styles.showMoreBtn}>Show More</button>
          </a>
          <a href="/about" className={styles.arrowLink}>
            <button className={styles.arrowBtn}>
              <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;

