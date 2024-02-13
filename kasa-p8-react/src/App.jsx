import "./style.css";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import kasa_logo from "./assets/kasa_logo.png";
import Acceuil from "./Acceuil.jsx";
import A_Propos from "./A_Propos.jsx";
import Footer from "./components/footer.jsx";
import FicheLogement from "./Fiche_Logement.jsx";

// creation du routeur
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "Acceuil",
        element: <Acceuil />,
      },
      {
        path: "Propos",
        element: <A_Propos />,
      },
      // TODO: fix error handling for id route
      {
        path: ":id",
        element: <FicheLogement />,
        errorElement: <PageError />,
      },
    ],
  },
]);

// component root, header de la page contenant les liens des routes
function Root() {
  return (
    <>
      <header>
        <img src={kasa_logo} alt="kasa_logo" />
        <nav>
          <NavLink to="/Acceuil">Accueil</NavLink>
          <NavLink to="/Propos">A propos</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

function PageError() {
  return (
    <>
      <Root />
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

// affichage du routeur dans l'application avec router providor
function App() {
  return <RouterProvider router={router} />;
}

export default App;
