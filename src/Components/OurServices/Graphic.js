import React from "react";
import styles from "../../Styles/Graphic.module.css";
import desktop from "../../images/Product-images/tea.jpg";


const GraphicDesign = () => {
    
const services = [
  {
    title: "Creative Branding & Logo",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "UI / UX Design",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  },
  {
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Mobile App Design",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
  },
  {
    title: "Product Strategy",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
  }
];
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.overlay} />

                <div className={styles.content}>

                    <div className={styles.textBox}>
                        <span className={styles.tag}>
                            Graphic <span>Design</span>
                        </span>
                     <h1 className={styles.title}>
                           Bringing your brand to life through <span>design</span>
                          
                        </h1>
                        <p>
                            Softnova Technology’s graphic design expertise helps businesses
                            stand out in a competitive market by delivering high-quality,
                            professional, and engaging visuals. With a strong focus on brand
                            identity, UI/UX design, and digital marketing visuals, our team of
                            creative designers ensures that every design is visually appealing,
                            user-friendly, and business-driven.
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


                    <div className={styles.visualBox}>
                        <img src={desktop} alt="Desktop" className={styles.desktop} />
                    </div>
                </div>
            </section>
            <section className={styles.servicesSection}>
                <div className={styles.servicesGrid}>
                    {services.map((item, index) => (
                        <div className={styles.serviceCard} key={index}>
                            <div className={styles.serviceImage}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className={styles.serviceTitle}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default GraphicDesign;


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
