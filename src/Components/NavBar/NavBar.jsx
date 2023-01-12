import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavItem from "./NavItem";


const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://cdn.dribbble.com/users/230124/screenshots/9553435/media/545505cae04d2c068447f5ff071893cd.jpg?compress=1&resize=400x300"
              height={40}
              className="rounded-circle mx-2 d-inline-block align-text-top"
            />
            FoxStore
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex">
              <NavItem href="/">Inicio</NavItem>
              <NavItem href="/accesorios">Accesorios</NavItem>
              <NavItem href="/calzado">Calzado</NavItem>
              <NavItem href="/ropa">Indumentaria</NavItem>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
