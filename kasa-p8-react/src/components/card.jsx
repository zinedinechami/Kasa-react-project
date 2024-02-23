import database from "../database.json";

function Card() {
  return (
    <>
      {database.map((database) => {
        return (
          <a key={database.id} href={"logement/" + database.id}>
            <article>
              <img src={database.cover} alt="" />
              <p>{database.title}</p>
            </article>
          </a>
        );
      })}
    </>
  );
}

export default Card;
