import Footer from "../components/footer";
import Carrousel from "../components/carrousel";
import Collapse from "../components/collapse";
import Profile from "../components/profile";
import Tag from "../components/tag";
import Ratings from "../components/rating";
import database from "../database.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function FicheLogement() {
  const { id } = useParams();

  const findLogement = (id) => {
    return database.find((findObject) => findObject.id === id);
  };
  const logement = findLogement(id);

  const [data, fetchData] = useState(logement);

  useEffect(() => {
    fetchData(database.find((findObject) => findObject.id === id));
  }, [data, id]);

  console.log(data);

  return (
    <>
      <div className="logement">
        <Carrousel pictures={data?.pictures} />

        <div className="profile_ratings">
          <Profile
            profile_name={data?.host?.name}
            profile_img={data?.host?.picture}
          />
          <Ratings rating={data?.rating} />
        </div>
        <div className="logement_info">
          <div className="logement_info--titles">
            <h1 className="logement_title">{data?.title}</h1>
            <h2 className="logement_location">{data?.location}</h2>
          </div>
        </div>

        <div className="logement_tag">
          {data?.tags.map((tag, index) => {
            return <Tag key={index} tag_name={tag} />;
          })}
        </div>
        <div className="logement_collapse">
          <Collapse title={"Description"} content={data?.description} />

          <Collapse title={"Equipement"} content={data?.equipments} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;

// you are going to map directly inside, the components and add the id key directly here as a key, use variable id
