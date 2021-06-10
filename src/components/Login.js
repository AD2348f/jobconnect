import React, {useContext} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import useFormData from '../useFormData';
import { Link } from 'react-router-dom';

const initialFormData = {
    email: '',
    password: ''
  };
  
  const Login = () => {
    const { login, isLoggedIn } = useContext(AuthContext)
    const [ formData, handleChange ] = useFormData(initialFormData)
  
    if (isLoggedIn()) return <Redirect to="/"/>

    return (      
          

                <Card style={{ width: '60rem' }} className="align-items-center mt-5 mb-5">
                    <Card.Body>
                    <Card.Title>Login to Your Area</Card.Title>
                        <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <Nav.Item>

                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            name="email"
                                            onChange={handleChange} 
                                            placeholder="Enter email" 
                                            style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                        type="password"
                                        name="password"
                                        onChange={handleChange} 
                                        placeholder="Password" 
                                        style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Button 
                                    variant="primary" 
                                    className="m-3"
                                    onClick={() => login(formData)}
                                    >
                                        Login
                                    </Button>
                                    
                                    <Button variant="primary" type="submit">
                                        <Link to="/Register" style={{color:"white"}}>Register</Link>
                                    </Button>
                                </Form>

                            </Nav.Item>
                        </Nav>          
                    </Card.Body>
                </Card>  
    )
}

export default Login