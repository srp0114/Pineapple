import { Button, Drawer, Space } from 'antd';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Chatting from "../layout/Chatting";
import "../style/Chat.css"

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>

      <Space>
      <Chip label="물물교환 하러가기" color="success" variant="outlined" onClick={showDrawer} />

      {/* <ChatOutlinedIcon onClick={showLargeDrawer}/> */}
      </Space>

      <Drawer 
        title="채팅목록" 
        width={650} 
        placement="left" 
        closable={false} 
        onClose={onClose} 
        open={open} 
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}> OK </Button>
          </Space>
        }>
          <Button type="primary" onClick={showChildrenDrawer}>
            채팅방 열기
          </Button>
        <Drawer
          title="채팅방"
          width={600}
          placement="left"
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <Chatting/>
        </Drawer>
      </Drawer>


    </>
  );
};
export default Chat;