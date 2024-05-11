import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Acceuil from "./pages/acceuil/Acceuil.jsx";
import A_Propos from "./pages/a_propos/A_Propos.jsx";
import FicheLogement from "./pages/fiche_logement/Fiche_Logement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
  },

  {
    path: "Propos",
    element: <A_Propos />,
  },
  {
    path: "logement/:id",
    element: <FicheLogement />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
