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
import styled from "styled-components";

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

const ButtonContainer = styled.div`
  .ant-btn-primary {
    color: #285943;
    background-color: white;
    border-color: #285943;
  }
  .ant-btn-primary:hover {
    background-color: #285943;
    border-color: #285943;
    border-width: 1px;
  }
  .ant-btn-primary:focus {
    background-color: #285943;
    border-color: #285943; 
  }
`;

const Home = () => {
    const product = [data[0], data[1], data[2], data[3]]
    const [cards, setCards] = useState(product);
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
                            <ButtonContainer>

                            <Link to='/post' state={{data: card}}>
                                <Button type="primary" shape="round" size="default">
                                    Details
                                </Button>
                            </Link>
                                <Button type="primary" shape="round" size="default"
                                    style={{margin:"5px"}}>
                                    AddToCart
                                </Button>
                                </ButtonContainer>
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

