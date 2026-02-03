import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import styles from "../../Styles/StickySlide.module.css";
import { Container } from "react-bootstrap";
import AboutPage from "./Aboutcard";
import Stats from "./AboutApproach";
import AboutHero from "./AboutHero";

const cardData = [
    {
        id: 1,
        title: "Our Mission",
        subtitle: "What Drives Us",
        desc: "Our mission is to empower clients with innovative, tailored solutions that drive growth and long-term success. We commit to excellence, providing high-quality services while building lasting customer relationships. With dedication, integrity, and a client-first approach, we aim to make a meaningful impact and help businesses thrive.",
    },
    {
        id: 2,
        title: "Our Vision",
        subtitle: "Where We’re Headed",
        desc: "Our vision is to be a global leader in delivering innovative solutions that drive sustainable business growth. We aim to set industry standards through cutting-edge technologies, forward-thinking strategies, and trusted partnerships. we empower businesses to thrive and create lasting, positive impacts on clients, employees, and communities.",
    },
    {
        id: 3,
        title: "Our Plan",
        subtitle: "How We Execute",
        desc: "Our plan is to enhance site speed for faster load times, improving user experience and search engine rankings. We'll also focus on a clear, organized structure to help users easily find what they need, boosting satisfaction, engagement, and traffic.",
    },
    {
        id: 4,
        title: "Our Goals",
        subtitle: "What We Aim For",
        desc: "Our goal is to deliver top-notch service through the website, establishing a strong reputation as a trusted provider.Offering quality work. They driving long-term growth while enhancing our offerings to meet industry standards and customer expectations.",
    },
];

const About = () => {
    const revealRefs = useRef([]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add(styles.active);
                    }
                });
            },
            { threshold: 0.4 }
        );
        revealRefs.current.forEach((el) => el && observer.observe(el));
        return () => {
            lenis.destroy();
            observer.disconnect();
        };
    }, []);

    return (
        <Container fluid>
            <AboutHero/>
            <div className={styles.bg} />
            <div className={styles.pageWrapper}>
                <div className={styles.stackContainer}>
                    {cardData.map((card, index) => (
                        <div
                            key={card.id}
                            className={styles.cardItem}
                            style={{
                                top: `calc(10vh + ${index * 0}px)`,
                                zIndex: index,
                            }}
                        >
                            <div
                                ref={(el) => (revealRefs.current[index] = el)}
                                className={styles.cardInner}
                            >
                                <h1 className={styles.cardTitle}>{card.title}</h1>
                                <h3 className={styles.cardSubtitle}>{card.subtitle}</h3>
                                <p className={styles.cardDesc}>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AboutPage />
            <Stats />

        </Container>
    );
};

export default About;
