import { useEffect, useRef } from "react";
import styles from "../../Styles/Contact.module.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Maximize2 } from 'lucide-react';
import { Col, Container, Row } from "react-bootstrap";
import HeroContact from "./HeroContact";

export default function Contact() {
    return (
        <div>
            <div className={styles.heros}>
                <HeroContact />
            </div>
            
            <div className={styles.Contactbg}>
                <Container>
                    <section className={styles.contactwrapper}>
                        <Row>
                            <Col lg={6}>
                                <div className={styles.left}>
                                    <h1>We are here <br /><span>to help</span> </h1>
                                    <p className={styles.subtitle}><br />
                                        We'd love to hear from you! Feel free to reach out with any questions or project inquiries. Our team will get back to you as soon as possible.
                                    </p>

                                    <div className={styles.info}>
                                        <div className={styles.infoitem}>
                                            <FaMapMarkerAlt className={styles.infoicon} />
                                            1st Floor, Softnova Appartment, SNV Mahal back side, near SBI bank, Peravurani.
                                        </div>

                                        <div className={styles.infoitem}> 
                                            <MdEmail className={styles.infoicon} />info@softnovatech.com
                                        </div>

                                        <div className={styles.infoitem}>
                                            <FaPhoneAlt className={styles.infoicon} />+91 6385118083
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.socials}>
                                    <a href="https://www.instagram.com/softnovatech/?igsh=bjZhdzduOWVqMDlz" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                    <a href="https://www.facebook.com/share/t1ufRjHfuJA6jfxE/?mibextid=qi2Omg" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                                    <a href="https://www.linkedin.com/company/softnovatechnology/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                                    <a href="https://api.whatsapp.com/send/?phone=6385118083" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className={styles.formcard}>
                                    <div className={styles.contactCta}>
                                        <p>If you have any questions or want to start a project, reach out today.</p>
                                    </div>
                                    
                                    <Row>
                                        <Col md={6} className={styles.field}>
                                            <label>FIRST NAME</label>
                                            <input type="text" />
                                        </Col>
                                        <Col md={6} className={styles.field}>
                                            <label>LAST NAME</label>
                                            <input type="text" />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6} className={styles.field}>
                                            <label>EMAIL</label>
                                            <input type="email" />
                                        </Col>
                                        <Col md={6} className={styles.field}>
                                            <label>PHONE NUMBER</label>
                                            <input type="tel" />
                                        </Col>
                                    </Row>

                                    <div className={styles.field}>
                                        <label>MESSAGE</label>
                                        <textarea rows="4"></textarea>
                                    </div>

                                    <button className={styles.submitBtn}>SEND MESSAGE →</button>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>

            {/* MAP SECTION - Peravurani Location Updated */}
            <section className={styles.mapSection}>
                <div className={styles.mapContainer}>
                    <div className={styles.floatingTag}>
                        <div className={styles.dot}></div>
                        <span>LIVE LOCATION • PERAVURANI</span>
                    </div>

                    <div className={styles.mapFrame}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6602.088636045032!2d79.20126495835765!3d10.291737089695312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a16e9c50ca4939d%3A0x646da28beabf28ab!2sSoftnova%20Technology!5e0!3m2!1sen!2sin!4v1769763275538!5m2!1sen!2sin" 
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.mapIframe}
                        ></iframe>

                        <div className={styles.decorLayer}>
                            <div className={styles.cornerTopLeft}></div>
                            <div className={styles.cornerTopRight}></div>
                            <div className={styles.cornerBottomLeft}></div>
                            <div className={styles.cornerBottomRight}></div>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/YourPeravuraniLocationLink" // Full screen view-ku Peravurani direct link
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


