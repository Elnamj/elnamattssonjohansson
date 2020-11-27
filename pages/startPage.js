import styles from '../styles/startPage.module.css';

export default () => (
    <>
        <div id={styles.body}>
            <div id={styles.main}>
                <video autoplay loop className={styles.fullscreen}>
                    <source src="../public/start.mp4" type="video/mp4"></source>
                    <p>Your browser cannot play the provided video file. Try Safari if possible.</p>
                </video>
                <div id={styles.box2}>
                    <div id={styles.name}>
                        Elna Mattsson Johansson
                    </div>
                </div>

                <div id={styles.box3}>
                    <div id={styles.text}>
                        FRONT-END DEVELOPER <br></br>UX DESIGNER
                    </div>
                </div>
            </div>
        </div>
    </>
);


