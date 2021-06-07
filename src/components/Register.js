import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { useHistory } from 'react-router-dom';


const Register = () => {

    const history = useHistory();
    const handleClick = () => history.push('/RegisterDev');
    const handleClickOne = () => history.push('/RegisterComp');
    const handleClickTwo = () => history.push('/RegisterBoot');

    return (        

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="align-items-center mt-5">
            <Tab eventKey="home" title="Companies" className="mb-5">
                <Card style={{ width: '60rem' }} className="align-items-center mb-5">
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

                                    <Button variant="primary" type="submit" onClick={handleClickOne}>
                                        Proceed
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                </Card>  
            </Tab>

            <Tab eventKey="profile" title="Developers" className="mb-5">
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

                                    <Button variant="primary" type="submit" onClick={handleClick}>
                                        Proceed
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                 </Card>  
            </Tab>

            <Tab eventKey="contact" title="Bootcamps" className="mb-5">
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

                                    <Button variant="primary" type="submit" onClick={handleClickTwo}>
                                        Proceed
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