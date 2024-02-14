import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
import Collapse from "./components/collapse";
import Profile from "./components/profile";
import Tag from "./components/tag";
// import database from "./database.json";
import { useParams } from "react-router-dom";

function FicheLogement() {
  // variable using params hook that returns the route url
  const params = useParams();
  console.log(params);

  return (
    <>
      <div className="logement">
        <Carrousel />
        <h1 className="logement_title">Title</h1>
        <h2 className="logement_location">Paris, Ile de France</h2>
        {/* <h2>Id is {params.id}</h2> */}
        <Profile />
        <Tag />
        <div className="logement_collapse">
          <Collapse />
          <Collapse />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;
