import React from "react";
import styles from "../../Styles/Other.module.css";
import { Settings, Cpu } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Business Automation",
    description:
      "Streamline operations and automate workflows to boost productivity and reduce manual effort.",
    icon: <Settings size={28} />,
  },
  {
    id: 2,
    title: "AI & ML Solutions",
    description:
      "Intelligent systems powered by AI & ML to predict, analyze, and automate decision-making.",
    icon: <Cpu size={28} />,
  },
];

const OtherServices = () => {
  return (
    <section className={styles.section}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.tag}>Other Services</span>
          <h1 className={styles.title}>
                            Beyond the basics—services that <span> make a difference.</span>
                           
                        </h1>
          <p>
            Softnova Technology delivers advanced Business Automation, AI & ML
            solutions, and scalable API architectures to streamline operations
            and enhance intelligence.
          </p>
          <button className={styles.cta}>Connect with us</button>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.orbit}>
            <span className={styles.core}></span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className={styles.servicesGrid}>
        {services.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className={styles.btn}>Explore Service</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherServices;
