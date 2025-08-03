import styles from "./Sections.module.css";
import gitDark from "../../assets/gitDark.svg";
import brittany from "../../assets/brittany.png";

export default function WorksCited() {
  return (
    <div className={styles.worksCitedDiv}>
      <div className={styles.experienceDiv} style={{ width: "60%", marginBottom: "10px" }}>
        <div className={styles.worksDiv}>
          <a
            className={styles.worksItem}
            href="https://github.com/polidario/Frontend-Projects/commit/fca07381290ae747a665e457fb9ec0fa156168b1#diff-e9db7931fd71a419a37df2fe511f100b5e2a204da5a62f79457196ec0e367beb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Glass SVG <img src={gitDark} style={{ height: "20px" }} />
          </a>
          <a
            className={styles.worksItem}
            href="https://brittanychiang.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspiration <img src={brittany} style={{ height: "20px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
