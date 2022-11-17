import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, DatePicker, Upload, Typography, Divider } from 'antd';
import '../style/PostForm.css';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;

const PostUploadForm = () => {
  return (
    <>
    <PostFormTitle/>
    <Divider orientation="left" />
    <FormContent/>
    </>
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
          <Input />
        </Form.Item>

        <Form.Item label="희망교환템">
          <Input />
        </Form.Item>
        
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
       
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
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
          <TextArea rows={4} />
        </Form.Item>
    </Form>
    
    <br/>
    <FormBtn/>
    </>
      
)

const FormBtn = () => (
    <div className='formButtons'>
        <Button type="primary" shape="round" size="large" className='formButtonItem' /*onClick={chatBtnClicked}*/ danger>
            취소
        </Button>

        <Button type="primary" shape="round" size="large" className='formButtonItem' /*onClick={chatBtnClicked}*/>
            등록
        </Button>
    </div>
  )

export default PostUploadForm;

/*
<Form.Item>
            <Button type="primary" shape="round" size="large" className='buttons' onClick={chatBtnClicked} danger>
            취소
            </Button>

            <Button type="primary" shape="round" size="large" className='buttons' onClick={chatBtnClicked}>
            등록
            </Button>
        </Form.Item>
*/