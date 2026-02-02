
import { useEffect, useRef } from "react";
import styles from "../../Styles/Contact.module.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Maximize2 } from "lucide-react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import HeroContact from "./HeroContact";
import Breadcrumb from "../BreadCrumb";

export default function Contact() {
 
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      v: Math.random() * 0.25 + 0.1,
    }));

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

  
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4lkn34d",
        "template_yfhst2s",
        formRef.current,
        "YLR_KloHoA2ojMGC2",
      )
      .then(
        () => alert("Email sent successfully!"),
        () => alert("Something went wrong."),
      );

    e.target.reset();
  };

  return (
    <div>
  
     <Breadcrumb/>
     
      <div className={styles.heros}>
        <HeroContact />
      </div>

     
      <div className={styles.Contactbg}>
        <Container>
          <section className={styles.contactwrapper}>
            <Row>
              
              <Col lg={6}>
                <div className={styles.left}>
                  <h1>
                    We are here <br />
                    <span>to help</span>
                  </h1>

                  <p className={styles.subtitle}>
                    We'd love to hear from you! Feel free to reach out with any
                    questions or project inquiries.
                  </p>

                  <div className={styles.info}>
                    <div className={styles.infoitem}>
                      <FaMapMarkerAlt className={styles.infoicon} />
                      1st Floor, Softnova Apartment, near SBI Bank, Peravurani.
                    </div>

                    <div className={styles.infoitem}>
                      <MdEmail className={styles.infoicon} />
                      info@softnovatech.com
                    </div>

                    <div className={styles.infoitem}>
                      <FaPhoneAlt className={styles.infoicon} />
                      +91 6385118083
                    </div>
                  </div>

                  <div className={styles.socials}>
                    <a
                      href="https://www.instagram.com/softnovatech/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/softnovatechnology/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=6385118083"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </Col>

              
              <Col lg={6}>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className={styles.formcard}>
                    <div className={styles.contactCta}>
                      <p>
                        If you have any questions or want to start a project,
                        reach out today.
                      </p>
                    </div>

                    <Row>
                      <Col md={6}>
                        <div className={styles.field}>
                          <label>FIRST NAME</label>
                          <input name="user_name" required />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className={styles.field}>
                          <label>LAST NAME</label>
                          <input name="last_name" />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <div className={styles.field}>
                          <label>EMAIL</label>
                          <input type="email" name="user_email" required />
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className={styles.field}>
                          <label>PHONE</label>
                          <input name="user_phone" />
                        </div>
                      </Col>
                    </Row>

                    <div className={styles.field}>
                      <label>MESSAGE</label>
                      <textarea name="message" required></textarea>
                    </div>

                    <button type="submit">SEND MESSAGE →</button>
                  </div>
                </form>
              </Col>
            </Row>
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
                        href="https://maps.app.goo.gl/YourPeravuraniLocationLink" 
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




















