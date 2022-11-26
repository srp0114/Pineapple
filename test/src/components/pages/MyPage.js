import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../layout/Nav";
import { MyPageMenu } from "../layout/MyPageMenu";
import profile_img from "../images/profile.png";

import "../style/MyPage.css"

const MyPage = () => {
  return (
    <>
        <Nav/>

    <PageTemplate>

      <section className="mypage">


        <MyPageMenu />
        <Outlet />
      </section>
    </PageTemplate>
    </>

  );
};

export const Profile = function () {
  return (
    <div className="profile">
      <img src={profile_img} alt=""></img>
      <br></br>
      <h2>상상부기</h2>
      <h4>sangsang@hansung.ac.kr</h4>
    </div>
  );
};

const PageTemplate = ({ children }) => <div className="page1">{children}</div>;



export default MyPage;
