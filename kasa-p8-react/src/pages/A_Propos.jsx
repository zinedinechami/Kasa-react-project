import a_propos_header_img from "../assets/a_propos_header_img.png";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Collapse from "../components/collapse/collapse";

export default function A_Propos() {
  return (
    <>
      <Banner banner_image={a_propos_header_img} />
      <div className="a_propos_content">
        {/* collapse 1 */}
        <div className="a_propos_content-container">
          <Collapse
            title={"Fiabilité"}
            content={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            }
          />
        </div>
        {/* collapse 2 */}
        <div className="a_propos_content-container">
          <Collapse
            title={"Respect"}
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
        </div>
        {/* collapse 3 */}
        <div className="a_propos_content-container">
          <Collapse
            title={"Service"}
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
        </div>
        {/* collapse 4 */}
        <div className="a_propos_content-container">
          <Collapse
            title={"Sécurité"}
            content={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
