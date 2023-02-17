import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { Topbar } from "./Topbar";

export const Navbar = () => {
  const [menuIcons, setMenuIcons] = useState(false);

  const handleClick = () => {
    setMenuIcons(!menuIcons);
  };

  return (
    <div
      className={!menuIcons ? "navbar-container active" : "navbar-container "}
    >
      <Topbar />
      <div className="navbar">
        <span className="navbar-logo">
          <p>LOGO</p>
        </span>
        <div className="menu-icons" onClick={handleClick}>
          {!menuIcons ? <IoMenu /> : <IoClose />}
        </div>
        <div className="navbar-links-container">
          <div className="navbar-links">
            <Link>HOME</Link>
            <Link>NEW ARRIVAL</Link>
            <Link>SHOP</Link>
            <Link>LAST COLLECTION</Link>
            <Link>MEN</Link>
            <Link>WOMEN</Link>
          </div>
        </div>
        <div className="search-bar">
          <button className="search-btn">&#x1F50D;&#xFE0E;</button>
          <input className="search-input" type="text" placeholder="Search" />
        </div>
        <div className="navbar-items">
          <Link>
            <div className="rectangle-item-1"></div>
            <div className="rectangle-item-2"></div>
            <div className="text-item-container">
              <p>0</p>
            </div>
          </Link>
        </div>
        <div className="wishlist">
          <Link>
            <span className="star">&#9734;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
