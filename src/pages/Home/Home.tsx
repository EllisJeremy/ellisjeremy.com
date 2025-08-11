import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import LeftHeader from "./components/LeftHeader/LeftHeader";
import Content from "./components/Content/Content";
import { screenStore } from "./store";
import { ScreenSizeTracker } from "./components/ScreenSizeTracker";
import NameHeader from "./components/NameHeader/NameHeader";
import Footer from "./components/Content/Footer/Footer";

export default function Home() {
  const { isMobile } = screenStore();

  return (
    <>
      <ScreenSizeTracker />
      <Helmet>
        <body className={styles.home} />
        <meta name="viewport" content="width=device-width, initial-scale=.575" />
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
        <div className={!isMobile ? styles.subDiv : styles.none}>
          {!isMobile && (
            <>
              <div className={styles.fillerDiv} />
              <div className={styles.leftDiv}>
                <LeftHeader />
              </div>
            </>
          )}

          {isMobile && (
            <header className={styles.mobileHeader} style={{ marginBottom: "30px" }}>
              <div style={{ paddingLeft: "26px" }}>
                <NameHeader />
              </div>

              <Footer />
            </header>
          )}
          <div className={styles.rightDiv}>
            <Content />
            =-
          </div>
        </div>
      </div>
    </>
  );
}
