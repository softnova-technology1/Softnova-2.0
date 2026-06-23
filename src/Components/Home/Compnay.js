import React from "react";
import styles from "../../Styles/Company.module.css";
import { ArrowRight } from "lucide-react";
import aboutMainCollab from "../../images/about_main_collab.png";
import aboutInsetMeeting from "../../images/about_inset_meeting.png";

const CompanySection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageCardContainer}>
            {/* Background Shape */}
            <div className={styles.darkBackgroundShape}></div>

          {/* Dot Grid */}
          <svg className={styles.dotGrid} viewBox="0 0 115 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 6 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={10 + c * 19} cy={10 + r * 17} r="3" fill="white" />
              ))
            )}
          </svg>

          {/* Floating Dot */}
          <div className={styles.floatingDot}></div>

          {/* Contour Lines */}
          <svg className={styles.contourLines} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-10,160 A 130,130 0 0,1 130,300" stroke="white" strokeWidth="1.5" opacity="0.15" />
            <path d="M-10,180 A 150,150 0 0,1 150,340" stroke="white" strokeWidth="1.5" opacity="0.12" />
            <path d="M-10,200 A 170,170 0 0,1 170,380" stroke="white" strokeWidth="1.5" opacity="0.09" />
          </svg>

          {/* Main Image Wrapper */}
          <div className={styles.mainImageWrapper}>
            <img
              src={aboutMainCollab}
              alt="About Our Company"
              className={styles.mainImage}
            />
          </div>

          {/* Inset Image Wrapper */}
          <div className={styles.insetCircleWrapper}>
            <img
              src={aboutInsetMeeting}
              alt="Team Collaboration"
              className={styles.insetCircleImage}
            />
          </div>

          {/* Experience Badge */}
          <div className={styles.circleBadge}>
            <span className={styles.badgeNumber}>2+</span>
            <span className={styles.badgeText}>Years of <br /> tech Mastry</span>
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
  </div>
  );
};

export default CompanySection;

