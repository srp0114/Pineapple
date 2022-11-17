import { Button, Drawer, Space } from 'antd';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

import "./Chat.css"

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };
  
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <>
      <Space>
      <Chip label="CHAT" color="success" variant="outlined" onClick={showLargeDrawer} />
      {/* <ChatOutlinedIcon onClick={showLargeDrawer}/> */}
      </Space>
      <Drawer
        title="채팅방"
        placement="left"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>채팅!</p>
      </Drawer>
    </>
  );
};
export default Chat;