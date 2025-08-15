import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* Overlay for dark effect */}
      <div className="overlay"></div>

      <div className="header-contents">
        <h2>QuickBite 🍔 Fresh, Fast & Delicious</h2>
        <p>
          From sizzling pizzas to juicy burgers, we deliver happiness at your
          doorstep. Order now and satisfy your cravings in minutes!
        </p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Header;
