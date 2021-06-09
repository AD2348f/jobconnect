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
    <Container fluid 
        style={{backgroundColor: "blue"       
        }}        >
        <Nav className="justify-content-center"  >
    <Nav.Item >
      <Nav.Link>
        <Link to="/AboutUs" style={{color:"white"}}>About Us</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link>
        <Link to="/LegalInfo" style={{color:"white"}}>Legal Info</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link>
        <Link to="/GDPR" style={{color:"white"}}>GDPR</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Row className="ml-2">
      <Nav.Link>
      <Icon.Facebook style={{color:"white"}} />
      </Nav.Link>
      <Nav.Link>
      <Icon.Twitter style={{color:"white"}}/>
      </Nav.Link>
      <Nav.Link>
      <Icon.Instagram style={{color:"white"}}/>
      </Nav.Link>
      <Nav.Link>
      <Icon.Github style={{color:"white"}}/>
      </Nav.Link>
      </Row>
    </Nav.Item>
  </Nav>
  </Container>    
  <Container fluid style={{backgroundColor: "lightblue"}} className="pb-5" >
          <Row >
            
          </Row>

  </Container>
  </>
    )
}

export default Footer;
