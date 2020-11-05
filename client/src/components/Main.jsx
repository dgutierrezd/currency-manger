import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Currencies from "./Currencies";
import ShowMoney from "./ShowMoney";

const Main = () => {
  return (
    <Container
      className="justify-content-center text-center"
      style={{ margin: "auto" }}
    >
      <h1>Currency Manager</h1>
      <Currencies />
    </Container>
  );
};

export default Main;
