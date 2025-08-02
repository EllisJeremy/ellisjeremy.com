import { forwardRef } from "react";
import styles from "./Sections.module.css";

export type StackItem = {
  label: string;
  logo: string;
  onClick: () => void;
};

type WorkExperienceProps = {
  company: string;
  companyLogo: string;
  role: string;
  date: string;
  onTitleClick: () => void;
  bullets: string[];
  stack: StackItem[];
};

const WorkExperience = forwardRef<HTMLDivElement, WorkExperienceProps>(
  ({ company, companyLogo, role, date, onTitleClick, bullets, stack }, ref) => {
    return (
      <div className={styles.experienceDiv} ref={ref}>
        <div className={styles.titleDiv} style={{ marginBottom: "0", fontSize: "24px" }}>
          <h2 className={styles.title} onClick={onTitleClick}>
            {company}
          </h2>
          <img src={companyLogo} style={{ height: "35px" }} />
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
            {stack.map(({ label, logo, onClick }, idx) => (
              <div key={idx} className={styles.stackDivChild} onClick={onClick}>
                {label}
                <img src={logo} className={styles.stackImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default WorkExperience;
