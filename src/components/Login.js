import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const Login = () => {
    return (        
        <div className="justify-content-center">
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
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Enter your E-Mail adress
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
        </div>
    )
}

export default Login
