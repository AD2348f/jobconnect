import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'



const Login = () => {

    return (        

                <Card style={{ width: '60rem' }} className="align-items-center">
                    <Card.Body>
                    <Card.Title>Login to Your Area</Card.Title>
                        <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <Nav.Item>

                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className="m-3">
                                        Login
                                    </Button>
                                    
                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                </Card>  
    )
}

export default Login