import { Button, Radio, Modal, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import '../style/TransactionCompleted.css';
import good_filled from "../images/good-filled.png";
import average_filled from "../images/average-filled.png";
import poor_filled from "../images/poor-filled.png";
import good_outlined from "../images/good-outlined.png";
import average_outlined from "../images/average-outlined.png";
import poor_outlined from "../images/poor-outlined.png";
const { Text } = Typography;
/*
const TransactionCompleted = () => {
  return (
    <TransactionCompletedBtn />
  );
};
*/
const TransactionCompletedBtn = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [available, setAvailable] = useState(true);
    const [btnText, setBtnText] = useState("후기 보내기");

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModalOpen(false);
            // 후기보내기 버튼 비활성화, 텍스트 바꾸기
            setAvailable(false);
            setBtnText("후기 보내기 완료");
        }, 1000);
    };

    return (
        <>
        <Button type="primary" shape="round" className='transactionCompletedBtn'
         onClick={() => setModalOpen(true)}
         disabled={!available}>
            {<EditOutlined />}{btnText}
        </Button>
        
        <Modal
            //title="${user}님과의 거래는 어떠셨나요?"
            title={
                <>
                <p className='modalTitle'><span className='userName'>user1</span>님과의 거래는 어떠셨나요?</p>
                <Text type="secondary">거래상품 | 작은부기 인형</Text>
                </>
            }
            centered
            open={modalOpen}
            okText="Submit"
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={[
                <Button key="back" shape="round"
                 onClick={() => setModalOpen(false)}
                 className='modalBtn1'>
                  Cancel
                </Button>,
                <Button key="submit" type="primary" shape="round"
                 loading={loading}
                 onClick={handleSubmit}
                 className='modalBtn2'>
                  Submit
                </Button>,
            ]}
            width={450} >
            <TransactionCompletedModalContent />
        </Modal>
        </>
    );
}

const TransactionCompletedModalContent = () => (
    <>
    <EmojiRadioBtns />
    <br />
    <br />
    <br />
    <FromInModal />
    </>
)

const EmojiRadioBtns = () => {
    //const [score, setScore] = useState('Good');
    const [good, setGood] = useState(false);
    const [average, setAverage] = useState(false);
    const [poor, setPoor] = useState(false);

    const setSelected = (value) => {
        setGood(false);
        setAverage(false);
        setPoor(false);

        if(value == "Good") setGood(true);
        else if(value == "Average") setAverage(true);
        else if(value == "Poor") setPoor(true);
    }

    return (
        <Radio.Group optionType='default'
        onChange={(e)=>setSelected(e.target.value)}
        className='emojiRadioGroup'
        /*width={modalWidth}*/
        /*value={score} onChange={(e) => setScore(e.target.value)}*/>

            <Radio.Button value="Good" id='good' className='emojiRadioBtn'/>
            <label for='good' className='emojiLabel'>
                {<img src={good ? good_filled : good_outlined} height="75" width="75"/>}
            </label>
            
            <Radio.Button value="Average" id='average' className='emojiRadioBtn'/>
            <label for='average' className='emojiLabel'>
                {<img src={average ? average_filled : average_outlined} height="75" width="75"/>}
            </label>

            <Radio.Button value="Poor" id='poor' className='emojiRadioBtn'/>
            <label for='poor' className='emojiLabel'>
                {<img src={poor ? poor_filled : poor_outlined} height="75" width="75"/>}
            </label>
        
        </Radio.Group>
    )
};

const FromInModal = () => (
    <Form layout="vertical" name="form_in_modal">
        <Form.Item name="review" label="거래 후기를 작성해주세요!">
            <Input.TextArea
            placeholder="여기에 적어주세요. (선택사항)"/>
        </Form.Item>
    </Form>
)

export default TransactionCompletedBtn;