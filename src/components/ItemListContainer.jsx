import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import salud from "../assets/salud.png";
import data from "../data/productos.json";
import ProductCard from "./ProductCard";

const ItemListContainer = ({ saludo }) => {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [showSaludo, setShowSaludo] = useState(true);

  useEffect(() => {
    let saludoTimer;

    if (!categoriaId) {
      setShowSaludo(true);
      saludoTimer = setTimeout(() => {
        setShowSaludo(false);
      }, 2000);
    } else {
      setShowSaludo(false);
    }

    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    }).then((response) => {
      if (!categoriaId) {
        setProducts(response);
      } else {
        const filtered = response.filter(
          (i) => i.categoria.toLowerCase() === categoriaId.toLowerCase()
        );
        setProducts(filtered);
      }
    });

    return () => clearTimeout(saludoTimer);
  }, [categoriaId]);

  return (
    <>
      {showSaludo ? (
        <div className="saludo">
          <h1>{saludo}</h1>
          <img src={salud} alt="saludo" />
        </div>
      ) : (
        <div className="product-list">
          <h2>Productos disponibles</h2>
          <div className="product-flex">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
