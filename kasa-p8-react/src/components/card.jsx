import database from "../database.json";

function Card() {
  return (
    <>
      {database.map((database) => {
        return (
          <a href={database.id}>
            <article key={database.id}>
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
