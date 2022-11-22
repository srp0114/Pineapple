import "../style/Login.css"
import "../style/Setting.css"
import React from "react";

//비밀번호 변경 버튼 클릭시
const onClickConfirmButton = () => {
    alert("비밀번호가 변경되었습니다.");
  };

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
  

  export default Setting;