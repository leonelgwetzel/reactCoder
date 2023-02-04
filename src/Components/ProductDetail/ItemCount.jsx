import React, {useState} from "react";
import { MdExposurePlus1, MdExposureNeg1, MdShoppingCart } from "react-icons/md";

const ItemCount = ({stock = 1,onAddToCart}) => {

  const [ItemCount, setItemCount] = useState(1);

  const PlusProduct = () => {
    if(ItemCount < stock){
      setItemCount(ItemCount+1);
    }
  }

  const NegProduct = () => {
    if(ItemCount > 1){
      setItemCount(ItemCount-1);
    }
  }

  return (
    <div className="w-100 mt-4">
      <div className="div d-flex flex-row p-2 justify-content-between align-items-center border border-secondary mb-3 w-75">
        <button onClick={NegProduct} className="btn btn-outline-dark d-flex flex-column justify-content-center">
          <h6><MdExposureNeg1/></h6>
        </button>
        <h5><b>{ItemCount}</b></h5>
        <button onClick={PlusProduct} className="btn btn-outline-dark d-flex flex-column justify-content-center">
          <h6><MdExposurePlus1/></h6>
        </button>
        <button onClick={()=>{onAddToCart(ItemCount)}} className="btn btn-dark text-center pb-2">
          <MdShoppingCart className="me-2"/> 
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
