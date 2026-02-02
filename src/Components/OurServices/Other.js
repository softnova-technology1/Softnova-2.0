import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Other.module.css";
import { Settings, Cpu, Database, Share2, ArrowRight } from "lucide-react";
import Breadcrumb from "../BreadCrumb";

import { Link } from "react-router-dom";
const services = [
  {
    id: "01",
    title: "Business Automation",
    description: "Streamline operations and automate workflows to boost productivity and reduce manual effort.",
    icon: <Settings size={32} />,
  },
  {
    id: "02",
    title: "AI & ML Solutions",
    description: "Intelligent systems powered by AI & ML to predict, analyze, and automate decision-making.",
    icon: <Cpu size={32} />,
  },
  {
    id: "03",
    title: "API Integration",
    description: "Seamlessly connect your software with third-party services using robust API architectures.",
    icon: <Share2 size={32} />,
  },
  {
    id: "04",
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions to ensure your business data is always secure and accessible.",
    icon: <Database size={32} />,
  },
];

const OtherServices = () => {
  return (
    <>
    <Breadcrumb/>
    <section className={styles.section}>
      <div className={styles.container}>
       
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.tag}>Premium Solutions</span>
          <h1 className={styles.mainTitle}>
            Strategic Services for <br /> <span>Next-Gen Evolution.</span>
          </h1>
        </motion.div>

  
        <div className={styles.listWrapper}>
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className={styles.listItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.listContent}>
                <span className={styles.id}>{service.id}</span>
                <div className={styles.iconBox}>{service.icon}</div>
                <div className={styles.textDetails}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
              
              <motion.button 
                whileHover={{ x: 10 }}
                className={styles.exploreBtn}
              >
                Learn More <ArrowRight size={20} />
              </motion.button>
              
            
              <div className={styles.hoverBg}></div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.footerAction}>
            <button className={styles.cta}><Link to="/career" style={{ color: 'inherit', textDecoration: 'none' }}>
            Connect With Us
          </Link></button>
        </div>
      </div>
    </section>
    </>
  );
};

export default OtherServices;