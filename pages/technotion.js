import styles from '../styles/technotion.module.css';


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
                    <iframe src="https://drive.google.com/file/d/12UrmQWS11_ZpskeB-hUqDkiBzijMg0Ju/preview" width="640" height="400"></iframe>
                    <p>If the video does not work, open in another browser e.g. Chrome.</p>
                </section>
                <section className={styles.box3}>
                    <h2>Methods</h2>
                </section>
            </div>
        </body>
    </>
);

