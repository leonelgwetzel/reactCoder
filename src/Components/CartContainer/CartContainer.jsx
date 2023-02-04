import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import EmptyCart from "./EmptyCart";
import ItemCart from "./ItemCart";
import { BsTrash } from "react-icons/bs";
import { createOrder } from "../../services/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import CartCheckout from "./CartCheckout";
import Footer from "../Footer/Footer";
import styles from "./cartTable.module.css";

const CartContainer = () => {
  const { cart, removeItem, clearCart, getTotalPriceInCart } =
    useContext(cartContext);

  const navigate = useNavigate();

  async function handleCheckout(uData) {
    const items = cart.map(({ id, precio, nombre, count }) => ({
      id,
      precio,
      nombre,
      count,
    }));
    const order = {
      cliente: uData,
      items: items,
      total: getTotalPriceInCart(),
      date: new Date(),
    };
    createOrder(order).then((id) => {
      const MySwal = withReactContent(Swal);
      Swal.fire({
        title: "Compra realizada con exito!",
        text: `El ID de tu compra es ${id}`,
        icon: "success",
        confirmButtonText: "Confirmar",
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart();
          navigate(`/thank-you/${id}`);
        }
      });
    });
  }

  if (cart.length > 0) {
    return (
      <>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <table className="table align-items-center text-uppercase text-center">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Cantidad</th>
                    <th>Img</th>
                    <th>Producto</th>
                    <th>Precio U.</th>
                    <th>Precio T.</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((p) => {
                    return (
                      <ItemCart
                        key={p.id}
                        product={p}
                        deleteProduct={removeItem}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <CartCheckout
            getTotalPriceInCart={getTotalPriceInCart}
            clearCart={clearCart}
            handleCheckout={handleCheckout}
          />
        </div>
        <Footer />
      </>
    );
  } else {
    return <EmptyCart />;
  }
};

export default CartContainer;
