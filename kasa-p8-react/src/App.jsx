import "./style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Acceuil from "./pages/Acceuil.jsx";
import A_Propos from "./pages/A_Propos.jsx";
import FicheLogement from "./pages/Fiche_Logement.jsx";
import Header from "./components/header/header.jsx";
import PageError from "./pages/Page_Error.jsx";

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

export default function App() {
  return <RouterProvider router={router} />;
}
