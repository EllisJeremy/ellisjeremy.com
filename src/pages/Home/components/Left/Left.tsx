import styles from "./Left.module.css";
import hokie from "../.././assets/hokie.png";
import { homeStore } from "../../store";

export default function Left() {
  const virginiaTechLink = () => {
    window.open("https://www.vt.edu/", "_blank");
  };

  const { section, setSection } = homeStore();

  const topMap: Record<string, string> = {
    home: "175px",
    work: "245px",
    projects: "300px",
    school: "355px",
  };

  return (
    <>
      <header>
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
        <div className={styles.sectionButtonDiv}>
          <div
            className={styles.slideOver}
            style={{ top: topMap[section] || "0px" }}
          />
          <svg style={{ display: "none" }}>
            <filter id="displacementFilter">
              <feImage
                href="data:image/png;base64,g+73FDgUL9YnSTEdfVLuv1MhE2XyrlJCXjgiLU6AXovAsqybPKAlHA/wH75uVy+EFM3wAAAABJRU5ErkJggg=="
                preserveAspectRatio="none"
              />
              <feDisplacementMap
                in="SourceGraphic"
                scale="200"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
          <button
            className={styles.sectionButton}
            onClick={() => setSection("home")}
          >
            home
          </button>
          <button
            className={styles.sectionButton}
            onClick={() => setSection("work")}
          >
            work
          </button>
          <button
            className={styles.sectionButton}
            onClick={() => setSection("projects")}
          >
            projects
          </button>
          <button
            className={styles.sectionButton}
            onClick={() => setSection("school")}
          >
            school
          </button>
        </div>
      </header>
      <footer>text</footer>
    </>
  );
}
