import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Left from "./components/Left/Left";
import Intro from "./components/Intro/Intro";
import Project from "./components/Sections/Project1";
import Project2 from "./components/Sections/Project2";
import Work1 from "./components/Sections/Work1";
import { Element } from "react-scroll";
import { useCallback, useEffect } from "react";
import { homeStore } from "./store";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { setSection, setBlur, setScale, setFilter, allowObserver } =
    homeStore();

  const triggerSlideOverAnimation = useCallback(
    (section: string) => {
      setSection(section);

      setTimeout(() => setScale(true), 0);
      setTimeout(() => setFilter(true), 0);
      setTimeout(() => setScale(false), 300);
      setTimeout(() => setBlur(false), 300);
      setTimeout(() => setFilter(false), 300);
    },
    [setSection, setBlur, setScale, setFilter]
  );

  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [educationRef, educationInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (aboutInView && allowObserver) triggerSlideOverAnimation("about");
    else if (experienceInView && allowObserver)
      triggerSlideOverAnimation("experience");
    else if (projectsInView && allowObserver)
      triggerSlideOverAnimation("projects");
    else if (educationInView && allowObserver)
      triggerSlideOverAnimation("education");
  }, [aboutInView, experienceInView, projectsInView, educationInView]);
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
            <div ref={aboutRef}>
              <Intro />
            </div>
          </Element>
          <Element name="experience">
            <div ref={experienceRef}>
              <Work1 />
            </div>
          </Element>
          <Element name="projects">
            <div ref={projectsRef}>
              <Project />
            </div>
          </Element>
          <Project2 />
        </div>
      </div>
    </>
  );
}
