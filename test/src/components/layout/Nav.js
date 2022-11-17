import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes.js";
import "./Nav.css"
import Search from "./Search.js"

const Nav = () => {
  return (
    <>
      <div className="div-nav">
        <nav>
          {routes.map((route) => (
            <div key={route.name} className="navlink">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "black",
                  backgroundColor: isActive ? "#285943" : "white",
                  borderRadius: "30px",
                  padding: "20px",
                  textDecoration: "none",
                })}
                to={route.path}
              >
                {route.name}
              </NavLink>
            </div>
          ))}
           
        </nav> 
        <Search/>
      </div>
      
    </>
  );
};

export default Nav;
