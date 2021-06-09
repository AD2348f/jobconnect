import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import logo from '../pictures/logo_small.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Header() { 
  const { isLoggedIn, logout } = useContext(AuthContext);
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
                  {/* <Nav.Item>
                    <Nav.Link title="Item">
                    <Link to="/createadd" style={{color:"white"}}>Create ad</Link>
                    </Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link title="Login">
                      {
                        isLoggedIn() ?
                        <Link onClick={logout} style={{color:"white"}}>Logout</Link> :
                        <Link to='login' style={{color:"white"}}>Login</Link>
                      }                    
                    </Nav.Link>
                  </Nav.Item>                  
                    {
                    isLoggedIn() ?
                    "" :
                    <Nav.Item><Nav.Link title="Register">
                      <Link to="/Register" style={{color:"white"}}>Register</Link>
                    </Nav.Link>
                  </Nav.Item>}
                  <Nav.Item>
                    <Nav.Link>
                    <Link to="/Blog" style={{color:"white"}}>Blog</Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>
                    <Link to="/User" style={{color:"white"}}>User</Link>
                    </Nav.Link>
                  </Nav.Item>
                  {
                    isLoggedIn() ?                    
                    <Nav.Item><Nav.Link title="AreaDev">
                      <Link to="/AreaDev" style={{color:"white"}}>Dev</Link>
                    </Nav.Link>
                  </Nav.Item> : ""}
                  {
                    isLoggedIn() ?                    
                    <Nav.Item><Nav.Link title="AreaComp">
                      <Link to="/AreaComp" style={{color:"white"}}>Company</Link>
                    </Nav.Link>
                  </Nav.Item> : ""}
                  {
                    isLoggedIn() ?                    
                    <Nav.Item><Nav.Link title="AreaBoot">
                      <Link to="/AreaBoot" style={{color:"white"}}>BootCamps</Link>
                    </Nav.Link>
                  </Nav.Item> : ""}                  
              </Nav>
            </Col>    
  </Row>    
</Container>                
        
    );
  }  


export default Header;


 
