import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../layout/Nav";
import { MyPageMenu } from "../layout/MyPageMenu";
import profile_img from "../images/profile.png";

const MyPage = () => {
  return (
    <PageTemplate>
      <section className="mypage">
        <MyPageMenu />
        <Outlet />
      </section>
    </PageTemplate>
  );
};

export const Profile = function () {
  return (
    <div className="profile">
      <img src={profile_img} alt=""></img>
      <h2>상상부기</h2>
      <h4>sangsang@hansung.ac.kr</h4>
    </div>
  );
};

//비밀번호 변경 버튼 클릭시
const onClickConfirmButton = () => {
  alert("비밀번호가 변경되었습니다.");
};

const PageTemplate = ({ children }) => <div className="page1">{children}</div>;

//판매상품
export const Sell = () => (
  <section className="sell">
    <h2>Our sell</h2>
    <p>Our sell ...</p>
    <p>Our sell ...</p>
  </section>
);

//좋아요 목록
export const LikeList = () => (
  <section className="likelist">
    <h2>Our likelist</h2>
    <p>Our likelist ...</p>
    <p>Our likelist ...</p>
  </section>
);

//설정
export const Setting = function () {
  return (
    <section className="setting">
      <div className="contentWrap">
        <div className="inputTitle">닉네임</div>
        <div className="inputWrap">
          <input className="input" />
        </div>
        <div>
          <br></br>
          <button className="bottomButton">닉네임 변경</button>
        </div>
      </div>
      <div className="contentWrap">
        <div className="inputTitle">현재 비밀번호</div>
        <div className="inputWrap">
          <input type="password" className="input" />
        </div>
        <div className="inputTitle">새 비밀번호</div>
        <div className="inputWrap">
          <input type="password" className="input" />
        </div>
        <div className="inputTitle">새 비밀번호 확인</div>
        <div className="inputWrap">
          <input type="password" className="input" />
        </div>
        <div>
          <br></br>
          <button className="bottomButton" onClick={onClickConfirmButton}>
            비밀번호 변경
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyPage;
