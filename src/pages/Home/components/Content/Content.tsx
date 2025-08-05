import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import styles from "./Content.module.css";
import About from "../Sections/About";
import WorkExperience from "../Sections/WorkExperience";
import ProjectCard from "../Sections/ProjectCard";
import Education from "../Sections/Education";
import WorksCited from "../Sections/WorksCited";
import { useEffect } from "react";

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
import aws from "../../assets/aws.svg";
import vt from "../../assets/vt.svg";
import c from "../../assets/c.png";
import java from "../../assets/java.png";

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

  const VTStack = [
    { label: "Java", logo: java, link: "https://www.java.com/" },
    { label: "C", logo: c, link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { label: "React", logo: react, link: "https://react.dev/" },
  ];

  const { setSection, setBlur, setScale, setFilter, allowObserver } = homeStore();

  const triggerSlideOverAnimation = (section: string) => {
    setSection(section);
    setTimeout(() => setScale(true), 0);
    setTimeout(() => setFilter(true), 0);
    setTimeout(() => setBlur(true), 0);
    setTimeout(() => setScale(false), 300);
    setTimeout(() => setBlur(false), 300);
    setTimeout(() => setFilter(false), 300);
  };

  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [educationRef, educationInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (aboutInView && allowObserver) triggerSlideOverAnimation("about");
    else if (experienceInView && allowObserver) triggerSlideOverAnimation("experience");
    else if (projectsInView && allowObserver) triggerSlideOverAnimation("projects");
    else if (educationInView && allowObserver) triggerSlideOverAnimation("education");
  }, [aboutInView, experienceInView, projectsInView, educationInView, allowObserver]);

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
              "Supported the transition from v2 to v3 of the partner scoring algorithm by updating infrastructure across Node.js and Flask backends, adjusting routing logic, and modifying integrations with MongoDB and PostgreSQL",
              "Improved the partner onboarding flow by fixing bugs, implementing features, and adding data tracking; notably built a feature allowing certified partners to skip test components, reducing onboarding time by several days",
            ]}
            stack={xometryStack}
          />
        </div>
      </Element>
      <Element name="projects">
        <div className={styles.headerDiv}>Projects</div>
        <div ref={projectsRef}>
          <ProjectCard
            title="Sylvester Solver"
            projectLink="/sylvester"
            gitLink="https://github.com/EllisJeremy/sylvestersolver"
            bullets={[
              "A Linear Algebra tool that solves the Sylvester equation for user inputted matrices",
              "Compatible with n by m matrices up to 9 by 9",
              "Solves using the Kronecker Product Vectorization Method",
            ]}
            stack={sylvesterStack}
            previewImage={sylvester}
          />

          <ProjectCard
            title="Orchard Signup"
            projectLink="/calendar"
            gitLink="https://github.com/EllisJeremy/calendarSignUp"
            bullets={[
              "A Calendar tool made for The Orchard Church for task sign-ups and events",
              "Allows for admin-level accounts to create tasks and events and for normal accounts to sign up",
              "The version linked here is separate from the real one, so feel free to add or remove tasks on it",
            ]}
            stack={orchardStack}
            previewImage={calendar}
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
            gpa="4.0"
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
