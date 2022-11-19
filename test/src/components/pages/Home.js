import React, { useState }from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Badge } from "antd";
import banner from "../images/banner.png";
import Button from "@mui/material/Button";
import data from '../data.js';
import '../style/Home.css'

const Home = () => {
    const [cards, setCards] = useState(data);

    return (
        <>
        <div>
        <div>
            <Badge className="box1" size="default" count={<img src={banner} width="1000" />}/>
        </div>
        <div className="Item">
            {cards.map((card, i) => {
                return (
                    <Card className="Card">
                    <CardMedia
                        component="img"
                        image={card.image}
                    />
                    <CardContent>
                        <p>{card.title}</p>
                        <p>{card.change}</p>
                        <p>{card.address}</p>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Details</Button>
                        <Button size="small">Share</Button>
                    </CardActions>
                    </Card>

                )
            })}
      </div>

        </div>
       
      </>
    )
}

export default Home;

