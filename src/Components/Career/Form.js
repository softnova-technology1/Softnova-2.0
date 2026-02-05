import React, { useRef, useState } from "react";
import styles from "../../Styles/Form.module.css";
import emailjs from "@emailjs/browser";

const CareerForm = () => {
  const form = useRef();
  const [base64Resume, setBase64Resume] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      if (!file.type.match('application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
        alert("Please select PDF, DOC, or DOCX file only");
        e.target.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File size must be less than 5MB");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBase64Resume(reader.result.split(",")[1]);
        setFileName(file.name);
      };
      reader.onerror = (error) => {
        console.error("File reading error:", error);
        alert("Error reading file");
      };
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      alert("Form reference is null");
      return;
    }

    if (!base64Resume) {
      alert("Please select a resume file");
      return;
    }

    // Collect form data properly
    const formData = new FormData(form.current);
    const emailParams = {
      user_name: formData.get("user_name") || "",
      user_email: formData.get("user_email") || "",
      user_number: formData.get("user_number") || "",
      user_resume: base64Resume, // Base64 content
      job_profile: formData.get("job_profile") || "",
      // Add other fields as needed
    };

    emailjs
      .send(
        "service_4lkn34d",
        "template_8ukl9bo",
        emailParams,
        "YLR_KloHoA2ojMGC2"
      )
      .then(
        () => {
          alert("Application sent successfully! 🎉");
          form.current.reset();
          setBase64Resume("");
          setFileName("No file chosen");
        },
        (error) => {
          console.error("FAILED...", error);
          alert(`Failed to send: ${error.text}`);
        }
      );
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
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <h2 className={styles.title}>Career Application</h2>
        <div className={styles.grid}>
          <input placeholder="Name *" name="user_name" required type="text" />
          <input placeholder="Email *" name="user_email" required type="email" />
          <input placeholder="Phone No *" name="user_number" required type="tel" />
          
          <input  placeholder="Total Experience" />
          <input  placeholder="Relevant Experience" />
          <input  placeholder="Current CTC" />
          <input  placeholder="Expected CTC" />
          <input  placeholder="Career Gap (Reason)" />
          <input  placeholder="Notice Period (LWD)" />
          <input  placeholder="Current Location" />
          <input  placeholder="Preferred Location" />
          <input  placeholder="Reason for Job Change" />

          <select required>
            <option value="">Select Job Profile *</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Intern">Intern</option>
          </select>

          <div className={styles.fileInputWrapper}>
            <label className={styles.fileLabel}>
              Choose Resume (PDF, DOC, DOCX - Max 5MB)
              <input
                type="file"
                name="user_resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />
            </label>
            <span className={styles.fileName}>
              {fileName === "No file chosen" ? "No file selected" : fileName}
            </span>
          </div>
        </div>

        <textarea
           
          placeholder="Why should we hire you?"
          rows="4"
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.starButton} disabled={!base64Resume}>
          Submit
          {/* Your star SVG components */}
        </button>
      </form>
    </div>
  );
};

// StarSvg component remains the same
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
