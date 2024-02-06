import a_propos_header_img from "./assets/a_propos_header_img.png";
import Banner from "./components/banner";
import Footer from "./components/footer";

function A_Propos() {
  return (
    <>
      <Banner banner_image={a_propos_header_img} />
      <Footer />
    </>
  );
}

// TODO: integrate banner component, create collapse component

export default A_Propos;
