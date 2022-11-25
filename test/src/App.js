import React from "react";
import './App.css';
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Nav from "./components/layout/Nav";
import routes from "./routes.js";
import MyPage from "./components/pages/MyPage";
import { Setting } from "./components/pages/Setting";
import { LikeList } from "./components/pages/LikeList";
import { Sell } from "./components/pages/Sell";
import RegisterPage from "./components/pages/RegisterPage";
import Login from "./components/pages/Login";
import Post from "./components/pages/Post";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About"

const App = () => (
  
    <Routes>        
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/about" element={<About />}/>

      {/* <Route path="/about/*" element={<RegisterPage />}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/login/*" element={<RegisterPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/login/*" element={<RegisterPage />}></Route>
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/post" element={<Post />}></Route>
      <Route path="/mypage/*" element={<MyPage />}>
        <Route path="" element={<Sell />} />
        <Route path="likelist" element={<LikeList />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="/try" element={<MyPage />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
)

export default App;