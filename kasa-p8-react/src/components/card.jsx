function Card({ cover, title }) {
  return (
    <>
      <article>
        <img src={cover} alt="" />
        <p>{title}</p>
      </article>
    </>
  );
}

export default Card;
