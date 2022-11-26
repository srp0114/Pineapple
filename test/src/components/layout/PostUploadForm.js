import React , { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload, Typography, Divider, Button } from 'antd';
import '../style/PostUploadForm.css';
import { ChakraProvider, Input, Textarea } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
import Nav from "./Nav"
const { Title } = Typography;

const PostUploadForm = () => {
  return (
    <>
    <Nav/>
    <div className='postForm'>
    <PostFormTitle/>
    <Divider orientation="left" />
    <FormContent/>
    </div>
    </>
  );
};

const PostFormTitle = () => (
    <div className='postFormTitle'>
      <br/><br/><br/>
      <Title>상품 등록</Title>
    </div>
)

const FormContent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // 등록 완료 화면으로
      navigate("/uploadComplete")
    }, 1000);
  }

  return (
      <>
      <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          
          <Form.Item label="상품명">
            <ChakraProvider>
            <Input isRequired={true} focusBorderColor="#285943" />
            </ChakraProvider>
          </Form.Item>

          <Form.Item label="희망교환템">
            <ChakraProvider>
            <Input focusBorderColor="#285943"/>
            </ChakraProvider>
          </Form.Item>
        
          <Form.Item label="사진 등록" valuePropName="fileList">
            <Upload size="" action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item label="상세 정보">
            <ChakraProvider>
            <Textarea focusBorderColor="#285943"/>
            </ChakraProvider>
          </Form.Item>
          
      </Form>
      
      <br/>
      <div className='formButtons'>
        <Link to='/shop'>
        <Button type="primary" shape="round" size="large" className='formButtonItem2'>
            취소
        </Button>
        </Link>
        
        <Button type="primary" shape="round" size="large" className='formButtonItem1'
         loading={loading}
         onClick={handleUpload}>
            등록
        </Button>
      </div>
      </>
  );
}

function uploadBtnClicked() {
  // 빈 input form 있나 검사

  alert("내용을 모두 입력해주세요.");
}

export default PostUploadForm;
