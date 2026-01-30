import { Container } from "react-bootstrap";
import styles from "../../Styles/Academy.module.css";
import academy from "../../images/academygirl.jpg";

export default function AcademyHero() {
  return (
    <Container>
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
          <button className={styles.register}>Register Now !</button>
          <button className={styles.quote}>Get a Quotation</button>
        </div>
      </div>
    </section>

    </Container>
  );
}
