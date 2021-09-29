import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegistrarProdutos from '../Registrar';

const RegistrarProduto = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div >
      <Button color="danger" onClick={toggle}>{buttonLabel} Registar </Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Registar Produtos</ModalHeader>
        <ModalBody>
          <RegistrarProdutos ></RegistrarProdutos>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RegistrarProduto;