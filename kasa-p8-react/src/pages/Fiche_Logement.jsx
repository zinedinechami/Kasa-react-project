import Footer from "../components/footer";
import Carrousel from "../components/carrousel";
import Collapse from "../components/collapse";
import Profile from "../components/profile";
import Tag from "../components/tag";
import Ratings from "../components/rating";
import database from "../database.json";
import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

function FicheLogement() {
  const { id } = useParams();

  function findLogement(id) {
    return database.find((findObject) => findObject.id === id);
  }

  const logement = findLogement(id);

  console.log(logement);
  return (
    <>
      <div className="logement">
        <Carrousel pictures={logement.pictures} />

        <div className="profile_ratings">
          <Profile
            profile_name={logement.host.name}
            profile_img={logement.host.picture}
          />
          <Ratings rating={logement.rating} />
        </div>
        <div className="logement_info">
          <div className="logement_info--titles">
            <h1 className="logement_title">{logement.title}</h1>
            <h2 className="logement_location">{logement.location}</h2>
          </div>
        </div>

        <div className="logement_tag">
          {logement.tags.map((tag, index) => {
            return <Tag key={index} tag_name={tag} />;
          })}
        </div>
        <div className="logement_collapse">
          <Collapse title={"Description"} content={logement.description} />

          <Collapse title={"Equipement"} content={logement.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;

// you are going to map directly inside, the components and add the id key directly here as a key, use variable id
