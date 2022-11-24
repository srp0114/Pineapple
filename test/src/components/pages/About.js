import React from "react";
import { Badge } from "antd";
import banner from "../images/banner.png";
import { Link } from "react-router-dom";
import "../style/Login.css";

const About = () => {
  return (
    <div>
      <br />
      <br />

      <Badge size="default" count={<img src={banner} width="1000" />}></Badge>
      <br />
      <br />
      <br />
      <div class="box1">
        <p>
          파인애플 물물교환은 귀여운 이미지와 터프한 애니메이션으로 이루어진
          쇼핑몰입니다.
          <br />
          <br />
          <br />
          사용자는 이곳에서 물건을 팔수도, 살수도 있습니다.
          <br />
          <br />
          <br />
          하지만 물건은 영원하지 않고, 따라서 우리의 거래도 영원하지 않습니다.
          <br />
          <br />
          <br />
          가장 가까이에 있는 물건을 집어서 사진을 찍으세요!
          <br />
          <br />
          <br />
          그리고 멋진 거래자와 거래를 시도해보세요!
          <br />
          <br />
          <br />
          서두르는게 좋을겁니다. 머지않아 물건도 거래도 모두 파인애플처럼
          터져버리고 말테니까요!
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>

      <Link to="../login">
        <button className="bottomButton">로그인</button>
      </Link>
    </div>
  );
};

export default About;
