import { getImgUrl } from "../../utils";
import styles from './Hero.module.css';
import cv from "../../assets/cv"


function Hero() {
    return(
        <section className={styles.containers}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I&apos;m Sneha</h1>
                <p className={styles.description}>I specialize in crafting engaging and responsive user interfaces using HTML, CSS, JavaScript, and React.js. My academic background and project experience have equipped me with a solid understanding of web development principles and best practices.
                </p>
                <a className={styles.contactBtn} href={cv} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <img className={styles.heroImg} src={getImgUrl("hero/heroImage.png")} alt="Hero Png" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}


export {Hero};