import React from 'react';
import {Sidebar, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-sidebar-ui/dist/index.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


const input = {
 margin: '10px 0',
 padding: '10px'

}




const SideBar = () => {
  return (
    
    <div >
      <Sidebar bgColor='black' isCollapsed={false} className="mt-5">
        <Logo 
          image='https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/source.gif'
          imageName='react logo'/>
        <LogoText>React Sidebar UI</LogoText>
        <Nav>
          <NavItem>
            <NavLink href="/">
              <Item bgColor='black' >
                Dashboard
              </Item>
            </NavLink>
            <NavLink href="/produtos">
              <Item bgColor='black' >
                  Produtos
              </Item>
            </NavLink>
            <NavLink href="/">
              <Item bgColor='black' >
                  Relatorios
              </Item>
            </NavLink>
            <NavLink href="/">
              <Item bgColor='black' >
                  Produtos
              </Item>
            </NavLink>
          </NavItem>
        </Nav>
      </Sidebar>
    </div>
  )
};

export default SideBar;

            <Icon><FontAwesomeIcon icon="home" /></Icon>
