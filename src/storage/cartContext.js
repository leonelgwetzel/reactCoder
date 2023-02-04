import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  //Add Product To Cart
  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);
    if (isInCart !== -1) {
      newCart[isInCart].count += item.count;
      setCart(newCart);
    } else {
      newCart.push(item);
      setCart(newCart);
    }
  }

  //Remove Product of Cart
  function removeItem(itemId) {
    let newCart = cart.map((item) => item);
    let itemIndex = newCart.findIndex((i) => i.id === itemId);
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  }

  //Clear Cart
  function clearCart() {
    setCart([]);
  }

  //Total Items In Cart
  function getTotalItemsInCart() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count;
    }
    return total;
  }

  //Total Price In Cart
  function getTotalPriceInCart() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count * cart[i].precio;
    }
    return total;
  }

  //Chequear si existe el producto en el carrito
  function isItemInCart(itemId){
    let newCart = cart.map((item) => item);
    let includes = newCart.filter(item => item.id === itemId);
    if(includes.length>0){return true}else{return false}
  }

  return (
    <cartContext.Provider
      value={{ cart, addToCart, getTotalItemsInCart, removeItem, clearCart, getTotalPriceInCart, isItemInCart }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };
