import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <div className="header">
      <div className="top-menu">
          <div className="top-menu-left">
          <Link to={"/"}>
            <img src="https://www.tlu.ee/themes/tlu/logo.svg" alt="Tallinna Ülikool" />
          </Link>    
          </div>
          <div className="top-menu-right">
              <button className="button">Login/Signup</button>
              <button className="button">Cart</button>
          </div>
      </div>
    </div>
    
  )
};

export default Header;