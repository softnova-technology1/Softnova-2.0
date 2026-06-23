import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "../../Styles/OurTeam.module.css";

// Import generated team member images (transparent PNGs)
import team1 from "../../images/About-Images/t1.jpg";
import team2 from "../../images/About-Images/ceo.png";
import team3 from "../../images/About-Images/t2.png";
import team4 from "../../images/About-Images/t3.png";
import team5 from "../../images/About-Images/t7.png";
import team6 from "../../images/About-Images/t4.png";
import team7 from "../../images/About-Images/t5.png";
import team8 from "../../images/About-Images/t6.png";
import team9 from "../../images/About-Images/t8.png";

const teamData = [
  {
    id: 1,
    name: "Narendhiran Balraj",
    role: "CEO & Founder",
    img: team2,
    socials: {
      linkedin: "https://www.linkedin.com/in/narenbalraj/",
      // github: "https://github.com",
      mailto: "info@softnovatech.com"
    }
  },
  {
    id: 2,
    name: "Mahetha Selvaraj",
    role: "HR Manager",
    img: team1,
    socials: {
      // linkedin: "https://linkedin.com",
      // github: "https://github.com",
      mailto: "info@softnovatech.com"
    }
  },
  {
    id: 3,
    name: "Dharshika",
    role: "Senior Full Stack Developer & Technical Trainer",
    img: team3,
    socials: {
      linkedin: "https://www.linkedin.com/in/dharshika-s-aa615028a/",
      github: "https://github.com/dharshika29",
      mailto: "sdharshika00@gmail.com"
    }
  },
  {
    id: 4,
    name: "Adhithyan",
    role: "Full Stack Developer & Video Editor",
    img: team4,
    socials: {
      linkedin: "https://www.linkedin.com/in/adhithyan-p-781b2138b/",
      github: "https://github.com/Athithyan61",
      mailto: "athithyanathithyan06@gmail.com"
    }
  },
  {
    id: 5,
    name: "Santhiya",
    role: "Digital Marketing & Business Development Executive",
    img: team5,
    socials: {
      linkedin: "https://www.linkedin.com/in/santhiya-c-671962251/",
      // github: "https://github.co",
      mailto: "sya258027@gmail.com"
    }
  },
  {
    id: 6,
    name: "Shanmathi",
    role: "Full Stack Developer",
    img: team6,
    socials: {
      linkedin: "https://www.linkedin.com/in/shanmathi2001/",
      github: "https://github.com/Shanmathi0605 ",
      mailto: "smily.shanvi6597@gmail.com"
    }
  },
  {
    id: 7,
    name: "Ega ajith G",
    role: "Full Stack Developer",
    img: team7,
    socials: {
      linkedin: "https://www.linkedin.com/in/ega-ajith-g2004/",
      github: "https://github.com/EGAAJITH-G",
      mailto: "egaajith4343@gmail.com"
    }
  },
  {
    id: 8,
    name: "Akileshwaran",
    role: " AI Full Stack Developer & Technical Trainer",
    img: team8,
    socials: {
      linkedin: "https://www.linkedin.com/in/akileswaran-dev/",
      github: "https://github.com/Akileswaran-Dev",
      mailto: "akileswaran.dev@gmail.com"
    }
  },
  {
    id: 9,
    name: "Thangadeepak",
    role: "MERN Stack Developer",
    img: team9,
    socials: {
      linkedin: "https://www.linkedin.com/in/thangadeepak-developer/",
      github: "https://github.com/thangadeepak",
      mailto: "thangadeepakdeepak05@gmail.com"
    }
  }
];

