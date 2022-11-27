import { Button, Drawer, Space } from 'antd';
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Chatting from "../layout/Chatting";
import TransactionCompletedBtn from "../layout/TransactionCompleted"
import Box from '@mui/material/Box';
import "../style/Chat.css"
import styled from "styled-components";
import { Table, Tag } from 'antd';
import data from "../data";

const { Column, ColumnGroup } = Table;

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

  const ButtonContainer = styled.div`
  .ant-btn-primary {
    color: #285943;
    background-color: white;
    border-color: #285943;
  }
  .ant-btn-primary:hover {
    background-color: #285943;
    border-color: #285943;
    border-width: 1px;
  }
  .ant-btn-primary:focus {
    background-color: #285943;
    border-color: #285943; 
  }
`;

  const DrawerTitle = () => (
    <>
    <span className="chatRoom">채팅방</span>
    <TransactionCompletedBtn/>
    </>
  )
  
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
            <ButtonContainer>
            <Button type="primary" shape="round" onClick={onClose} className='button' > OK </Button>
            </ButtonContainer>
        }>
        <ButtonContainer>

        <Table dataSource={data}>
          <Column title="거래자" dataIndex="userID" key="userID" />
          <Column title="교환템" dataIndex="title" key="title" />
          <Column title="희망교환템" dataIndex="change" key="change" />
          <Column title="거래지역" dataIndex="address" key="address" />

          <Column
            title=""
            key="action"
            render={(_, record) => (
              <Space size="middle">
                        <Button type="primary" shape="round" onClick={showChildrenDrawer} className='button'>거래하기</Button>

              </Space>
            )}
          />
        </Table>
        
        </ButtonContainer>

        <Drawer
          title={<DrawerTitle/>}
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