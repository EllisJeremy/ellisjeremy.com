import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import styles from "./Content.module.css";
import About from "../Sections/About";
import WorkExperience from "../Sections/WorkExperience";
import ProjectCard from "../Sections/ProjectCard";
import Education from "../Sections/Education";
import WorksCited from "../Sections/WorksCited";
import { useEffect, useCallback } from "react";

import react from "../../assets/react.svg";
import typescript from "../../assets/typescript.svg";
import zustand from "../../assets/zustand.svg";
import numeric from "../../assets/numeric.png";
import xometryLogo from "../../assets/xometryLogoWhite.svg";
import sylvester from "../../assets/sylvester.png";
import mongo from "../../assets/mongo.svg";
import flask from "../../assets/flask.svg";
import postgreSQL from "../../assets/postgreSQL.png";
import node from "../../assets/node.svg";
import mysql from "../../assets/mysql.svg";
import calendar from "../../assets/calendar.png";
import behaviorLens from "../../assets/behaviorLens.png";
import aws from "../../assets/aws.svg";
import vt from "../../assets/vt.svg";
import c from "../../assets/c.png";
import java from "../../assets/java.png";
import expo from "../../assets/expo.svg";
import NYTGamesSolver from "../../assets/NYTGamesSolver.png";

import { homeStore } from "../../store";

