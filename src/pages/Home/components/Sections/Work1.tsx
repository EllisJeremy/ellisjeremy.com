import { useNavigate } from "react-router-dom";
import styles from "./Sections.module.css";

import gitHub from "../.././assets/GitHub_Logo_White.png";
import gitCat from "../.././assets/github-mark-white.svg";

import react from "../.././assets/react.svg";
import typescript from "../.././assets/typescript.svg";
import zustand from "../.././assets/zustand.svg";
import numeric from "../.././assets/numeric.png";

export default function Work1() {
  const navigate = useNavigate();

  const sylvesterLink = () => {
    navigate("/sylvester");
  };
  const sylvesterGitLink = () => {
    window.open(
      "https://github.com/EllisJeremy/ellisjeremy.com/tree/main/src/pages/Sylvester",
      "_blank"
    );
  };
  const reactLink = () => {
    window.open("https://react.dev/", "_blank");
  };
  const typescriptLink = () => {
    window.open("https://www.typescriptlang.org/", "_blank");
  };
  const zustandLink = () => {
    window.open(
      "https://zustand.docs.pmnd.rs/getting-started/introduction",
      "_blank"
    );
  };
  const numericLink = () => {
    window.open("https://ccc-js.github.io/numeric2/", "_blank");
  };

  const linearAlgebraLink = () => {
    window.open("https://en.wikipedia.org/wiki/Linear_algebra", "_blank");
  };

  const sylvesterEquationLink = () => {
    window.open("https://en.wikipedia.org/wiki/Sylvester_equation", "_blank");
  };

  const methodLink = () => {
    window.open(
      "https://en.wikipedia.org/wiki/Sylvester_equation#Existence_and_uniqueness_of_the_solutions",
      "_blank"
    );
  };

  return (
    <>
      <div className={styles.experienceDiv}>
        <div className={styles.titleDiv}>
          <h1 className={styles.title} onClick={sylvesterLink}>
            Xometry: Software Eningeering Intern
          </h1>
          <div className={styles.gitDiv} onClick={sylvesterGitLink}>
            <img src={gitHub} className={styles.gitHub} />
            <img src={gitCat} className={styles.gitCat} />
          </div>
        </div>

        <div className={styles.midDiv}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              A{" "}
              <span className={styles.textLink} onClick={linearAlgebraLink}>
                Linear Algebra{" "}
              </span>
              tool that solves the{" "}
              <span className={styles.textLink} onClick={sylvesterEquationLink}>
                Sylvester equation
              </span>{" "}
              for user inputted matrices
            </li>
            <li className={styles.listItem}>
              Compatible with with n by m matrices up to 9 by 9
            </li>
            <li className={styles.listItem}>
              Solves using the{" "}
              <span className={styles.textLink} onClick={methodLink}>
                Kronecker Product Vectorization Method
              </span>
            </li>
          </ul>
          <div className={styles.stackDiv}>
            <div className={styles.stackDivChild} onClick={reactLink}>
              React
              <img src={react} className={styles.stackImg} />
            </div>
            <div className={styles.stackDivChild} onClick={typescriptLink}>
              Typescript
              <img src={typescript} className={styles.stackImgTypescript} />
            </div>
            <div className={styles.stackDivChild} onClick={zustandLink}>
              Zustand
              <img src={zustand} className={styles.stackImg} />
            </div>
            <div className={styles.stackDivChild} onClick={numericLink}>
              Numeric
              <img src={numeric} className={styles.stackImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
