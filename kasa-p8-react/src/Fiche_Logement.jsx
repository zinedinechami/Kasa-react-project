import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
import Collapse from "./components/collapse";
import Profile from "./components/profile";
import Tag from "./components/tag";
// import database from "./database.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function FicheLogement() {
  // variable using params hook that returns the route url
  const params = useParams();
  // on accede au id, recupé par le hook params qui recupere la route ":id"
  const id = [params.id];
  console.log(params);

  useEffect(() => {});

  return (
    <>
      <div className="logement">
        <Carrousel />
        <div className="logement_info">
          <h1 className="logement_title">Title</h1>
          <h2 className="logement_location">Paris, Ile de France</h2>
          <Profile />
        </div>
        <h2>Id is {id}</h2>
        <div className="logement_tag">
          <Tag />
          <Tag />
        </div>
        <div className="logement_collapse">
          <Collapse title={"Description"} />
          <Collapse title={"Equipement"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

// add props in all components, and retreive database id info into component props

export default FicheLogement;
