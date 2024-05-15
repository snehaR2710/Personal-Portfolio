import { getImgUrl } from "../../utils";
import styles from './Hero.module.css';


function Hero() {
    return(
        <section className={styles.containers}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I&apos;m Sneha</h1>
                <p className={styles.description}>I am a Frontend Developer using React. 
                   Reach out if you&apos;d like to know more!
                </p>
                <a className={styles.contactBtn} href="mailto:ranisneha599@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImgUrl("hero/heroImage.png")} alt="Hero Png" />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}


export {Hero};