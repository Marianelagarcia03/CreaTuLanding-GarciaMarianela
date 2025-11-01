import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <img src={logo} alt="Logo" className="logo" />

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/category/Bebidas">Bebidas</NavLink>
        </li>
        <li>
          <NavLink to="/category/Combos">Combos</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};
