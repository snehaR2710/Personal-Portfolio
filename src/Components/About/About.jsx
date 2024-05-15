import { getImgUrl } from "../../utils";
// import { Works } from "../works/Works";
import styles from "./About.module.css";
import skills from "../../Data/skills.json";

function About() {
  return (
    <section className={styles.containers} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImgUrl("about/aboutImage.png")}
          alt="AboutPng"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImgUrl("about/serverIcon.png")} alt="Cursor Image" />
          </li>
          <div className={styles.aboutItemText}>
            {/*  with JavaScript
                            and experties in framworks like React, Node.js and */}
            <h3>Frontend Developer</h3>
            <p>
              I&apos;m skiiled frontend developer building responsive and optimized
              sites. I&apos;m a quick learner and collaborate, scalable and
              user-friendly solutions that solve real-world problems.
            </p>
          </div>
        </ul>
      </div>

      <h2 className={styles.skillstitle}>Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsImage}>
          {skills.map((skills, id) => (
            <div key={id}>
              <div>
                <img
                  className={styles.skillImageContainer}
                  src={getImgUrl(skills.imageSrc)}
                  alt={skills.title}
                />
              </div>
              <p className={styles.skillsname}>{skills.title}</p>
            </div>
          ))}
        </div>
        <ul></ul>
      </div>
    </section>
  );
}

export { About };
