import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useHistory } from 'react-router-dom';
import useFormData from '../useFormData';
import { AuthContext } from '../AuthContext';
import '../css/HeightContainer.css'

const initialFormData = {
    email: '',
    password: '',
    username: '',
    role: 'Company'
  }


const Register = () => {

    const [ formData, handleChange ] = useFormData(initialFormData)
    const { register, isLoggedIn } = useContext(AuthContext);

    const history = useHistory();
    const handleClick = () => history.push('/RegisterDev');
    const handleClickOne = () => history.push('/RegisterComp');
    const handleClickTwo = () => history.push('/RegisterBoot');

    if (isLoggedIn()) return <Redirect to='/' />

    return (        

        <div className="all-height">
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

            <Tab eventKey="profile" title="Developeras" className="mb-5">
                <Card style={{ width: '60rem' }} className="align-items-center">
                    <Card.Body>
                        <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
                            <Nav.Item>
                
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter your E-Mail adress</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleChange} 
                                        style={{ width: '20rem' }}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Choose a Username</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Username"
                                        name="username"
                                        onChange={handleChange} 
                                        style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Choose a Password</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange} 
                                        style={{ width: '20rem' }}/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }}/>
                                    </Form.Group>
                                   

                                    <Button variant="primary" onClick={() => register(formData)}>
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
    </div>       
    )
}


// Below: Tryout org code delete later --------------
{/* <>
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={() => register(formData)}>Register</button>
    </>
  )
} */}

export default Register