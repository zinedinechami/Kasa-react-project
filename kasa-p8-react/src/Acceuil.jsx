import acceuil_header_img from "./assets/accueil_header_img.png";

function Acceuil() {
  return (
    <>
      <div className="acceuil__header">
        <img src={acceuil_header_img} alt="" />
        <h1>Chez Vous, partout et ailleurs</h1>{" "}
      </div>
      <section className="accueil__location">
        <div className="accueil__location--container">
          {/* article example */}
          <article>
            <img src={acceuil_header_img} alt="" />
            <p>dog</p>
          </article>
        </div>
      </section>
    </>
  );
}

// todo: fetch img and p from database.json

export default Acceuil;
