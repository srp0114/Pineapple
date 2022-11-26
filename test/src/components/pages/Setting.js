import "../style/Setting.css"
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

//비밀번호 변경 버튼 클릭시
const onClickConfirmButton = () => {
    alert("비밀번호가 변경되었습니다.");
  };

export const Setting = function () {
    return (
      <section className="setting">
        <div className="s_contentWrap">
          <div className="s_inputTitle">닉네임</div>
          <div className="s_inputWrap">
          <ChakraProvider>
            <Input className="s_input"
            focusBorderColor="#285943"
            size="lg"
            fontSize="1em"
            placeholder="상상부기"/>
          </ChakraProvider>
          </div>
          <div>
            <br></br>
            <button className="s_bottomButton">닉네임 변경</button>
          </div>
        </div>
        <div className="s_contentWrap">
          <div className="s_inputTitle">현재 비밀번호</div>
          <div className="s_inputWrap">
          <ChakraProvider>
            <Input type="password" className="s_input" 
            focusBorderColor="#285943"
            size="lg"
            fontSize="1em"/>
          </ChakraProvider>
          </div>
          <div className="s_inputTitle">새 비밀번호</div>
          <div className="s_inputWrap">
          <ChakraProvider>
            <Input type="password" className="s_input"
            focusBorderColor="#285943"
            size="lg"
            fontSize="1em" />
          </ChakraProvider>
          </div>
          <div className="s_inputTitle">새 비밀번호 확인</div>
          <div className="s_inputWrap">
          <ChakraProvider>
            <Input type="password" className="s_input"
            focusBorderColor="#285943"
            size="lg"
            fontSize="1em"/>
          </ChakraProvider>
          </div>
          <div>
            <br></br>
            <button className="s_bottomButton" onClick={onClickConfirmButton}>
              비밀번호 변경
            </button>
          </div>
        </div>
      </section>
    );
  };
  

  export default Setting;