import React from "react";
import ItemButton from "./ItemButton";
import {FaDollarSign} from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 p-2">
      <div className="card border-secondary h-100">
        <div className="card-header bg-dark text-white">
          <h4 className="text-uppercase text-center mt-3">{product.nombre}</h4>
        </div>
        <div className="card-body d-flex flex-column align-content-center justify-content-end">
          <img
            width='100%'
            className="mx-auto px-5"
            src={product.img}
            alt={product.nombre}
          />
          <h5 className="text-center mt-4">
            <b><FaDollarSign/> {product.precio}</b>
          </h5>
          <div className="mx-auto">
            <Link to={`/detalle/${product.id}`}>
              <ItemButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
