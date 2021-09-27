import React from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import SideBar from './sideBar';
import { Button, Table , Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Modal from '../components/produtos/modal/Modal';


const altura = {
    height: '100vh',
    marginLeft: '13%'
    
  };
  
const Produtos = (data ) => (
  <div  style={altura}> 
        <Menu> </Menu>
        <SideBar></SideBar>
        <div className=" h-100 m-3"> 
          <div>
            <Modal>
            </Modal>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                  { data.response.home.map(home => (
                        <tr>
                          <td className="d-none">{home._id}</td>
                          <td>{home.nomeproduto}</td>
                          <td>{home.valor}</td>
                          <td>{home.tipo}</td>
                        </tr>
                    ))
                  }   
                <Pagination size="sm" aria-label="Page navigation example">
                  <PaginationItem>
                    <PaginationLink first href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink last href="#" />
                  </PaginationItem>
                </Pagination>
              </tbody>
            </Table>
          </div>  
        </div>
    </div>
)

//recebendo dados da api
Produtos.getInitialProps = async () => {
  var response = await axios.get('http://localhost:8080/home');

  return {response: response.data }
}
export default Produtos;