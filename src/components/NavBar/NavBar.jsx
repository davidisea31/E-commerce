import React from "react"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (

    <>
      <h1>Persiana Jizea</h1>

      <ul>
        <li>
          <a>Persiana Elegante</a>
        </li>
        <li>
          <a>Persiana Opaca</a>
        </li>
        <li>
          <a>Persiana Romana</a>
        </li>
        <li>
          <a>Persiana Zafaro</a>
        </li>
      </ul>

      <CartWidget/>

    </>

  );
}

export default NavBar;