import React from "react";
import styles from "../../Styles/Card.module.css";

export default function FeaturesCard() {
  const StarSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      className={styles.starSvg}
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
  return (
    <section className={styles.wrapper}>
      <h1>Ready for a challenge?</h1>
      <p>
        If you're passionate about tackling complex problems like we are at
        Softnova Tech, and you're eager to make a real impact, visit our careers
        page. We can't promise it’ll be a smooth ride, but it’ll certainly be an
        exciting adventure!
      </p>
      <div className={styles.cardWrapper}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>Why Work With Us?</p>
            <p className={styles.smallDesc}>
              Growth Opportunities: We invest in the professional development of
              our team members, providing ongoing learning and career
              advancement opportunities.
            </p>
            <button className={styles.starButton}>
              Read More
              <span className={styles.star1}>
                <StarSvg />
              </span>
              <span className={styles.star2}>
                <StarSvg />
              </span>
              <span className={styles.star3}>
                <StarSvg />
              </span>
              <span className={styles.star4}>
                <StarSvg />
              </span>
              <span className={styles.star5}>
                <StarSvg />
              </span>
              <span className={styles.star6}>
                <StarSvg />
              </span>
            </button>
          </div>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>How to Get Started</p>
            <p className={styles.smallDesc}>
              Send your updated resume along with a cover letter to the
              specified application link or email address.
            </p>
            <button className={styles.starButton}>
              Read More
              <span className={styles.star1}>
                <StarSvg />
              </span>
              <span className={styles.star2}>
                <StarSvg />
              </span>
              <span className={styles.star3}>
                <StarSvg />
              </span>
              <span className={styles.star4}>
                <StarSvg />
              </span>
              <span className={styles.star5}>
                <StarSvg />
              </span>
              <span className={styles.star6}>
                <StarSvg />
              </span>
            </button>
          </div>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </div>
      </div>
    </section>
  );
}
