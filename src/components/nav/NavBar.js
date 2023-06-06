import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './style.scss';
import img from '../../assets/img.png'
import { Button } from 'react-bootstrap';
function NavBar() {
    return (
      <div className='nav'>
        <Nav className='nav-item'
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <img src={img} className='img'/>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Works</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>
        <Button> Let's Talk</Button>
        </Nav>
        </div>
      );
      
}

export default NavBar
