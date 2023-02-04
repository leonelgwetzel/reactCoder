import React from "react";
import { BsTrash } from "react-icons/bs";

const ItemCart = ({product,deleteProduct}) => {

    const formatPrice = (val)=>{
        return val.toLocaleString("es-Ar")
    }

    return(
        <tr>
            <th>{product.count}</th>
            <th>
                <img width={80} src={product.img} alt={product.nombre} />
            </th>
            <th>{product.nombre}</th>
            <th>$ {formatPrice(product.precio)}</th>
            <th>$ {formatPrice(product.count * product.precio)}</th>
            <th>
                <BsTrash className="h5" onClick={()=>{deleteProduct(product.id)}}/>
            </th>

        </tr>
    )
};

export default ItemCart;
