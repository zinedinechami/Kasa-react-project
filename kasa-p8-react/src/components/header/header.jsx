import kasa_logo from "./kasa_logo.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <img src={kasa_logo} alt="kasa_logo" />
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/Propos">A Propos</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
