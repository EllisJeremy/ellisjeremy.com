import { forwardRef } from "react";
import styles from "./Sections.module.css";
import { StackItem } from "./WorkExperience";
import gitWord from "../../assets/GitHub_Logo_White.png";
import gitLogo from "../../assets/github-mark-white.svg";

type ProjectCardProps = {
  title: string;
  onTitleClick: () => void;
  onGitClick: () => void;
  bullets: string[];
  stack: StackItem[];
  previewImage: string;
  onImageClick: () => void;
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, onTitleClick, onGitClick, bullets, stack, previewImage, onImageClick }, ref) => {
    return (
      <div className={styles.projectDiv} ref={ref}>
        <div className={styles.titleDiv}>
          <h1 className={styles.title} onClick={onTitleClick}>
            {title}
          </h1>
          <div className={styles.gitDiv} onClick={onGitClick}>
            <img src={gitWord} className={styles.gitHub} />
            <img src={gitLogo} className={styles.gitCat} />
          </div>
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
            {stack.map(({ label, logo, onClick }, i) => (
              <div key={i} className={styles.stackDivChild} onClick={onClick}>
                {label}
                <img src={logo} className={styles.stackImg} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projectImgDiv}>
          <img src={previewImage} className={styles.projectImg} onClick={onImageClick} />
        </div>
      </div>
    );
  }
);

export default ProjectCard;
