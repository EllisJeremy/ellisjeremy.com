import styles from "./Left.module.css";
import hokie from "../.././assets/hokie.png";

export default function Left() {
  const virginiaTechLink = () => {
    window.open("https://www.vt.edu/", "_blank");
  };

  return (
    <>
      <div className={styles.nameDiv}>
        <h1 className={styles.name}>Jeremy Ellis</h1>

        <div className={styles.subtitleDiv}>
          <h2 className={styles.subName}> CS student at &nbsp;</h2>
          <div className={styles.VirginiaTechDiv} onClick={virginiaTechLink}>
            <h2 className={styles.subName}>
              <span className={styles.maroonSpan}> Virginia</span>{" "}
              <span className={styles.orangeSpan}>Tech</span>{" "}
            </h2>
            <div className={styles.hokieDiv}>
              <img className={styles.hokie} src={hokie}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
