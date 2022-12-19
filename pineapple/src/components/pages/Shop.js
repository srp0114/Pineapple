import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup } from "@chakra-ui/react";
import { Button } from "antd";
import { Global } from "@emotion/react";
import { Link } from "react-router-dom";
import { Badge } from "antd";

import Nav from "../layout/Nav";
import Timer from "./Timer";
import data from "../data.js";
import PostUploadBtn from "../layout/PostUploadBtn";
import "../style/Shop.css";
import styled from "styled-components";

const Fonts = () => (
  <Global
    styles={`
            @font-face {
            font-family: "NanumSquare";
            src: url("../fonts/NanumSquareNeo-cBd.ttf");
        }
        `}
  />
);

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

// export const Shop_1 = () => {
//   const product = [data[1], data[3], data[5]];
//   const [cards, setCards] = useState(product);
//   const theme = extendTheme({fonts:{heading:'NanumSquare'},})
// }

const Shop = () => {
  const product_1 = [
    data[0],
    data[1],
    data[3],
    data[2],
    data[7],
    data[9],
    data[5],
    data[4],
    data[6],
    data[8],
    data[10],
    data[12],
  ];
  const [cards, setCards] = useState(product_1);
  const theme = extendTheme({ fonts: { heading: "NanumSquare" } });

  return (
    <>
      <Nav />
      <PostUploadBtn />
      <div className="cards">
        {cards.map((card, i) => {
          return (
            <ChakraProvider theme={theme}>
              <Card maxW="sm" className="cardStyle">
                {/* <div class="bomb" ></div> */}
                <CardBody key={i}>
                  <div class="badge_right">
                    <Badge>
                      <div class="timer">
                        <div class="mask"></div>
                      </div>
                    </Badge>
                  </div>
                  <Image src={card.image} borderRadius="lg" />
                  <Stack mt="4" spacing="3">
                    <Heading size="md" color="#285943">
                      {card.title}
                    </Heading>
                    <Text>{card.change}</Text>
                    <Text>{card.address}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <ButtonContainer>
                      <Link to="/post" state={{ data: card }}>
                        <Button type="primary" shape="round" size="default">
                          Details
                        </Button>
                      </Link>
                      <Button
                        type="primary"
                        shape="round"
                        size="default"
                        style={{ margin: "5px" }}
                      >
                        AddToCart
                      </Button>
                    </ButtonContainer>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </ChakraProvider>
          );
        })}
      </div>
      <Sell />
    </>
  );
};

export const Sell = () => {
  const product_2 = [
    data[11],
    data[13],
    data[14],
    data[15],
    data[16],
    data[17],
    data[19],
  ];
  const [cards, setCards] = useState(product_2);
  const theme = extendTheme({ fonts: { heading: "NanumSquare" } });

  return (
    <section className="Sell">
      <div className="LikeItem">
        {cards.map((card, i) => {
          return (
            <ChakraProvider theme={theme}>
              <Card maxW="sm" className="cardStyle">
                <CardBody key={i}>
                  <Timer />
                  <Image src={card.image} borderRadius="lg" />
                  <Stack mt="4" spacing="3">
                    <Heading size="md" color="#285943">
                      {card.title}
                    </Heading>
                    <Text>{card.change}</Text>
                    <Text>{card.address}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <ButtonContainer>
                      <Link to="/post" state={{ data: card }}>
                        <Button type="primary" shape="round" size="default">
                          Details
                        </Button>
                      </Link>
                      <Button
                        type="primary"
                        shape="round"
                        size="default"
                        style={{ margin: "5px" }}
                      >
                        Add to cart
                      </Button>
                    </ButtonContainer>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </ChakraProvider>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
