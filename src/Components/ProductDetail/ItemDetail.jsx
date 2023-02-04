import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, onAddToCart, isInCart, stockUpdated }) => {

  function handleOnAdd(count) {
    onAddToCart(count);
  }

  return (
    <div className="container my-2">
      <div className="row mt-5 d-flex align-items-center">
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center">
          <img
            src={product.img}
            width={350}
            className="img-fluid"
            alt={product.nombre}
          />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center">
          <h3 className="my-2 text-uppercase pt-4">{product.nombre}</h3>
          <em className="text-secondary">{product.descripcion}</em>
          <b className="mt-5 h3">$ { product.precio.toLocaleString("es-Ar")}</b>
          {isInCart ? (
            <Link className="nav-link" to="/cart">
              <span className="btn btn-outline-dark mt-2">Ir al carrito</span>
            </Link>
          ) : (
            <ItemCount onAddToCart={handleOnAdd} stock={stockUpdated} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
