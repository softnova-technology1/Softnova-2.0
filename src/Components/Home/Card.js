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
      <h1>Build Your Future With Softnova Tech</h1>

      <p>
        Join a passionate team that thrives on innovation, creativity, and solving
        real-world challenges. At Softnova Tech, we provide an environment where
        talented individuals can grow, collaborate, and make a meaningful impact in
        the tech industry.
      </p>

      <div className={styles.cardWrapper}>

        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardContent}>

            <p className={styles.cardTitle}>Career Growth</p>

            <p className={styles.smallDesc}>
              We support your professional journey through continuous learning,
              mentorship programs, skill enhancement, and opportunities for career
              advancement in a fast-growing tech environment.
            </p>

            <a className={styles.stara} href="/career">
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
            </a>

          </div>

          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </div>


        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardContent}>

            <p className={styles.cardTitle}>Collaborative Environment</p>

            <p className={styles.smallDesc}>
              Work alongside creative thinkers and talented professionals in a
              supportive workplace that values teamwork, innovation, and fresh ideas
              to build exceptional digital solutions.
            </p>

            <a className={styles.stara} href="/career">
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
            </a>

          </div>

          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </div>


        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardContent}>

            <p className={styles.cardTitle}>Join Our Team</p>

            <p className={styles.smallDesc}>
              Ready to start your journey with us? Submit your updated resume and
              portfolio through our careers page and explore exciting opportunities
              to shape the future with Softnova Tech.
            </p>

            <a className={styles.stara} href="/career">
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
            </a>

          </div>

          <div className={styles.goCorner}>
            <div className={styles.goArrow}>→</div>
          </div>
        </div>

      </div>
    </section>
  );
}
