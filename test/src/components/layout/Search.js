import React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import Chat from "./Chat.js"
import "../style/Search.css"
import {AiOutlineUser} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const App = () => {
    const navigate = useNavigate();
    const navigateToMyPage = () => {
        navigate("/mypage");
};
    return (
        <>
        <Space className="search">
            <div>
            <Search placeholder="교환하고 싶은 물건은?"  style={{ width: 300 }} />
            </div>
            <div onClick={navigateToMyPage} className="icon">
                <AiOutlineUser size="32"/>
            </div>
            <Chat/>
        </Space>
    </>
    );
};


export default App;