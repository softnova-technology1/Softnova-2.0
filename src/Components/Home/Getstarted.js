import React from "react";
import styles from "../../Styles/Getstarted.module.css";

export default function GetStarted() {
  return (
    <section className={styles.container}>
      {/* Left Content */}
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

      {/* Right Form */}
      <div className={styles.right}>
        <form className={styles.form}>
          <div className={styles.row}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <input type="text" placeholder="Subject" />
          <textarea placeholder="Leave a message here" rows="5"></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
