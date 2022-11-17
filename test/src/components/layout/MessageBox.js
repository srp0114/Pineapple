import React, { useEffect, useRef } from "react"
import Message from "./Message";
import styled from 'styled-components';

const MessageBox = ({isMymessage, message}) => {
    const _ref = useRef(null);
    const scrollToBottom = () => {
        _ref.current.scrollIntoView({behaivor: "smooth"})
    }
    useEffect(() => { scrollToBottom(); }, [message]);
    return (
        <StyledMessageBox ref={_ref} isMymessage={isMymessage}>
            <Message isMymessage={isMymessage} message={message}/>
        </StyledMessageBox>
    );
}

const StyledMessageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-self: ${props => (props.isMymessage ? 'flex-end': 'flex-start')};
    padding: 1px;
`;

export default MessageBox;