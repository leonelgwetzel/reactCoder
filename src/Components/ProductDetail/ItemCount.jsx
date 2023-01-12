import React, {useState} from "react";
import { MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";

const ItemCount = ({stock = 1}) => {

  const [ItemCount, setItemCount] = useState(1);

  const PlusProduct = () => {
    if(ItemCount < stock){
      setItemCount(ItemCount+1);
    }
  }

  const NegProduct = () => {
    if(ItemCount > 0){
      setItemCount(ItemCount-1);
    }
  }

  return (
    <div className="w-100 border border-secondary mt-4">
      <div className="div d-flex flex-row p-3 justify-content-between">
        <button onClick={NegProduct} className="btn btn-outline-dark d-flex flex-column justify-content-center">
          <h5><MdExposureNeg1/></h5>
        </button>
        <h4><b>{ItemCount}</b></h4>
        <button onClick={PlusProduct} className="btn btn-outline-dark d-flex flex-column justify-content-center">
          <h5><MdExposurePlus1/></h5>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
