import React from "react";
import { NavLink, Route } from "react-router-dom";
import routes from "../../routes.js";
import "../style/Nav.css"
import Search from "./Search.js"
import MyPage from "../pages/MyPage.js";

const Nav = () => {
  return (
    <>
      <div className="div-nav">
        <nav className="navigation">
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
        <div>
        <Search/>        
        </div>
      </div>
    </>
  );
};

export default Nav;
