import React, { useRef } from "react";
import styles from "../../Styles/Getstarted.module.css";
import emailjs from "@emailjs/browser";

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
    <>
   
    <section className={styles.container}>
    
      <div className={styles.left}>
        <span className={styles.tag}>--- Get Started</span>
        <h1>
          Get started & tell us about your requirements
        </h1>
        <p>
          We believe in meaningful connections and the power of listening. Every conversation brings new ideas, insights, and possibilities. Share your requirements with us—we’d love to hear from you and explore how we can work together. Where innovation and excellence come together to deliver customized web design, development, mobile apps, digital marketing, and SEO solutions that elevate your online presence and drive success.
        </p>
      </div>

 
      <div className={styles.right}>
        <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
          <div className={styles.row}>
            <input type="text" placeholder="First Name"  name="user_name"/>
            <input type="text" placeholder="Last Name" required/>
          </div>
          <div className={styles.row}>
            <input type="email" placeholder="Email" name="user_email" required />
            <input type="number" placeholder="Phone No." name="user_mobile"  required/>
          </div>

          
          <textarea placeholder="Leave a message here" rows="5" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
   
    </>
  );
}
