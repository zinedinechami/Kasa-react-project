import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
import Collapse from "./components/collapse";
import Profile from "./components/profile";
import Tag from "./components/tag";
import Ratings from "./components/rating";
import database from "./database.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function FicheLogement() {
  const { id } = useParams();
  // on accede au id, recupé par le hook params qui recupere la route ":id"

  const [data, fetchData] = useState("");

  // TODO: explication du hook useEffect, et de la methode find
  useEffect(() => {
    // condition, si database.json est present, on stock dans une variable
    // la methode find, prenant en parametre d, fonction fléchée pour recuper l'id du database correspondant a l'id de la route
    if (database) {
      fetchData(database.find((d) => d.id === id));
      // const displayFind = database.find((d) => d.id === id);
    }
  }, [id]);

  console.log(data);

  // need to wait for component to load to operate the use effect, or it bugs out
  // need to access info.pictures array too

  // ! Problem within array and objects access within json file

  const pictures_problem = [data.pictures];
  console.log(pictures_problem);

  return (
    <>
      <div className="logement">
        <Carrousel imageUrl={data.pictures} />
        <div className="profile_ratings">
          <Profile profile_name={"zinedine"} profile_img={data.cover} />
          <Ratings />
        </div>
        <div className="logement_info">
          <div className="logement_info--titles">
            <h1 className="logement_title">{data.title}</h1>
            <h2 className="logement_location">{data.location}</h2>
          </div>
        </div>
        <div className="logement_tag">
          <Tag />
          <Tag />
        </div>
        <div className="logement_collapse">
          <Collapse title={"Description"} content={data.description} />
          <Collapse title={"Equipement"} content={data.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;

// you are going to map directly inside, the components and add the id key directly here as a key, use variable id
