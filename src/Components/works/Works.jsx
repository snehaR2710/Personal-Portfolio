import works from "../../Data/works.json";
import { WorkCard } from "./WorkCard/WorkCard";
import style from "./Works.module.css";

function Works() {
  return (
    <section id="work" className={style.container}>
      <h2 className={style.title}>Projects</h2>
      <div className={style.projects}>
        {works.map((work, id) => {
          console.log(work);
          return <WorkCard key={id} works={work} />;
        })}
      </div>
    </section>
  );
}

export { Works };
