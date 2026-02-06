import React from "react";
import styles from "../../Styles/Ourservice.module.css";
import butterfly from "../../images/butterfly.webp";
import Slide from "../Slide";


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
    <>
      <section className={styles.wrapper}>
       
        <div className={styles.container}>
          <h2 className={styles.heading}><span>
            <img src={butterfly} alt="" width={'100px'}/></span>OUR BEST SERVICES</h2>

          <div className={styles.timeline}>
            {services.map((item) => (
              <div key={item.id} className={styles.service}>

                <div className={styles.iconCircle}>
                  <span>{item.icon}</span>
                </div>


                <span className={styles.number}>{item.id}</span>
                <span className={styles.line}></span>


                <div className={styles.box}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slide />

    </>
  );
};

export default Ourservice;