const OurTeam = () => {
  // Extract CEO Sarah Connor and separate from the other members
  const ceoData = teamData.find(member => member.role === "CEO & Founder");
  const otherMembers = teamData.filter(member => member.role !== "CEO & Founder");

  // Split other team members into 4 on the first row, 4 on the second row
  const row1Members = otherMembers.slice(0, 4);
  const row2Members = otherMembers.slice(4, 8);

  const renderMember = (member) => {
    // Extract first name for the large background outline watermark
    const firstName = member.name.split(" ")[0].toUpperCase();

    return (
      <article key={member.id} className={`${styles.teamCard} ${member.id % 2 === 1 ? styles.cardType1 : styles.cardType2}`}>
        {/* Image Container with overlay & name overlay */}
        <div className={styles.imageContainer}>
          {/* Glowing circle backdrop behind the portrait */}
          <div className={styles.glowBackdrop} />

          {/* Large outline watermark behind the portrait */}
          <div className={styles.watermark}>{firstName}</div>

          <img
            className={styles.memberImg}
            src={member.img}
            alt={member.name}
            loading="lazy"
          />
          <div className={styles.imageOverlay} />
          <h3 className={styles.nameOverlay}>{member.name}</h3>
        </div>

        {/* Information panel below the image */}
        <div className={styles.infoContainer}>
          <p className={styles.memberRole}>{member.role}</p>
          <h4 className={styles.memberNameSub}>{member.name}</h4>

          {/* Animated decorative divider line */}
          <div className={styles.dividerLine} />

          {/* Social icons */}
          <ul className={styles.socialsList}>
            <li>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={`${member.name} GitHub`}
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href={member.socials.mailto}
                className={styles.socialLink}
                aria-label={`${member.name} Mailto`}
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </article>
    );
  };

  return (
    <section className={styles.teamSection}>
      {/* Background glow effects */}
      <div className={styles.bgCircle1} />
      <div className={styles.bgCircle2} />

      <div className={styles.headingWrapper}>
        <span className={styles.subtitle}>Our Creative Force</span>
        <h2 className={styles.title}>
          Meet the Minds Behind <span className={styles.highlight}>Softnova</span>
        </h2>
      </div>

      {/* CEO Spotlight Section (SpaceX Elon Musk Style) */}
      {ceoData && (
        <div className={styles.ceoSpotlight}>
          {/* Tech Dotted Grid Background */}
          <div className={styles.ceoGridPattern} />

          <div className={styles.ceoCard}>
            {/* Top-Right Executive Spotlight Badge */}
            <div className={styles.ceoBadge}>Executive Leadership</div>

            {/* Left Column: Image Wrapper */}
            <div className={styles.ceoImageCol}>
              {/* Floating wireframe outline behind the portrait */}
              <div className={styles.ceoImageWireframe} />

              <div className={styles.ceoImageContainer}>
                {/* Glow backdrop behind portrait */}
                <div className={styles.ceoGlowBackdrop} />
                {/* Large watermark text behind portrait */}
                <div className={styles.ceoWatermark}>SARAH</div>
                <img
                  className={styles.ceoImg}
                  src={ceoData.img}
                  alt={ceoData.name}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Info Details */}
            <div className={styles.ceoInfoCol}>
              {/* Giant quotation mark in background of info column */}
              <span className={styles.ceoQuoteMark}>“</span>

              <div className={styles.ceoHeaderLine} />
              <p className={styles.ceoRole}>{ceoData.role}</p>
              <h3 className={styles.ceoName}>{ceoData.name}</h3>

              <p className={styles.ceoBio}>
                Our growth and success are guided by the visionary leadership of our CEO, Founder & Managing Director. With a passion for innovation, technology, and entrepreneurship, he established Softnova with a mission to create impactful digital solutions while empowering young talents and businesses to grow in the modern digital world.
                Under his leadership, Softnova has expanded into software development, SaaS solutions, digital services, and professional training programs, delivering quality-driven and future-focused solutions to clients across various industries. His commitment to creativity, excellence, and continuous improvement continues to shape the company's culture, inspire the team, and drive Softnova toward a stronger and more innovative future.
              </p>

              <div className={styles.ceoSignature}>Narendhiran Balraj</div>

              <ul className={styles.ceoSocials}>
                <li>
                  <a
                    href={ceoData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ceoSocialLink}
                    aria-label={`${ceoData.name} LinkedIn`}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>

                <li>
                  <a
                    href={ceoData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ceoSocialLink}
                    aria-label={`${ceoData.name} GitHub`}
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href={ceoData.socials.email}
                    className={styles.ceoSocialLink}
                    aria-label={`${ceoData.name} Email`}
                  >
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Grid container with 4 cards on top row, 3 cards on bottom row */}
      <div className={styles.gridContainer}>
        <div className={styles.row1}>
          {row1Members.map(renderMember)}
        </div>
        <div className={styles.row2}>
          {row2Members.map(renderMember)}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

