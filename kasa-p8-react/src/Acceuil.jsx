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

export default Acceuil;

const json_database = "./database.json";
const dummmy_json = "https:/jsonplaceholder.typicode.com";

const accueil_section = document.querySelector(".accueil__location--container");

console.log(accueil_section);

fetch(dummmy_json)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
