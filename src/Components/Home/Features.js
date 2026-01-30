import styles from "../../Styles/Features.module.css";
import { FaBook, FaBriefcase, FaComments } from "react-icons/fa";

export default function Features() {
  return (
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

 
      <section className={styles.foundation}>
        <h2>APPLY FOR FOUNDATION</h2>
        <p>
          Softnova's Foundation is a dedicated initiative by Softnova Technology
          to bridge the gap in IT education for talented individuals from rural
          areas. We believe every student, regardless of their background,
          deserves an opportunity to shine in the IT sector. Our foundation
          identifies and nurtures UG and PG graduates with exceptional skills,
          helping them achieve their dreams and build sustainable careers in
          technology.
        </p>
      </section>
    </section>
  );
}
