import React, { useEffect, useState } from "react";
import styles from "../Styles/Slide.module.css";
import pro1 from '../images/pro3.png';
import pro2 from '../images/pro2.png';
import pro3 from '../images/pro1.png';
import pro4 from '../images/pro5.png';
import pro5 from '../images/pro6.png';
import pro6 from '../images/pro3.png';

const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
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

export default function Slide() {
  const [active, setActive] = useState(0);

  const services = [
    {
      img: pro1,
      title: "Salary Management",
      desc:"Effortlessly handle employee salaries, tax deductions, and benefits with our all"
    },
    {
      img: pro2,
      title: "Retail POS Server",
      desc:"Boost your retail business with our cloud-based POS system, offering real-time"
    },
    {
      img: pro3,
      title: "Hotel & Resort Reser",
      desc:"Our hotel reservation system provides seamless booking experiences for guests."
    },
    {
      img: pro4,
      title: "Hospital Management",
      desc:"Our hospital management system streamlines patient records, appointments, and bi"
    },
    {
      img: pro5,
      title: "Attendance System",
      desc:"Optimize workforce efficiency with our AI-powered Work Hours Monitoring System,"
    },
     {
      img: pro6,
      title: "CRM Ssystem",
      desc:"Automate follow-ups, track conversions, and improve customer satisfaction with o"
    },
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className={styles.slideSection}>
      <div className={styles.slideTrack}>
        {services.map((item, index) => {
          let position = styles.next;

          if (index === active) position = styles.active;
          else if (
            index === (active - 1 + services.length) % services.length
          )
            position = styles.prev;

          return (
            <div key={index} className={`${styles.slideCard} ${position}`}>
              <img src={item.img} alt={item.title} />

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

             
              <div className={styles.showBtn}>
                <a href="/ImageCardSection">
                <button className={styles.starButton}>
                  Show More
                  <span className={styles.star1}><StarSvg /></span>
                  <span className={styles.star2}><StarSvg /></span>
                  <span className={styles.star3}><StarSvg /></span>
                  <span className={styles.star4}><StarSvg /></span>
                  <span className={styles.star5}><StarSvg /></span>
                  <span className={styles.star6}><StarSvg /></span>
                </button> </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
