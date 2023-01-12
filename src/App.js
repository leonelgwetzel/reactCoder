import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ProductDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <ItemListContainer/> } />
                <Route path="/detalle/:itemid" element={ <ItemDetailContainer/> } />
                <Route path="/:categoria" element={ <ItemListContainer/> } />
                <Route path="*" element={<h2>Página no encontrada</h2>} />
            </Routes>
        </BrowserRouter>


    </>
  );
}

export default App;
