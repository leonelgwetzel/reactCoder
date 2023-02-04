import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center mt-5">
          <img width={200} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Noto_Emoji_Oreo_1f914.svg/2048px-Noto_Emoji_Oreo_1f914.svg.png" alt="" />
          <h2 className="mt-4">El carrito está vacio....</h2>
          <h5 className="mt-2 mb-4">
            <em className="text-secondary">Por favor agregá productos al carrito desde la tienda</em>
          </h5>
          <Link className="nav-link" to="/">
            <span className="btn btn-outline-dark mt-2">Ir a la tienda</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
