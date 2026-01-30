import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Software.module.css";
import p1 from "../../images/Product-images/Ai.jpg";
import { ArrowRight, Code, Cpu, ShieldCheck } from "lucide-react";
import shan from "../../images/Product-images/software.jpg";

const projects = [
  { title: "ERP System", image: p1, category: "Enterprise" },
  { title: "Custom CRM", image: p1, category: "Business" },
  { title: "Inventory Manager", image: p1, category: "Logistics" },
  { title: "School Management", image: p1, category: "Education" },
  { title: "Hospital Portal", image: p1, category: "Healthcare" },
  { title: "Fintech App", image: p1, category: "Finance" },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Software = () => {
  return (
    <div className={styles.pageWrapper}>
      
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div 
            className={styles.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className={styles.tag}>Software Development</span>
            <h1 className={styles.title}>
              Tailored <span>Software Solutions</span> <br />
              for Modern Enterprises
            </h1>
            <p className={styles.description}>
              Softnova Technology delivers high-quality, scalable, and efficient 
              custom software solutions. We focus on application design and 
              system integration to ensure your business stays ahead.
            </p>
            <div className={styles.actions}>
              <motion.button whileHover={{ scale: 1.05 }} className={styles.primaryBtn}>
                Connect with Us <ArrowRight size={18} />
              </motion.button>
              <button className={styles.secondaryBtn}>View Features</button>
            </div>
          </motion.div>

          <motion.div 
            className={styles.card}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <img src={shan} alt="Software Development" />
            <div className={styles.floatingBadge}>
               <Cpu size={20} /> <span>Scalable Architecture</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.wrapper}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <h2 className={styles.heading}>Our Software Portfolio</h2>
          <div className={styles.line}></div>
        </motion.div>

        <motion.div 
          className={styles.projectsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {projects.map((item, index) => (
            <motion.div 
              key={index} 
              className={styles.projectBox}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <img src={item.image} alt={item.title} />
              <div className={styles.overlay}>
                <span className={styles.category}>{item.category}</span>
                <h3>{item.title}</h3>
                <button className={styles.viewBtn}>View Case Study</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Software;