import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <ItemListContainer greetings="Bienvenido a NewPilcha" />
  </>
);
