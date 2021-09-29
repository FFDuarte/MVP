import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button,Table, Row, Col, Alert
} from 'reactstrap';
import ModalRegistar from '../components/produtos/modal/ModalRegistar'
import Grafico from './grafico/Grafico'
import React, { useState , useEffect } from 'react';
import axios from 'axios';

const altura = {
  height: '100vh',
  marginLeft: '13%',
  
};
const mystyle = {
  marginLeft: '10px',
  color: "green",
  fontFamily: "Arial",
 
};

const boxEsquerdo = {
  padding: '20px',
  height: '100vh',
};
const boxDireito = {

  height: '100vh',
};

const modalRegist = {

  margin: '0  10px 20px 0'
};

const api = axios.create({
  baseURL: "http://localhost:8080",
});


function Home() {

  const [data, setUser] = useState([]);

  useEffect(() => {
    api
      .get("/produto")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
    
    

  return (
    <div  style={altura}> 
      <Menu> </Menu>
      <div style={mystyle}>
          <Row>
            <Col xs={12} md={8} style={boxEsquerdo}> 
              <div style={modalRegist}>              
                <ModalRegistar > Registrar Produto </ModalRegistar>
              </div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Endereço</th>
                    <th>Telefone</th>
                    <th>Dia</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                       {console.log(data)}
                      
                      <tr>
                        <td>{data._id}</td>
                      </tr>
                </tbody>
              </Table>
            </Col>
            <Col xs={6} md={4}  style={boxDireito}>
              <Grafico></Grafico>
            </Col>
          </Row>
      </div>
    </div>
  )
      
}

export default Home;