import carrito from "../assets/carritomorado.png";
import { useState } from "react";

export const Carrito = () => {
  const [contador, setContador] = useState(0);
  return (
    <div className="navCarrito">
      <img src={carrito} alt="" />
      <span>{contador}</span>
    </div>
  );
};
