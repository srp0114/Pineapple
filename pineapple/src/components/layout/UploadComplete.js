import React from 'react';
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";

const UploadComplete = () => (
  <>
  <br/><br/><br/><br/><br/><br/>

  <Result
    status="success"
    title="상품이 정상적으로 등록되었습니다."
    subTitle="The product has been registered successfully."
    extra={[
      <Link to='/shop'>
      <Button type="primary" key="console">
        Go Shop
      </Button>
      </Link>,
    ]}
  />
  </>
);
export default UploadComplete;