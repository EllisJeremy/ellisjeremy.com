import styles from "./EducationPage.module.css";
import introImg from "../../assets/introImg.jpeg";
import Button from "../../components/Button/Button";
import GridItem from "../../components/GridItem/GridItem";
import Slider from "../../components/Slider/Slider";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { useModalStore } from "../../store";

import UCIrvineLogo from "../../assets/UCIrvineLogo.png";
import UCIrvineProject from "../../assets/UCIrvineProject.avif";

import UCSanDiegoLogo from "../../assets/UCSanDiegoLogo.png";
import UCSanDiegoProject from "../../assets/UCSanDiegoProject.avif";

import UPennProject from "../../assets/UPennProject.avif";
import UPennLogo from "../../assets/UPennLogo.png";

import pennStateLogo from "../../assets/pennStatelogo.png";
import pennStateProject from "../../assets/pennStateProject.jpg";

import warwickLogo from "../../assets/warwickLogo.svg";
import warwickProject from "../../assets/warwickProject.webp";

import thomas from "../../assets/thomas.avif";
import teamspace from "../../assets/teamspace.svg";
import resources from "../../assets/resources.svg";
import talk from "../../assets/talk.svg";

import print from "../../assets/3DPint.svg";
import cut from "../../assets/cut.svg";
import cnc from "../../assets/cnc.svg";

