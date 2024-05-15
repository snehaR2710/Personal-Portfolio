import { getImgUrl } from "../../utils";
import styles from "./Contact.module.css";


function Contact() {
    return(
        <footer id="contact" className={styles.container}>

        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImgUrl("contact/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:ranisneha599@gmail.com" >ranisneha599@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImgUrl("contact/githubIcon.png")} alt="Email Icon" />
                <a href="https://wwwgithub.com/snehaR2710" target="_blank" rel="noreferrer">github.com/snehaR2710</a>
            </li>

            <li className={styles.link}>
                <img src={getImgUrl("contact/linkedinIcon.png")} alt="Email Icon" />
                <a href="https://www.linkedin.com/in/sneha-rani-289919254/" target="_blank" rel="noreferrer">linkedin.com/sneha-rani</a>
            </li>
        </ul>

        </footer>
    )
}



export {Contact};