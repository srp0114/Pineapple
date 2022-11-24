import React, { useEffect, useRef } from "react"
import MessageBox from "./MessageBox";
import styled from 'styled-components';

//const ChatContainer = ({messageList = [], myUid}) => {
const ChatContainer = ({messageList = [], myUid, names}) => {
    console.log(`ChatContainer : ${messageList}`)
    return (
        <StyledChatContainer>
            {messageList.map((chat, i) => <MessageBox key={i} name={names.find(user => chat.uid === user.uid ? true : false).name} isMymessage={myUid === chat.uid ? true : false} message={chat.message} />)}
        </StyledChatContainer>
    );
}

//{messageList.map((chat, i) => <MessageBox key={i} uid = {chat.uid} isMymessage={myUid === chat.uid ? true : false} message={chat.message} />)}

const StyledChatContainer = styled.div`
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    padding: 1rem;
    height: 600px;
    overflow: auto;
    background: white;
`;

export default ChatContainer;