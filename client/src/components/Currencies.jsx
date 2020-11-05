import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { Container, Button, Table, Row, Col } from "react-bootstrap";
import ModalForm from "./FormCurrency/ModalForm";
import { GET_CURRENCIES, GET_EGRESSES, GET_ENTRIES } from "../graphql/Queries";
import { DELETE_MUTATION } from "../graphql/Mutations";

/* import { AiOutlinePlus } from "react-icons/ai"; */
import { BsTrash, BsPlus } from "react-icons/bs";
import ShowMoney from "./ShowMoney";

const Currencies = (props) => {
  const [show, setShow] = useState(false);
  const [currencies, setCurrencies] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, error, data } = useQuery(GET_CURRENCIES);

  useEffect(() => {
    setCurrencies(data?.allGastos);
  }, [data]);

  const [deleteCurrency] = useMutation(DELETE_MUTATION, {
    refetchQueries: [{ query: GET_CURRENCIES }],
    awaitRefetchQueries: true,
  });

  const deleteItem = async (id) => {
    let { data } = await deleteCurrency({ variables: { id } });
    console.log(data);
  };

  return (
    <Container>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <ModalForm action="Create" show={show} handleClose={handleClose} />
            <Button
              style={{ float: "left" }}
              className="mb-3"
              onClick={handleShow}
            >
              <BsPlus size={20} color="#ffff" />
            </Button>
            {currencies?.length > 0 ? (
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currencies?.map((gasto) => {
                    let id = parseInt(gasto.id);
                    return (
                      <tr key={gasto.id}>
                        <td>{gasto.name}</td>
                        <td>{gasto.valor}</td>
                        <td>{gasto.type}</td>
                        <td>{gasto.date}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => deleteItem(id)}
                          >
                            <BsTrash size={20} />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <h3>No hay gastos registrados</h3>
            )}
          </Col>
          <Col md={4}>
            <ShowMoney />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Currencies;
