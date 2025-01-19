import styles from "./Intro.module.css";
import hokie from "../.././assets/hokie.png"

export default function Intro() {
  
  const virginiaTechLink = () => {
    window.open('https://www.vt.edu/', '_blank'); 
  };

  return (
    <>
      
      <div className={styles.introDiv}>
        <div className={styles.nameDiv}>
          <h1 className={styles.name}>Jeremy Ellis</h1>

            <div className={styles.subtitleDiv} onClick={virginiaTechLink}>
              <h2 className={styles.subName}> CS student at &nbsp;</h2>
              <div className={styles.hokieDiv}>
                <h2 className={styles.subName}><span className={styles.maroonSpan}> Virginia</span> <span className={styles.orangeSpan}>Tech</span> </h2>
                <img className={styles.hokie} src={hokie}></img>
              </div>
            </div>

        </div>

        <div className={styles.aboutDiv}>


        </div>
          <p className={styles.about}>Welcome to my portfolio site! I am an aspiring software engineer in m</p>

        </div>
    </>
  );
}
