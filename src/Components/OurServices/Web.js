import React, { useEffect, useRef, useState } from "react";
import styles from "../../Styles/Web.module.css";
import img1 from "../../images/Product-images/web1.png";
import img2 from "../../images/Product-images/web2.png";
import img3 from "../../images/Product-images/web3.png";
import img4 from "../../images/Product-images/web4.png";
import img5 from "../../images/Product-images/web5.png";
import img6 from "../../images/Product-images/web6.png";
import img7 from "../../images/Product-images/web7.png";
import img8 from "../../images/Product-images/web8.png";
import img9 from "../../images/Product-images/web9.png";
import high from "../../images/Product-images/img.png";

const steps = [
  { id: 1, title: "Consultation", desc: "Understanding your needs and goals." },
  { id: 2, title: "Planning", desc: "Strategizing the best approach." },
  { id: 3, title: "Design", desc: "Creating intuitive UI/UX designs." },
  { id: 4, title: "Development", desc: "Building scalable websites." },
  { id: 5, title: "Launch & Support", desc: "Deployment & maintenance." }
];

const projects = [
  { title: "Agency Website", img: img1 },
  { title: "Branding Website", img: img2 },
  { title: "E-commerce Platform", img: img3 },
  { title: "Portfolio Website", img: img4 },
  { title: "Blog Website", img: img5 },
  { title: "Landing Page", img: img6 },
  { title: "Landing Page", img: img7 },
  { title: "Landing Page", img: img8 },
  { title: "Landing Page", img: img9 }
];

const WebDevelopment = () => {
  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          setVisibleItems(prev => ({ ...prev, [index]: true }));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    refs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.page}>
      
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.textSection}>
            <h1>Web Development</h1>
            <p>
              Softnova Technology specializes in developing advanced management software tailored for businesses, schools, and enterprises, ensuring efficiency, automation, and data-driven decision-making. Our solutions are designed to streamline operations, reduce manual work, and boost productivity, allowing organizations to focus on growth.
            </p>
            <button className={styles.ctaButton}>Connect with Us</button>
          </div>

          <div className={styles.visualSection}>
            <img src={high} alt="Web Development" />
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.stepNumber}>{i + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <div className={styles.gridContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => (refs.current[index] = el)}
            data-index={index}
            className={`${styles.projectItem} ${
              visibleItems[index]
                ? styles.visible
                : index % 2 === 0
                ? styles.leftSlide
                : styles.rightSlide
            }`}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WebDevelopment;
