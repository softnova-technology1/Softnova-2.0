import styles from "../../Styles/Academy.module.css";
import academy from "../../images/academygirl.jpg";

export default function AcademyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <img src={academy} alt="Academy" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Academy</h1>

        <p className={styles.subtitle}>
          Our approach is rooted in a deep understanding of the industries we
          serve, allowing us to combine technical expertise with creative
          insights to deliver high-performing websites, e-commerce platforms,
          and comprehensive digital marketing services. With proven expertise
          across diverse sectors, our team ensures that every solution is
          aligned with your business goals, providing seamless integration, . We
          offer end-to-end services, including web development, mobile app
          creation, and SEO, to help your business thrive in a competitive
          digital landscape.
        </p>

        <div className={styles.iconRow}>
          <div className={`${styles.icon} ${styles.html}`}>HTML5</div>
          <div className={`${styles.icon} ${styles.css}`}>CSS3</div>
          <div className={`${styles.icon} ${styles.java}`}>Java</div>
          <div className={`${styles.icon} ${styles.react}`}>React</div>
          <div className={`${styles.icon} ${styles.mongo}`}>Mongo</div>
        </div>

        <div className={styles.buttonRow}>
          <a href="https://softnovatechnology.com/" target="_blank">
          <button className={styles.starButton}>
                  Show More
                  <div className={styles.star1}><StarSvg /></div>
                  <div className={styles.star2}><StarSvg /></div>
                  <div className={styles.star3}><StarSvg /></div>
                  <div className={styles.star4}><StarSvg /></div>
                  <div className={styles.star5}><StarSvg /></div>
                  <div className={styles.star6}><StarSvg /></div>
                </button>
                </a>
        </div>
      </div>
    </section>
  );
}
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