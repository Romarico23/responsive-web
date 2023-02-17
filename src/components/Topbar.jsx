import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar">
        <Link>Help</Link>
        <Link>Join Us</Link>
        <Link>Sign In</Link>
      </div>
    </div>
  );
};
