import React from "react";
import styles from "../../Styles/Ourservice.module.css";
import { Megaphone, TrendingUp, Palette, Lightbulb, Settings } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Marketing",
    text: "Digital marketing services designed to grow your online presence and connect you with the  right audience.",
    icon: Megaphone,
  },
  {
    id: "02",
    title: "SEO",
    text: "Optimize your website to rank higher on search engines and attract organic traffic.",
    icon: TrendingUp,
  },
  {
    id: "03",
    title: "UI/UX Design",
    text: "Design intuitive, user-friendly interfaces that enhance user experience and engagement.",
    icon: Palette,
  },
  {
    id: "04",
    title: "Creative",
    text: "Branding solutions and creative ideas to help your business stand out.",
    icon: Lightbulb,
  },
  {
    id: "05",
    title: "Optimization",
    text: "Analyze and optimize performance to improve  load speed and increase conversions.",
    icon: Settings,
  },
];

const ServiceCard = ({ item }) => {
  const boxRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    boxRef.current.style.setProperty("--x", `${x}px`);
    boxRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className={styles.service}>
      <div className={styles.iconCircle}>
        <item.icon className={styles.icon} />
      </div>

      <span className={styles.number}>{item.id}</span>
      <span className={styles.line}></span>

      <div
        ref={boxRef}
        className={styles.box}
        onMouseMove={handleMouseMove}
      >
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

const Ourservice = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.headingContainer}>
            <h2 className={styles.heading}>
              OUR BEST SERVICES
              <div className={styles.headingGlow}></div>
            </h2>
            <div className={styles.headingDivider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerDot}></span>
              <span className={styles.dividerLineRight}></span>
            </div>
          </div>

          <div className={styles.timeline}>
            {services.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourservice;

