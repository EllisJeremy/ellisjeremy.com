
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Intro from "./components/Intro/Intro";
import Project from "./components/Project/Project1";
import Project2 from "./components/Project/Project2";

export default function Home() {
  

  

  return (
    <>

      <Helmet>
        <body className={styles.home} />
        <meta name="viewport" content="width=device-width, initial-scale=.6" />
      </Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div className={styles.lightBar1}/>
      <Intro />
      <Project />
      <Project2 />
      <div className={styles.lightBar2}/>
      
     
        
        

        
        
      
    </>
  );
}
