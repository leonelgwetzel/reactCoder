import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { BsBox } from "react-icons/bs";
import ProductPrice from "./ProductPrice";


const ItemDetail = ({ product, onAddToCart, isInCart, stockUpdated }) => {
  let productWithDiscount =
    product.precio - (product.descuento / 100) * product.precio;

  function handleOnAdd(count) {
    onAddToCart(count);
  }

  return (
    <div className="container my-2">
      <div className="row mt-5 d-flex align-items-center">
        <Link className="nav-link" to="/">
          <span className="bg-dark p-1 badge shadow">
            <HiOutlineArrowNarrowLeft />
            Volver a la tienda
          </span>
        </Link>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-center">
          <img
            src={product.img}
            width={300}
            className="img-fluid"
            alt={product.nombre}
          />
          <Link to={`/${product.cat}`}>
            <span className="badge bg-dark text-capitalize">{product.cat}</span>
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column align-items-start">
          {product.descuento > 0 && (
            <span className="badge bg-dark">{product.descuento}% OFF</span>
          )}
          <h5 className="my-2 text-uppercase pt-4">{product.nombre}</h5>
          <hr className="w-100" />
          <em className="text-secondary">{product.descripcion}</em>
          <ProductPrice precio={product.precio} descuento={product.descuento} />
          <em className="text-center text-secondary">
            <BsBox /> Stock: {product.stock} u.
          </em>
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
