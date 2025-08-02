import { forwardRef } from "react";
import styles from "./Sections.module.css";

export type StackItem = {
  label: string;
  logo: string;
  link: string;
};

type WorkExperienceProps = {
  company: string;
  companyLogo: string;
  role: string;
  date: string;
  companyLink: string;
  bullets: string[];
  stack: StackItem[];
};

const WorkExperience = forwardRef<HTMLDivElement, WorkExperienceProps>(
  ({ company, companyLogo, role, date, companyLink, bullets, stack }, ref) => {
    return (
      <div className={styles.experienceDiv} ref={ref}>
        <div className={styles.titleDiv} style={{ marginBottom: "0", fontSize: "24px" }}>
          <a href={companyLink} target="_blank" rel="noopener noreferrer">
            <h2 className={styles.title}>{company}</h2>
          </a>
          <img src={companyLogo} style={{ height: "35px", marginRight: "10.5px" }} />
        </div>
        <div className={styles.titleDiv}>
          <h2 className={styles.subTitle}>{role}</h2>
          <h4 className={styles.subTitle}>{date}</h4>
        </div>

        <div className={styles.midDiv}>
          <ul className={styles.list}>
            {bullets.map((text, idx) => (
              <li key={idx} className={styles.listItem}>
                {text}
              </li>
            ))}
          </ul>
          <div className={styles.stackDiv}>
            {stack.map(({ label, logo, link }, i) => (
              <a
                key={i}
                className={styles.stackDivChild}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <img src={logo} className={styles.stackImg} />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default WorkExperience;
