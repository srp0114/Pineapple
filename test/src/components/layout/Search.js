import React from 'react';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import Chat from "./Chat.js"
import "../style/Search.css"
import {AiOutlineUser} from "react-icons/ai";
const { Search } = Input;

const App = () => (
    <>
        <Space className="search">
            <div>
            <Search placeholder="교환하고 싶은 물건은?"  style={{ width: 300 }} />
            </div>
            <div className="icon">
                <AiOutlineUser size="32"/>
            </div>
            <Chat/>

        </Space>
    </>
);

export default App;