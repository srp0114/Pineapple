import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import routes from "../../routes.js";
import "../style/Nav.css"
import Search from "./Search.js"
import MyPage from "../pages/MyPage.js";
import banner from "../images/banner.png";
import { Badge } from "antd";
import Chip from '@mui/material/Chip';

const Nav = () => {
  return (
    <>
      <div className="div-nav">
        <nav className="navigation">
            <NavLink className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#285943" : "white",
                borderRadius: "30px",
                padding: "20px",
                textDecoration: "none",
              })}
              to="/" end
            >HOME</NavLink>
            <NavLink  className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#285943" : "white",
                borderRadius: "30px",
                padding: "20px",
                textDecoration: "none",
              })}
              to="/shop"
            >
              SHOP
            </NavLink>
            <NavLink  className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#285943" : "white",
                borderRadius: "30px",
                padding: "20px",
                textDecoration: "none",
              })}
              to="/about"
            >
              ABOUT
          </NavLink>
      </nav>
      <div>
      <Search/>        
    </div>
    </div>

    

    </>
  );
};

export default Nav;
