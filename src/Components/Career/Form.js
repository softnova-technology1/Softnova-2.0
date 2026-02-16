import React, { useRef, useState } from "react";
import styles from "../../Styles/Form.module.css";
import emailjs from "@emailjs/browser";

const CareerForm = () => {
  const formRef = useRef(null);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4lkn34d",
        "template_8ukl9bo",
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
    <div className={styles.page}>
      <div className={styles.galaxy}></div>
      <div className={styles.careerHeader}>
        <h1 className={styles.mainTitle}>Come Work With Us</h1>
        <p className={styles.subtitle}>
          Don't hesitate to reach out! Send us a message, and our team will get
          back to you as soon as possible.
        </p>
      </div>
      <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
        <h2 className={styles.title}>Career Application</h2>
        <div className={styles.grid}>
          <input placeholder="Name *" name="user_name" required type="text" />
          <input
            placeholder="Email *"
            name="user_email"
            required
            type="email"
          />
          <input
            placeholder="Phone No *"
            name="user_number"
            required
            type="tel"
          />

          <input placeholder="Total Experience" />
          <input placeholder="Relevant Experience" />
          <input placeholder="Current CTC" />
          <input placeholder="Expected CTC" />
          <input placeholder="Career Gap (Reason)" />
          <input placeholder="Notice Period (LWD)" />
          <input placeholder="Current Location" />
          <input placeholder="Preferred Location" />
          <input placeholder="Reason for Job Change" />
          <input type="text" name="job" placeholder="Job / Intern" required/>
          <input type="text" name="role" placeholder="Role" required/>
      
          <input type="text" name="portfolio" placeholder="Portfolio Link" />
   
        </div>

        <textarea
          placeholder="Why should we hire you?"
          rows="4"
          className={styles.textarea}
        ></textarea>

        <button type="submit" className={styles.starButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className={styles.svg}
  >
    <path
      className={styles.fil0}
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

export default CareerForm;
