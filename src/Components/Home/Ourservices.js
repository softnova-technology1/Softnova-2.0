import React from "react";
import styles from "../../Styles/Ourservice.module.css";
import butterfly from "../../images/butterfly.gif";
const services = [
  {
    id: "01",
    title: "Marketing",
    text: "Digital marketing services designed to grow your online presence and connect you with the  right audience.",
    icon: "📢",
  },
  {
    id: "02",
    title: "SEO",
    text: "Optimize your website to rank higher on search engines and attract organic traffic.",
    icon: "📈",
  },
  {
    id: "03",
    title: "UI/UX Design",
    text: "Design intuitive, user-friendly interfaces that enhance user experience and engagement.",
    icon: "🎨",
  },
  {
    id: "04",
    title: "Creative",
    text: "Branding solutions and creative ideas to help your business stand out.",
    icon: "💡",
  },
  {
    id: "05",
    title: "Optimization",
    text: "Analyze and optimize performance to improve  load speed and increase conversions.",
    icon: "⚙️",
  },
];

const Ourservice = () => {
  return (
    <>
      <section className={styles.wrapper}>

        <div className={styles.container}>
          <h2 className={styles.heading}><span>
            <img loading="lazy" src={butterfly} alt="" width={'100px'} /></span>OUR BEST SERVICES</h2>

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
     
    </>
  );
};

export default Ourservice;
