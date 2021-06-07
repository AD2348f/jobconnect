import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Register = () => {
    return (        

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Companies">
                <Card style={{ width: '60rem' }} className="align-items-center">
                    <Card.Body>
                        <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <Nav.Item>

                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter your E-Mail adress</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Choose a Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                </Card>  
            </Tab>

            <Tab eventKey="profile" title="Developers">
                <Card style={{ width: '60rem' }} className="align-items-center">
                    <Card.Body>
                        <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <Nav.Item>
                
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter your E-Mail adress</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Choose a Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                 </Card>  
            </Tab>

            <Tab eventKey="contact" title="Bootcamps">
                <Card style={{ width: '60rem' }} className="align-items-center">
                    <Card.Body>
                        <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <Nav.Item>
                
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter your E-Mail adress</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Choose a Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Register
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                </Card>  
            </Tab>
        </Tabs>        
    )
}

export default Register