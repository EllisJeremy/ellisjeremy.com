
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Intro from "./components/Intro/Intro";


export default function Home() {
  

  

  return (
    <>
      <Helmet>
        <body className={styles.home} />
      </Helmet>
      <div className={styles.content}>
        <Intro />
      </div>
        
        
        

        
        
      
    </>
  );
}
