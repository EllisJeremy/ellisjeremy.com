import { forwardRef } from "react";

import styles from "./Intro.module.css";
import python from "../.././assets/python.png";
import java from "../.././assets/java.svg";
import javascript from "../.././assets/javascript.png";
import typescript from "../.././assets/typescript2.svg";
import html from "../.././assets/html.png";
import css from "../.././assets/css.png";

const Intro = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.introDiv} ref={ref}>
      <p className={styles.about}>
        Welcome to my portfolio site! I am an aspiring software engineer who
        works with the following languages:
      </p>

      <div className={styles.languagesDiv}>
        <img className={styles.languageImg} src={python}></img>
        <img className={styles.languageImg} src={java}></img>
        <img className={styles.languageImg} src={typescript}></img>
        <img className={styles.languageImg} src={javascript}></img>
        <img className={styles.languageImg} src={html}></img>
        <img className={styles.languageImg} src={css}></img>
      </div>

      <p className={styles.project}>
        To check out any of the projects below, click on a title or image!
      </p>
    </div>
  );
});

export default Intro;
