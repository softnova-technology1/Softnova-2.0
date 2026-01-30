import React, { useState } from "react";
import styles from "../../Styles/Form.module.css";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    totalExp: "",
    relevantExp: "",
    currentCTC: "",
    expectedCTC: "",
    careerGap: "",
    noticePeriod: "",
    currentLocation: "",
    preferredLocation: "",
    reasonChange: "",
    jobProfile: "",
    whyHire: "",
    resume: null,
  });

  const [fileName, setFileName] = useState("No file chosen");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    if (name === "resume" && files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const removeFile = () => {
    setFormData({ ...formData, resume: null });
    setFileName("No file chosen");
    document.querySelector(`input[name="resume"]`).value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form Submitted Successfully 🚀");
  };

  return (
    <div className={styles.page}>
      <div className={styles.galaxy}></div>

     
      <div className={styles.careerHeader}>
        <h1 className={styles.mainTitle}>Come Work With Us</h1>
        <p className={styles.subtitle}>
          Don’t hesitate to reach out! Send us a message, and our team will get back to you as soon as possible.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Career Application</h2>
        <div className={styles.grid}>
          <input name="name" placeholder="Name *" required onChange={handleChange} />
          <input name="email" placeholder="Email *" required onChange={handleChange} />
          <input name="phone" placeholder="Phone No *" required onChange={handleChange} />
          <input name="relevantExp" placeholder="Relevant Experience" onChange={handleChange} />
          <input name="totalExp" placeholder="Total Experience" onChange={handleChange} />
          <input name="currentCTC" placeholder="Current CTC" onChange={handleChange} />
          <input name="expectedCTC" placeholder="Expected CTC" onChange={handleChange} />
          <input name="careerGap" placeholder="Career Gap (Reason)" onChange={handleChange} />
          <input name="noticePeriod" placeholder="Notice Period (LWD)" onChange={handleChange} />
          <input name="currentLocation" placeholder="Current Location" onChange={handleChange} />
          <input name="preferredLocation" placeholder="Preferred Location" onChange={handleChange} />
          <input name="reasonChange" placeholder="Reason for Job Change" onChange={handleChange} />

          <select name="jobProfile" required onChange={handleChange}>
            <option value="">Select Job Profile *</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>UI/UX Designer</option>
            <option>Intern</option>
          </select>

      
          <div className={styles.fileInputWrapper}>
            <label className={styles.fileLabel}>
              Choose File
              <input
                type="file"
                name="resume"
                required
                onChange={handleChange}
              />
            </label>
            <span className={styles.fileName}>
              {fileName}
              {formData.resume && (
                <button
                  type="button"
                  className={styles.removeFileBtn}
                  onClick={removeFile}
                >
                  ×
                </button>
              )}
            </span>
          </div>
        </div>

        <textarea
          name="whyHire"
          placeholder="Why should we hire you?"
          rows="4"
          onChange={handleChange}
        ></textarea>

        <button className={styles.starButton}>
                          Submit
                          <div className={styles.star1}><StarSvg /></div>
                          <div className={styles.star2}><StarSvg /></div>
                          <div className={styles.star3}><StarSvg /></div>
                          <div className={styles.star4}><StarSvg /></div>
                          <div className={styles.star5}><StarSvg /></div>
                          <div className={styles.star6}><StarSvg /></div>
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
      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78
         207.96,29.37 371.12,197.68 392.05,407.74
         20.93,-210.06 184.09,-378.37 392.05,-407.74
         -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
    />
  </svg>
);

export default CareerForm;
