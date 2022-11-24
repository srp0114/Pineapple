import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload, Typography, Divider, Button } from 'antd';
import '../style/PostForm.css';
import { ChakraProvider, Input, Textarea } from '@chakra-ui/react'
const { Title } = Typography;

const PostForm = () => {
  return (
    <div className='postForm'>
    <PostFormTitle/>
    <Divider orientation="left" />
    <FormContent/>
    </div>
  );
};

const PostFormTitle = () => (
    <div className='postFormTitle'>
        <Title>상품 등록</Title>
    </div>
)

const FormContent = () => (
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
       
        <Form.Item label="Upload" valuePropName="fileList">
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
    <FormBtn/>
    </>
)

const FormBtn = () => (
  <div className='formButtons'>
      <Button type="primary" shape="round" size="large" className='formButtonItem2' /*onClick={chatBtnClicked}*/>
          취소
      </Button>

      <Button type="primary" shape="round" size="large" className='formButtonItem1' /*onClick={chatBtnClicked}*/>
          등록
      </Button>
  </div>
)


  function uploadBtnClicked() {
    // 빈 input form 있나 검사

    alert("내용을 모두 입력해주세요.");
  }

export default PostForm;
