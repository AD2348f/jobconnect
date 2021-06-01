import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'

const Register = () => {
    return (        
        <Card style={{ width: '90rem' }}>
          <Card.Body>
            <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1" href="">Coder</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Bootcamp</Nav.Link>
            </Nav.Item>
            </Nav>

            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter your E-Mail adress</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Choose a Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="primary" type="submit">
                Login
            </Button>
            </Form>
            </Card.Body>
      </Card>  
    )
}

export default Register