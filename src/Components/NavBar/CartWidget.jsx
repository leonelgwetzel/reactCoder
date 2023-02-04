import React,  {useContext, useState} from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { cartContext } from '../../storage/cartContext';

const CartWidget = () => {
  const contexto = useContext(cartContext);
  let totalItemsInCart = contexto.getTotalItemsInCart();
  return (
    <>
        <FaShoppingCart/>{
          totalItemsInCart > 0 && (<span className="badge bg-warning text-dark rounded rounded-circle">{contexto.getTotalItemsInCart()}</span>)
        }
    </>
  )
}

export default CartWidget