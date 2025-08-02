import { forwardRef } from "react";
import styles from "./Sections.module.css";
import { StackItem } from "./WorkExperience";
import gitWord from "../../assets/GitHub_Logo_White.png";
import gitLogo from "../../assets/github-mark-white.svg";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  projectLink: string;
  gitLink: string;
  bullets: string[];
  stack: StackItem[];
  previewImage: string;
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, projectLink, gitLink, bullets, stack, previewImage }, ref) => {
    return (
      <div className={styles.projectDiv} ref={ref}>
        <div className={styles.titleDiv}>
          <Link to={projectLink}>
            <h1 className={styles.title}>{title}</h1>
          </Link>
          <a className={styles.gitDiv} href={gitLink} target="_blank" rel="noopener noreferrer">
            <img src={gitWord} className={styles.gitHub} />
            <img src={gitLogo} className={styles.gitCat} />
          </a>
        </div>

        <div className={styles.midDiv}>
          <ul className={styles.list}>
            {bullets.map((item, i) => (
              <li key={i} className={styles.listItem}>
                {item}
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

        <div className={styles.projectImgDiv}>
          <a href={projectLink}>
            <img src={previewImage} className={styles.projectImg} />
          </a>
        </div>
      </div>
    );
  }
);

export default ProjectCard;
