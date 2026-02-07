import React, { useEffect, useRef } from "react";
import styles from "../../Styles/Product.module.css";

import imgp1 from "../../images/soft8.webp";
import imgp2 from "../../images/soft1.webp";
import imgp3 from "../../images/soft23.webp";

import chart1 from "../../images/OurProduct/ourproduct(hospital management).webp";
import chart2 from "../../images/OurProduct/ourproduct(hotels management).webp";
import chart3 from "../../images/OurProduct/ourproduct(e-commerce).webp";
import chart4 from "../../images/OurProduct/ourproduct(EducationLMS).webp";
import chart5 from "../../images/OurProduct/ourproduct(crmManagement).webp";
import chart6 from "../../images/OurProduct/ourproduct(SalaryManagement).webp";
import chart7 from "../../images/OurProduct/AttendanceSystem.webp";

import ProductHero from "./Productpart";
import Breadcrumb from "../BreadCrumb";

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

const items = [
  {
    title: "Strategic Planning",
    desc: "Comprehensive business analysis and goal-driven roadmaps to ensure your digital strategy perfectly aligns with your long-term objectives.",
    img: imgp1,
  },
  {
    title: "Agile Development",
    desc: "High-performance software engineering focused on speed, efficiency, and seamless integration with your existing enterprise ecosystem.",
    img: imgp2,
  },
  {
    title: "Innovation & Support",
    desc: "Continuous optimization and premium technical support to keep your platforms ahead of the curve and ready for future scaling.",
    img: imgp3,
  },
];

const data = [
  {
    title: "Healthcare Management System",
    desc: "A unified platform for hospitals to manage patient records, streamline appointments, and automate billing, enhancing clinical efficiency and patient experiences.",
    img: chart1,
    align: "left",
    link: "https://hospital-crm-nova.netlify.app/",
  },
  {
    title: "Luxury Hospitality Suite",
    desc: "End-to-end reservation management for hotels and resorts, featuring real-time availability tracking and integrated guest service modules.",
    img: chart2,
    align: "right",
    link: "https://hotel-management-system-nova.netlify.app/",
  },
  {
    title: "Smart Retail POS Ecosystem",
    desc: "Next-gen Point of Sale solutions with advanced inventory management, real-time sales forecasting, and effortless multi-channel payment integration.",
    img: chart3,
    align: "left",
    link: "https://retailpos-nova.netlify.app/",
  },
  {
    title: "Advanced Learning (LMS)",
    desc: "Scalable e-learning platforms for institutions, offering interactive course delivery, student progress analytics, and seamless content distribution.",
    img: chart4,
    align: "right",
    link: "https://eductaion-lms.netlify.app",
  },
  {
    title: "Enterprise Payroll Hub",
    desc: "Automated salary processing with built-in tax compliance and expense tracking, designed to handle complex payroll needs for growing businesses.",
    img: chart6,
    align: "left",
    link: "https://nova-salary-management.netlify.app/",
  },
  {
    title: "Omnichannel CRM Platform",
    desc: "Centralized customer relationship management to drive lead conversion, automate sales pipelines, and foster long-term client loyalty through data insights.",
    img: chart5,
    align: "right",
    link: "https://final-crm.netlify.app",
  },
  {
    title: "Biometric Attendance Tracker",
    desc: "Precision tracking for workplace attendance with biometric synchronization and automated reporting to optimize workforce management.",
    img: chart7,
    align: "left",
    link: "https://attendancesystem-more.netlify.app/",
  },
];

export default function ImageCardSection() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.25 },
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Breadcrumb />

      <section className={styles.wrapper}>
        <ProductHero />
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <img src={item.img} alt={item.title} />
              <div className={styles.overlay}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <section className={styles.sectionWrapper}>
          <div className={styles.headingWrap}>
            <h1 className={styles.heading}>
              We can help you at every stage from <span>concept</span> to{" "}
              <span>launch</span>
            </h1>
          </div>

          <section className={styles.section}>
            {data.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`${styles.cardd} ${item.align === "left" ? styles.left : styles.right
                  }`}
              >
                <img src={item.img} alt={item.title} />

                <div className={styles.cardTitle}>{item.title}</div>

                <div className={styles.overlay1}>
                  <p>{item.desc}</p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.starButton}
                  >
                    Find Out More
                    <div className={styles.star1}>
                      <StarSvg />
                    </div>
                    <div className={styles.star2}>
                      <StarSvg />
                    </div>
                    <div className={styles.star3}>
                      <StarSvg />
                    </div>
                    <div className={styles.star4}>
                      <StarSvg />
                    </div>
                    <div className={styles.star5}>
                      <StarSvg />
                    </div>
                    <div className={styles.star6}>
                      <StarSvg />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}