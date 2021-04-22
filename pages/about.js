import styles from '../styles/about.module.css';


export default () => (
    <div className="container">
        <div className="row">
            <div className="col-6 justify-content-center">
                <div className={styles.text}>
                    <h2>About Me</h2>
                    <h5>Tech enthusiast with a passion for making better experiences for people.</h5><br></br>
                    <p>
                        I am passionate about realizing user research into experiences that are both considerate and inclusive from a people perspective.
                        I consider myself to be a "tech enthusiast", curious and eager to learn and get inspiration for new tools and techniques by following the HCI field and the technology advances for both hardware and software.
                        With a technical HCI educational background at the master's level, I have a good understanding of the user-centered design process.
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