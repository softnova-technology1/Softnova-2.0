import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Academy.module.css";
import studentImg from "../../images/futuristic_student.png";
import { 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Code, 
  Compass, 
  Briefcase 
} from "lucide-react";

export default function AcademyHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const roadmaps = [
    { name: "HTML", color: "#e44d26" },
    { name: "CSS", color: "#1572b6" },
    { name: "JAVA", color: "#5382a1" },
    { name: "REACT", color: "#03a5b7" },
    { name: "MONGO", color: "#4caf50" },
  ];

  const stats = [
    {
      title: "Project Based Learning",
      desc: "Apply your knowledge directly by building real-world software and applications.",
      icon: Code,
    },
    {
      title: "Industry Mentorship",
      desc: "Learn from top developers and tech leads working in the industry.",
      icon: Compass,
    },
    {
      title: "Career Guidance",
      desc: "Receive career-oriented counseling, resume building, and interview training.",
      icon: Briefcase,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
      >
        {/* SECTION HEADER */}
        <motion.div className={styles.header} variants={fadeInUp}>
          <span className={styles.preTitle}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            FUTURE-PROOF YOUR SKILLS
          </span>
          <h2 className={styles.heading}>ACADEMY</h2>
          <div className={styles.divider}></div>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className={styles.mainLayout}>
          {/* Left Side: Visual Frame with Floating Badges */}
          <motion.div className={styles.imageWrap} variants={imageVariants}>
            <div className={styles.imageFrame}>
              <img
                loading="lazy"
                src={studentImg}
                alt="Softnova Academy Student"
                className={styles.studentImage}
              />
              <div className={styles.imageGlowOverlay}></div>

              {/* Floating Badges */}
              <div className={`${styles.badge} ${styles.badge1}`}>
                <GraduationCap size={18} className={styles.badgeIcon} />
                <div className={styles.badgeContent}>
                  <span className={styles.badgeNum}>98%</span>
                  <span className={styles.badgeLabel}>Completion Rate</span>
                </div>
              </div>

              <div className={`${styles.badge} ${styles.badge2}`}>
                <Award size={18} className={styles.badgeIcon} />
                <div className={styles.badgeContent}>
                  <span className={styles.badgeLabel}>Certified Program</span>
                </div>
              </div>

              <div className={`${styles.badge} ${styles.badge3}`}>
                <span className={styles.ratingStars}>★★★★★</span>
                <span className={styles.badgeLabel}>Rating Course</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Description Content & Roadmap */}
          <motion.div className={styles.contentWrap} variants={containerVariants}>
            <motion.div className={styles.descriptionBlock} variants={fadeInUp}>
              <p className={styles.para}>
                SoftNova Academy delivers industry-focused digital learning
                through practical, goal-driven training. We combine technical
                expertise and creative insight to offer hands-on programs in web
                development, digital marketing, UI/UX, and emerging technologies.
                With real-world projects, expert mentorship, and career-oriented
                guidance, we empower learners with the skills needed to succeed
                and grow in today’s competitive digital landscape.
              </p>
            </motion.div>

            {/* LEARNING ROADMAP */}
            <motion.div className={styles.roadmapBlock} variants={fadeInUp}>
              <h4 className={styles.roadmapTitle}>LEARNING ROADMAP PATH</h4>
              <div className={styles.roadmapPath}>
                {roadmaps.map((node, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      className={styles.roadmapNode}
                      whileHover={{ scale: 1.1, translateY: -2 }}
                      transition={{ duration: 0.2 }}
                      style={{ "--node-color": node.color }}
                    >
                      <span className={styles.nodeText}>{node.name}</span>
                    </motion.div>
                    {index < roadmaps.length - 1 && (
                      <div className={styles.roadmapLine}>
                        <div className={styles.roadmapLineActive}></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* COURSE STATS */}
        <motion.div className={styles.statsGrid} variants={containerVariants}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.statCard}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.statIconWrapper}>
                <stat.icon size={22} className={styles.statIcon} />
              </div>
              <h4 className={styles.statTitle}>{stat.title}</h4>
              <p className={styles.statDesc}>{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div className={styles.ctaBlock} variants={fadeInUp}>
          <a
            href="https://softnovatechnology.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.ctaLink}
          >
            <button className={styles.ctaBtn}>
              <span>Show More</span>
              <ArrowRight size={18} className={styles.ctaArrow} />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
