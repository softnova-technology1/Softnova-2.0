import React, { useRef } from "react";
import styles from "../../Styles/Getstarted.module.css";
import emailjs from "@emailjs/browser";
import contactImg from "../../images/Cont.png";
import { User, Mail, Phone, MessageSquare, Send, Sparkles } from "lucide-react";

export default function GetStarted() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9biyvg",
        "template_gt6gftv",
        formRef.current,
        "_hV06UfPLcbKQaLam",
      )
      .then(
        () => alert("Email sent successfully!"),
        () => alert("Something went wrong."),
      );

    e.target.reset();
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.textBlock}>
            <span className={styles.tag}>
              <Sparkles className={styles.tagIcon} size={14} /> Get Started
            </span>
            <h1 className={styles.heading}>
              Get started & tell us about your requirements
            </h1>
            <p className={styles.description}>
              We believe in meaningful connections and the power of listening. Every conversation brings new ideas, insights, and possibilities. Share your requirements with us—we’d love to hear from you and explore how we can work together. Where innovation and excellence come together to deliver customized web design, development, mobile apps, digital marketing, and SEO solutions that elevate your online presence and drive success.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img 
              src={contactImg} 
              alt="Premium Workspace" 
              className={styles.landscapeImage} 
            />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayText}>
                <span>Crafting Digital Excellence</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} size={18} />
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    name="user_name"
                    className={styles.inputField}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} size={18} />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    required
                    className={styles.inputField}
                  />
                </div>
              </div>
              
              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={18} />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    name="user_email" 
                    required 
                    className={styles.inputField}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <Phone className={styles.inputIcon} size={18} />
                  <input 
                    type="number" 
                    placeholder="Phone No." 
                    name="user_mobile" 
                    required
                    className={styles.inputField}
                  />
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <MessageSquare className={styles.textareaIcon} size={18} />
                <textarea 
                  placeholder="Leave a message here" 
                  rows="5" 
                  name="message" 
                  required
                  className={styles.textareaField}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
                <Send className={styles.btnIcon} size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

