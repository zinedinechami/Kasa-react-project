import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Acceuil from "./pages/Acceuil.jsx";
import A_Propos from "./pages/A_Propos.jsx";
import FicheLogement from "./pages/Fiche_Logement.jsx";
import Header from "./components/header.jsx";
import PageError from "./pages/Page_Error.jsx";

// creation du routeur version v6 de react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
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
      {
        path: "logement/:id",
        element: <FicheLogement />,
      },
    ],
  },
]);

// affichage du routeur et des components compris dedans, dans l'application avec router providor
function App() {
  return <RouterProvider router={router} />;
}

export default App;
