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
          We seek connections. We understand the value of listening. There is
          always something new to learn, think of and discover in communication.
          We would love to hear from you.
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
            <input type="number" placeholder="Phone No." name="user_phone"  required/>
          </div>

          
          <textarea placeholder="Leave a message here" rows="5" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
   
    </>
  );
}
