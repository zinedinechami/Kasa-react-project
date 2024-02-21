import acceuil_header_img from "../assets/accueil_header_img.png";
import Card from "../components/card";
import Banner from "../components/banner";
import Footer from "../components/footer";

function Acceuil() {
  return (
    <>
      <Banner
        banner_image={acceuil_header_img}
        banner_title={"Chez Vous, partout et ailleurs"}
      />
      <section className="accueil__location">
        <div className="accueil__location--container">
          <Card />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Acceuil;
