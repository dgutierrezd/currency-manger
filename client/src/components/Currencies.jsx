import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import { Container, Button, Table } from "react-bootstrap";
import ModalForm from "./FormCurrency/ModalForm";

const DELETE_MUTATION = gql`
  mutation DeleteMutation($id: Int!) {
    deleteGasto(id: $id)
  }
`;

const Currencies = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const refreshPage = () => {
    window.location.reload();
  };

  const { loading, allGastos } = props.data;

  if (loading) return <h3>Loading...</h3>;

  return (
    <Container className="mt-5">
      <ModalForm
        action="Create"
        show={show}
        handleClose={handleClose}
        refresh={refreshPage}
      />
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
            let id = parseInt(gasto.id)
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
                  <Mutation mutation={DELETE_MUTATION} variables={{ id }}>
                    {deleteMutation => (
                      <Button variant="danger" onClick={deleteMutation}>
                        Delete
                      </Button>
                    )}
                  </Mutation>
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
