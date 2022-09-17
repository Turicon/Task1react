
import { Images } from "../Images"
import styles from './Header.module.css'
import {NavLink  } from 'react-router-dom'

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem

} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div  className="container">
      <Navbar light expand="md">
      <NavbarBrand href="/"><img src={Images.logo} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className={[styles.header_pages, ['navbar_list']].join(' ') }>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/developers'>For Developers</NavLink>
            </NavItem>
          </Nav>
     
        </Collapse>
      </Navbar>
      </div>
    </div>
  );
}

export default Header;