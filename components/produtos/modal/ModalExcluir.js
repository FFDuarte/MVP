import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CadastroProdutos from '../Excluir';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel} Excluir Produto pelo ID</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Cadastro de Produto</ModalHeader>
        <ModalBody>
          <CadastroProdutos ></CadastroProdutos>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;