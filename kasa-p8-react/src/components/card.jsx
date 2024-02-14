import database from "../database.json";

function Card() {
  return (
    <>
      {/* methode map qui itere a travers les tableau data base, et retourne les informations appelée */}
      {database.map((database) => {
        return (
          <a key={database.id} href={database.id}>
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
