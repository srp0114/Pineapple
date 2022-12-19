import React, { useState, useEffect } from "react";
import ChatContainer from './ChatContainer';
import "../style/Chat.css";
//firebase
import { authService, dbService } from '../../service/firebase';
import { sendChat, getName } from '../../helper/database';
import { ref, onValue } from "firebase/database";
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Button, Heading } from "@chakra-ui/react";
import { useNavigate, Navigate } from 'react-router-dom';

import "../style/Shop.css"

const Chatting = ({item}) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.currentUser)
  const [userNames, setUserNames] = useState(getName())
  const [product, setProduct] = useState(item)


  console.log("product = " + product)

  useEffect(() => {
    setProduct(item)
  }, [item])

  useEffect(() => {
    //setUserNames(getName())
    if(item === product) {
    onValue(ref(dbService, `chat/${product}`), (snapshot) => {
        let chats = []
        snapshot.forEach((row) => {
            chats.push(row.val())
        })
        setMessageList(chats)
      })
    }
  }, [product])

  const submit = async (e) => {
    e.preventDefault();
    //sendMessage();
    if(message != "") {
      try {
        await sendChat({
          roomId: product,
          message: message,
          timestamp: Date.now(),
          uid: user.uid
        })
      } catch (error) {
          console.log(error)
        }
    }
    setMessage("");
  };

  if(user != null) {
  return (
  <>
  <ChakraProvider>
    <Heading size="md" mb={[5]} color="#285943">{item}</Heading>
    <ChatContainer messageList={messageList} myUid={user.uid} names={userNames} />
    <form onSubmit={submit} id="chatForm">
      
        <Input
          mx={[1]}
          focusBorderColor="#285943"
          value={message}
          borderRadius="1em"
          onChange={event => setMessage(event.target.value)}
          type="text" placeholder="텍스트를 입력해주세요..."
        />
        <Button type='submit' borderRadius="1.2em" mx={[1]} background='white' color="#285943" size='md'>보내기</Button>
    
    </form>
    </ChakraProvider>
  </>
);
  }

  else {
    alert("로그인 후 이용 가능합니다!")
    return <Navigate to="/login" />
  }
}

export default Chatting;