import React from "react";
import styles from "../../Styles/E-Commerce.module.css";
import p1 from "../../images/Product-images/Ai.jpg";
import p2 from "../../images/Product-images/Ai.jpg";
import { ArrowRight } from "lucide-react";
import shan from "../../images/Product-images/online.jpg";
const projects = [
    {
        title: "E-Commerce Website",
        image: p1,
    },
    {
        title: "Mobile Shopping App",
        image: p2,
    },
];

const ProjectsFlip = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.overlay}></div>

                <div className={styles.container}>
                    {/* LEFT CONTENT */}
                    <div className={styles.content}>
                        <span className={styles.tag}>E-Commerce Solutions</span>

                        <h1 className={styles.title}>
                            Powerful <span>E-Commerce</span> <br />
                            Portal for Your Business
                        </h1>

                        <p className={styles.description}>
                            We design and develop secure, scalable, and feature-rich e-commerce
                            portals with seamless payment integration, product management,
                            and smart analytics to grow your online business.
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
    <div key={index} className={styles.projectMinimal}>
      <img src={item.image} alt={item.title} />
      <div className={styles.text}>
        <h3>{item.title}</h3>
      </div>
    </div>
  ))}
</div>

            </section>
        </>
    );
};

export default ProjectsFlip;
