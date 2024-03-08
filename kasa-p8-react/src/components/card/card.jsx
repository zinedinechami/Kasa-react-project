import database from "../../database.json";
import "./card.css";

export default function Card() {
  return (
    <>
      {database.map((data) => {
        return (
          <a key={data.id} href={"logement/" + data.id}>
            <article>
              <img src={data.cover} alt="" />
              <p>{data.title}</p>
            </article>
          </a>
        );
      })}
    </>
  );
}
