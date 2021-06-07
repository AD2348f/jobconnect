import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import logo from '../pictures/logo_small.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Header() { 
    return (      
      
        <Container fluid
        style={{backgroundColor: "blue"}}
        >
          <Row>
            <Col>
            <img src={logo} className="logo"></img>
            </Col>
            <Col  xs={4}></Col>
            <Col md="auto" >
              <Nav className="justify-content-center" >
              <Nav.Item  >
                    <Nav.Link title="Item" >
                    <Link to="/" style={{color:"white"}}>Home</Link>   
                    </Nav.Link>
                  </Nav.Item>
                <Nav.Item>
                    <Nav.Link title="Item">
                    <Link to="/search"style={{color:"white"}}>Search</Link>
                    </Nav.Link>
                  </Nav.Item>                  
                  <Nav.Item>
                    <Nav.Link title="Item">
                    <Link to="/createadd" style={{color:"white"}}>Create ad</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link title="Login">
                    <Link to="/Login" style={{color:"white"}}>Login</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link title="Register">
                    <Link to="/Register" style={{color:"white"}}>Register</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link>
                  <Link to="/Blog" style={{color:"white"}}>Blog</Link>
                  </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                  <Nav.Link>
                  <Link to="/UserInterface" style={{color:"white"}}>Dev</Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>    
  </Row>  
</Container>                
        
    );
  }  


export default Header;


 
