const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <div className="product-detail-img">
        <img src={product.img} alt={product.nombre} />
      </div>
      <div className="product-detail-info">
        <h2>{product.nombre}</h2>
        <p>{product.detalle}</p>
        <p className="precio">Precio: ${product.precio}</p>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};
export default ProductDetail;
