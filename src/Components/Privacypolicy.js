import React from "react";
import styles from "../Styles/privacypolicy.module.css";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "INFORMATION WE COLLECT",
      items: [
        {
          heading: "Personal Information",
          text: "Includes name, email address, phone number, mailing address, job title, and company name collected through interactions or website use.",
        },
        {
          heading: "Technical Information",
          text: "We collect IP address, browser types, device data, and interaction logs to improve performance and security.",
        },
        {
          heading: "Financial Information",
          text: "Invoicing and payment details required for billing and transaction processing.",
        },
        {
          heading: "Employee Data",
          text: "Work history, academic background, bank details, and other data needed for recruitment and payroll.",
        },
      ],
    },
    {
      title: "HOW WE USE INFORMATION",
      items: [
        {
          heading: "Service Delivery",
          text: "To manage client accounts, execute projects, and respond to service‑related inquiries.",
        },
        {
          heading: "Communication",
          text: "Used to share updates, provide support, or notify users about service changes.",
        },
        {
          heading: "Improving Services",
          text: "Helps analyze trends and refine website experience and offerings.",
        },
        {
          heading: "Human Resources",
          text: "Used for hiring, onboarding, payroll processing, and compliance.",
        },
        {
          heading: "Legal Obligations",
          text: "Data may be used to comply with legal requirements or respond to legal proceedings.",
        },
      ],
    },
    {
      title: "DATA SHARING AND DISCLOSURE",
      items: [
        {
          heading: "Third‑Party Service Providers",
          text: "We share information with trusted partners like IT support or cloud providers under confidentiality agreements.",
        },
        {
          heading: "Legal Disclosure",
          text: "Information may be shared if legally required to protect rights, user safety, or prevent fraud.",
        },
        {
          heading: "Business Restructuring",
          text: "During mergers or acquisitions, data may be transferred while maintaining confidentiality standards.",
        },
      ],
    },
    {
      title: "DATA PROTECTION AND SECURITY",
      items: [
        {
          heading: "Security Protocols",
          text: "We employ encryption, secure servers, and firewalls to protect information.",
        },
        {
          heading: "Access Restriction",
          text: "Only authorized personnel are granted access using role‑based controls.",
        },
        {
          heading: "Retention Policy",
          text: "We retain data only for the duration necessary to fulfill its purpose or comply with laws.",
        },
      ],
    },
    {
      title: "YOUR RIGHTS AND CHOICES",
      items: [
        {
          heading: "Data Access & Correction",
          text: "Users may request to view or correct their personal information by contacting us.",
        },
        {
          heading: "Opt‑Out",
          text: "Users can unsubscribe from marketing emails anytime using the link provided.",
        },
        {
          heading: "Data Deletion",
          text: "You may request deletion of data unless restricted by legal or contractual obligations.",
        },
      ],
    },
    {
      title: "COOKIES AND TRACKING TECHNOLOGIES",
      items: [
        {
          heading: "Cookies",
          text: "Cookies are used for functionality, analytics, and personalization. Disabling cookies may affect performance.",
        },
        {
          heading: "Analytics Tools",
          text: "We use analytics platforms to monitor website usage. Data is anonymized and aggregated.",
        },
      ],
    },
    {
      title: "INTERNATIONAL DATA TRANSFERS",
      items: [
        {
          heading: "Cross‑border Processing",
          text: "Information may be stored and processed outside your country with compliance to data laws.",
        },
      ],
    },
    {
      title: "UPDATES TO THIS POLICY",
      items: [
        {
          heading: "Policy Changes",
          text: "We reserve the right to update this Privacy Policy and will communicate material changes.",
        },
        {
          heading: "Effective Date",
          text: "Any changes will be effective from the date specified at the top of the policy.",
        },
      ],
    },
    {
      title: "WORKPLACE SAFETY (FOR EMPLOYEES)",
      items: [
        {
          heading: "In‑office Safety",
          text: "Employees must follow safety protocols including hygiene, emergency exits, and health guidelines.",
        },
        {
          heading: "Remote Work Safety",
          text: "Employees working from home must maintain a safe and productive environment.",
        },
      ],
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          Softnova Technology Pvt Ltd (“Softnova”, “we”, “our” or “us”) is
          committed to safeguarding the privacy of our clients, website users,
          and employees. This Privacy Policy explains what information we
          collect, how we use it, and the measures we take to ensure its
          protection.
        </p>

        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.grid}>
              {section.items.map((item, i) => (
                <div key={i} className={styles.card}>
                  <h3 className={styles.cardHeading}>{item.heading}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
