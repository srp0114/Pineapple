import React, { useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Button } from "antd";
import { Global } from "@emotion/react";
import data from "../data.js";
import "../style/Shop.css";
import { Link } from "react-router-dom";
import Nav from "../layout/Nav";
import PostUploadBtn from "../layout/PostUploadBtn";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import Timer from "./Timer";

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

const Shop = () => {
  const [cards, setCards] = useState(data);
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
    </>
  );
};

export default Shop;
