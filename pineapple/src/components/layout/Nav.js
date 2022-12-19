import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search.js"
import "../style/Nav.css"


const Nav = () => {
  return (
    <>
      <div className="div-nav">
        <nav className="navigation">
            <NavLink className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#285943" : "white",
                borderRadius: "50px",
                padding: "20px",
                textDecoration: "none",
              })}
              to="/" end
            >HOME</NavLink>
            <NavLink  className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                backgroundColor: isActive ? "#285943" : "white",
                borderRadius: "50px",
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
                borderRadius: "50px",
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
