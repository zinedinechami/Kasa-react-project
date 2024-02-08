import database from "../database.json";

function Card() {
  return (
    <>
      {database.map((database) => {
        return (
          <article key={database.id}>
            <img src={database.cover} alt="" />
            <p>{database.title}</p>
          </article>
        );
      })}
    </>
  );
}

export default Card;
