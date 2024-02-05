function Card() {
  <>
    {database.map((database) => {
      return (
        <article>
          <img src={database.cover} alt="" />
          <p>{database.title}</p>
        </article>
      );
    })}
  </>;
}

export default Card;
