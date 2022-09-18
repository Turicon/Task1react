import { Images } from "../../Assets/images/Images"
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Search from '../Elements/Search'

import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
    // NavLink

} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={styles.header2}>
            <div className="container header2">
                <Navbar light expand="md">
                    <NavbarBrand href="/">
                        <img src={Images.logo} className={styles.header2_logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Search />
                    <Collapse isOpen={isOpen} navbar className={[styles.header_pages, ['navbar_list, header2_pages']].join(' ')}>
                        <Nav className="mr-auto" navbar >
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