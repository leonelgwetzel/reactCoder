import React, { useState } from "react";
import { AiFillCreditCard, AiOutlineClear } from "react-icons/ai";
import FormInput from "./FormInput";

const CartCheckout = ({ getTotalPriceInCart, clearCart, handleCheckout }) => {
  let totalCartPrice = getTotalPriceInCart();

  const [uData, setUData] = useState({
    nombre: "",
    email: "",
    celular: "",
  });

  const onInputChange = (e) => {
    let newState = { ...uData };
    newState[e.target.name] = e.target.value;
    setUData(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckout(uData);
  };

  return (
    <>
      <div className="row m-2 border-secondary p-2 py-4 border rounded">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-sm-12 col-md-6">
            <FormInput
              type="text"
              value={uData.nombre}
              name="nombre"
              onChange={onInputChange}
              label="nombre"
              uData={uData}
            />
            <FormInput
              type="email"
              value={uData.email}
              name="email"
              onChange={onInputChange}
              label="email"
              uData={uData}
            />
            <FormInput
              type="phone"
              value={uData.celular}
              name="celular"
              onChange={onInputChange}
              label="celular"
              uData={uData}
            />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-capitalize mb-4">
              Importe total: $<b>{totalCartPrice.toLocaleString("es-Ar")}</b>
            </h5>
            <button
              type="button"
              onClick={clearCart}
              className="btn btn-outline-success w-75 p-2"
            >
              <AiOutlineClear /> Vaciar Carrito
            </button>
            <button className="btn btn-dark w-75 mt-2 p-2" type="submit">
              <AiFillCreditCard /> Finalizar Compra
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CartCheckout;
