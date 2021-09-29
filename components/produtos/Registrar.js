import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleSelect">Produto</Label>
        <Input type="select" name="select" id="exampleSelect">
            <option>Mesa</option>
            <option>Cadeira</option>
            <option>Jogo</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="exampleAddress">Quantidade</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>

      <FormGroup>
        <Label for="exampleAddress">Endereço</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>

      <FormGroup>
        <Label for="exampleAddress2">Telefone</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>

          <FormGroup>
            <Label for="exampleCity">Dia</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        
       
          <FormGroup>
            <Label for="exampleState">Status</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>

      <Button>Registrar</Button>
    </Form>
  );
}

export default Example;