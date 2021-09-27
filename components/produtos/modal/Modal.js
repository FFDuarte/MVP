import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CadastroProdutos from '../Cadastro';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel} Cadastrar Produto</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <CadastroProdutos ></CadastroProdutos>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;