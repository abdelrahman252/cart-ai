import React from "react";
import { Grid, Grow, Typography } from "@mui/material";
import styled from "styled-components";
import Cart from "./Cart";
const infoCards = [
  {
    color: "#00838f",
    title: "instructions :",
    text: "show me the menu",
    info: "you can ask about the price or add the (item) to the cart  ",
    sort: "sort the items by name or category or price",
  },
];
const BeforeShow = ({ cart, products, active }) => {
  if (!products?.length) {
    return (
      <Grow in>
        <GirdD container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <InfoCard item xs={12} sm={6} md={4} lg={3} key={infoCard.title}>
              <CardC style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                <Typography variant="h6" component="h6">
                  {infoCard.info}
                  <br />
                  or
                  <br /> {infoCard.sort}
                </Typography>
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </CardC>
            </InfoCard>
          ))}
        </GirdD>
      </Grow>
    );
  }
  return (
    <Grow in>
      <GirdD container alignItems="stretch" spacing={3}>
        <InfoData>
          <Cart products={products}  cart={cart} active={active} />
        </InfoData>
      </GirdD>
    </Grow>
  );
};

export default BeforeShow;
const GirdD = styled(Grid)({
  padding: "0 5%",
  width: "100%",
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const InfoCard = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});
const CardC = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "45vh",
  padding: "10%",
  borderRadius: 10,
  color: "white",
});

const InfoData = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  margin: "20px 10px",
  justifyContent: "center",
});
