import React, { useEffect, useRef } from "react";
import styles from "../../Styles/Product.module.css";
import imgp1 from '../../images/soft8.jpg';
import imgp2 from '../../images/soft1.png';
import imgp3 from '../../images/soft23.jpg';
import chart1 from '../../images/Product-images/productchart1.jpg';
import chart2 from '../../images/Product-images/productchart2.jpg';
import chart3 from '../../images/Ourservices-images/ourproduct(e-commerce).jpg';
import chart4 from '../../images/Ourservices-images/ourproduct(EducationLMS).jpg';
import chart5 from '../../images/soft28.jpg';
import chart6 from '../../images/Ourservices-images/ourproduct(booking).jpg';
import ProductHero from "./Productpart";
import Breadcrumb from "../BreadCrumb";


const items = [
  {
    title: "Discover & Plan",
    desc:
      "We analyze your needs, define goals, and craft a tailored IT solution that aligns with your business objectives.",
    img: imgp1
  },
  {
    title: "Develop & Integrate",
    desc:
      "Our team designs, builds, and seamlessly integrates your customized product with your existing systems.",
    img: imgp2
  },
  {
    title: "Optimize & Support",
    desc:
      "We provide ongoing support, updates, and enhancements to ensure long-term efficiency and scalability.",
    img: imgp3
  }
];

const data = [
  {
    title: "Hospital Management",
    desc:
      "Our hospital management system streamlines patient records, appointments, and billing, ensuring seamless healthcare operations.",
    img: chart1,
    align: "left"
  },
  {
    title: "Hotel & Resort Reservation",
    desc:
      "Luxury booking experiences with modern reservation systems and real-time availability.",
    img: chart2,
    align: "right"
  },
  {
    title: "E-Commerce Platform",
    desc:
      "Powerful online shopping solutions with secure payments and analytics.",
    img: chart3,
    align: "left"
  },
  {
    title: "Education LMS",
    desc:
      "Smart learning management systems for students and institutions.",
    img: chart4,
    align: "right"
  },
  {
    title: "Finance Dashboard",
    desc:
      "Real-time financial insights, reports, and performance tracking.",
    img: chart5,
    align: "left"
  },
  {
    title: "Travel Booking",
    desc:
      "End-to-end travel booking platforms with smooth UX and speed.",
    img: chart6,
    align: "right"
  }
];

export default function ImageCardSection() {
  const itemsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.25 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {

            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.25 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <Breadcrumb />
      <section className={styles.wrapper}>
        <ProductHero />
        <div>
        </div>

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
                ref={el => (itemsRef.current[index] = el)}
                className={`${styles.cardd} ${item.align === "left" ? styles.left : styles.right
                  }`}
              >
                <img src={item.img} alt={item.title} />

                <div className={styles.cardTitle}>
                  {item.title}
                </div>

                <div className={styles.overlay1}>
                  <p>{item.desc}</p>

                  <button className={styles.starButton}>
                    Find Out More
                    <div className={styles.star1}><StarSvg /></div>
                    <div className={styles.star2}><StarSvg /></div>
                    <div className={styles.star3}><StarSvg /></div>
                    <div className={styles.star4}><StarSvg /></div>
                    <div className={styles.star5}><StarSvg /></div>
                    <div className={styles.star6}><StarSvg /></div>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </section>
      </section>
    </>
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
