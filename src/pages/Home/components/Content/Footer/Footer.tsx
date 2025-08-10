import styles from "./Footer.module.css";
import gitHub from "../../../assets/github.svg";
import leetcode from "../../../assets/leetcode.svg";
import linkedIn from "../../../assets/linkedIn.svg";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <a href="https://github.com/ellisjeremy" target="_blank" rel="noopener noreferrer">
          <img className={styles.img} src={gitHub} />
        </a>
        <a href="https://leetcode.com/jeremyellis" target="_blank" rel="noopener noreferrer">
          <img className={styles.img} src={leetcode} />
        </a>
        <a
          href="https://www.linkedin.com/in/jeremy-ellis-866928350/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.img} src={linkedIn} />
        </a>
      </footer>
    </div>
  );
}
