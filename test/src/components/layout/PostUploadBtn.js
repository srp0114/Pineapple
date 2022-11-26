import React from "react";
import { FloatButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../style/PostUploadBtn.css';
import { Link } from "react-router-dom";

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