import React, { useEffect, useState }from "react";
import { ChakraProvider, extendTheme, propNames } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import {Button} from "antd"
import { Global } from "@emotion/react";
import data from '../data.js';
import '../style/Home.css'
import banner from "../images/banner.png";
import { Badge } from "antd";
import Nav from "../layout/Nav"
import { CImage } from '@coreui/react'
import { Link } from "react-router-dom";

const Fonts = () => (
    <Global styles = {`
        @font-face {
        font-family: "NanumSquare";
        src: url("../fonts/NanumSquareNeo-cBd.ttf");
    }
    `} 
/>
)


const Home = () => {
    const [cards, setCards] = useState(data);
    const theme = extendTheme({fonts:{heading:'NanumSquare'},})

    return (
        <>
        <Nav/>
        <img src={banner}  className="banner"/>
        
        <div className="Item">
        {cards.map((card, i) => {
                return (
                    <ChakraProvider theme ={theme}>
                    <Card  className="Card">
                        <CardBody key={i}>
                            <Image
                            src={card.image}
                            />
                            <Stack mt='4' spacing='3'>
                                <Heading size='md' color='#285943'>{card.title}</Heading>
                                <Text>{card.change}</Text>
                                <Text>{card.address}</Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                            <Link to='/post' state={{data: card}}>
                                <Button type="primary" shape="round" size="default"
                                    className='homeButton' >
                                    Details
                                </Button>
                            </Link>
                                <Button type="primary" shape="round" size="default"
                                    className='homeButton' >
                                    AddToCart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    </ChakraProvider>
                )
            })} 
            </div>

       
      </>
    )
}

export default Home;

