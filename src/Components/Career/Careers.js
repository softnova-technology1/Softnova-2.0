import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../Styles/Career.module.css";

import {
  FaReact,
  FaUserTie,
  FaPenNib,
  FaPaintBrush,
  FaUsersCog,
  FaServer,
  FaMobileAlt,
  FaProjectDiagram,
  FaCloud,
} from "react-icons/fa";

import {
  MdDesignServices,
  MdDeveloperMode,
  MdOutlineMotionPhotosAuto,
} from "react-icons/md";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsGraphUpArrow, BsFillPeopleFill } from "react-icons/bs";
import { RiDatabase2Fill } from "react-icons/ri";
import CareerForm from "./Form";
import CareerHero from "./Careerpart";
import Breadcrumb from "../BreadCrumb";

/* ⭐ STAR SVG — UNCHANGED */
const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className={styles.starSvg}
  >
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
      207.96,29.37 371.12,197.68 392.05,407.74
      20.93,-210.06 184.09,-378.37 392.05,-407.74
      -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

/* 🔹 ROLE DATA — UNCHANGED */
const roleData = {
  Internship: [
    { title: "UI/UX Intern", icon: <MdDesignServices /> },
    { title: "Graphic Designer Intern", icon: <FaPaintBrush /> },
    { title: "Marketing Intern", icon: <BsGraphUpArrow /> },
    { title: "HR Intern", icon: <FaUserTie /> },
    { title: "Frontend Intern", icon: <FaReact /> },
    { title: "FullStack Intern", icon: <FaProjectDiagram /> },
    { title: "Mobile App Intern", icon: <FaMobileAlt /> },
  ],
  Developer: [
    { title: "Frontend Developer", icon: <FaReact /> },
    { title: "Backend Developer", icon: <RiDatabase2Fill /> },
    { title: "Full Stack Developer", icon: <MdDeveloperMode /> },
    { title: "DevOps Engineer", icon: <FaCloud /> },
    { title: "MERN Stack Developer", icon: <FaServer /> },
    { title: "Mobile App Developer", icon: <FaMobileAlt /> },
  ],
  Management: [
    { title: "Recruiter HR", icon: <BsFillPeopleFill /> },
    { title: "Payroll HR", icon: <FaUsersCog /> },
    { title: "HR Manager", icon: <FaUserTie /> },
    { title: "System Admin", icon: <HiOutlineDesktopComputer /> },
    { title: "Product Manager", icon: <FaProjectDiagram /> },
  ],
  Designing: [
    { title: "UI Designer", icon: <MdDesignServices /> },
    { title: "Motion Designer", icon: <MdOutlineMotionPhotosAuto /> },
    { title: "Graphic Designer", icon: <FaPenNib /> },
  ],
};

/* 🔹 FRAMER ANIMATIONS — UNCHANGED */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState("Internship");

  /* ✅ ONLY NEW ADDITION */
  const scrollToForm = () => {
    const el = document.getElementById("careerForm");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
    <Breadcrumb/>
      <section className={styles.careerSection}>
        <CareerHero/>
      </section>

      <section className={styles.introSection}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          To infinite opportunities.
        </motion.h2>

        <motion.p
          className={styles.quote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          “Softnova provides a compelling and distinctive opportunity to join a
          remarkable team, while also prioritizing the creation of an outstanding
          work environment for our employees.”
        </motion.p>
      </section>

      <section className={styles.rolesSection}>
        <div className={styles.tabs}>
          {Object.keys(roleData).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabBtn} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="underline"
                  className={styles.underline}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.cardsGrid}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
          >
            {roleData[activeTab].map((role, index) => (
              <motion.div
                key={index}
                className={styles.card}
                variants={item}
                whileHover={{ y: -12 }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.icon}>{role.icon}</div>
                  <h3>{role.title}</h3>
                </div>

                {/* ✅ ONLY CHANGE HERE */}
                <button
                  className={styles.starButton}
                  onClick={scrollToForm}
                >
                  APPLY NOW
                  <span className={styles.star1}><StarSvg /></span>
                  <span className={styles.star2}><StarSvg /></span>
                  <span className={styles.star3}><StarSvg /></span>
                  <span className={styles.star4}><StarSvg /></span>
                  <span className={styles.star5}><StarSvg /></span>
                  <span className={styles.star6}><StarSvg /></span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ✅ ONLY ID WRAPPER */}
      <div id="careerForm">
        <CareerForm />
      </div>
    </>
  );
};

export default Careers;
