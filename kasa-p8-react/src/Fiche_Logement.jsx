import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
import Collapse from "./components/collapse";
import Profile from "./components/profile";
import Tag from "./components/tag";
import database from "./database.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function FicheLogement() {
  // variable using params hook that returns the route url
  const { id } = useParams();
  // on accede au id, recupé par le hook params qui recupere la route ":id"

  // TODO: fetch database json, pass the data through jsx, use retrieved info into the props
  useEffect(() => {
    if (database) {
      const displayFind = database.find((d) => d.id === id);
      console.log(displayFind);
    }
  }, [id]);

  return (
    <>
      <div className="logement">
        <Carrousel data={database.pictures} />
        <div className="logement_info">
          <h1 className="logement_title">Title</h1>
          <h2 className="logement_location">Paris, Ile de France</h2>
        </div>
        <Profile />
        <h2>Id is {id}</h2>
        <div className="logement_tag">
          <Tag />
          <Tag />
        </div>
        <div className="logement_collapse">
          <Collapse title={"Description"} content={database.description} />
          <Collapse title={"Equipement"} />
        </div>
      </div>
      <Footer />
    </>
  );
}

// {database.map((database) => {
//   return (
//     <div key={id} id={id} className="logement_info">
//       <h1 className="logement_title">{database.title}</h1>
//       <h2 className="logement_location">{database.location}</h2>
//     </div>
//   );
// })}

export default FicheLogement;

// you are going to map directly inside, the components and add the id key directly here as a key, use variable id
