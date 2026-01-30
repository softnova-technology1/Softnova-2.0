import { Container } from "react-bootstrap";
import styles from "../../Styles/Features.module.css";
import { FaBook, FaBriefcase, FaComments } from "react-icons/fa";

export default function Features() {
  return (
    <Container>
      <section className={styles.container}>
        <div className={styles.features}>
          <div className={styles.item1}>
            <div className={styles.circle}>
              <FaBook />
            </div>
            <p>10+ Offline Courses</p>
          </div>

          <div className={styles.item1}>
            <div className={styles.circle}>
              <FaBriefcase />
            </div>
            <p>Job Placement Support</p>
          </div>

          <div className={styles.item1}>
            <div className={styles.circle}>
              <FaComments />
            </div>
            <p>Lifetime Chat Support</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
