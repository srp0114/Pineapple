import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { Input } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  const [ConfirmPW, setConfirmPW] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [nameValid, setnameValid] = useState(false);
  const [ConfirmPWValid, setConfirmPWValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = () => {
    alert("등록에 성공했습니다.");
  };

  return (
    <div className="container">
      <div className="page">
        <div className="titleWrap">
          <br />
          회원정보를 입력해주세요
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div className="inputWrap">
            <ChakraProvider>
              <Input
                focusBorderColor="#285943"
                size="lg"
                fontSize="1em"
                className="input"
                type="text"
                placeholder="test@gmail.com"
                value={email}
                onChange={handleEmail}
              ></Input>
            </ChakraProvider>
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div className="inputTitle">이름</div>
          <div className="inputWrap">
            <ChakraProvider>
              <Input
                focusBorderColor="#285943"
                size="lg"
                fontSize="1em"
                className="input"
                type="text"
                placeholder="test@gmail.com"
                value={name}
                onChange={handleName}
              ></Input>
            </ChakraProvider>
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <ChakraProvider>
              <Input
                focusBorderColor="#285943"
                size="lg"
                fontSize="1em"
                className="input"
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                value={pw}
                onChange={handlePw}
              ></Input>
            </ChakraProvider>
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>
        <div>
          <Link to="../">
            <button
              onClick={onClickConfirmButton}
              disabled={notAllow}
              className="bottomButton"
            >
              등록
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
