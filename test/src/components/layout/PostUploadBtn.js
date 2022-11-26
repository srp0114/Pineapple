import React from "react";
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../style/PostUploadBtn.css';
import { Link } from "react-router-dom";

const PostUploadBtn = () => {

    return (
        <Link to='/postUploadForm'>
            <Button type="primary" shape="circle" size={"large"}
            icon={<PlusOutlined />} 
            className='postUploadBtn'/>
        </Link>
    )
}

export default PostUploadBtn;

/*
<FloatButton onClick={() => console.log('click')} />
*/