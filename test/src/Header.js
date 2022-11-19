import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/layout/Nav";
import routes from "./routes.js";
import MyPage, { Sell, LikeList, Setting } from "./components/pages/MyPage";
import Login from "./components/pages/Login";
import RegisterPage from "./components/pages/RegisterPage";
import Home from "./components/pages/Home";

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