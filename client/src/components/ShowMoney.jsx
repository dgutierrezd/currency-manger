import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { GET_CURRENCIES, GET_EGRESSES } from "../graphql/Queries";

const ShowMoney = (props) => {
  const [egresses, setEgresses] = useState(0);
  const [entries, setEntries] = useState(0);

  const { loading, error, data } = useQuery(GET_CURRENCIES);

  useEffect(() => {
    getValues();
  });

  const valueEntries = [];
  const valueEgresses = [];

  const getValues = () => {
    if (data?.allGastos) {
      for (const gasto of data?.allGastos) {
        gasto.type === "Egress"
          ? valueEgresses.push(gasto.valor)
          : valueEntries.push(gasto.valor);
      }
      setEntries(valueEntries.reduce((a, b) => a + b, 0));
      setEgresses(valueEgresses.reduce((a, b) => a + b, 0));
    }
  };

  return (
    <Container>
      <h5>My Money</h5>
      <p style={{ color: "red" }}>{egresses}</p>
      <p style={{ color: "green" }}>{entries}</p>
      <hr />
      <p>{entries - egresses}</p>
    </Container>
  );
};

export default ShowMoney;
