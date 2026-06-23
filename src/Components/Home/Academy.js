import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Academy.module.css";
import academyTeaching from "../../images/academy_teaching.jpg";
import academyGirl from "../../images/academygirl.webp";
import orangeGirl from "../../images/orangegirl.webp";
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
  const [activeRoadmap, setActiveRoadmap] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const roadmaps = [
    { 
      name: "HTML", 
      color: "#ff5722", 
      tagline: "Structure & Semantics",
      skills: "DOM API • Semantic Markup • Web Accessibility (a11y) • SEO Standards",
      desc: "Learn to build modern, structural templates. Understand search crawler optimizations and semantic HTML5 design patterns.",
      icon: Code 
    },
    { 
      name: "CSS", 
      color: "#00d2ff", 
      tagline: "Design & Animations",
      skills: "Flexbox & Grid Layouts • CSS custom properties • Keyframe Animations • Responsive UI",
      desc: "Style highly responsive user interfaces. Implement hardware-accelerated animations, variables, and modern grids.",
      icon: Sparkles 
    },
    { 
      name: "JAVA", 
      color: "#ffc107", 
      tagline: "Robust Core Systems",
      skills: "OOP Concepts • Multithreading • Collections API • Data Architectures",
      desc: "Gain deep backend competency. Master object-oriented methodologies, core utility libraries, and reliable thread logic.",
      icon: Code 
    },
    { 
      name: "REACT", 
      color: "#18ffff", 
      tagline: "Component Architectures",
      skills: "Hooks State • Context API • Virtual DOM diffing • Single Page Apps",
      desc: "Build highly reactive interfaces. Leverage hook patterns, state context systems, and optimize page performance.",
      icon: GraduationCap 
    },
    { 
      name: "MONGO", 
      color: "#4caf50", 
      tagline: "Document Databases",
      skills: "NoSQL Schemas • Aggregation Pipelines • Indexing Optimization • MongoDB Atlas",
      desc: "Architect scalable document storage environments. Design advanced query pipelines, custom indexing, and secure databases.",
      icon: Compass 
    },
  ];

  const stats = [
    {
      tag: "HANDS-ON LEARNING",
      title: "Project Based Learning",
      desc: "Apply your knowledge directly by building real-world software and production-grade applications.",
      icon: Code,
    },
    {
      tag: "1-ON-1 GUIDANCE",
      title: "Industry Mentorship",
      desc: "Learn from top developers and senior tech architects active in the modern engineering field.",
      icon: Compass,
    },
    {
      tag: "PLACEMENT SUPPORT",
      title: "Career Guidance",
      desc: "Receive personalized career-oriented counseling, resume workshops, and technical mock interviews.",
      icon: Briefcase,
    },
  ];

  return (
    <section className={styles.wrapper}>
      {/* Decorative premium floating particles & glow backdrops */}
      <div className={styles.backgroundEffects}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
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
          <h2 className={styles.heading}>
            Softnova <span className={styles.accentText}>Academy</span>
          </h2>
          <div className={styles.dividerWrap}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerGlow}></div>
          </div>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className={styles.mainLayout}>
          
          {/* Left Side: Three-Image Overlapping Collage */}
          <motion.div className={styles.collageWrap} variants={imageVariants}>
            <div className={styles.collageContainer}>
              
              {/* Secondary Image Card (Top Right / Aqua-Blue Theme) */}
              <motion.div 
                className={`${styles.collageCard} ${styles.cardSecondary}`}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                <img src={academyGirl} alt="Academy Student" className={styles.collageImg} />
                <div className={styles.collageImgGlow} style={{ "--glow-color": "rgba(0, 210, 255, 0.4)" }}></div>
                <div className={styles.cornerTL}></div>
                <div className={styles.cornerBR}></div>
              </motion.div>

              {/* Tertiary Image Card (Bottom Left / Gold-Yellow Theme) */}
              <motion.div 
                className={`${styles.collageCard} ${styles.cardTertiary}`}
                whileHover={{ scale: 1.08, rotate: 0, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                <img src={orangeGirl} alt="Digital Learning" className={styles.collageImg} />
                <div className={styles.collageImgGlow} style={{ "--glow-color": "rgba(255, 87, 34, 0.45)" }}></div>
                <div className={styles.cornerTR}></div>
                <div className={styles.cornerBL}></div>
              </motion.div>

              {/* Primary Image Card (Center / Deep Orange Theme) */}
              <motion.div 
                className={`${styles.collageCard} ${styles.cardPrimary}`}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                <img src={academyTeaching} alt="Interactive Mentorship" className={styles.collageImg} />
                <div className={styles.collageImgGlow} style={{ "--glow-color": "rgba(255, 87, 34, 0.45)" }}></div>
                <div className={styles.cornerTL}></div>
                <div className={styles.cornerTR}></div>
                <div className={styles.cornerBL}></div>
                <div className={styles.cornerBR}></div>
              </motion.div>

              {/* Glassmorphic Floating Badges */}
              <div className={`${styles.badge} ${styles.badge1}`}>
                <div className={styles.badgeIconBg}>
                  <GraduationCap size={16} className={styles.badgeIcon} />
                </div>
                <div className={styles.badgeContent}>
                  <span className={styles.badgeNum}>98%</span>
                  <span className={styles.badgeLabel}>Completion Rate</span>
                </div>
              </div>

              <div className={`${styles.badge} ${styles.badge2}`}>
                <div className={styles.badgeIconBg}>
                  <Award size={16} className={styles.badgeIcon} />
                </div>
                <div className={styles.badgeContent}>
                  <span className={styles.badgeNum}>Certified</span>
                  <span className={styles.badgeLabel}>Program Curriculum</span>
                </div>
              </div>

              <div className={`${styles.badge} ${styles.badge3}`}>
                <div className={styles.ratingStars}>★★★★★</div>
                <span className={styles.badgeLabel}>Rated Course Modules</span>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Narrative and Interactive Roadmap */}
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

            {/* INTERACTIVE LEARNING ROADMAP */}
            <motion.div className={styles.roadmapBlock} variants={fadeInUp}>
              <div className={styles.roadmapHeader}>
                <h4 className={styles.roadmapTitle}>LEARNING ROADMAP PATH</h4>
                <span className={styles.roadmapSubtitle}>Hover or tap nodes to explore</span>
              </div>
              
              <div className={styles.roadmapPath}>
                {roadmaps.map((node, index) => (
                  <React.Fragment key={index}>
                    <motion.button
                      className={`${styles.roadmapNode} ${activeRoadmap === index ? styles.activeNode : ""}`}
                      onClick={() => setActiveRoadmap(index)}
                      onMouseEnter={() => setActiveRoadmap(index)}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      style={{ "--node-color": node.color }}
                      aria-label={`Explore roadmap node ${node.name}`}
                    >
                      <span className={styles.nodeText}>{node.name}</span>
                      <div className={styles.nodeGlowRing}></div>
                    </motion.button>
                    {index < roadmaps.length - 1 && (
                      <div className={styles.roadmapLine}>
                        <div 
                          className={styles.roadmapLineActive} 
                          style={{
                            background: `linear-gradient(to right, ${node.color}, ${roadmaps[index+1].color})`,
                            opacity: activeRoadmap >= index ? 1 : 0.25
                          }}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Dynamic Interactive Info Display */}
              <div className={styles.detailCardWrapper}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRoadmap}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                    transition={{ duration: 0.25 }}
                    className={styles.detailCard}
                    style={{ "--accent-color": roadmaps[activeRoadmap].color }}
                  >
                    <div className={styles.detailCardGlow}></div>
                    <div className={styles.detailCardHeader}>
                      <div className={styles.detailIconWrapper}>
                        {React.createElement(roadmaps[activeRoadmap].icon, { size: 18, className: styles.detailIcon })}
                      </div>
                      <div>
                        <span className={styles.detailTagline}>{roadmaps[activeRoadmap].tagline}</span>
                        <h5 className={styles.detailNodeName}>{roadmaps[activeRoadmap].name}</h5>
                      </div>
                    </div>
                    <p className={styles.detailDesc}>{roadmaps[activeRoadmap].desc}</p>
                    <div className={styles.detailSkillsWrapper}>
                      <span className={styles.skillsHeading}>Core Concepts covered</span>
                      <p className={styles.skillsText}>{roadmaps[activeRoadmap].skills}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
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
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.statCardBorderGlow}></div>
              <span className={styles.statTag}>{stat.tag}</span>
              <div className={styles.statIconWrapper}>
                <stat.icon size={18} className={styles.statIcon} />
              </div>
              <h4 className={styles.statTitle}>{stat.title}</h4>
              <p className={styles.statDesc}>{stat.desc}</p>
              
              <div className={styles.statCardDecoration}></div>
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
              <span>Show More Courses</span>
              <div className={styles.ctaArrowWrapper}>
                <ArrowRight size={18} className={styles.ctaArrow} />
              </div>
              <div className={styles.ctaShine}></div>
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
