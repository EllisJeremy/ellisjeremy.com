import Project from "../Project/Project1";
import Project2 from "../Project/Project2";
import styles from "./Intro.module.css";

export default function Intro() {
  

  return (
    <>
      <div className={styles.lightBar}/>
      <div className={styles.homeDiv}>
        <Project />
        <Project2 />
      
        

      
      </div>
    </>
  );
}
