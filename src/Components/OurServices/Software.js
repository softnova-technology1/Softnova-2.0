import React from "react";
import styles from "../../Styles/Software.module.css";
import p1 from "../../images/Product-images/Ai.jpg";
import p2 from "../../images/Product-images/Ai.jpg";
import { ArrowRight } from "lucide-react";
import shan from "../../images/Product-images/software.jpg";
const projects = [
  {
    title: "E-Commerce Website",
    image: p1,
  },
  {
    title: "Mobile Shopping App",
    image: p2,
  },
   {
    title: "E-Commerce Website",
    image: p1,
  },
  {
    title: "Mobile Shopping App",
    image: p2,
  },
   {
    title: "E-Commerce Website",
    image: p1,
  },
  {
    title: "Mobile Shopping App",
    image: p2,
  },
   {
    title: "E-Commerce Website",
    image: p1,
  },
];

const Software = () => {
  return (
    <>
     <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.tag}>Software Development</span>

          <h1 className={styles.title}>
            Powerful <span>E-Commerce</span> <br />
            Portal for Your Business
          </h1>

          <p className={styles.description}>
           Softnova Technology’s software development expertise helps businesses thrive in a competitive market by delivering high-quality, scalable, and efficient solutions. With a strong focus on custom software development, application design, and system integration, our team of experienced developers ensures that every software product is robust, user-friendly, and business-driven.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>
              Connect with Us <ArrowRight size={18} />
            </button>

            <button className={styles.secondaryBtn}>
              View Features
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <img
            src={shan}
            alt="Ecommerce"
          />
        </div>
      </div>
    </section>
    <section className={styles.wrapper}>
     
      <div className={styles.projects}>
  {projects.map((item, index) => (
    <div key={index} className={styles.projectBox}>
      <img src={item.image} alt={item.title} />

      <div className={styles.overlay}>
        <h3>{item.title}</h3>
       
      </div>
    </div>
  ))}
</div>

    </section>
    </>
  );
};

export default Software;
