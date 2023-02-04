import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { obtenerProductos, obtenerProductoPorCategoria } from "../../services/firebase";


import { useParams } from "react-router-dom";
import Loader from '../Loader/Loader';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { categoria } = useParams();

  useEffect(() => {
    if (!categoria) {
      obtenerProductos()
        .then((res) => setProducts(res))
        .catch((err) => alert(err))
        .finally(() => setIsLoading(false));
    } else {
      obtenerProductoPorCategoria(categoria)
        .then((res) => setProducts(res))
        .catch((err) => alert(err))
        .finally(() => setIsLoading(false));
    }
  }, [categoria]);

  if (isLoading) {
    return <Loader/>
  } else {
    return (
      <main className="container mt-5">
        <div className="row">
          {products.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      </main>
    );
  }
};

export default ItemListContainer;
