import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../style/Login.css";
import { Input } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { authService } from "../../service/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../helper/database";

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
  // const handleName = (e) => {
  //   setName(e.target.value);
  //   const regex =
  //     /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  //   if (regex.test(e.target.value)) {
  //     setEmailValid(true);
  //   } else {
  //     setEmailValid(false);
  //   }
  // };
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
  const onClickConfirmButton = async() => {
    if(email !== "" && pw !== "" && name !== "") {
      try {
        const res = await createUserWithEmailAndPassword(authService, email, pw)
        await setUser({email: email, name: name, uid: res.user.uid})
        alert("????????? ??????????????????.");
      } catch (eroor) {
        alert("????????? ??????????????????.");
      }
    }

  };

  return (
    <div className="container">
      <div className="page">
        <div className="titleWrap">
          ??????????????? ??????????????????
        </div>

        <div className="contentWrap">
          <div className="inputTitle"><br/>????????? ??????</div>
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
              <div>????????? ???????????? ??????????????????.</div>
            )}
          </div>

          <div className="inputTitle">??????</div>
          <div className="inputWrap">
            <ChakraProvider>
              <Input
                focusBorderColor="#285943"
                size="lg"
                fontSize="1em"
                className="input"
                type="text"
                placeholder="2~10?????? ??????, ??????, ??????"
                value={name}
                onChange={event => setName(event.target.value)}
              ></Input>
            </ChakraProvider>
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle">
            ????????????
          </div>
          <div className="inputWrap">
            <ChakraProvider>
              <Input
                focusBorderColor="#285943"
                size="lg"
                fontSize="1em"
                className="input"
                type="password"
                placeholder="??????, ??????, ???????????? ?????? 8??? ??????"
                value={pw}
                onChange={handlePw}
              ></Input>
            </ChakraProvider>
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>??????, ??????, ???????????? ?????? 8??? ?????? ??????????????????.</div>
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
              ??????
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
