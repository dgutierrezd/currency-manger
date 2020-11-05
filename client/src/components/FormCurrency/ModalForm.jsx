import React from "react";
import { Container, Modal } from "react-bootstrap";
import FormCurrency from "./FormCurrency";

const ModalForm = props => {

  return (
    <Container>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.action} currency</Modal.Title>
        </Modal.Header>
        <FormCurrency gastoId={props.gastoId} handleClose={props.handleClose} />
      </Modal>
    </Container>
  );
};

export default ModalForm;
