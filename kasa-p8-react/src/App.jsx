// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Children } from "react";
import "./style.css";
import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import kasa_logo from "./assets/kasa_logo.png";
import kasa_logo_footer from "./assets/kasa_logo_footer.png";
// import acceuil_header_img from "./assets/accueil_header_img.png";
import Acceuil from "./Acceuil.jsx";
import PageError from "./Page_Error.jsx";

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
        element: <div>A propos</div>,
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
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <div className="footer__content">
          <img src={kasa_logo_footer} alt="kasa_logo_footer" />
          <p> &copy; 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

// affichage du routeur dans l'application avec router providor
function App() {
  return <RouterProvider router={router} />;
}

export default App;
