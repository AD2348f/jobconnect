import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'

const Login = () => {
    return (        
        <Card style={{ width: '90rem' }}>
          <Card.Body>
            <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
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
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="m-3">
                Submit
            </Button>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
            </Card.Body>
      </Card>  
    )
}

export default Login
