import styles from "./Intro.module.css";
import hokie from "../.././assets/hokie.png"
import python from "../.././assets/python.png"
import java from "../.././assets/java.svg"
import javascript from "../.././assets/javascript.png"
import typescript from "../.././assets/typescript2.svg"
import html from "../.././assets/html.png"
import css from "../.././assets/css.png"

export default function Intro() {
  
  const virginiaTechLink = () => {
    window.open('https://www.vt.edu/', '_blank'); 
  };

  return (
    <>
      
      <div className={styles.introDiv}>
        <div className={styles.nameDiv}>
          <h1 className={styles.name}>Jeremy Ellis</h1>

            <div className={styles.subtitleDiv}>
              <h2 className={styles.subName}> CS student at &nbsp;</h2>
              <div className={styles.VirginiaTechDiv} onClick={virginiaTechLink}>
                <h2 className={styles.subName}><span className={styles.maroonSpan}> Virginia</span> <span className={styles.orangeSpan}>Tech</span> </h2>
                <div className={styles.hokieDiv}>
                  <img className={styles.hokie} src={hokie}></img>
                </div>
              </div>
            </div>

        </div>

        <div className={styles.aboutDiv}>
          <p className={styles.about}>Welcome to my portfolio site! I am an aspiring software engineer who works with the following languages:</p>
          
          <div className={styles.languagesDiv}>
            <img className={styles.languageImg} src={python}></img>
            <img className={styles.languageImg} src={java}></img>
            <img className={styles.languageImg} src={typescript}></img>
            <img className={styles.languageImg} src={javascript}></img>
            <img className={styles.languageImg} src={html}></img>
            <img className={styles.languageImg} src={css}></img>
          </div>

          <p className={styles.project}>To check out any of the projects below, click on a title or image!</p>

        </div>
      </div>
    </>
  );
}
