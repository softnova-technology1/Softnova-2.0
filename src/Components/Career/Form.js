import React, { useRef,useState } from "react";
import styles from "../../Styles/Form.module.css";
import emailjs from "@emailjs/browser";

const CareerForm = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   totalExp: "",
  //   relevantExp: "",
  //   currentCTC: "",
  //   expectedCTC: "",
  //   careerGap: "",
  //   noticePeriod: "",
  //   currentLocation: "",
  //   preferredLocation: "",
  //   reasonChange: "",
  //   jobProfile: "",
  //   whyHire: "",
  //   resume: null,
  // });

  // const [fileName, setFileName] = useState("No file chosen");

  // const handleChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: files ? files[0] : value,
  //   });
  //   if (name === "resume" && files.length > 0) {
  //     setFileName(files[0].name);
  //   }
  // };

  // const removeFile = () => {
  //   setFormData({ ...formData, resume: null });
  //   setFileName("No file chosen");
  //   document.querySelector(`input[name="resume"]`).value = "";
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted Data:", formData);
  //   alert("Form Submitted Successfully 🚀");
  // };
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      alert("Form reference is null");
      return;
    }

    // Collect form data
    const formData = new FormData(form.current);
    const emailParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_number: formData.get("user_number"),
      user_resume: base64Resume, // Attach Base64-encoded file
    };

    emailjs
      .send(
        "service_n9biyvg",
        "template_gt6gftv",
        emailParams,
        "_hV06UfPLcbKQaLam"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
          setBase64Resume(""); // Clear resume data
        },
        (error) => {
          console.error("FAILED...", error);
          alert("FAILED...", error.text);
        }
      );
  };

  const [base64Resume, setBase64Resume] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBase64Resume(reader.result.split(",")[1]); // Extract Base64 content only
      };
      reader.onerror = (error) => {
        console.error("File reading error:", error);
      };
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.galaxy}></div>
      <div className={styles.careerHeader}>
        <h1 className={styles.mainTitle}>Come Work With Us</h1>
        <p className={styles.subtitle}>
          Don’t hesitate to reach out! Send us a message, and our team will get
          back to you as soon as possible.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        encType="multipart/form-data"
        className={styles.form} method="post"
      >
        <h2 className={styles.title}>Career Application</h2>
        <div className={styles.grid}>
          <input placeholder="Name *" name="user_name" required type="text"/>
          <input placeholder="Email *" name="user_email" required type="email"/>
          <input placeholder="Phone No *" name="user_number" required type="number"/>
          <input placeholder="Relevant Experience" />
          <input placeholder="Total Experience" />
          <input placeholder="Current CTC" />
          <input placeholder="Expected CTC" />
          <input placeholder="Career Gap (Reason)" />
          <input placeholder="Notice Period (LWD)" />
          <input placeholder="Current Location" />
          <input placeholder="Preferred Location" />
          <input  placeholder="Reason for Job Change" />

          <select  required>
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
                  required
                  name="user_resume"
                  onChange={handleFileChange}
              />
            </label>
            <span className={styles.fileName}></span>
          </div>
        </div>

        <textarea
          placeholder="Why should we hire you?"
          rows="4"
          className="textarea"
        ></textarea>

        <button className={styles.starButton}>
          Submit
          <div className={styles.star1}>
            <StarSvg />
          </div>
          <div className={styles.star2}>
            <StarSvg />
          </div>
          <div className={styles.star3}>
            <StarSvg />
          </div>
          <div className={styles.star4}>
            <StarSvg />
          </div>
          <div className={styles.star5}>
            <StarSvg />
          </div>
          <div className={styles.star6}>
            <StarSvg />
          </div>
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
