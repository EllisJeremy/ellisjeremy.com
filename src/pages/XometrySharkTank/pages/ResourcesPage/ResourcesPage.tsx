import styles from './ResourcesPage.module.css';
import stuImg from '../../assets/students.jpeg';
import ArticleSlider from '../../components/Slider/ArticleSlider';
import type { ArticleType } from '../../components/Slider/ArticleSlider';
import Button from '../../components/Button/Button';
import book from "../../assets/resources.svg"

export default function ResourcesPage() {
  const goToLink = (link: string) => {
    window.location.href = link;
  };
  // Article data for each section
  const starterGuides: ArticleType[] = [
    {
      type: 'Article',
      title: 'Metal Parts Manufacturing - How to Make Custom Metal Parts',
      author: 'By Greg Paulson',
      description: 'Engineers and designers need to understand a part’s materials, manufacturing processes, and use cases to determine appropriate methods for creating them. This is an overview of 8 different manufacturing processes you can utilize to create custom metal parts.',
      readTime: '15 min read',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/custom-metal-parts-manufacturing/',
    },    
    {
      type: 'Article',
      title: 'Plastic Fabrication: Definition, Purpose, How It Works, Advantages, and Examples',
      author: 'By Dean McClements',
      description: 'This article presents an overview of plastic fabrication, explaining its definition, purpose, methods, materials, advantages, and typical applications.',
      readTime: '11 min read',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/plastic-fabrication/',
    },    
    {
      type: 'Article',
      title: '3D Printing vs. Traditional Manufacturing: Differences and Comparison',
      author: 'By Dean McClements',
      description: 'Learn what makes 3D printing different from traditional manufacturing technologies.',
      readTime: '6 min read',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/3d-printing-vs-traditional-manufacturing/',
    },    
    {
      type: 'Article',
      title: 'All About the Basics of Plastic Injection Molding',
      author: 'By Kat de Naoum',
      description: 'The process, the machine’s components, and compatible materials',
      readTime: '5 min read',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/injection-molding/basics-of-plastic-injection-molding/',
    },     

  ];

  const designGuides: ArticleType[] = [
    {
      type: 'Design Guide',
      title: 'Design Guide: CNC Machining',
      author: 'By Team Xometry',
      description: 'With all of today’s innovative CNC machining capabilities, it’s important to understand the strengths and trade-offs of this process',
      buttonText: 'See Guide',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/design-guides/design-guide-cnc-machining/',
    },    
    {
      type: 'Design Guide',
      title: 'Design Guide: 3D Printing Quick Reference Guides',
      author: 'By Greg Paulson',
      description: 'Easily compare process specifications, tolerances, materials, and finishes with our quick reference guides for the various 3D printing processes we offer!',
      buttonText: 'See Guides',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/3d-printing-quick-reference-guides/',
    },
    {
      type: 'Design Guide',
      title: 'Design Guide: 3D Printing Process & Material',
      author: 'By Team Xometry',
      description: 'With this guide, you can quickly find the right additive process and material for your next big idea by comparing each of our 3D printing processes based on the intended application of your part.',
      buttonText: 'See Guide',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/3d-printing-process-and-material-design-guide/',
    },
    {
      type: 'Design Guide',
      title: 'Design Guide: Color 3D Printing',
      author: 'By Team Xometry',
      description: 'In this guide, you will learn about the different aspects of 3D printing colorful parts, how to create and add color to your models, as well as the best practices and considerations to keep in mind when printing in full color.',
      buttonText: 'See Guide',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/design-guides/design-guide-color-3d-printing/',
    },
    {
      type: 'Article',
      title: 'Design Guide: How to Create A Good Technical Drawing',
      author: 'By Joel Schadegg',
      readTime: '10 min read',
      description: 'Improve your 2D technical drawings by following our best practices covered in this article',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/design-guides/technical-drawing-best-practices/',
    }
  ];

  const printingDesign: ArticleType[] = [
    {
      type: 'Article',
      title: 'Everything You Need to Know About 3D Printing',
      author: 'By Dean McClements',
      readTime: '8 min read',
      description: 'Learn all out about this versatile manufacturing technology that continues to evolve and gain new applications.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/3d-printing-guide/',
    },
    {
      type: 'Article',
      title: '3D Printer Filament: Types, Materials, Uses, and Services',
      author: 'By Dean McClements',
      readTime: '10 min read',
      description: 'Learn more about the options for filament materials that are used in 3D printing.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/3d-printer-filament/',
    },
    {
      type: 'eBook',
      title: 'How to Prepare a File for 3D Printing',
      author: 'By Team Xometry',
      description: 'When designing models for 3D Printing, they must be saved with specific properties to ensure high-quality results. In this guide you will learn about the most common design mistakes that lead to unsatisfactory 3D models, and several tips you can use to avoid them.',
      buttonText: 'See eBook',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/ebook-how-to-prepare-a-file-for-3d-printing/',
    },
    {
      type: 'Article',
      title: '10 Steps on How To Remove Supports From 3D Prints',
      author: 'By Dean McClements',
      readTime: '9 min read',
      description: 'In this article, we look at 10 steps explaining how to remove supports from 3D prints. We also answer a few of the most common questions regarding 3D-printed-support removal.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/how-to-remove-supports-from-3d-prints/',
    },
    {
      type: 'Article',
      title: 'Slicer in 3D Printing: Definition, Features, and How it Works',
      author: 'By Dean McClements',
      readTime: '8 min read',
      description: 'Learn about the role that slicer software plays in 3D printing.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/what-is-a-slicer-in-3d-printing/',
    },
    {
      type: 'Interactive Course',
      title: 'Principles of 3D Printing Design for Industrial Engineers',
      author: 'By Team Xometry ',
      description: 'Complete guide covering design considerations, material selection, and optimization techniques for 3D printing projects.',
      buttonText: 'See Course',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/3d-printing/course-principles-of-3d-printing-design-for-industrial-engineers/',
    },
  ];

  const machiningDesign: ArticleType[] = [
    {
      type: 'Article',
      title: 'All About CNC Machining and How It Works',
      author: 'By Kat de Naoum',
      readTime: '6 min read',
      description: 'Get a better understanding of the inner workings behind this important manufacturing process.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/what-is-cnc-machining/',
    },
    {
      type: 'Article',
      title: 'Everything You Need to Know About CNC Milling',
      author: 'By Kat de Naoum',
      readTime: '8 min read',
      description: 'Learn more about the CNC milling process and methods.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/what-is-cnc-milling/',
    },
    {
      type: 'Article',
      title: 'Your Guide to CNC Programming and How it Works',
      author: 'By Kat de Naoum',
      readTime: '7 min read',
      description: 'Plus, learn how it’s used and all the important codes',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/cnc-programming/',
    },
    {
      type: 'Article',
      title: 'All About End Milling',
      author: 'By Dean McClements',
      readTime: '12 min read',
      description: 'What Is End Milling?.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/end-milling/',
    },
    {
      type: 'Article',
      title: 'Sheet Metal Bending: The Basics',
      author: 'Greg Paulson',
      readTime: '2 min read',
      description: 'An overview of minimum bend radii and bend orientation.',
      buttonText: 'Read Article',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/the-basics-of-bending-sheet-metal/',
    },
    {
      type: 'eBook',
      title: 'CNC Metal Finishes',
      author: 'By Team Xometry',
      description: 'Download your copy to understand the colors, coating thicknesses, material properties, and application conformance of each surface finish or treatment.',
      buttonText: 'See eBook',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/ebooks/ebook-cnc-metal-finishes/',
    },
    {
      type: 'Video',
      title: 'Video: 10 Tips to Improve Your CAD Designs for CNC Machining',
      author: 'By Joel Schadegg',
      readTime: '5 min watch',
      description: 'This video covers 10 essential tips for improving your CAD designs so that you can produce more affordable and well-optimized parts',
      buttonText: 'Watch Video',
      buttonType: 'secondary',
      url: 'https://www.xometry.com/resources/machining/10-tips-improve-cad-cnc-design/',
    },

  ];

  return (
    <>
      <div className={styles.marginDiv} >
        <div className={styles.introDiv}>
          <div className={styles.introContentDiv}>
            <h1 className={styles.header}>
              Student Resources
            </h1>
            <p className={styles.pageDescription}>
              Welcome to your dedicated student hub for mastering manufacturing! Whether you're designing your first prototype or pushing the boundaries of a research project, our curated guides, tutorials, and expert insights are here to help you turn your ideas into reality.
            </p>
            <div onClick={() => goToLink("https://www.xometry.com/resources/")}>
              <Button text={"View All Xometry Resources"}></Button>
            </div>
          </div>
          <div className={styles.introImgDiv}>
            <img src={stuImg} className={styles.introImg} alt="Introduction" />
          </div>
        </div>
      </div>
      <div className={styles.marginDiv} style={{backgroundColor: "#ffffff"}}>
      <div className={styles.container}  style={{ width: "1380px" }}>
        <div className={styles.sectionsContainer} >
          {/* Beginner Guides Section*/}
          <section className={styles.section}>
            <div className={styles.sectionHeader} style={{marginTop: "60px"}}>
              <div>
                <h2 className={styles.sectionTitle}>Getting Started</h2>
                <p className={styles.sectionDescription}>
                Learn the basics of manufacturing and how to get started with your first project.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/design-guides/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Design Guides Content
              </a>
            </div>
            <ArticleSlider articles={starterGuides} cardStyles={styles} />
          </section>
          
          {/* Design Guides Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader} >
              <div>
                <h2 className={styles.sectionTitle}>Design Guides</h2>
                <p className={styles.sectionDescription}>
                Perfect for every student designer, these guides cover essential best practices for creating parts across all manufacturing processes.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/design-guides/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Design Guides Content
              </a>
            </div>
            <ArticleSlider articles={designGuides} cardStyles={styles} />
          </section>

          {/* 3D Printing Design Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>3D Printing Design</h2>
                <p className={styles.sectionDescription}>
                New to additive manufacturing? Dive in with our expert guides on choosing the right materials, optimizing your designs, and preparing your files for perfect 3D prints every time.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/3d-printing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All 3D Printing Design Content
              </a>
            </div>
            <ArticleSlider articles={printingDesign} cardStyles={styles} />
          </section>

          {/* Machining Design Section */}
          <section className={styles.section} style={{marginBottom: "100px"}}>
            <div className={styles.sectionHeader}>
              <div>
                <h2 className={styles.sectionTitle}>Machining Design</h2>
                <p className={styles.sectionDescription}>
                Get started with CNC machining and fabrication! Explore different processes, understand material considerations, and learn to refine your designs for real-world, precision-engineered parts, even if you're just beginning.
                </p>
              </div>
              <a
                className={styles.viewAllButton}
                href="https://www.xometry.com/resources/machining/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Machining Design Content
              </a>
            </div>
            <ArticleSlider articles={machiningDesign} cardStyles={styles} />
          </section>
        </div>
      </div>
      </div>
      <div
        className={styles.marginDiv}
        style={{ backgroundColor: "#e6f0fc", marginBottom: "0px" }}
      >
        <div className={styles.introDiv} style={{justifyContent: "space-between"}}>
          <div className={styles.introContentDiv}>
            <h2 style={{ marginBottom: "25px" }}>
              All Done Learning?
            </h2>

            <div onClick={() => goToLink("/XometrySharkTank")}>
              <Button text={"Return to Student Page"} />
            </div>
          </div>
          <div style={{justifyContent: "space-between", display: "flex", gap: "20px"}}>
                      <img src={book} style={{height: "100%"}}/>
          
          </div>
        </div>
      </div>
    </>
  );
}
