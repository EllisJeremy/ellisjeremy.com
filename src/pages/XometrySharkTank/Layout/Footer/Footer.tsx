import styles from "./Footer.module.css";
import footer from "../../assets/footer.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={footer} className={styles.footerImg}></img>
    </footer>
  );
}
