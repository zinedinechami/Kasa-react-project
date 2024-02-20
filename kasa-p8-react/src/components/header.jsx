import { NavLink } from "react-router-dom";
import kasa_logo from "../assets/kasa_logo.png";
import { Outlet } from "react-router-dom";

function Header() {
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

export default Header;
