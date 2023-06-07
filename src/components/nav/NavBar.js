import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './style.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
function NavBar() {
    return (
      <div className='fixed;'>
        <Nav className='nav-item'
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <Nav.Item>
          <HashLink to ='/' className='icon'><i class="fa-solid fa-code"></i></HashLink>
        </Nav.Item>
          <Nav.Item>
            <HashLink to="/">Home</HashLink>
          </Nav.Item>
          <Nav.Item>
            <HashLink to="#services" smooth>Services</HashLink>
          </Nav.Item>
          <Nav.Item>
            <Link to="link-2">Works</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="link-2">Contact</Link>
          </Nav.Item>
        <Button> Let's Talk</Button>
        </Nav>
        </div>
        
      );
      
}

export default NavBar
