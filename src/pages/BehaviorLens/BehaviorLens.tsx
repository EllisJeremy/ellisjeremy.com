import styles from "./behaviorLens.module.css";

export default function BehaviorLens() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>BehaviorLens</h1>
        <p className={styles.subtitle}>
          Behavior observation and reporting for educators and practitioners.
        </p>

        <section className={styles.section}>
          <h2 className={styles.heading}>Support</h2>
          <p className={styles.text}>For questions, issues, or support requests, contact:</p>
          <a className={styles.link} href="mailto:BehaviorLensHelp@gmail.com">
            BehaviorLensHelp@gmail.com
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Privacy Policy</h2>
          <p className={styles.text}>
            BehaviorLens collects only the data necessary to provide app functionality. Observation
            data is stored locally on the device unless explicitly exported by the user. No data is
            sold or shared with third parties.
          </p>
          <p className={styles.text}>For privacy-related questions, contact:</p>
          <a className={styles.link} href="mailto:BehaviorLensHelp@gmail.com">
            BehaviorLensHelp@gmail.com
          </a>
        </section>
      </section>
    </main>
  );
}
