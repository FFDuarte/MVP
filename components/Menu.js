import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
   Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (

        <Navbar color="light" light  expand="md">
            <Col xs="4"> 
              
            </Col>
            <Collapse isOpen={isOpen} navbar className="">
              <Col  >
                <Nav  navbar>
                  <NavItem  className="me-5">
                    <NavLink href="#">Dia/mes/ano</NavLink>
                  </NavItem>
                  <NavItem  className="me-5">
                    <NavLink href="#">Hora</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col  xs="auto" >
                <Nav  navbar>
                  <NavItem  className="me-5">
                      <NavLink href="/">Home</NavLink>
                  </NavItem>
                      <NavItem className="me-5">
                  <NavLink href="sobre">Sobre</NavLink>
                  </NavItem>
                  <NavItem className=" me-5 ">
                      <NavLink href="contato">Contato</NavLink>
                  </NavItem>
                </Nav> 
              </Col>
              <Col xs="2">
                <Nav navbar> 
                  <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Col>
        </Collapse>
      </Navbar>
   
  );
}

export default Menu;