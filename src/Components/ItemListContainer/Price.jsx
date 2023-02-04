import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Price = ({ precio, descuento }) => {
  if (descuento === 0) {
    return (
      <h6 className="text-center mt-4">
        <b>
          <FaDollarSign /> {precio.toLocaleString("es-Ar")}
        </b>
      </h6>
    );
  } else {
    let productWithDiscount = precio -((descuento / 100) * precio);
    return (
      <div className="row">
        <div className="col-6 d-flex  justify-content-end">
          <h6 className="text-center mt-4 text-decoration-line-through text-secondary">
            <b>
              <FaDollarSign /> {precio.toLocaleString("es-Ar")}
            </b>
          </h6>
        </div>
        <div className="col-6  d-flex  justify-content-start">
        <h6 className="text-center mt-4">
            <b>
              <FaDollarSign /> {productWithDiscount.toLocaleString("es-Ar")}
            </b>
          </h6>
        </div>
      </div>
    );
  }
};

export default Price;
