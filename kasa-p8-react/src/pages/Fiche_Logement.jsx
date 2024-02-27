import Footer from "../components/footer";
import Carrousel from "../components/carrousel";
import Collapse from "../components/collapse";
import Profile from "../components/profile/profile.jsx";
import Tag from "../components/tag";
import Ratings from "../components/rating";
import database from "../database.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function FicheLogement() {
  const { id } = useParams();

  // use state, use effect fetch
  const [data, fetchData] = useState(null);

  useEffect(() => {
    fetchData(database.find((findObject) => findObject.id === id));
  }, [data, id]);

  // le state commence avec un valeur absente intentionelle, quand le state est mis a jour dans le useEffect
  // on render les component a condition que data a une valeur
  return (
    <>
      <div className="logement">
        {data && <Carrousel pictures={data?.pictures} />}
        <div className="logement_flex">
          <div className="logement_info">
            <div className="logement_info--titles">
              <h1 className="logement_title">{data?.title}</h1>
              <h2 className="logement_location">{data?.location}</h2>
            </div>
          </div>
          <div className="logement_tag">
            {data &&
              data?.tags.map((tag, index) => {
                return <Tag key={index} tag_name={tag} />;
              })}
          </div>
          <div className="profile_ratings">
            {data && (
              <Profile
                profile_name={data?.host?.name}
                profile_img={data?.host?.picture}
              />
            )}
            {data && <Ratings rating={data?.rating} />}
          </div>
        </div>

        <div className="logement_collapse">
          {data && (
            <Collapse title={"Description"} content={data?.description} />
          )}

          {data && <Collapse title={"Equipement"} content={data?.equipments} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;

// you are going to map directly inside, the components and add the id key directly here as a key, use variable id
