import { Image, Col, Divider, Row, Avatar, Badge, Button } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeartOutlined, HeartFilled, CommentOutlined, UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style/Post.css';
import testImg from "../images/testImg.png";
import testImg2 from "../images/pineapple.png"
import testImg3 from "../images/pineapple2.PNG"
import testImg4 from "../images/pineapple3.jpg"
import badgeImg from "../images/good-filled.png";
import Nav from "../layout/Nav"

const Post = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <>
        <Nav/>

    <div className='postDiv'>
      <br/><br/><br/>
      <UserProfile/>
      <Divider/>
      <br/>

      <Row >
        <Col flex="300px" className='postLeftSide'>
          
          <PostImage data={data}/>
          <br/><br/>
        </Col>
        
        <Col /*width="fit-content"*/ flex="400px"/*="auto"*/>
          <p className='postTitle'>{data.title}</p>
          <br/>
          <PostDescription data={data}/>
          <br/>
          <PostButtons/>
        </Col>
      </Row>
    </div>
    </>
  );
}

const UserProfile = () => {
  return (
    <div className='userProfile'>
    <Badge
      size="default"
      count={<img src={badgeImg} width="25"/>}
    >
      <Avatar size={50} icon={<UserOutlined />}/>
    </Badge>

    <p className='userProfileId'>user1</p>
    </div>
  )
};

const PostImage = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Image
        preview={{
          visible: false,
        }}
        width={300}
        src={props.data.image}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src={props.data.image} />
          <Image src={testImg2} />
          <Image src={testImg3} />
          <Image src={testImg4} />
        </Image.PreviewGroup>
      </div>
    </>
  )
}

const PostDescription = (props) => (
  <table className='descriptionTable'>
    <tr>
      <th>사용자 ID</th>
      <td className='descriptionTd'>user1</td>
    </tr>
    <br/>
    <tr>
      <th>희망교환템</th>
      <td className='descriptionTd'>{props.data.change}</td>
    </tr>
    <br/>
    <tr>
      <th>거래 지역</th>
      <td className='descriptionTd'>{props.data.address}</td>
    </tr>
    <br/>
    <tr>
      <th>상세정보</th>
      <td className='descriptionTd'>{props.data.content}</td>
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
      icon={like ? <HeartFilled style={{ color: '#eb2f96' }}/> : <HeartOutlined />}
      size="large"
      className='postButtonItem'
      onClick={()=>{setLike(!like);}}
      ></Button>
  
      <Button type="primary" shape="round" icon={<CommentOutlined />} size="large"
      className='postButtonItem' onClick={chatBtnClicked}>
        Chat
      </Button>
    </div>
  )
};
  
function chatBtnClicked() {
  alert("chatBtnClicked");
}

export default Post;