import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ProductDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./storage/cartContext";
import CartContainer from "./Components/CartContainer/CartContainer";
import app, { obtenerProductos } from './services/firebase';
import ThankYou from "./Components/pages/ThankYou";

function App() {

  obtenerProductos();
  

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
            <Route path="/cart/" element={<CartContainer />} />
            <Route path="/:categoria" element={<ItemListContainer />} />
            <Route path="/thank-you/:purchaseid" element={<ThankYou />} />
            <Route path="*" element={<h2>Página no encontrada</h2>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
