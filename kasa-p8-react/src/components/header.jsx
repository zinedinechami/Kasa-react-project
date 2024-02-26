import kasa_logo from "../assets/kasa_logo.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <img src={kasa_logo} alt="kasa_logo" />
        <nav>
          <NavLink to="/Acceuil">Accueil</NavLink>
          <NavLink to="/Propos">A Propos</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
