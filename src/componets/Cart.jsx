import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import styled from "styled-components";
import CartItems from "./CartItems";

const Cart = ({ cart, products, active }) => {
  return (
    <>
      {products.map((product, i) => (
        <CartItems product={product} i={i} active={active} key={product.name} />
      ))}
      <Span>Cart:</Span>
      {cart.map((cartItem) => (
        <>
          <CardC key={cartItem.name}>
            <CardContent style={{ height: "300px" }}>
              <CardMedia
                component="img"
                height="170"
                image={cartItem.url}
                alt={cartItem.name}
              />
              <Typography gutterBottom variant="h5" component="div">
                {cartItem.name}
              </Typography>
              <Typography
                variant="body2"
                color="secondary"
                style={{ padding: "5px 0" }}
                fontSize="18px"
              >
                Price: ${cartItem.price}
              </Typography>
              <Typography variant="body2" color="primary" fontSize="18px">
                category: {cartItem.category}
              </Typography>
            </CardContent>
          </CardC>
        </>
      ))}
    </>
  );
};

export default Cart;
const CardC = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 2px solid purple;
  margin:  10px;
  width: 300px;
  height: 350px;
 
`
const Span = styled("span")`
  font-size: 35px;
  font-weight: bold;
  color: #00838f;
  width: 100%;
  margin-top: 30px;
`