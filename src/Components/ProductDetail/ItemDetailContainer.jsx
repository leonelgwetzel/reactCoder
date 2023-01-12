import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { obtenerProducto } from '../../services/mockService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState ([]);

    let params = useParams();
    

    useEffect( () => {
      obtenerProducto(params.itemid)
        .then((respuesta) => setProduct(respuesta))
        .catch((err) => alert(err))

    }, []);
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer