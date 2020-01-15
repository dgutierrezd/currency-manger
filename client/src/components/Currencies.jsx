import React, {useState} from "react";

import { Container, Button, Table } from "react-bootstrap";
import FormCurrency from "./FormCurrency";

const Currencies = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, allGastos } = props.data;

  if (loading) return <h3>Loading...</h3>;

  return (
    <Container className="mt-5">
      <FormCurrency show={show} handleClose={handleClose} />
      <Button style={{ float: "left" }} className="mb-3" onClick={handleShow}>
        Add new currency
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Value</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allGastos?.map(gasto => {
            return (
              <tr key={gasto.id}>
                <td>{gasto.id}</td>
                <td>{gasto.name}</td>
                <td>{gasto.valor}</td>
                <td>{gasto.type}</td>
                <td>
                  <Button variant="primary" className="mr-2">
                    Update
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Currencies;
