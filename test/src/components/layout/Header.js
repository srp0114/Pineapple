import 'antd/dist/antd.css';
import { Card } from 'antd';
import React, { Suspense, lazy } from "react";
import Layout from "./Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "../../routes"
const { Meta } = Card;

const Header = () => {
   <>
      <div className="App">
        <BrowserRouter>
        <Layout />
        <Suspense >
        <Routes>
          {/* <Route path="/" exact="true" element={<Home />} /> */}
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              )
            );
          })}
          
          <Route path="*" element={<>Not found</>} />
          </Routes>
          </Suspense>
        </BrowserRouter>

      </div>
      </>
       
}

export default Header