import React from "react";
import ItemButton from "./ItemButton";
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";
import Price from "./Price";

const ProductCard = ({ product }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 p-2">
      <div className="card border-secondary h-100">
      {
            product.descuento > 0 && (
              <b className="badge bg-dark text-white w-50 m-2 shadow">{product.descuento}% OFF</b>
            )
          }
        <div className="card-body d-flex flex-column align-content-center justify-content-end">
          <img
            width="95%"
            className="mx-auto px-5"
            src={product.img}
            alt={product.nombre}
          />
          <h6 className="text-uppercase text-center mt-4">{product.nombre}</h6>
          <hr />

          <Price precio={product.precio} descuento={product.descuento}/>
        
          <em className="text-center text-secondary">
            <BsBox /> Stock: {product.stock} u.
          </em>
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
