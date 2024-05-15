import style from "./WorkCard.module.css";
import { getImgUrl } from "../../../utils";

export function WorkCard({ works }) {
  console.log("works", works);

  return ( 
    <div className={style.container}>
      <img src={getImgUrl(works.imageSrc)} alt="" className={style.image} />
      <h3 className={style.title}>{works.title}</h3>
      <p className={style.description}>{works.description}</p>

      <ul className={style.skills}>
         {works.skills && works.skills.map((skill, id) => {
          console.log("skills", skill);
          return (
            <li key={id} className={style.skill}>
              {skill}
            </li>
          );
        })}
      </ul>

      <div className={style.links}>
        <a href={works.demo} className={style.link}>
          Demo
        </a>
        <a href={works.source} className={style.link}>
          Source
        </a>
      </div>
    </div>
  );
}
