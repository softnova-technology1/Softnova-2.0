import React, { useState } from "react";
import styles from "../../Styles/GalleryImg.module.css";
import award from "../../images/award.webp";
import award2 from "../../images/award2.webp";

import pic1 from "../../images/cel-1.webp";
import pic2 from "../../images/cel-2.webp";
import pic3 from "../../images/cel-3.webp";
import pic4 from "../../images/cel-4.webp";
import pic5 from "../../images/cel-5.webp";
import pic6 from "../../images/cel-6.webp";
import pic7 from "../../images/cel-7.webp";
import pic8 from "../../images/cel-8.webp";
import pic9 from "../../images/cel-9.webp";
import pic11 from "../../images/cel-11.jpg";
import pic12 from "../../images/cel-12.webp";
import pic13 from "../../images/cel-13.webp";
import pic14 from "../../images/cel-14.webp";
import pic15 from "../../images/cel-15.webp";
import pic16 from "../../images/cel-16.webp";
import pic17 from "../../images/cel-17.webp";
import pic18 from "../../images/cel-18.webp";
import pic19 from "../../images/cel-19.webp";
import pic20 from "../../images/cel-20.webp";


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

import SphereBackground from "./Sphere";
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
      pic18,
      pic19,
      pic20,
      pic14,
      pic9,
      pic6,
      pic2,
      pic7,
      pic8,
      pic3,
      pic4,
      pic5,
      pic13,
      pic11,
      pic12,
      pic15,
      pic16,
      pic17,

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
      pic18,
      pic19,
      pic20,
      pic14,
      pic9,
      pic6,
      pic2,
      pic7,
      pic8,
      pic3,
      pic4,
      pic5,
      pic13,
      pic11,
      pic12,
      pic15,
      pic16,
      pic17,
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

  const current = tabsData[activeTab];

  return (
    <>
      <Breadcrumb />
      <section className={styles.hero}>
        <div className={styles.sphereBg}>
          <SphereBackground />
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
          <button
            className={activeTab === "all" ? styles.active : ""}
            onClick={() => setActiveTab("all")}
          >
            🌟 All
          </button>

          <button
            className={activeTab === "achievements" ? styles.active : ""}
            onClick={() => setActiveTab("achievements")}
          >
            🏆 Our Achievements
          </button>

          <button
            className={activeTab === "celebrations" ? styles.active : ""}
            onClick={() => setActiveTab("celebrations")}
          >
            🎉 Our Celebrations
          </button>

          <button
            className={activeTab === "skills" ? styles.active : ""}
            onClick={() => setActiveTab("skills")}
          >
            📚 Skill Development
          </button>

          <button
            className={activeTab === "recruitment" ? styles.active : ""}
            onClick={() => setActiveTab("recruitment")}
          >
            👥 Recruitment
          </button>

          <button
            className={activeTab === "internship" ? styles.active : ""}
            onClick={() => setActiveTab("internship")}
          >
            🎓 Internship
          </button>
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
