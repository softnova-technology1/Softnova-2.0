import { useEffect, useRef } from "react";
import styles from "../../Styles/Contact.module.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Maximize2 } from 'lucide-react';
import { Col, Container, Row } from "react-bootstrap";
export default function Contact() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w, h;
        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);
        const particles = [];
        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.6 + 0.4,
                v: Math.random() * 0.25 + 0.1,
            });
        }
        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            particles.forEach((p) => {
                p.y -= p.v;
                if (p.y < 0) p.y = h;
                ctx.fillStyle = "rgb(253, 248, 242)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        };
        animate();
        return () => window.removeEventListener("resize", resize);
    }, []);
    return (
        <div>
            <div className={styles.heros}>
                <div className={styles.contactHero}>
                    <Container>
                        <div className={styles.heroHeader}>
                            <span className={styles.heroBadge}></span>
                            <h2 className={styles.heroTitle}>Let’s Build Something Together</h2>
                        </div>
                        <p className={styles.heroDesc}>
                            We value meaningful connections and believe in the power of listening.
                            Communication opens new possibilities for growth and innovation —
                            and we’re excited to hear from you.
                        </p>
                    </Container>
                </div>

            </div>
            <div className={styles.Contactbg}>
                {/* BACKGROUND */}
                <canvas ref={canvasRef} className={styles.particles}></canvas>
                <Container>
                    <section className={styles.contactwrapper}>
                        <Row>
                            <Col>
                                <div className={styles.left}>
                                    <h1>We are here <br /><span>to help</span> </h1>
                                    <p className={styles.subtitle}><br />
                                        We'd love to hear from you! Feel free to reach out with any questions or project inquiries. Our team will get back to you as soon as possible.
                                    </p>

                                    <div className={styles.info}>
                                        <div className={styles.infoitem}>
                                            <FaMapMarkerAlt className={styles.infoicon} />
                                            1st Floor, Softnova Appartment, SNV Mahal back side, near SBI bank,
                                            Peravurani.
                                        </div>

                                        <div className={styles.infoitem}> <MdEmail className={styles.infoicon} />info@softnovatech.com</div>

                                        <div className={styles.infoitem}><FaPhoneAlt className={styles.infoicon} />+91  6385118083</div>
                                    </div>

                                </div>
                                <div className={styles.socials}>
                                    <a href="https://www.instagram.com/softnovatech/?igsh=bjZhdzduOWVqMDlz" aria-label="Instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://www.facebook.com/share/t1ufRjHfuJA6jfxE/?mibextid=qi2Omg" aria-label="Instagram">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.linkedin.com/company/softnovatechnology/" aria-label="LinkedIn">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=6385118083&text&type=phone_number&app_absent=0" aria-label="LinkedIn">
                                        <FaWhatsapp />
                                    </a>
                                </div>

                            </Col>
                        </Row>
                        <Col>
                            <div className={styles.formcard}>
                                {/* <h3>
                            <span className={styles.dot}>•</span> Initialize Sequence
                        </h3> */}

                                <div className="row">

                                    <div className={styles.contactCta}>
                                        <p>If you have any questions or want to start a project, reach out today.</p>
                                    </div>
                                    <div className={styles.field}>
                                        <label>FIRST NAME</label>
                                        <input />
                                    </div>
                                    <div className={styles.field}>
                                        <label>LAST NAME</label>
                                        <input />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className={styles.field}>
                                        <label>EMAIL </label>
                                        <input />
                                    </div>
                                    <div className={styles.field}>
                                        <label>PHONE NUMBER</label>
                                        <input />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label> MESSAGE</label>
                                    <textarea></textarea>
                                </div>

                                <button>SEND MESSAGE →</button>
                            </div>
                        </Col>
                    </section>
                </Container>

            </div>
            <section className={styles.mapSection}>
                <div className={styles.mapContainer}>
                    <div className={styles.floatingTag}>
                        <div className={styles.dot}></div>
                        <span>LIVE LOCATION • PERAVURANI</span>
                    </div>

                    <div className={styles.mapFrame}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3238612148153!2d79.1868478758412!3d10.471131489659066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5f63d04d964f7b%3A0xe5a3c9b744e892c5!2sPeravurani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706424000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.mapIframe}
                        ></iframe>

                        {/* Decorative Corner Accents (Set to ignore mouse events) */}
                        <div className={styles.decorLayer}>
                            <div className={styles.cornerTopLeft}></div>
                            <div className={styles.cornerTopRight}></div>
                            <div className={styles.cornerBottomLeft}></div>
                            <div className={styles.cornerBottomRight}></div>
                        </div>
                    </div>

                    {/* Floating Action Button */}
                    <a
                        href="https://maps.google.com/?q=Peravurani"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.floatBtn}
                    >
                        <Maximize2 size={18} />
                        <span>FULL SCREEN VIEW</span>
                    </a>
                </div>
            </section>
        </div>
    );
}
