
import styles from "./Project.module.css";

import gitHub from "../.././assets/GitHub_Logo_White.png"
import gitCat from "../.././assets/github-mark-white.svg"

import react from "../.././assets/react.svg"
import typescript from "../.././assets/typescript.svg"
import zustand from "../.././assets/zustand.svg"
import numeric from "../.././assets/numeric.png"


//import sylvester from "../.././assets/sylvester.png"


export default function Project() {
  
  const sylvesterGitLink = () => {
    window.open('https://react.dev/', '_blank'); 
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
  const numericLink = () => {
    window.open('https://ccc-js.github.io/numeric2/', '_blank'); 
  };


  return (
    <>
      
        
        <div className={styles.projectDiv}>

          <div className={styles.spaceDiv}>
            <h1 className={styles.title}>Sylvester Solver</h1>
            <div className={styles.gitDiv} onClick={typescriptLink}>
              <img src={gitHub} className={styles.gitHub}/>
              <img src={gitCat} className={styles.gitCat}/>
            </div>
          </div>

          <div className={styles.spaceDiv}>
            text
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
              <div className={styles.stackDivChild} onClick={numericLink}>
                Numeric
                <img src={numeric} className={styles.stackImg}/>
              </div>
              
            </div>
            
          </div>

          
        </div>

        

        

      
      
    </>
  );
}
