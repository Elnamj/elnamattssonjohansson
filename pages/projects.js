import styles from '../styles/projects.module.css';

export default () => (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <h1 className={styles.title}>Projects</h1>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    <a href="/tinderfy" className={styles.a}>
                        <div className={styles.image}>
                            <div className={styles.img1}></div>
                        </div>
                        <div className={styles.text}>
                            <h2>Tinderfy</h2>
                            <p>A fun and creative way for discovering new music. <br></br>Combining Sporify and Tinder into one.</p>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a href="/technotion" className={styles.a}>
                        <div className={styles.image}>
                            <div className={styles.img4}></div>
                        </div>
                        <div className={styles.text}>
                            <h2>Technotion</h2>
                            <p>A platform to inspire women's interest in technology. </p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    <a href="/headsUp2.0" className={styles.a}>
                        <div className={styles.image}>
                            <div className={styles.img3}></div>
                        </div>
                        <div className={styles.text}>
                            <h2>HeadsUp 2.0</h2>
                            <p>Improves the HeadsUp game through haptics. </p>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a href="/korpo" className={styles.a}>
                        <div className={styles.image}>
                            <div className={styles.img2}></div>
                        </div>
                        <div className={styles.text}>
                            <h2>Korpo</h2>
                            <p>Emotion technology, improving remote meetings. </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
);
