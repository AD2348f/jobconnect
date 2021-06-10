import React, {useState} from 'react';
import axios from 'axios';
import useFormData from '../hooks/useForm';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialFormData = {
  addTitle: '',
  addLocation: '',
  addDesc: '',
  addContr: '',
  addWrkt: '',
  benefitsDesc: '',
  companyDesc: '',
  tasksDesc: '',
  requirementsDesc: '',
  addComp: '60b8a22f854dcfc6c66a0306'
};

const CreateAdd = () => {
  const [ formData, handleChange ] = useFormData(initialFormData)
  const [ status, setStatus ] = useState('');

  const submitAd = () => {
    const { 
      addTitle,
      addLocation,
      addDesc,
      addContr,
      addWrkt,
      addTech,
      benefitsDesc,
      companyDesc,
      tasksDesc,
      requirementsDesc,
      addComp
    } = formData;

    const newAd = {
      addTitle,
      addLocation,
      addDesc,
      addContr,
      addWrkt,
      addTech,
      addComp,
      addFull: [
        benefitsDesc,
        companyDesc,
        tasksDesc,
        requirementsDesc
      ],
      addDate: Date.now()
    }

    axios
      .post("https://jobconnect-try.herokuapp.com/jobadds", newAd)     
      .then((res) => setStatus('successfully created'))
      .catch((err) => setStatus('something went wrong'))
  };
  // http://localhost:5000/
  // https://jobconnect-try.herokuapp.com/jobadds

  return (
    <div>
      <Container className="my-5">
          <Row className="justify-content-md-center">
              <Card style={{ width: '90rem' }}>
                  <Card.Body>
                      <Row className="justify-content-md-center">
                        <Card.Title>Create a job ad</Card.Title>  
                      </Row>
                      <Row className="justify-content-md-center m-3">
                          <Form.Control 
                            style={{width: "50rem"}}
                            type="text"
                            name="addTitle"
                            onChange={handleChange}
                            placeholder="Title"
                          /><br /><br />
                      </Row> 
                      <Row className="justify-content-md-center m-3">  
                          <Form.Control
                            style={{width: "50rem"}}
                            type="text"
                            name="addLocation"
                            onChange={handleChange}
                            placeholder="Location"
                          /><br /><br />
                      </Row> 
                      <Row className="justify-content-md-center m-3">
                          <Form.Control
                            style={{width: "50rem"}}
                            rows={5}
                            name="addDesc"
                            onChange={handleChange}
                            placeholder="Write a brief description for this role"
                          /><br /><br />
                      </Row>                 
                      <Row className="justify-content-md-center m-3">
                          <Form.Control
                            style={{width: "50rem"}}
                            rows={5}
                            name="addTech"
                            onChange={handleChange}
                            placeholder="What Techstack is required for this role?"
                          /><br /><br />
                      </Row> 
                      <Row className="justify-content-md-center m-3">
                          <Form.Control
                            style={{width: "50rem"}}
                            rows={5}
                            name="benefitsDesc"
                            onChange={handleChange}
                            placeholder="Which benefits can your company offer for this role?"
                          /><br /><br />
                      </Row>
                      <Row className="justify-content-md-center m-3">
                          <Form.Control
                            style={{width: "50rem"}}
                            rows={5}
                            name="companyDesc"
                            onChange={handleChange}
                            placeholder="Write a brief description for your company"
                          /><br /><br />
                      </Row>
                      <Row className="justify-content-md-center m-3">
                          <Form.Control
                            style={{width: "50rem"}}
                            rows={5}
                            name="tasksDesc"
                            onChange={handleChange}
                            placeholder="Write a brief description for the tasks of the job"
                          /><br /><br />
                      </Row>
                      <Row className="justify-content-md-center m-3">
                          <Form.Control
                            style={{width: "50rem"}}
                            rows={5}
                            name="requirementsDesc"
                            onChange={handleChange}
                            placeholder="Write a brief description for the requirement of the applicant"
                          /> <br /><br />
                      </Row>
                      <Row className="justify-content-md-center m-3"> 
                        <Form.Control
                              as="select"
                              className="mr-sm-2"
                              id="inlineFormCustomSelect"
                              custom
                              style={{width: "50rem"}}
                              name="addContr"
                              onChange={handleChange}
                            >
                            <option value="0">Contract type</option>
                            <option value="Limited">Limited</option>
                            <option value="Permanent">Permanent</option>                  
                            </Form.Control>
                            <br /><br /> 
                      </Row> 
                      <Row className="justify-content-md-center m-3">                  
                          <Form.Control
                              as="select"
                              className="mr-sm-2"
                              id="inlineFormCustomSelect"
                              custom
                              style={{width: "50rem"}}
                              name="addWrkt"
                              onChange={handleChange}
                            >
                            <option value="0">Working Time</option>
                            <option value="Fulltime">Fulltime</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote/Home Office">Remote/Home Office</option>
                            </Form.Control>
                            <br /><br />
                      </Row> 
                      <Row className="justify-content-md-center">
                        <Button variant="outline-secondary" id="button-addon2" onClick={submitAd}>
                          Create ad
                        </Button>                          
                      </Row>        
                  </Card.Body>
              </Card>
        </Row>
      </Container> 
    </div>       
  )
}

export default CreateAdd;