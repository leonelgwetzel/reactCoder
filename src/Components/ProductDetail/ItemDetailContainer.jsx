import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../../services/firebase";
import ItemDetail from "./ItemDetail";
import { cartContext, CartProvider } from "../../storage/cartContext";
import { FaCity } from "react-icons/fa";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isInCart, setIsInCart] = useState(false);

  let params = useParams();

  const { addToCart, isItemInCart, cart } = useContext(cartContext);

  //Manejador addToCart
  function handleAddToCart(count) {

    const productAndCount = { ...product, count: count };
    addToCart(productAndCount);
    setIsInCart(true);

  }

  function checkStock(){
    let itemInCart = cart.find(item => item.id === product.id);
    let stockUpdated = product.stock;
    if(itemInCart){
      stockUpdated = product.stock - itemInCart.count
    }
    return stockUpdated;
  }

  useEffect(() => {
    obtenerProducto(params.itemid)
      .then((respuesta) => setProduct(respuesta))
      .catch((err) => alert(err));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

  }, []);


  useEffect(()=>{
    let isInResult = isItemInCart(product.id);
    if(isInResult){
      setIsInCart(true);
    }
  },[product])


  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <ItemDetail
        stockUpdated={checkStock()}
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
        product={product}
      />
    );
  }
};

export default ItemDetailContainer;
