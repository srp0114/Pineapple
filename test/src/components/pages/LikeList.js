import React, { useState }from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import {Button} from "antd"
import { Global } from "@emotion/react";
import data from '../data.js';
import "../style/LikeList.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    </section>
    )
}

export default LikeList;
