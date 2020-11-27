import styles from '../styles/feeed.module.css';


export default () => (
    <>
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        </head>

        <body>
            <div>
                <nav className={styles.navbar}>
                    <a href="/">← Home</a>
                </nav>
                <section className={styles.startbg}>
                </section>
                <section className={styles.box2}>
                    <h2>How does it work?</h2>
                    <span>WORK-IN-PROCESS</span><br></br>
                    <p>STAY TUNED!</p>
                </section>
                <section className={styles.box3}>
                    <h2>Methods</h2>
                </section>
            </div>
        </body>
    </>
);

