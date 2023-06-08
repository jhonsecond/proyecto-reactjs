import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="brand">Nombre de la tienda</span>
        <ul className="categories">
          <li><a href="#">Categoría 1</a></li>
          <li><a href="#">Categoría 2</a></li>
          <li><a href="#">Categoría 3</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
