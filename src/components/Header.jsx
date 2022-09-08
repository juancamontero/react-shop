import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu.jsx";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  //se inicializa el estado en false (que no se muestre el menú de usuario)
  const [toggle, setToggle] = useState(false);

  //este nuevo toggle es para las ordemes
  const [toggleOrders, setToggleOrders] = useState(false);

  //necesito el estado del context, creo una variable para ello y solo traigo la info de cart
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
            </li>
            <li
              className="navbar-shopping-cart"
              onClick={() => setToggleOrders(!toggleOrders)}
            >
              <img src={shoppingCart} alt="shopping cart" />
              {cart.length > 0 && <div>{cart.length}</div>}
            </li>
          </ul>
        </div>
      </nav>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </div>
  );
};

export default Header;
