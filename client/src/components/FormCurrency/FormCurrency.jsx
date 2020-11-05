import React, { useState } from "react";
import { Button, Container, Modal, Form } from "react-bootstrap";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GET_CURRENCIES } from "../../graphql/Queries";

const ADD_CURRENCY = gql`
  mutation AddCurrency(
    $name: String!
    $valor: Int!
    $date: String!
    $type: String!
  ) {
    createGasto(name: $name, valor: $valor, date: $date, type: $type) {
      id
      name
      valor
      date
      type
    }
  }
`;

const FormCurrency = (props) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const [addCurrency, { data }] = useMutation(ADD_CURRENCY, {
    refetchQueries: [{ query: GET_CURRENCIES }],
    awaitRefetchQueries: true,
  });

  const onSubmitForm = (e) => {
    let valor = parseInt(value);
    addCurrency({ variables: { name, valor, date, type } });
    props.handleClose();
  };

  return (
    <Container>
      <Modal.Body>
        <Form onSubmit={onSubmitForm}>
          <Form.Group controlId="formName">
            <Form.Label>Enter name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Ex. Hang out with friends"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formValue">
            <Form.Label>Enter the value</Form.Label>
            <Form.Control
              type="number"
              value={value}
              placeholder="Ex. 20000"
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Enter the date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              placeholder="DD/MM/YYYY"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formType">
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option>Choose the currency type</option>
              <option>Egress</option>
              <option>Entry</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" onClick={onSubmitForm}>
          Save
        </Button>
      </Modal.Footer>
    </Container>
  );
};

export default FormCurrency;
