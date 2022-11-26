import React, { useState }from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import {Button} from "antd"
import { Global } from "@emotion/react";
import data from '../data.js';
import "../style/Shop.css";
import { Link } from "react-router-dom";
import Nav from "../layout/Nav"
import PostUploadBtn from "../layout/PostUploadBtn"

const Fonts = () => (
        <Global styles = {`
            @font-face {
            font-family: "NanumSquare";
            src: url("../fonts/NanumSquareNeo-cBd.ttf");
        }
        `} 
    />
)

const Shop = () => {
    const [cards, setCards] = useState(data);
    const theme = extendTheme({fonts:{heading:'NanumSquare'},})

    return (
        <>
        <Nav/>

        <PostUploadBtn />
        
        <div className="cards">
            {cards.map((card, i) => {
                return (
                    <ChakraProvider theme ={theme}>
                    <Card maxW='sm' className="cardStyle">
                        <CardBody key={i}>
                            <Image
                            src={card.image}
                            borderRadius='lg'
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
                                    className='button' >
                                    Details
                                </Button>
                            </Link>
                                <Button type="primary" shape="round" size="default"
                                    className='button' >
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

export default Shop;

