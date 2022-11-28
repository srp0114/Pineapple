import { NavLink, Navigate } from "react-router-dom";
import { Profile } from "../pages/MyPage";
import "../style/MyPage.css"
import Nav from "./Nav"

import { authService } from "../../service/firebase";

export const MyPageMenu = ({user, userName}) => (
  <>
    <div className="mypage-menu">
      <Profile user={user}></Profile>
      <br></br>
      <li><NavLink to="/mypage">판매상품</NavLink></li>
      <li><NavLink to="/mypage/likelist">좋아요 목록</NavLink></li>
      <li><NavLink to="/mypage/setting">설정</NavLink></li>
      <li><NavLink onClick={() => logOut()} to="/login">로그아웃</NavLink></li>
    </div>  
  </>
);

  const logOut = () => {
    authService.signOut()
    alert("로그아웃 되셨습니다.")
  }