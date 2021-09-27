import React, { Component, useState } from 'react';
import { Button, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';




class Cadastro extends Component {
  state = {
    nomeproduto: '',
    valor: '',
    tipo: ''
  }
  
   onChangeInput = (field, ev) => {
    this.setState( { [field]: ev.target.value });
  }
  
   cadastrarProduto = event => {
    event.preventDefault();
    const { nomeproduto , valor , tipo } = this.state;
    Axios.post('http://localhost:8080/home' , {nomeproduto , valor , tipo} ).then(res=>{
      console.log(res);
    })
  }

  render(){
    return(
      <div>
          <Form onSubmit={this.cadastrarProduto}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="nomeproduto">Nome do Produto</Label>
                  <Input type="text" name="nomeproduto" id="nomeproduto" placeholder="Nome do Produto"
                  onChange={(ev) => this.onChangeInput("nomeproduto", ev)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="valor">Valor</Label>
                  <Input type="text" name="valor" id="valor" placeholder="valor"
                  onChange={(ev) => this.onChangeInput("valor", ev)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="tipo">Tipo</Label>
              <Input type="text" name="Tipo" id="Tipo" placeholder="Tipo"
              onChange={(ev) => this.onChangeInput("tipo", ev)}
              />
            </FormGroup>
            <Button >Cadastrar</Button>     
          </Form>
  
    </div>
    )
  }
}


export default Cadastro;