import logo from "../assets/logo.png";
import { Carrito } from "./Carrito";
import { NavLink } from "react-router-dom";
import data from "../data/productos.json";

const category = data.map((prod) => prod.categoria);
const unicacategoria = new Set(category);

export const NavBar = () => (
  <nav className="navBar">
    <img src={logo} alt="Logo" className="logo" />
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>

      {[...unicacategoria].map((categoria) => (
        <li key={categoria}>
          <NavLink to={`/category/${categoria}`} >
            {categoria}
          </NavLink>
        </li>
      ))}

      <li>
        <NavLink to="/contact" >
          Contacto
        </NavLink>
      </li>
    </ul>

    <Carrito />
  </nav>
);
