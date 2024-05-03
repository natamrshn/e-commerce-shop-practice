import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  const menuItems = [
    { id: "shop", label: "Shop" },
    { id: "mens", label: "Men" },
    { id: "womens", label: "Women" },
    { id: "kids", label: "Kids" },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo img" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => handleMenuClick(item.id)}>
            <Link to={`/${item.id}`} style={{ textDecoration: "none" }}>
              {item.label}
            </Link>
            {menu === item.id && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
