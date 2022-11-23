import React, { useEffect, useState }from "react";
import { ChakraProvider, extendTheme, propNames } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Global } from "@emotion/react";
import data from '../data.js';
import '../style/Home.css'
import banner from "../images/banner.png";
import { Badge } from "antd";
import Carousel from 'react-material-ui-carousel'


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
        <div>
        <div>
            <Badge size="default" count={<img src={banner} width="90%" />}/>
        </div>
        
        <div className="Item">
        {cards.map((card, i) => {
                return (
                    <ChakraProvider theme ={theme}>
                    <Card maxW='sm' className="Card">
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
                            <Button variant='solid' colorScheme='blue'>
                                Details
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                    </ChakraProvider>
                )
            })} 
            </div>
      </div>

       
      </>
    )
}

export default Home;

