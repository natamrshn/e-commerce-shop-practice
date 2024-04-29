import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

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
          <li key={item.id} onClick={() => setMenu(item.id)}>
            {item.label} {menu === item.id && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
