import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Route, Switch } from 'react-router-dom';

const Footer = () => {
    return (        
    <>
        <Nav className="justify-content-center" >
    <Nav.Item>
      <Nav.Link>
        <Link to="/AboutUs">About Us</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link>
        <Link to="/LegalInfo">Legal Info</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link>
        <Link to="/GDPR">GDPR</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled">
        <img src="#"></img>
        <img src="#"></img>
        <img src="#"></img>
      </Nav.Link>
    </Nav.Item>
  </Nav>
    </> 
    )
}

export default Footer;
