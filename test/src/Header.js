import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/layout/Nav";
import routes from "./routes.js";
import MyPage from "./components/pages/MyPage";
import {Setting} from "./components/pages/Setting"
import {LikeList} from "./components/pages/LikeList";
import {Sell} from "./components/pages/Sell";
import RegisterPage from "./components/pages/RegisterPage";

const Header = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Suspense>
          <Routes>
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

            {/* <Route path="/about/*" element={<RegisterPage />}></Route> */}
            
            <Route path="/login" element={<Login />}></Route>
            <Route path="/login/*" element={<RegisterPage />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>

            <Route path="/mypage/*" element={<MyPage />}>
              <Route path="" element={<Sell />} />
              <Route path="likelist" element={<LikeList />} />
              <Route path="setting" element={<Setting />} />
            </Route>

            <Route path="*" element={<>Not found</>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Header;
