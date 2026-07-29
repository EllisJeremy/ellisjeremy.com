import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "./Layout/Layout";
import EducationPage from "./pages/EducationPage/EducationPage";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import styles from "./XometrySharkTank.module.css";

export default function XometrySharkTank() {
  return (
    <>
      <Helmet>
        <body className={styles.sharkTank} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Education</title>
      </Helmet>
      <Layout>
        <Routes>
          <Route index element={<EducationPage />} />
          <Route path="Resources" element={<ResourcesPage />} />
        </Routes>
      </Layout>
    </>
  );
}
