import { forwardRef } from "react";
import styles from "./Sections.module.css";
import { StackItem } from "./WorkExperience";

type WorkExperienceProps = {
  company: string;
  companyLogo: string;
  degree: string;
  date: string;
  schoolLink: string;
  gpa: string;
  bullets: string[];
  stack: StackItem[];
};

const Education = forwardRef<HTMLDivElement, WorkExperienceProps>(
  ({ company, companyLogo, degree, date, schoolLink, gpa, bullets, stack }, ref) => {
    return (
      <div className={styles.experienceDiv} ref={ref}>
        <div className={styles.titleDiv} style={{ marginBottom: "0", fontSize: "24px" }}>
          <a href={schoolLink} target="_blank" rel="noopener noreferrer">
            <h2 className={styles.title}>{company}</h2>
          </a>
          <img src={companyLogo} style={{ height: "35px", marginRight: "10.5px" }} />
        </div>
        <div className={styles.titleDiv}>
          <h2 className={styles.subTitle}>
            {degree} &nbsp;|&nbsp; GPA: {gpa}
          </h2>
          <h4 className={styles.subTitle}>{date}</h4>
        </div>

        <div className={styles.midDiv}>
          <ul className={styles.list}>
            {bullets.map((text, i) => (
              <li key={i} className={styles.listItem}>
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

export default Education;