export default function EducationPage() {
  const setModal = useModalStore((state) => state.setModal);

  const goToLink = (link: string) => {
    window.location.href = link;
  };
  const items = [
    {
      schoolName: "UC Irvine",
      schoolLogo: UCIrvineLogo,
      projectImg: UCIrvineProject,
      description: "Xometry Helps UC Irvine Rocket Team Prepare for Spaceshot",
      link: "https://www.xometry.com/resources/case-studies/case-study-xometry-helps-uc-irvine-rocket-team-prepare-for-spaceshot/",
    },
    {
      schoolName: "UC San Diego",
      schoolLogo: UCSanDiegoLogo,
      projectImg: UCSanDiegoProject,
      description: "These Students Invented a Way to Brew Beer on the Moon",
      link: "https://www.xometry.com/resources/case-studies/these-students-invented-a-way-to-brew-beer-on-the-moon/",
    },
    {
      schoolName: "U Penn",
      schoolLogo: UPennLogo,
      projectImg: UPennProject,
      description:
        "UPenn Racing Team Hopes to Shatter Records With Xometry's Help",
      link: "https://www.xometry.com/resources/case-studies/upenn-team-hopes-to-shatter-records-again-with-xometrys-help/",
    },
    {
      schoolName: "Penn State",
      schoolLogo: pennStateLogo,
      projectImg: pennStateProject,
      description:
        "Student Uses Xometry to Build Affordable 3D-Printed Prosthetic Leg",
      link: "https://berks.psu.edu/feature/penn-state-berks-engineering-student-qualifies-3d-challenge?/",
    },
    {
      schoolName: "U Warwick",
      schoolLogo: warwickLogo,
      projectImg: warwickProject,
      description:
        "Xometry Assists in the Production of Warwick’s Superbike Subframe",
      link: "https://xometry.pro/en-eu/stories/warwick-electric-superbike/",
    },
  ];

  return (
    <>
      <div className={styles.marginDiv} style={{ backgroundColor: "#e6f0fc" }}>
        <div className={styles.introDiv}>
          <div className={styles.introContentDiv}>
            <h1 className={styles.header}>
              Prototypes and Production Parts for Engineering Students &
              Universities
            </h1>
            <h3>
              Turn your ideas into real-world parts with fast lead times, expert
              feedback, and industry-grade quality — all with an exclusive 10%
              academic discount.
            </h3>
            <div
              onClick={() => goToLink("https://www.xometry.com/quoting/home/?")}
            >
              <Button text={"Get Your Instant Quote"} />
            </div>
          </div>
          <div className={styles.introImgDiv}>
            <img src={introImg} className={styles.introImg}></img>
          </div>
        </div>
      </div>

      <div className={styles.marginDiv}>
        <div className={styles.contentDiv}>
          <div className={styles.H2HeaderDiv}>
            <h2>
              Why Choose Xometry as a Manufacturing Partner for Your Project
            </h2>
          </div>
          <div className={styles.gridDiv}>
            <GridItem
              title="Exclusive Student Discount"
              description="Engineering students and university teams get a 10% academic discount on all custom parts ordered through Xometry. Build your prototypes affordably without compromising on quality or speed."
            />

            <GridItem
              title="Instant Quoting Engine"
              description="Upload your CAD file, configure your manufacturing specs, and get an instant quote. You can add multiple parts in one quote and place an order in a few clicks. Xometry handles everything from logistics to delivery."
            />

            <GridItem
              title="One-Stop Shop for Metal & Plastic Parts"
              description="Xometry offers over 16 manufacturing processes on one platform, including CNC machining, sheet metal fabrication, and 3D printing. For high-volume production, we provide injection moulding and die casting, with access to 10,000+ global manufacturers."
            />

            <GridItem
              title="DFM Feedback"
              description="We help students and engineers refine their designs with real-time Design for Manufacturing (DFM) feedback. Whether it's CNC, 3D printing, or sheet metal, your part is reviewed for cost-effectiveness and manufacturability."
            />
          </div>
        </div>
      </div>

      <div
        className={styles.marginDiv}
        style={{ backgroundColor: "#f4f7f8", marginBottom: "0px" }}
      >
        <div
          className={styles.contentDiv}
          style={{ width: "1380px", marginBottom: "75px" }}
        >
          <div className={styles.H2HeaderDiv}>
            <h2>Student Projects Made With Xometry</h2>
          </div>
          <Slider items={items}></Slider>
        </div>
      </div>

      <div
        className={styles.marginDiv}
        style={{ backgroundColor: "#f4f7f8", marginBottom: "0px" }}
      >
        <div className={styles.contentDiv}>
          <div className={styles.H2HeaderDiv}>
            <h2>Xometry Education Services</h2>
          </div>
          <div className={styles.servicesGridDiv}>
            <Link className={styles.servicesItemDiv} to={"/XometrySharkTank/Resources"}>
              <div className={styles.servicesItemTitleDiv}>
                <div>
                  <h3 style={{ fontSize: "27px" }}>Student Resources</h3>
                  <h3 style={{ marginBottom: "none" }}>
                    Expand your knowledge in 3D printing, machining, and more.
                  </h3>
                </div>
                <img src={resources} />
              </div>
              <h4 className={styles.readMore}>Start Learning Now →</h4>
            </Link>
            <div
              className={styles.servicesItemDiv}
              onClick={() =>
                goToLink(
                  "https://www.xometry.com/xometry-enterprise/teamspace/"
                )
              }
            >
              <div className={styles.servicesItemTitleDiv}>
                <div>
                  <h3 style={{ fontSize: "27px" }}>Teamspace</h3>
                  <h3 style={{ marginBottom: "none" }}>
                    Collaborate with your teammates on projects.
                  </h3>
                </div>
                <img src={teamspace} />
              </div>
              <h4 className={styles.readMore}>Create Your Team →</h4>
            </div>
            <div
              className={styles.servicesItemDiv}
              onClick={() => goToLink("https://www.thomasnet.com/")}
            >
              <div className={styles.servicesItemTitleDiv}>
                <div>
                  <h3 style={{ fontSize: "27px" }}>Thomas</h3>
                  <h3 style={{ marginBottom: "none" }}>
                    Connect directly with our network of trusted suppliers.
                  </h3>
                </div>
                <img src={thomas} style={{ transform: "scale(1.2)" }} />
              </div>
              <h4 className={styles.readMore}>Find Suppliers →</h4>
            </div>
            <div className={styles.servicesItemDiv} onClick={setModal}>
              <div className={styles.servicesItemTitleDiv}>
                <div>
                  <h3 style={{ fontSize: "27px" }}>Ambassadors</h3>
                  <h3 style={{ marginBottom: "none" }}>
                    Work with Xometry to market to your school.
                  </h3>
                </div>
                <img src={talk} />
              </div>
              <h4 className={styles.readMore}>Become an Ambassador →</h4>
            </div>
            <Modal />
          </div>
        </div>
      </div>

      <div
        className={styles.marginDiv}
        style={{ backgroundColor: "#e6f0fc", marginBottom: "0px" }}
      >
        <div
          className={styles.introDiv}
          style={{ justifyContent: "space-between" }}
        >
          <div className={styles.introContentDiv}>
            <h2 style={{ marginBottom: "25px" }}>
              Ready to Bring Your Project to Life?
            </h2>

            <div
              onClick={() => goToLink("https://www.xometry.com/quoting/home/?")}
            >
              <Button text={"Upload Your CAD Files & Get an Instant Quote"} />
            </div>
          </div>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              gap: "20px",
            }}
          >
            <img src={cnc} style={{ height: "100%" }} />
            <img src={cut} style={{ height: "100%" }} />
            <img src={print} style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
}
