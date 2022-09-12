import React, { createRef, useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";

const CartItems = ({ active, i, product }) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === active && elRefs[active]) {
      scrollToRef(elRefs[active]);
    }
  }, [i, active, elRefs]);
  return (
    <CardC ref={elRefs[i]} >
      <CardContent style={{ height: "300px" }}>
        <CardMedia
          component="img"
          height="170"
          image={product.url}
          alt={product.name}
          style={{ padding: "0 0 5px 0" }}
        />
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="secondary"
          style={{ padding: "5px 0" }}
          fontSize="18px"
        >
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="primary" fontSize="18px">
          category: {product.category}
        </Typography>
      </CardContent>
    </CardC>
  );
};

export default CartItems;

const CardC = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottom: "2px solid purple",
  margin: " 10px",
  width: "300px",
  height: "350px",
});
