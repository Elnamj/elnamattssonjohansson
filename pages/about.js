import styles from '../styles/about.module.css';


export default () => (
    <div className="container">
        <div className="row">
            <div className="col-6 justify-content-center">
                <div className={styles.text}>
                    <h2>About Me</h2>
                    <h5>Tech enthusiast with a passion for making humanized interfaces.</h5><br></br>
                    <p>
                        I am passionate about realizing user research into interactive user interfaces, where I strive to make the best user experience with the aim to make it considerate and inclusive.
                        I consider myself to be a "tech enthusiast", curious and eager to learn and get inspiration for new tools and techniques by following the HTI field and the technology advances for both hardware and software.
                        With a technical HTI educational background at the master's level, I have good understanding of the user centered design process.
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