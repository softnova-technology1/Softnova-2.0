import styles from "../Styles/Footer.module.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../images/softnovaLogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* ---------- TOP SECTION ---------- */}
      <div className={styles.top}>
        {/* About */}
        <div className={styles.about}>
          <img src={logo} alt="Softnova Logo" className={styles.logoImg} />
          <p>
            Where innovation and excellence converge in web design, development,
            mobile app creation, digital marketing, and SEO solutions customized
            to enhance your online presence and propel your success.
          </p>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className={styles.verticalDivider}></div>

        {/* Contact */}
        <div className={styles.contact}>
          <h3>Please write to us</h3>

          <div className={styles.contactItem}>
            <MdLocationOn />
            <span>
              1st Floor, Softnova Apartment, SNV Mahal back side, near SBI bank,
              Peravurani.
            </span>
          </div>

          <div className={styles.contactItem}>
            <MdEmail />
            <span>info@softnovatech.com</span>
          </div>

          <div className={styles.contactItem}>
            <MdPhone />
            <span>+91 6385118083</span>
          </div>
        </div>
      </div>

      {/* HORIZONTAL DIVIDER */}
      <div className={styles.horizontalDivider}></div>

      {/* ---------- LINKS SECTION ---------- */}
      <div className={styles.links}>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Terms & Conditions</li>
            <li>Services</li>
            <li>Get Quote</li>
          </ul>
        </div>

        <div>
          <h4>Helpful Resources</h4>
          <ul>
            <li>Products</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>Cloud and IT</li>
            <li>Graphic Design</li>
            <li>Software Development</li>
            <li>Other Services</li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <FaFacebookF />
            <FaWhatsapp />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className={styles.horizontalDivider}></div>
      {/* ---------- BOTTOM ---------- */}
      <div className={styles.bottom}>© 2025 SOFTNOVA. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
