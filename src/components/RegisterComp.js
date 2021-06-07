import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



function RegisterComp() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
          <Form.Group as={Col}  controlId="validationCustom01">
            <Form.Label>Name of Your Company</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name + GmbH, Inc. etc"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}  controlId="validationCustom02">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Street, Number etc."
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        
        <Form.Group as={Col}  controlId="validationCustom02">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Additional Information if necessary"
              defaultValue=""
            />
          </Form.Group>
          
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    );
  }
  
export default RegisterComp;


