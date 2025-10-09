import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/productos.json";
import ProductDetail from "../views/ProductDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    })
      .then((response) => {
        const foundProduct = response.find((p) => p.id === Number(id));
        if (foundProduct) setProduct(foundProduct);
        else alert("Producto inexistente");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading">Cargando detalle...</p>;

  return <ProductDetail product={product} />;
};

export default ItemDetailContainer;
