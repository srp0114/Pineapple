import React, { useState } from "react"
import styled from 'styled-components';


const Message = ({isMymessage, message}) => {
    return (
        <StyledMessage isMymessage={isMymessage}>{message}</StyledMessage>
    );
}

const StyledMessage = styled.span`
    margin-bottom: 0.5rem;
    background: ${props => (props.isMymessage ? '#fce668': '#285943')};
    color: ${props => (props.isMymessage ? 'black': 'white')};
    width: fit-content;
    padding: 12px;
    border-radius: 1rem;
`;

export default Message;