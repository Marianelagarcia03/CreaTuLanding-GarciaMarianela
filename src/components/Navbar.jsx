import logo from "../assets/logo.png"
import { Carrito } from "./Carrito"

export const Navbar  = () => (
    <>
    <nav className="navBar">
    <img src={logo} alt="" />
    <ul>
        <li><a href="">Inicio</a></li>
        <li><a href="">Bebidas</a></li>
        <li><a href="">Contacto</a></li>
    </ul>
    <Carrito/>
    </nav>
    </>
)