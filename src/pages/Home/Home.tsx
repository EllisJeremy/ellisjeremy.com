import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Left from "./components/Left/Left";
import Intro from "./components/Intro/Intro";
import Project from "./components/Sections/Project1";
import Project2 from "./components/Sections/Project2";
import Work1 from "./components/Sections/Work1";
import { homeStore } from "./store";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experience1Ref = useRef<HTMLDivElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);

  const setRefs = homeStore((s) => s.setRefs);

  useEffect(() => {
    setRefs({ aboutRef, experience1Ref, project1Ref, project2Ref });
  }, [setRefs]);

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
        <div className={styles.fillerDiv} />
        <div className={styles.leftDiv}>
          <Left />
        </div>
        <div className={styles.rightDiv}>
          <Intro ref={aboutRef} />
          <Work1 ref={experience1Ref} />
          <Project ref={project1Ref} />
          <Project2 ref={project2Ref} />
        </div>
      </div>
    </>
  );
}
