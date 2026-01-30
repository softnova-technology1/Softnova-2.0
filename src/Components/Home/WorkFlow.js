import React, { useState } from 'react';
import { ClipboardList, Layout, Code2, Monitor, CheckCircle2 } from 'lucide-react';
import styles from '../../Styles/WorkFlow.module.css';
import { Container } from 'react-bootstrap';
import phase1 from '../../images/phase01.png';
import phase2 from '../../images/phase2.png';
import phase3 from '../../images/phase3.png';
import phase5 from '../../images/phase4.png';
import phase4 from '../../images/phase5.png';

const phases = [
  {
    id: '01',
    title: 'PLANNING',
    desc: 'We have extensive experience in transforming innovative ideas into',
    icon: <ClipboardList size={20} />,
    progress: 20,
    img: phase1,
  },
  {
    id: '02',
    title: 'DESIGN',
    desc: 'We specialize in creative design solutions that give your brand a polished',
    icon: <Layout size={20} />,
    progress: 40,
    img: phase2,
  },
  {
    id: '03',
    title: 'DEVELOPMENT',
    desc: 'Our team of developers excels in delivering robust enterprise portal development solutions.',
    icon: <Code2 size={20} />,
    progress: 60,
    img:phase3,
  },
  {
    id: '04',
    title: 'TESTING',
    desc: 'We\'re always ready to test, consult, and resolve any challenges related to',
    icon: <Monitor size={20} />,
    progress: 80,
    img: phase4,
  },
  {
    id: '05',
    title: 'COMPLETION',
    desc: 'We deliver our projects on time with exellent results that make an impact.',
    icon: <CheckCircle2 size={20} />,
    progress: 100,
    img: phase5,
  },
];


const Workflow = () => {
  const [activeProgress, setActiveProgress] = useState(20);

  return (
    <Container>
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.heroTitle}>Workflow <span>Evolved</span></h1>
        <p className={styles.subtitle}>A precisely engineered methodology for transforming vision into digital reality.</p>

        <div className={styles.progressSection}>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${activeProgress}%` }}></div>
          </div>
          <div className={styles.trackLabels}>
            <span className={styles.labelTitle}>PROJECT PROGRESS</span>
            <span className={styles.percentText}>{activeProgress}%</span>
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        {phases.map((p) => (
          <div key={p.id} className={styles.cardBox} onMouseEnter={() => setActiveProgress(p.progress)}>
         
            <h2 className={styles.gradientNumber}>{p.id}</h2>

            <div className={styles.card}>
              <div className={styles.cardBg} style={{ backgroundImage: `url(${p.img})` }}></div>
              <div className={styles.glassLayer}>
                <div className={styles.topRow}>
                  <div className={styles.phaseBadge}>PHASE {p.id}</div>
                  <div className={styles.iconCircle}>{p.icon}</div>
                </div>
                <div className={styles.bottomRow}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <div className={styles.accentLine}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default Workflow;