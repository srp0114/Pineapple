import React, { useState, useEffect } from "react";
import ChatContainer from './ChatContainer';
import "../style/Chat.css";
//firebase
import { authService, dbService } from '../../service/firebase';
import { sendChat, getName } from '../../helper/database';
import { ref, onValue } from "firebase/database";
//import { useNavigate } from 'react-router-dom';

const Chatting = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([])
  //const navigate = useNavigate()
  const [user, setUser] = useState(authService.currentUser)
  const [userNames, setUserNames] = useState(getName())

  useEffect(() => {
    //setUserNames(getName())
    onValue(ref(dbService, `chat/yes`), (snapshot) => {
        let chats = []
        snapshot.forEach((row) => {
            chats.push(row.val())
        })
        setMessageList(chats)
      })
  }, [])

  const submit = async (e) => {
    e.preventDefault();
    //sendMessage();
    if(message != "") {
      try {
        await sendChat({
          roomId: "yes",
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

  //로그인이 풀리면(user 정보가 null이면) 해야되는 일
  // useEffect(() => {
  //   console.log(user)
  //   if(user == null) navigate('/')
  //   }, [user])

//로그아웃 처리
//   const logOut = () => {
//     authService.signOut()
//     alert("로그아웃 되셨습니다.")
//     navigate('/')
//   }

  return (
  <>
    <h1>채팅 예시</h1>
    <ChatContainer messageList={messageList} myUid={user.uid} names={userNames} />
    <form onSubmit={submit} id="chatForm">
      <input id="chatInput"
        value={message}
        onChange={event => setMessage(event.target.value)}
        type="text" placeholder="텍스트를 입력해주세요..." />
      <button>보내기</button>
    </form>
  </>
);
}

export default Chatting;