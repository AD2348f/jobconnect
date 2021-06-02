import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Route, Switch } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <Row className="ml-2">
      <Nav.Link>
      <Icon.Facebook />
      </Nav.Link>
      <Nav.Link>
      <Icon.Twitter />
      </Nav.Link>
      <Nav.Link>
      <Icon.Instagram />
      </Nav.Link>
      <Nav.Link>
      <Icon.Github />
      </Nav.Link>
      </Row>
    </Nav.Item>
  </Nav>
    </> 
    )
}

export default Footer;
