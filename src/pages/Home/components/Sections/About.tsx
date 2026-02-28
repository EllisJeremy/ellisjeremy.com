import styles from "./Sections.module.css";

export default function About() {
  return (
    <div className={styles.experienceDiv}>
      <h2 className={styles.aboutTitle} style={{ marginLeft: "0px" }}>
        Welcome to my portfolio site!
      </h2>

      <div className={styles.aboutDiv}>
        I am an incoming SWE intern at{" "}
        <a
          href="https://www.capitalone.com/about/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkText}
        >
          Capital One
        </a>{" "}
        Outside of school and work I build full stack web and mobile apps primarily in{" "}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkText}
        >
          React
        </a>
        ,{" "}
        <a
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkText}
        >
          Node
        </a>{" "}
        and{" "}
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkText}
        >
          SQL
        </a>
        .
      </div>
    </div>
  );
}
