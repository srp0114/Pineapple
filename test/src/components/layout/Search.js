import React from 'react';
import {  Space } from 'antd';
import Chat from "./Chat.js"
import "../style/Search.css"
import {AiOutlineUser} from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { Input } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Chip from '@mui/material/Chip';

//const { Search } = Input;

const App = () => {
    const navigate = useNavigate();
    const navigateToMyPage = () => {
        navigate("/mypage");
    };

    const naviageToLoginPage = () => {
        navigate("/login");
    };

    return (
        <>        
        <div className="login">
                <Chip label="로그인" onClick={naviageToLoginPage} color="success" variant="outlined" className="loginBtn"/>
            <Chat/>
        </div>

        <Space className="search">
            <div>
            <ChakraProvider>
                <Input focusBorderColor='#285943' placeholder='교환하고 싶은 물건은?' style={{fontSize:'1em'}} />
            </ChakraProvider>
            </div>
            <div>
                <AiOutlineUser size="32" className="icon" onClick={navigateToMyPage}/>
            </div>
        </Space>
        </>
    );
}

export default App;