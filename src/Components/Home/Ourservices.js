import React from "react";
import styles from "../../Styles/Ourservice.module.css";

const services = [
  {
    id: "01",
    title: "Marketing",
    text: "Digital marketing services to grow your online presence and reach your audience.",
    icon: "📢",
  },
  {
    id: "02",
    title: "SEO",
    text: "Optimize your website to rank higher and attract organic traffic.",
    icon: "📈",
    category: "SEO",
  },
  {
    id: "03",
    title: "UI/UX Design",
    text: "Design intuitive, user-friendly interfaces that enhance experience.",
    icon: "🎨",
  },
  {
    id: "04",
    title: "Creative",
    text: "Branding solutions and ideas to make your business stand out.",
    icon: "💡",
  },
  {
    id: "05",
    title: "Optimization",
    text: "Analyze and optimize performance for faster load times and conversions.",
    icon: "⚙️",
  },
];

const Ourservice = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>OUR SERVICES</h2>

      <div className={styles.timeline}>
        {services.map((item) => (
          <div key={item.id} className={styles.service}>
            {/* ICON */}
            <div className={styles.iconCircle}>
              <span>{item.icon}</span>
            </div>

            {/* NUMBER */}
            <span className={styles.number}>{item.id}</span>
            <span className={styles.line}></span>

            {/* CONTENT */}
            <div className={styles.box}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourservice;
