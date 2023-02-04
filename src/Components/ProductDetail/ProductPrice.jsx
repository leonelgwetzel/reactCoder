import React from "react";
import { FaDollarSign } from "react-icons/fa";

const ProductPrice = ({ precio, descuento }) => {
  if (descuento === 0) {
    return (
      <h5 className="text-center mt-4">
        <b>
          <FaDollarSign /> {precio.toLocaleString("es-Ar")}
        </b>
      </h5>
    );
  } else {
    let productWithDiscount = precio -((descuento / 100) * precio);
    return (
        <div className="row">
            <div className="col-12 d-flex flex-row">
            <h5 className="text-center mt-4 text-decoration-line-through text-secondary me-4">
            <b>
              <FaDollarSign /> {precio.toLocaleString("es-Ar")}
            </b>
          </h5>
          <h5 className="text-center mt-4">
            <b>
              <FaDollarSign /> {productWithDiscount.toLocaleString("es-Ar")}
            </b>
          </h5>
            </div>
        </div>
    );
  }
};

export default ProductPrice;
