import React, { useState }from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import {Button} from "antd"
import { Global } from "@emotion/react";
import data from '../data.js';
import "../style/LikeList.css";
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

export const LikeList = () => {
    const reverse = [...data].reverse();
    const [cards, setCards] = useState(reverse);
    const theme = extendTheme({fonts:{heading:'NanumSquare'},})

    return (
        <section className="likelist">
        <div className="LikeItem">
            {cards.map((card, i) => {
                return (
                    <ChakraProvider theme ={theme}>
                    <Card maxW='sm' className="LikeCard">
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
                                    className='button'>
                                    Details
                                </Button>
                            </Link>
                            <Button type="primary" shape="round" size="default"
                                className='button'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    </ChakraProvider>
                )
            })}
    </div>
    </section>
    )
}

export default LikeList;
