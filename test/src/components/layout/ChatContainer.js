import React, { useEffect, useRef } from "react"
import MessageBox from "./MessageBox";
import styled from 'styled-components';

//const ChatContainer = ({messageList = [], myUid}) => {
const ChatContainer = ({messageList = []}) => {
    console.log(`ChatContainer : ${messageList}`)
    return (
        <StyledChatContainer>
            {messageList.map((chat, i) => <MessageBox key={i} isMymessage={1} message={chat} />)}
        </StyledChatContainer>
    );
}

//{messageList.map((chat, i) => <MessageBox key={i} uid = {chat.uid} isMymessage={myUid === chat.uid ? true : false} message={chat.message} />)}

const StyledChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    padding: 1rem;
    height: 600px;
    overflow: auto;
    background: #b2c7d9;
`;

export default ChatContainer;