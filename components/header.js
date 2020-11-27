import Link from 'next/link';
import styles from '../styles/header.module.css';

export default () => (
    <div id={styles.menu}>
        <ul>
            <li>
                <Link href="#">
                    <a>HOME</a>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <a>ABOUT</a>
                </Link>
            </li>
            <li>
                <Link href="#projects">
                    <a>PROJECTS</a>
                </Link>
            </li>
            <li>
                <Link href="#contact">
                    <a>CONTACT</a>
                </Link>
            </li>
        </ul>
    </div>
);