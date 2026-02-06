import { motion } from "framer-motion";
import styles from "../../Styles/Whychoose.module.css";
import office from "../../images/orangegirl.webp";

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


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageSlide = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "backOut" },
    },
  };

  return (
    <section className={styles.wrapper}>

      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp}>
          <h2 className={styles.heading}>Why Choose SoftNova?</h2>
          <div className={styles.description}>
            <p>
              At SoftNova, we understand that every business is unique, so we
              deliver tailored digital solutions that help your brand stand out.
              We create personalized strategies, from custom website design to
              effective lead generation, backed by strong technical and creative
              expertise. Our team builds high-performing websites, e-commerce
              platforms, and digital marketing solutions aligned with your
              business goals. With a client-centric approach and end-to-end
              services including web, mobile, and SEO, we help your business
              grow and succeed in a competitive digital landscape.
            </p>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div className={styles.cards} variants={containerVariants}>
            {features.map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <span className={styles.icon}>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className={styles.imageBox} variants={imageSlide}>
            <img src={office} alt="Why Choose SoftNova" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
