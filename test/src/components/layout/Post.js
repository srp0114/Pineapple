import { Button, Descriptions, Image, Col, Divider, Row, Avatar, Badge } from 'antd';
import React, { useState } from 'react';
import { HeartOutlined, HeartFilled, CommentOutlined, WarningOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style/Post.css';
import testImg from "../images/testImg.png";
import badgeImg from "../images/good-filled.png";

const Post = () => {
  return (  
    <div className='postDiv'>
      <TopBarTest />
    
      <Divider orientation="left" />

      <Row>
        <Col flex="300px" className='postLeftSide'>
          <UserProfile/>
          <Divider/>
          <PostImage/>
          <br/><br/>
        </Col>
        
        <Col /*width="fit-content"*/ flex="500px"/*="auto"*/>
          <PostDescription2/>
          <PostButtons/>
        </Col>
      </Row>
    </div>
  );
}

const TopBarTest = () => (
  <>
    <br/>
    <br/>
    <br/>
  </>
)
  
const PostImage = () => (
  <Image
    width={300}
    /*src는 데이터에서 가져오는걸로 변경하기*/
    //src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    src = {testImg}
  />
)

const UserProfile = () => {
  return (
    <>
    <Badge
      size="default"
      count={<img src={badgeImg} width="25"/>}
    >
      <Avatar size={50} icon={<UserOutlined />}/>
    </Badge>

    <p className='userProfileId'>user1</p>
    </>
  )
};
  
  const PostDescription = () => (
    /*데이터 가져와서 내용 설정!!*/
    <Descriptions title="작은부기 인형" column={1} /*className='descriptions'*/>
      <Descriptions.Item label="User ID" /*style={{fontSize:30}}*/>user1</Descriptions.Item>
      <Descriptions.Item label="희망교환템">큰부기 인형</Descriptions.Item>
      <Descriptions.Item label="거래 지역">성북구 삼선동</Descriptions.Item>
      <Descriptions.Item label="상세정보">
        고리형 상상부기 인형입니다!<br/>
        큰부기 인형 아니어도 상상부기 굿즈면 다 좋아요
      </Descriptions.Item>
    </Descriptions>
  );

  const PostDescription2 = () => (
    <table>
        <tr>
          <th>사용자 ID</th>
          <th>희망교환템</th>
          <th>거래 지역</th>
          <th>상세정보</th>
        </tr>
        <tr>
          <td>user1</td>
          <td>큰부기 인형</td>
          <td>성북구 삼선동</td>
          <td>고리형 상상부기 인형입니다!<br/>
        큰부기 인형 아니어도 상상부기 굿즈면 다 좋아요</td>
        </tr>
    </table>
  )
  
  const PostButtons = () => {
    //const [size, setSize] = useState('large');
    const [like, setLike] = useState(false);
  
    return (
      <div className='postButtons'>
        <Button id='heartBtn'
        type="primary" shape="round"
        icon={like ? <HeartFilled /> : <HeartOutlined />}
        size="large"
        className='postButtonItem'
        onClick={()=>{setLike(!like);}}
        //onClick={heartBtnClicked}
        ></Button>
  
        <Button type="primary" shape="round" icon={<CommentOutlined />} size="large"
        className='postButtonItem' onClick={chatBtnClicked}>
          Chat
        </Button>
  
        <Button type="primary" shape="round" icon={<WarningOutlined />} size="large"
        className='postButtonItem'onClick={accuseBtnClicked}>
          Accuse
        </Button>
      </div>
    )
  };
  
  function heartBtnClicked() {
    // 데이터 받아와서 그 반대로 설정 후 데이터도 변경하는걸로 바꾸기
    //alert("heartBtnClicked");
  };
  function chatBtnClicked() {
    alert("chatBtnClicked");
  }
  function accuseBtnClicked() {
    alert("accuseBtnClicked");
  }

  export default Post;