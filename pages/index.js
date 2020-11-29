import Header from '../components/header';
import StartPage from '../pages/startPage';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import About from '../pages/about';
import styles from '../styles/index.module.css';


export default () => (
  <>
    <head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
    </head>
    <div className={styles.mobile}>
      <p>This portfolio website has not yet beeen optimized for screen sizes other than web (13-inch). <br></br><br></br><h1>For optimal experience, please view this portfolio on a computer in full screen, preferably in a Chrome browser.</h1></p>
    </div>
    <div className={styles.bigScreen}>
      <p>Optimized for web (13-inch). <br></br>Some content may look different for bigger screen sizes. <br></br><br></br>Wait to continue.</p>
    </div>
    <body>
      <div className={styles.web}>
        <nav className={styles.navbar}>
          <Header></Header>
        </nav>
        <section id="home" className={styles.home}>
          <StartPage></StartPage>
        </section>
        <section className={styles.about} id="about">
          <About></About>
        </section>
        <section className={styles.projects} id="projects">
          <Projects></Projects>
        </section>
        <section className={styles.contact} id="contact">
          <Contact></Contact>
        </section>
      </div>
    </body>
  </>
);

