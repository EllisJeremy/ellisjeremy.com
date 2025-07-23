import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Left from "./components/Left/Left";
import Intro from "./components/Intro/Intro";
import Project from "./components/Sections/Project1";
import Project2 from "./components/Sections/Project2";
import Work1 from "./components/Sections/Work1";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <Helmet>
        <body className={styles.home} />
        <meta name="viewport" content="width=device-width, initial-scale=.6" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fattern&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={styles.fullDiv}>
        {/* this empty div is necessary because leftDiv is position: fixed; thus it does not register as an item within fullDiv */}
        <div className={styles.fillerDiv}></div>
        <div className={styles.leftDiv}>
          <Left />
        </div>
        <div className={styles.rightDiv}>
          <Element name="about">
            <Intro />
          </Element>
          <Element name="experience">
            <Work1 />
          </Element>
          <Element name="projects">
            <Project />
          </Element>
          <Project2 />
        </div>
      </div>
    </>
  );
}