export default function Content() {
  const xometryStack = [
    { label: "React", logo: react, link: "https://react.dev/" },
    { label: "Node", logo: node, link: "https://nodejs.org/" },
    { label: "Flask", logo: flask, link: "https://flask.palletsprojects.com/" },
    { label: "Mongo", logo: mongo, link: "https://www.mongodb.com/" },
    { label: "Postgres", logo: postgreSQL, link: "https://www.postgresql.org/" },
  ];

  const sylvesterStack = [
    { label: "React", logo: react, link: "https://react.dev/" },
    { label: "Typescript", logo: typescript, link: "https://www.typescriptlang.org/" },
    { label: "Zustand", logo: zustand, link: "https://zustand.docs.pmnd.rs/" },
    { label: "Numeric", logo: numeric, link: "https://ccc-js.github.io/numeric2/" },
  ];

  const orchardStack = [
    { label: "React", logo: react, link: "https://react.dev/" },
    { label: "Node", logo: node, link: "https://nodejs.org/" },
    { label: "MySQL", logo: mysql, link: "https://www.mysql.com/" },
    { label: "AWS", logo: aws, link: "https://aws.amazon.com/" },
  ];

  const lensStack = [
    { label: "React Native", logo: react, link: "https://reactnative.dev/" },
    { label: "Expo", logo: expo, link: "https://expo.dev/" },
  ];

  const NYTGamesSolverStack = [
    { label: "React", logo: react, link: "https://react.dev/" },
    { label: "Typescript", logo: typescript, link: "https://www.typescriptlang.org/" },
    { label: "Zustand", logo: zustand, link: "https://zustand.docs.pmnd.rs/" },
  ];

  const VTStack = [
    { label: "Java", logo: java, link: "https://www.java.com/" },
    { label: "C", logo: c, link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { label: "React", logo: react, link: "https://react.dev/" },
  ];
  const { setSection, setBlur, setScale, setFilter, allowObserver } = homeStore();

  const triggerSlideOverAnimation = useCallback(
    (currSection: string) => {
      setSection(currSection);

      setTimeout(() => setScale(true), 0);
      setTimeout(() => setFilter(true), 0);
      setTimeout(() => setBlur(true), 0);
      setTimeout(() => setScale(false), 300);
      setTimeout(() => setBlur(false), 300);
      setTimeout(() => setFilter(false), 300);
    },
    [setSection, setBlur, setScale, setFilter],
  );

  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.2 });
  const [educationRef, educationInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (allow) {
      if (aboutInView && allowObserver) triggerSlideOverAnimation("about");
      else if (experienceInView && allowObserver) triggerSlideOverAnimation("experience");
      else if (projectsInView && allowObserver) triggerSlideOverAnimation("projects");
      else if (educationInView && allowObserver) triggerSlideOverAnimation("education");
    }
  }, [aboutInView, experienceInView, projectsInView, educationInView]);
  const allow = true;
  return (
    <>
      <Element name="about">
        <div className={styles.headerDiv}>About</div>
        <div ref={aboutRef}>
          <About />
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
            companyLink="https://www.xometry.com/"
            bullets={[
              "Supported the transition from v2 to v3 of the partner scoring algorithm by updating infrastructure across Node.js and Flask backends, modifying the algorithm’s logic, and adjusting integrations with MongoDB and PostgreSQL.",
              "Improved the partner onboarding flow by fixing bugs, implementing features, and adding data tracking; notably built a feature allowing certified partners to skip test components, reducing onboarding time by several days",
              <>
                Won 1st place in Xometry’s internal “Shark Tank” competition. My demo website, used
                for our pitch, can be seen{" "}
                <a
                  href="https://github.com/EllisJeremy/XometrySharkTankDemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255, 255, 255, 0.8)", textDecoration: "underline" }}
                >
                  here
                </a>
                .
              </>,
            ]}
            stack={xometryStack}
          />
        </div>
      </Element>

      <Element name="projects">
        <div className={styles.headerDiv}>Projects</div>
        <div ref={projectsRef}>
          <ProjectCard
            title="Orchard Signup"
            projectLink="https://beyondsunday.org/account/menu"
            gitLink="https://github.com/EllisJeremy/calendarSignUp"
            bullets={[
              "Orchard Signup is a full-stack platform that helps community members manage events and task signups.",
              "The site features secure login with JWT sessions, password hashing, and email notifications that confirm when users sign up for tasks.",
            ]}
            stack={orchardStack}
            previewImage={calendar}
          />

          <ProjectCard
            title="Behavior Lens"
            projectLink="https://apps.apple.com/us/app/behaviorlens/id6758353524"
            gitLink="https://github.com/EllisJeremy/behaviorLens"
            bullets={[
              "Behavior Lens is a mobile app designed to help School Psychologists track and analyze behavioral data for students with special needs",
              "It was created for and is used by psychologists in the Arlington County public school system.",
            ]}
            stack={lensStack}
            previewImage={behaviorLens}
          />

          <ProjectCard
            title="NYT Games Solver"
            projectLink="https://github.com/EllisJeremy/NYTGamesSolver"
            gitLink="https://github.com/EllisJeremy/NYTGamesSolver"
            bullets={[
              "A chrome extension that solves NYT games using data structure and algorithms.",
              "Currently only the wordle one works, but more are coming soon.",
            ]}
            stack={NYTGamesSolverStack}
            previewImage={NYTGamesSolver}
          />

          <ProjectCard
            title="Sylvester Solver"
            projectLink="/sylvester"
            gitLink="https://github.com/EllisJeremy/sylvestersolver"
            bullets={[
              "Sylvester Solver is the first web-based calculator that computes solutions to the Sylvester matrix equation.",
              "It uses the Kronecker Product Vectorization Method to handle matrices up to 9×9.",
            ]}
            stack={sylvesterStack}
            previewImage={sylvester}
          />
        </div>
      </Element>
      <Element name="education">
        <div className={styles.headerDiv}>Education</div>
        <div ref={educationRef}>
          <Education
            ref={educationRef}
            company="Virginia Tech"
            companyLogo={vt}
            degree="BS Computer Science"
            date="Expected: Dec 2026"
            schoolLink="https://www.cs.vt.edu/"
            gpa="3.83"
            bullets={[
              "Data Structures and Algorithms",
              "Computer Origination",
              "GUI and Graphics Programming",
            ]}
            stack={VTStack}
          />
        </div>
      </Element>
      <div className={styles.headerDiv} style={{ fontSize: "30px" }}>
        Works Cited
      </div>
      <WorksCited />
    </>
  );
}
