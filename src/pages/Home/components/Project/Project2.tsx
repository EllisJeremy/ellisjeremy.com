import { useNavigate } from 'react-router-dom';
import styles from "./Project.module.css";

import gitHub from "../.././assets/GitHub_Logo_White.png"
import gitCat from "../.././assets/github-mark-white.svg"

import react from "../.././assets/react.svg"
import typescript from "../.././assets/typescript.svg"
import zustand from "../.././assets/zustand.svg"



//import sylvester from "../.././assets/sylvester.png"


export default function Project2() {
  const navigate = useNavigate();

  const calendarLink = () => {
    navigate('/calendar');
  };
  const sylvesterGitLink = () => {
    window.open('https://github.com/EllisJeremy/ellisjeremy.com/tree/main/src/pages/Sylvester', '_blank'); 
  };
  const reactLink = () => {
    window.open('https://react.dev/', '_blank'); 
  };
  const typescriptLink = () => {
    window.open('https://www.typescriptlang.org/', '_blank'); 
  };
  const zustandLink = () => {
    window.open('https://zustand.docs.pmnd.rs/getting-started/introduction', '_blank'); 
  };
  


  return (
    <>
      
        
        <div className={styles.projectDiv}>

          <div className={styles.titleDiv}>
            <h1 className={styles.title} onClick={calendarLink}> 
              Orchard Signup
            </h1>
            <div className={styles.gitDiv} onClick={sylvesterGitLink}>
              <img src={gitHub} className={styles.gitHub}/>
              <img src={gitCat} className={styles.gitCat}/>
            </div>
          </div>
              
          <div className={styles.midDiv}>
            <ul className={styles.list}>
              <li className={styles.listItem}>A Calendar tool made for The Orchard church for task sing-ups and events</li>
              <li className={styles.listItem}>Allows for admin-level accounts to create tasks and events and for normal accounts to sign up</li>
              <li className={styles.listItem}>The version linked here is separate from the real one, so feel free to add or remove tasks on it</li>
              
            </ul>
            <div className={styles.stackDiv}>
              <div className={styles.stackDivChild} onClick={reactLink}>
                React
                <img src={react} className={styles.stackImg}/>
              </div>
              <div className={styles.stackDivChild} onClick={typescriptLink}>
                Typescript
                <img src={typescript} className={styles.stackImgTypescript}/>
              </div>
              <div className={styles.stackDivChild} onClick={zustandLink}>
                Zustand
                <img src={zustand} className={styles.stackImg}/>
              </div>
              
              
            </div>
            
          </div>

          
        </div>

        

        

      
      
    </>
  );
}
