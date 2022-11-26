import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../layout/Nav";
import { MyPageMenu } from "../layout/MyPageMenu";
import profile_img from "../images/profile.png";

import "../style/MyPage.css"

import { authService, dbService } from "../../service/firebase";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";

const MyPage = () => {
  const [user, setUser] = useState(authService.currentUser)

  if(user!=null) {
  return (
    <>
        <Nav/>

    <PageTemplate>

      <section className="mypage">


        <MyPageMenu user={user} />
        <Outlet />
      </section>
    </PageTemplate>
    </>
  );
  }
  else {
    alert("로그인 후 이용 가능합니다!")
    return <Navigate to="/login" />
  }
};

export const Profile = ({user}) => {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    onValue(ref(dbService, `/user`), (snapshot) => {
        let name = ""
        snapshot.forEach((row) => {
            if(row.val().email == user.email && user != null) name = row.val().name
        })
        setUserName(name)
      })
  }, [])

  return (
    <div className="profile">
      <img src={profile_img} alt=""></img>
      <br></br>
      <h2>{userName}</h2>
      <h4>{user.email}</h4>
    </div>
  );
  
};

const PageTemplate = ({ children }) => <div className="page1">{children}</div>;



export default MyPage;
