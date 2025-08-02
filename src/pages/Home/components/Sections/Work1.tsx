import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sections.module.css";

import react from "../.././assets/react.svg";
import typescript from "../.././assets/typescript.svg";
import zustand from "../.././assets/zustand.svg";
import numeric from "../.././assets/numeric.png";
import xometryLogo from "../../assets/xometryLogoWhite.svg";

const Work1 = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();

  const sylvesterLink = () => {
    navigate("/sylvester");
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

  return (
    <div className={styles.experienceDiv} ref={ref}>
      <div
        className={styles.titleDiv}
        style={{ marginBottom: "0", fontSize: "24px" }}
      >
        <h2 className={styles.title} onClick={sylvesterLink}></h2>
        <img src={xometryLogo} style={{ height: "35px" }} />
      </div>
      <div className={styles.titleDiv}>
        <h2 className={styles.title}>Software Engineering Intern</h2>
        <h4 className={styles.title}>June 2025 - Present</h4>
      </div>

      <div className={styles.midDiv}>
        <ul className={styles.list}>
          <li className={styles.listItem}></li>
          <li className={styles.listItem}></li>
          <li className={styles.listItem}></li>
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
            placeholder
            <img src={zustand} className={styles.stackImg} />
          </div>
          <div className={styles.stackDivChild} onClick={numericLink}>
            placeholder
            <img src={numeric} className={styles.stackImg} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Work1;
