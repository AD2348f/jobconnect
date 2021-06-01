import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import logo from '../pictures/logo_small.png'


function Header() { 
    return (      
      <Nav className="justify-content-center" >
        <img src={logo} className="logo"></img>         
        <Nav.Item>
          <Nav.Link title="Item">
          <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link title="Item">
          <Link to="/createadd">Create ad</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link title="Login">
          <Link to="/Login">Login</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link title="Register">
          <Link to="/Register">Register</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
          <Link to="/Blog">Blog</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }  


export default Header;


 
