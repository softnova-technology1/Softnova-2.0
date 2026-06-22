import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { FaStar, FaTrophy, FaGlassCheers, FaLaptopCode, FaUsers, FaGraduationCap } from "react-icons/fa";
import styles from "../../Styles/GalleryImg.module.css";

const filterTabs = [
  { id: "all", label: "All", icon: FaStar },
  { id: "achievements", label: "Our Achievements", icon: FaTrophy },
  { id: "celebrations", label: "Our Celebrations", icon: FaGlassCheers },
  { id: "skills", label: "Skill Development", icon: FaLaptopCode },
  { id: "recruitment", label: "Recruitment", icon: FaUsers },
  { id: "internship", label: "Internship", icon: FaGraduationCap },
];
import award from "../../images/award.webp";
import award2 from "../../images/award2.webp";

import pic1 from "../../images/cel-1.webp";
import pic3 from "../../images/cel-3.webp";
import pic4 from "../../images/cel-4.webp";
import pic6 from "../../images/cel-6.webp";
import pic8 from "../../images/cel-8.webp";
import pic11 from "../../images/cel-11.jpg";
import pic17 from "../../images/cel-17.webp";
import pic19 from "../../images/cel-19.webp";
import pic20 from "../../images/cel-20.webp";
import g4 from "../../images/g4.jpeg";
import g3 from "../../images/g3.jpeg";
import g1 from "../../images/g1.jpeg";
import g6 from "../../images/g6.jpeg";



import skill1 from "../../images/skill1.webp";
import skill2 from "../../images/skill2.webp";
import skill3 from "../../images/skill3.webp";
import skill4 from "../../images/skill4.webp";
import skill5 from "../../images/skill5.webp";

import intern1 from "../../images/intern2.webp";
import intern2 from "../../images/intern3.webp";
import intern3 from "../../images/intern1.webp";
import intern4 from "../../images/intern4.webp";
import intern5 from "../../images/intern5.webp";


import re1 from "../../images/rec-1.webp";
import re2 from "../../images/rec-2.webp";
import re3 from "../../images/rec-3.webp";

import Breadcrumb from "../BreadCrumb";

const tabsData = {
  all: {
    title: "All Gallery",
    desc: "A complete glimpse into our achievements, celebrations, skills and journey",
    images: [
      award,
      award2,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      re1,
      re2,
      re3,
      intern1,
      intern2,
      intern3,
      intern4,
      intern5,
      pic1,
      pic19,
      pic20,
      pic6,
      pic8,
      pic3,
      pic4,
      pic11,
      pic17,
      g4,
      g3,
      // g1,
      g6,
    ],

  },

  achievements: {
    title: "Our Achievements",
    desc: "Celebrating milestones and recognition that define our journey to excellence",
    images: [award, award2],
  },
  celebrations: {
    title: "Our Celebrations",
    desc: "Moments of joy, success, and togetherness",
    images: [
      pic1,
      pic19,
      pic20,
      pic6,
      pic8,
      pic3,
      pic4,
      pic11,
      pic17,
      // g1,
      g4,
      g3,
      g6,
    ],
  },
  skills: {
    title: "Skill Development",
    desc: "Upskilling our team for a better future",
    images: [skill1, skill2, skill3, skill4, skill5],
  },
  recruitment: {
    title: "Recruitment",
    desc: "Welcoming talented minds into our journey",
    images: [re1, re2, re3],
  },
  internship: {
    title: "Internship",
    desc: "Nurturing young talents through learning",
    images: [
      intern1,
      intern2,
      intern3,
      intern4,
      intern5],
  },
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("all");
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 120,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: ["#f89e38", "#818cf8", "#fb7185", "#f472b6"] },
        shape: { type: ["circle", "triangle", "polygon"] },
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: { enable: true, speed: 1 },
        },
        size: { value: { min: 1, max: 4 } },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "out" },
          attract: { enable: true, rotate: { x: 600, y: 1200 } },
        },
        links: {
          enable: true,
          distance: 120,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.5 } },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  const current = tabsData[activeTab];

  return (
    <>
      <Breadcrumb />
      <section className={styles.hero}>
        <div className={styles.sphereBg}>
          {init && <Particles id="tsparticles" options={particlesOptions} />}
        </div>
        <div className={styles.overlay}>
          <span className={styles.heroBadge}>• Gallery</span>
          <h1>Our Journey in Moments</h1>
          <p>
            A visual celebration of our milestones, teamwork, culture, and
            achievements that shape Softnova’s growth story.
          </p>
        </div>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.tabs}>
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`${styles.tab} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryTabBubble"
                    className={styles.activeBubble}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={styles.tabContent}>
                  <IconComponent className={styles.tabIcon} />
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.header}>
          <span className={styles.badge}>• Gallery</span>
          <h2>{current.title}</h2>
          <p>{current.desc}</p>
        </div>

        <div className={styles.grid}>
          {current.images.map((img, index) => (
            <div key={index} className={styles.card}>
              <img loading="lazy" src={img} alt="Gallery" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
