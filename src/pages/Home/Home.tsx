import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import Left from "./components/Left/Left";
import Intro from "./components/Intro/Intro";
import ProjectCard from "./components/Sections/ProjectCard";
import { Element } from "react-scroll";
import { useCallback, useEffect } from "react";
import { homeStore } from "./store";
import { useInView } from "react-intersection-observer";

import WorkExperience, { StackItem } from "./components/Sections/WorkExperience";
import react from "./assets/react.svg";
import typescript from "./assets/typescript.svg";
import zustand from "./assets/zustand.svg";
import numeric from "./assets/numeric.png";
import xometryLogo from "./assets/xometryLogoWhite.svg";
import { useNavigate } from "react-router-dom";

import sylvester from "./assets/sylvester.png";

import mysql from "./assets/mysql.svg";
import php from "./assets/php.png";
import calendar from "./assets/calendar.png";

export default function Home() {
  const navigate = useNavigate();

  const xometryStack: StackItem[] = [
    {
      label: "React",
      logo: react,
      onClick: () => window.open("https://react.dev/", "_blank"),
    },
    {
      label: "Node",
      logo: typescript,
      onClick: () => window.open("https://www.typescriptlang.org/", "_blank"),
    },
    {
      label: "Flask",
      logo: zustand,
      onClick: () => window.open("https://zustand.docs.pmnd.rs/", "_blank"),
    },
    {
      label: "Mongo",
      logo: numeric,
      onClick: () => window.open("https://ccc-js.github.io/numeric2/", "_blank"),
    },
    {
      label: "Postgres",
      logo: numeric,
      onClick: () => window.open("https://ccc-js.github.io/numeric2/", "_blank"),
    },
  ];

  const sylvesterStack: StackItem[] = [
    {
      label: "React",
      logo: react,
      onClick: () => window.open("https://react.dev/", "_blank"),
    },
    {
      label: "Typescript",
      logo: typescript,
      onClick: () => window.open("https://www.typescriptlang.org/", "_blank"),
    },
    {
      label: "Zustand",
      logo: zustand,
      onClick: () => window.open("https://zustand.docs.pmnd.rs/", "_blank"),
    },
    {
      label: "Numeric",
      logo: numeric,
      onClick: () => window.open("https://ccc-js.github.io/numeric2/", "_blank"),
    },
  ];

  const orchardStack: StackItem[] = [
    {
      label: "React",
      logo: react,
      onClick: () => window.open("https://react.dev/", "_blank"),
    },
    {
      label: "Typescript",
      logo: typescript,
      onClick: () => window.open("https://www.typescriptlang.org/", "_blank"),
    },
    {
      label: "Zustand",
      logo: zustand,
      onClick: () => window.open("https://zustand.docs.pmnd.rs/", "_blank"),
    },
    {
      label: "MySQL",
      logo: mysql,
      onClick: () => window.open("https://www.mysql.com/", "_blank"),
    },
    {
      label: "PHP",
      logo: php,
      onClick: () => window.open("https://www.php.net/", "_blank"),
    },
  ];

  const { setSection, setBlur, setScale, setFilter, allowObserver } = homeStore();

  const triggerSlideOverAnimation = useCallback(
    (section: string) => {
      setSection(section);

      setTimeout(() => setScale(true), 0);
      setTimeout(() => setFilter(true), 0);
      setTimeout(() => setBlur(true), 0);
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
    else if (experienceInView && allowObserver) triggerSlideOverAnimation("experience");
    else if (projectsInView && allowObserver) triggerSlideOverAnimation("projects");
    else if (educationInView && allowObserver) triggerSlideOverAnimation("education");
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
          <div className={styles.headerDiv}>About</div>
          <Element name="about">
            <div ref={aboutRef}>
              <Intro />
            </div>
          </Element>
          <Element name="experience">
            <div className={styles.headerDiv}>Experience</div>
            <div ref={experienceRef}>
              <WorkExperience
                ref={experienceRef}
                company="Xometry"
                companyLogo={xometryLogo}
                role="Software Engineering Intern"
                date="June 2025 - Present"
                onTitleClick={() => navigate("/sylvester")}
                bullets={["what i did", "what i did 2", "what i did 3"]}
                stack={xometryStack}
              />
            </div>
          </Element>
          <Element name="projects">
            <div className={styles.headerDiv}>Projects</div>
            <div ref={projectsRef}>
              <ProjectCard
                title="Sylvester Solver"
                onTitleClick={() => navigate("/sylvester")}
                onGitClick={() =>
                  window.open(
                    "https://github.com/EllisJeremy/ellisjeremy.com/tree/main/src/pages/Sylvester",
                    "_blank"
                  )
                }
                bullets={[
                  "A Linear Algebra tool that solves the Sylvester equation for user inputted matrices",
                  "Compatible with n by m matrices up to 9 by 9",
                  "Solves using the Kronecker Product Vectorization Method",
                ]}
                stack={sylvesterStack}
                previewImage={sylvester}
                onImageClick={() => navigate("/sylvester")}
              />

              <ProjectCard
                title="Orchard Signup"
                onTitleClick={() => navigate("/calendar")}
                onGitClick={() =>
                  window.open("https://github.com/EllisJeremy/calendarSignUp", "_blank")
                }
                bullets={[
                  "A Calendar tool made for The Orchard Church for task sign-ups and events",
                  "Allows for admin-level accounts to create tasks and events and for normal accounts to sign up",
                  "The version linked here is separate from the real one, so feel free to add or remove tasks on it",
                ]}
                stack={orchardStack}
                previewImage={calendar}
                onImageClick={() => navigate("/calendar")}
              />
            </div>
          </Element>
        </div>
      </div>
    </>
  );
}
