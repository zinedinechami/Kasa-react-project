import Footer from "../../components/footer/footer.jsx";
import Carrousel from "../../components/carrousel/carrousel.jsx";
import Collapse from "../../components/collapse/collapse.jsx";
import Profile from "../../components/profile/profile.jsx";
import Tag from "../../components/tag/tag.jsx";
import Ratings from "../../components/rating/rating.jsx";
import PageError from "../page_error/Page_Error.jsx";
import Header from "../../components/header/header.jsx";
import database from "../../database.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./fiche_logement.css";

export default function FicheLogement() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(database.find((findObject) => findObject.id === id));
  }, [data, id]);

  return (
    <>
      <Header />
      {data === undefined && <PageError />}
      {data && (
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

            {data && (
              <Collapse title={"Equipement"} content={data?.equipments} />
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
