import styled from 'styled-components';
import React, { useState, useEffect, useRef } from "react";
import ChatContainer from '../layout/ChatContainer';
// import { authService, dbService } from '../service/firebase';
// import { sendChat, getChats, initGetChats } from '../helper/database';
// import { ref, onChildAdded, onChildChanged, get, remove } from "firebase/database";
//import { useNavigate } from 'react-router-dom';
//import MessageForm from './components/MessageForm';

const Chatting = () => {
  const [message, setMessage] = useState("");
  //const [messageList, setMessageList] = useState(getChats({roomId : "yes"}));
  const [messageList, setMessageList] = useState([])
  //const navigate = useNavigate()
  //const [user, setUser] = useState(authService.currentUser)

//   const getChatList = async() => {
//     try {
//       await getChats({roomId : "yes"});
//     } catch (error) {
//       console.log(error)
//     }
//   }

  const submit = async (e) => {
    e.preventDefault();
    //sendMessage();
    // if(message != "") {
    //   try {
    //     await sendChat({
    //       roomId: "yes",
    //       message: message,
    //       timestamp: Date.now(),
    //       uid: user.uid
    //     })
    //     //setMessageList((list)=>[...list,messageData]);
    //     newMessage()
        
    //   } catch (error) {
    //       console.log(error)
    //     }
    //   //setMessageList(getChats({roomId : "yes"}))
    // }
    if(message != "") {
        setMessageList((list)=>[...list,message]);
        setMessage("");
    }
  };

//   const newMessage = () => {
//     let newMessageList = []
//         getChats({roomId : "yes"}).forEach((element) => {
//           if(!newMessageList.includes(element)) {
//             newMessageList.push(element)
//           }
//         })
//         setMessageList(newMessageList)
//   }


//   useEffect(() => {
//     console.log(user)
//     if(user == null) navigate('/')
//     }, [user])

    useEffect(() => {
        console.log(messageList)
    }, [messageList])

//   const logOut = () => {
//     authService.signOut()
//     alert("로그아웃 되셨습니다.")
//     navigate('/')
//   }

  return (
  <>
    <h1>채팅 예시</h1>
    <ChatContainer messageList={messageList} />
    <form onSubmit={submit}>
      <input
        value={message}
        onChange={event => setMessage(event.target.value)}
        type="text" placeholder="텍스트를 입력해주세요..." />
      <button>보내기</button>
    </form>
  </>
);
}

export default Chatting;

const MessageForm = styled.div`
  display: flex;
  margin-top: 24px;
  input {
    flex-grow: 1;
    margin-right: 1rem;
  }
`;
