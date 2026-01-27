import styles from "../Styles/Whychoose.module.css";
import office from "../images/orangegirl.jpg";

export default function WhyChooseSoftNova() {
  const features = [
    {
      title: "Tailored Digital Solutions",
      desc: "Custom strategies and platforms built around your business goals.",
      icon: "💡",
    },
    {
      title: "Technical & Creative Expertise",
      desc: "A perfect blend of modern technology and creative thinking.",
      icon: "⚙️",
    },
    {
      title: "Scalable & Future-Ready",
      desc: "Solutions designed to grow with your business.",
      icon: "📈",
    },
    {
      title: "Client-Centric Approach",
      desc: "We work closely with you to deliver measurable results.",
      icon: "🤝",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose SoftNova?</h2>

        {/* Text Content */}
        <div className={styles.description}>
          <p>
            At SoftNova, we understand that every business is unique. That’s why we
            deliver tailored digital solutions designed to help your brand stand
            out and grow.
          </p>
          <p>
            From custom websites and e-commerce platforms to lead generation and
            digital marketing, we combine technical excellence with creative
            strategy to build scalable solutions aligned with your goals.
          </p>
          <p>
            Our client-centric approach focuses on seamless integration, enhanced
            user experience, and measurable outcomes that drive long-term success.
          </p>
        </div>

        {/* Cards + Image */}
        <div className={styles.content}>
          <div className={styles.cards}>
            {features.map((item, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.icon}>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageBox}>
            <img src={office} alt="Why Choose SoftNova" />
          </div>
        </div>
      </div>
    </section>
  );
}
