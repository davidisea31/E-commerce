import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <Link to="/">
        <h1>Persiana Jizea</h1>
      </Link>

      <ul>
        <li>
          <Link to="/category/1">Persiana Elegante</Link>
        </li>
        <li>
          <Link to="/category/2">Persiana Opaca</Link>
        </li>
        <li>
          <Link to="/category/3">Persiana Romana</Link>
        </li>
        <li>
          <Link to="/category/4">Persiana Zafaro</Link>
        </li>
      </ul>

      <CartWidget />
    </>
  );
};

export default NavBar;
