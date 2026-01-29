import React, { useEffect, useState } from "react";
import styles from "../../Styles/Digital.module.css";
import img1 from "../../images/Product-images/Ai.jpg";

const DigitalMarketing = () => {
  const [index, setIndex] = useState(0);

  const services = [
    { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f", title: "SEO Optimization" },
    { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7", title: "Social Media Marketing" },
    { img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4", title: "Pay Per Click" },
    { img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d", title: "Content Marketing" },
    { img: "https://images.unsplash.com/photo-1521791136064-7986c2920216", title: "Email Marketing" },
  ];

  useEffect(() => {
    const auto = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3800);
    return () => clearInterval(auto);
  }, [services.length]);

  return (
    <>

      <section className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.textBox}>
            <span className={styles.tag}>
              Digital <span>Marketing</span>
            </span>
            <h1 className={styles.title}>
              Driving growth through smart <span>digital strategies.</span> <br />
            </h1>
            <p>
              Smart digital strategies that boost brand visibility,
              engagement, and ROI through data-driven execution.
            </p>


            <button className={styles.starButton}>
              Connect with us
              <div className={styles.star1}><StarSvg /></div>
              <div className={styles.star2}><StarSvg /></div>
              <div className={styles.star3}><StarSvg /></div>
              <div className={styles.star4}><StarSvg /></div>
              <div className={styles.star5}><StarSvg /></div>
              <div className={styles.star6}><StarSvg /></div>
            </button>
          </div>

          <div className={styles.imageWrapper}>
            <img src={img1} alt="Digital" className={styles.rotateImg} />
          </div>
        </div>
      </section>

      <section className={styles.marqueeSection}>
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {services.concat(services).map((item, index) => (
              <div key={index} className={styles.marqueeCard}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;


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
