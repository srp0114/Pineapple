import React, { useState }from "react";
import 'antd/dist/antd.css';
import '../../App.css';
import './Home.css'
import { Card } from 'antd';
import data from '../data.js';
const { Meta } = Card;

const Home = () => {
   const [cards, setCards] = useState(data);
 
    return (
        <>
        <div className="Item">
            {cards.map((card, i) => {
                return (
                <Card className="Card" hoverable
                    cover={<img alt="card" src={card.image} /> }>
                        <Meta title={card.title}/>
                        <p>{card.address}</p>
                        <p>{card.change}</p>
                </Card>
                )
            })}
      </div>
      </>
  )
};

export default Home;

