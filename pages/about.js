import styles from '../styles/about.module.css';


export default () => (
    <div className="container">
        <div className="row">
            <div className="col-6 justify-content-center">
                <div className={styles.text}>
                    <h2>About Me</h2>
                    <h5>Tech enthusiast with a passion for making functional humanized interfaces.</h5><br></br>
                    <p>
                        Passionate about realizing research into interactive user interfaces.
                        Motivated by making the best possible user experience from a perspective that is both considerate and inclusive.
                        Curious and eager to learn by following the HTI field to get inspiration for new tools and techniques.
                        Good understanding of user centered design processes.
                    </p>
                </div>
            </div>
            <div className="col-6 justify-content-center">
                <div className={styles.image}>

                </div>
            </div>
        </div>
    </div >
);