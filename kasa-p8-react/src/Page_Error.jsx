import Header from "./components/header";
import Footer from "./components/footer";

function PageError() {
  return (
    <>
      <Header />
      <div className="error_page">
        <h1>404</h1>

        <h2>Oups! La page que vous demandez n&#39; existe pas</h2>
        <a href="/Acceuil">
          <p>Retourner sur la page d&#39; accueil</p>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default PageError;
