import React, { useEffect, useRef } from "react";
import styles from "../../Styles/Mobile.module.css";
import project1 from "../../images/Product-images/Ai.jpg";
import project2 from "../../images/Product-images/Ai.jpg";
import project3 from "../../images/Product-images/Ai.jpg";
import mobile from "../../images/Product-images/mobile.jpg";

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
  const revealRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      /* 🔥 FADE-IN ON SCROLL */
      revealRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 120) {
          el.classList.add(styles.active);
        }
      });

      /* 🔥 PARALLAX IMAGE */
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const offset = (windowHeight - rect.top) * 0.15;
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className={styles.mobileAppSection}>
      <div className={styles.container}>
        {/* HERO */}
        <div ref={addToRefs} className={`${styles.hero} ${styles.fade}`}>
          <div className={styles.heroText}>
            <span className={styles.tag}>Mobile APP Development</span>
            <h1 className={styles.title}>
                            <span>Mobile apps</span> <br />
                          designed for speed, usability, and impact
                        </h1>
            <p>
              We develop intuitive, high-performance mobile applications for iOS
              and Android, tailored to your business objectives. Our apps deliver
              seamless user experiences, helping you connect with customers on
              the go.
            </p>
            <button>Connect with us</button>
          </div>

          <div className={styles.heroImage}>
            <img
              ref={imageRef}
              src={mobile}
              alt="Mobile App"
              className={styles.parallaxImage}
            />
          </div>
        </div>

        {/* PROJECTS */}
        <div
          ref={addToRefs}
          className={`${styles.projectsSection} ${styles.fade}`}
        >
        

          <div className={styles.projectsGrid}>
            {projects.map((project, idx) => (
              <div
                key={idx}
                ref={addToRefs}
                className={`${styles.projectCard} ${styles.fade}`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                <img src={project.img} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
