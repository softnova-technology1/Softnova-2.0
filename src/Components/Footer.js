import styles from "../Styles/Footer.module.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../images/softnovaLogo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.about}>
          <img src={logo} alt="Softnova Logo" className={styles.logoImg} />
          <p>
            Where innovation and excellence converge in web design, development,
            mobile app creation, digital marketing, and SEO solutions customized
            to enhance your online presence and propel your success.
          </p>
        </div>

        <div className={styles.verticalDivider}></div>

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

      <div className={styles.horizontalDivider}></div>

      <div className={styles.links}>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/GetStarted">Get Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Helpful Resources</h4>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/career">Careers</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/CloudandIT">Cloud and IT</Link></li>
            <li><Link to="/services/GraphicDesign">Graphic Design</Link></li>
            <li><Link to="/services/SoftwareDevelopment">Software Development</Link></li>
            <li><Link to="/services/OtherServices">Other Services</Link></li>
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <div className={styles.social}>
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
      </div>

      <div className={styles.horizontalDivider}></div>

      <div className={styles.bottom}>© 2025 SOFTNOVA. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
