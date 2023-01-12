import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import obtenerProductos, {
  obtenerProductoPorCategoria,
} from "../../services/mockService";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  let { categoria } = useParams();

  useEffect(() => {
    if (!categoria) {
      obtenerProductos()
        .then((res) => setProducts(res))
        .catch((err) => alert(err));
    } else {
      obtenerProductoPorCategoria(categoria)
        .then((res) => setProducts(res))
        .catch((err) => alert(err));
    }
  }, [categoria]);




  return (
    <main className="container mt-5">
      <div className="row">
        {products.map((p) => {
          return <ProductCard key={p.id} product={p} />;
        })}
      </div>
    </main>
  );
};

export default ItemListContainer;
