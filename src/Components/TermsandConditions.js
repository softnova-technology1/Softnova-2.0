import React from "react";
import styles from "../Styles/Termsandconditions.module.css";
import { Container } from "react-bootstrap";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "GENERAL EMPLOYMENT TERMS",
      items: [
        {
          heading: "Employment Status",
          text: "Employees may be hired on a full‑time, part‑time, internship, or contract basis as per project and organizational needs.",
        },
        {
          heading: "Probation Period",
          text: "All new employees are subject to a probationary period of 3 to 6 months, during which performance is evaluated.",
        },
        {
          heading: "Work Hours",
          text: "Standard working hours are 10:00 AM to 7:00 PM (Monday to Saturday) with a 1‑hour lunch break.",
        },
        {
          heading: "Job Responsibilities",
          text: "Employees are expected to fulfill roles as per their designation and comply with assigned tasks and performance benchmarks.",
        },
      ],
    },
    {
      title: "CODE OF CONDUCT",
      items: [
        {
          heading: "Professional Behavior",
          text: "Employees must maintain integrity, cooperation, and professionalism in the workplace.",
        },
        {
          heading: "Dress Code",
          text: "Business casual or professional attire is expected unless specified otherwise.",
        },
        {
          heading: "Confidentiality & Non‑Disclosure",
          text: "Employees must not share confidential information or intellectual property of the company or its clients.",
        },
        {
          heading: "Use of Company Property",
          text: "Resources such as laptops, internet, software, and tools must be used solely for official purposes.",
        },
      ],
    },
    {
      title: "COMPENSATION AND BENEFITS",
      items: [
        {
          heading: "Salary Structure",
          text: "Salaries are determined based on role, experience, and performance and are disbursed on a monthly basis.",
        },
        {
          heading: "Bonuses & Incentives",
          text: "Performance‑based incentives or project‑based bonuses may be offered at management discretion.",
        },
        {
          heading: "Employee Benefits",
          text: "Includes paid leave, performance recognition, training opportunities, and other applicable perks.",
        },
      ],
    },
    {
      title: "LEAVE POLICY",
      items: [
        {
          heading: "Vacation Leave",
          text: "Eligible employees receive paid vacation leave after confirmation. Advance approval is required.",
        },
        {
          heading: "Sick Leave",
          text: "Employees are entitled to paid/unpaid sick leave as per company policy. A medical certificate may be required.",
        },
        {
          heading: "Special Leaves",
          text: "Includes maternity/paternity leave, bereavement leave, or emergency leave as per legal guidelines.",
        },
      ],
    },
    {
      title: "TERMINATION POLICY",
      items: [
        {
          heading: "Resignation",
          text: "A notice period of 15 to 30 days must be served. Early exit may require management approval.",
        },
        {
          heading: "Termination Grounds",
          text: "May include non‑performance, violation of company policy, misconduct, or breach of contract.",
        },
        {
          heading: "Exit Process",
          text: "Includes return of assets, project handover, clearance procedures, and final settlement.",
        },
      ],
    },
    {
      title: "TRAINING AND DEVELOPMENT",
      items: [
        {
          heading: "Skill Development",
          text: "Employees will have access to learning programs, webinars, and technical workshops.",
        },
        {
          heading: "Mandatory Training",
          text: "Certain roles may require certification or onboarding sessions which are compulsory.",
        },
      ],
    },
    {
      title: "DISPUTE RESOLUTION",
      items: [
        {
          heading: "Grievance Redressal",
          text: "Employees can approach HR or the management for conflict resolution or reporting concerns.",
        },
        {
          heading: "Disciplinary Action",
          text: "Based on severity, actions may include verbal/written warnings, suspension, or termination.",
        },
      ],
    },
    {
      title: "NON‑COMPETE & NON‑SOLICITATION",
      items: [
        {
          heading: "Non‑Compete Clause",
          text: "Employees may not join direct competitors or start a similar business within 6‑12 months without approval.",
        },
        {
          heading: "Non‑Solicitation Clause",
          text: "Employees must not poach clients, vendors, or staff post‑employment.",
        },
      ],
    },
    {
      title: "WORKPLACE SAFETY",
      items: [
        {
          heading: "Health & Safety Compliance",
          text: "All employees must follow safety guidelines, report hazards, and attend safety briefings.",
        },
        {
          heading: "Remote Work Guidelines",
          text: "Expectations for work‑from‑home include availability during hours, use of official tools, and data security.",
        },
      ],
    },
    {
      title: "DATA SECURITY & IT POLICY",
      items: [
        {
          heading: "Tech Use Policy",
          text: "Personal use of company systems should be minimal. Avoid unauthorized software or suspicious links.",
        },
        {
          heading: "Data Handling",
          text: "Secure handling, access control, and breach protocols are mandatory for all team members.",
        },
      ],
    },
    {
      title: "POLICY UPDATES AND AMENDMENTS",
      items: [
        {
          heading: "Right to Revise",
          text: "The company reserves the right to modify these policies at any time. Employees will be notified of significant changes.",
        },
      ],
    },
  ];

  return (
    <Container>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to Softnova Technology Pvt Ltd's Terms and Conditions
        </h1>
        <p className={styles.subtitle}>
          Please read these terms carefully before using our website or services
          or joining our organization. These terms are subject to change with
          prior notice.{" "}
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
    </Container>
  );
}
