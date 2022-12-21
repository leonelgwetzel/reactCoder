import React from "react";
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NewPilcha
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex flex-row justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Hombre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mujer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Unisex
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accesorios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Calzado
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CartWidget/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
