import Footer from "./components/footer";
import Carrousel from "./components/carrousel";
// import database from "./database.json";
import { useParams } from "react-router-dom";

function FicheLogement() {
  // variable using params hook that returns the route url
  const params = useParams();
  console.log(params);

  return (
    <>
      <Carrousel />
      <h2>Id is {params.id}</h2>
      <Footer />
    </>
  );
}

export default FicheLogement;
