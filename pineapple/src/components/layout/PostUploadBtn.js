import React from "react";
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import '../style/PostUploadBtn.css';

const PostUploadBtn = () => {

    return (
        <Link to='/postUploadForm'>
            <FloatButton type="primary" shape="circle" size={"large"}
            icon={<PlusOutlined />} 
            className='postUploadBtn'/>
        </Link>
    )
}

export default PostUploadBtn;

/*
<FloatButton onClick={() => console.log('click')} />
*/