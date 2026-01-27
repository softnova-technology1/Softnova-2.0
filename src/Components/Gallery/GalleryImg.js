import React, { useState } from "react";
import styles from "../../Styles/GalleryImg.module.css";
import award from "../../images/award.jpg";
import award2 from "../../images/award2.jpg";

import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import pic6 from "../../images/pic6.jpg";
import pic7 from "../../images/pic7.jpg";
import pic8 from "../../images/pic8.jpg";
import pic9 from "../../images/pic9.jpg";
import pic10 from "../../images/pic10.jpg";
import pic11 from "../../images/pic11.jpg";
import pic12 from "../../images/pic12.jpg";
import pic13 from "../../images/pic13.jpeg";
import pic16 from "../../images/pic16.jpeg";
import pic18 from "../../images/pic18.jpeg";

import skill1 from "../../images/skill1.jpg";
import skill2 from "../../images/skill2.jpg";
import skill3 from "../../images/skill3.jpg";
import skill4 from "../../images/skill4.jpg";
import skill5 from "../../images/skill5.jpg";

import intern1 from "../../images/intern1.jpg";
import intern2 from "../../images/intern2.jpg";
import intern3 from "../../images/intern3.jpg";
import intern4 from "../../images/intern4.jpg";
import intern5 from "../../images/intern5.jpg";
import intern6 from "../../images/intern6.jpg";
import intern7 from "../../images/intern7.jpg";
import intern8 from "../../images/intern8.jpg";
import intern9 from "../../images/intern9.jpg";

import re1 from "../../images/re1.jpg";
import re2 from "../../images/re2.png";

const tabsData = {
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
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10,
      pic11,
      pic12,
      pic13,
      pic16,
      pic18,
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
    images: [re1, re2],
  },
  internship: {
    title: "Internship",
    desc: "Nurturing young talents through learning",
    images: [
      intern1,
      intern2,
      intern3,
      intern4,
      intern5,
      intern6,
      intern7,
      intern8,
      intern9,
    ],
  },
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("achievements");

  const current = tabsData[activeTab];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <span className={styles.heroBadge}>• Gallery</span>
          <h1>Our Gallery</h1>
          <p>
            A glimpse into our achievements, celebrations and growth journey
          </p>
        </div>
      </section>
      <section className={styles.wrapper}>
        {/* Tabs */}
        <div className={styles.tabs}>
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

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>• Gallery</span>
          <h2>{current.title}</h2>
          <p>{current.desc}</p>
        </div>

        {/* Gallery */}
        <div className={styles.grid}>
          {current.images.map((img, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.cardBadge}>Gallery</span>
              <img src={img} alt="Gallery" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
