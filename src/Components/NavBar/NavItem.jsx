import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({children,href}) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={href}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
