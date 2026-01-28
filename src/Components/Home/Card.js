import React from "react";
import styles from "../../Styles/Card.module.css";

export default function FeaturesCard() {
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
            <button className={styles.readMore}>Read More</button>
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
            <button className={styles.readMore}>Read More</button>
          </div>
          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </div>
      </div>
    </section>
  );
}
