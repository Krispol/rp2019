import React from "react";
import { Link } from "react-router-dom";
import {userIcon} from "../icons";
import {shoppingIcon} from "../icons";
import "./header.css";

const Header = () => {
  return ( 
    <div className="header">
      <div className="top-menu">
          <div className="top-menu-left">
          <Link to={"/"}>
            <img className="header_logo" src="https://www.tlu.ee/themes/tlu/logo.svg" alt="Tallinna Ülikool" />
          </Link>    
          </div>
          <div className="top-menu-right">
              <img className="menuIcon" src={userIcon}/>
                <button className="button">Login/Signup</button>
              <img className="menuIcon" src={shoppingIcon}/>
                <button className="button">Cart</button>
          </div>
      </div>
    </div>
    
  );
};

export default Header;