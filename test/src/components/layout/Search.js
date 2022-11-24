import React from 'react';
import 'antd/dist/antd.css';
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
    return (
        <>
        
        <div>
        <div className="login">
            <Link to="../login">
                <Chip label="로그인" color="success" variant="outlined" className="loginBtn"/>
            </Link>

            <Chat/>
        </div>

        <div>
        <Space className="search">
            <div>
            <ChakraProvider>
            {/*  <Search placeholder="교환하고 싶은 물건은?"  style={{ width: 300 }} />*/}
            <Input focusBorderColor='#285943' placeholder='교환하고 싶은 물건은?' style={{fontSize:'1em'}} />
            </ChakraProvider>

            </div>
            <div onClick={navigateToMyPage} className="icon">
                <AiOutlineUser size="32"/>
            </div>
        </Space>
        </div>
        </div>
    </>
    );
};


export default App;