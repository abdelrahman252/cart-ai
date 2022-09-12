import { useEffect, useState } from "react";
import "./App.css";

import alanBtn from "@alan-ai/alan-sdk-web";
import alan from "./img/alan.webp";
import styled from "styled-components";
import BeforeShow from "./componets/BeforeShow";

function App() {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(0);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    alanBtn({
      key: "0edc151d5c314051a036d845edf4075a2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "getMenu") {
          setProducts(commandData.data);
          setActive(-1);
        } else if (commandData.command === "addToCart") {
          setCart((currentCart) => [...currentCart, commandData.data]);
        } else if (commandData === "highlight") {
          setActive((prevActive) => prevActive + 1);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <Div>
        <Image src={alan} alt="logo" />
      </Div>
      <BeforeShow products={products} cart={cart} active={active} />
    </div>
  );
}

export default App;
const Div = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: "column-reverse";
    text-align: "center";
  }
`;
const Image = styled.img`
  height: 30vmin;
  width: 45%;
  padding: 0 5%;
  margin: 3% 0;
  border-radius: 17%;
  @media (max-width: 767px) {
    height: 35vmin;
    width: 80%;
  }
`;
