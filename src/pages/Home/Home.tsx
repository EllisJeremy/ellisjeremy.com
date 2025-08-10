import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import LeftHeader from "./components/LeftHeader/LeftHeader";
import Content from "./components/Content/Content";
import { screenStore } from "./store";
import { ScreenSizeTracker } from "./components/ScreenSizeTracker";

export default function Home() {
  const { isMobile } = screenStore();

  return (
    <>
      <ScreenSizeTracker />
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

      <div className={!isMobile ? styles.fullDiv : styles.mobileDiv}>
        <div className={styles.subDiv}>
          {!isMobile && (
            <>
              <div className={styles.fillerDiv} />
              <div className={styles.leftDiv}>
                <LeftHeader />
              </div>
            </>
          )}

          <div className={styles.rightDiv}>
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
