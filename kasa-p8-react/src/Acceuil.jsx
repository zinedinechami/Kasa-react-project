import acceuil_header_img from "./assets/accueil_header_img.png";

function Acceuil() {
  return (
    <>
      <div className="acceuil__header">
        <img src={acceuil_header_img} alt="" />
        <h1>Chez Vous, partout et ailleurs</h1>{" "}
      </div>
      <div className="accueil__location">
        <section></section>
      </div>
    </>
  );
}

export default Acceuil;
