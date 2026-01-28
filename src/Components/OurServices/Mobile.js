import React, { useEffect, useRef } from "react";
import styles from "../../Styles/Mobile.module.css";
import project1 from "../../images/Product-images/Ai.jpg"; 
import project2 from "../../images/Product-images/Ai.jpg";
import project3 from "../../images/Product-images/Ai.jpg";

const projects = [
  {
    img: project1,
    title: "E-Commerce Mobile App",
    desc: "A seamless shopping experience with intuitive UI and secure payment integration.",
  },
  {
    img: project2,
    title: "Fitness Tracker",
    desc: "Track your workouts, set goals, and monitor your progress on the go.",
  },
  {
    img: project3,
    title: "Social Media App",
    desc: "Connect with friends, share updates, and stay engaged with real-time notifications.",
  },
  {
    img: project3,
    title: "Social Media App",
    desc: "Connect with friends, share updates, and stay engaged with real-time notifications.",
  },
  {
    img: project3,
    title: "Social Media App",
    desc: "Connect with friends, share updates, and stay engaged with real-time notifications.",
  },
];

const MobileAppSection = () => {
  // Animation on scroll effect
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const handleScroll = () => {
      revealRefs.current.forEach((el) => {
        if (!el) return;
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          el.classList.add(styles.active);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className={styles.mobileAppSection}>
      <div className={styles.hero} ref={addToRefs}>
        <div className={styles.heroText}>
          <h2>Mobile APP Development</h2>
          <p>
            We develop intuitive, high-performance mobile applications for iOS
            and Android, tailored to your business objectives. Our apps deliver
            seamless user experiences, helping you connect with customers on the
            go.
          </p>
          <button>Connect with us</button>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
            alt="Mobile App Sample"
          />
        </div>
      </div>

      <div className={styles.projectsSection} ref={addToRefs}>
       
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <img src={project.img} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
