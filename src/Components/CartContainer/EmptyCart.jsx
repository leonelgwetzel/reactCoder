import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const EmptyCart = () => {
  return (
    <div className="container">
      <Link className="nav-link mt-4" to="/">
        <span className="border-bottom border-end p-2 rounded shadow"><HiOutlineArrowNarrowLeft/> Volver a la tienda</span>
      </Link>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
          <img
            width={200}
            src="https://cdn-icons-png.flaticon.com/512/616/616519.png"
            alt=""
          />
          <h3 className="mt-4">El carrito está vacio....</h3>
          <p className="mt-2 mb-4">
            <em className="text-secondary">
              Por favor agregá productos al carrito desde la tienda.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
