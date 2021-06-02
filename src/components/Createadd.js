import React, {useState} from 'react';
import axios from 'axios';
import useFormData from '../hooks/useForm';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialFormData = {
  addTitle: '',
  addLocation: '',
  addDesc: '',
  benefitsDesc: '',
  companyDesc: '',
  tasksDesc: '',
  requirementsDesc: ''
};

const CreateAdd = () => {
  const [ formData, handleChange ] = useFormData(initialFormData)
  const [ status, setStatus ] = useState('');

  const submitAd = () => {
    const { 
      addTitle,
      addLocation,
      addDesc,
      benefitsDesc,
      companyDesc,
      tasksDesc,
      requirementsDesc
    } = formData;

    const newAd = {
      addTitle,
      addLocation,
      addDesc,
      addContr: 'permanent',
      addWrkt: 'full-time',
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
      <Container>
  <Row className="justify-content-md-center">
      <Card style={{ width: '90rem' }}>
          <Card.Body>
          <Row className="justify-content-md-center">
            <Card.Title>Create a jobad</Card.Title>  
          </Row>          
            <Card.Text >
            <Row className="justify-content-md-center m-3">
                <input 
                  style={{width: "50rem"}}
                  type="text"
                  name="addTitle"
                  onChange={handleChange}
                  placeholder="Title"
                /><br /><br />
                </Row> 
                <Row className="justify-content-md-center m-3">  
                <input
                  style={{width: "50rem"}}
                  type="text"
                  name="addLocation"
                  onChange={handleChange}
                  placeholder="Location"
                /><br /><br />
                </Row> 
                <Row className="justify-content-md-center m-3">
                <textarea
                  style={{width: "50rem"}}
                  rows={5}
                  name="addDesc"
                  onChange={handleChange}
                  placeholder="Write a brief description for this role"
                /><br /><br />
                </Row> 
                <Row className="justify-content-md-center m-3">
                <textarea
                  style={{width: "50rem"}}
                  rows={5}
                  name="benefitsDesc"
                  onChange={handleChange}
                  placeholder="Which benefits can your company offer for this role?"
                /><br /><br />
                </Row>
                <Row className="justify-content-md-center">
                <button onClick={submitAd}>Create Ad</button>
                </Row>  
            </Card.Text>               
          </Card.Body>
      </Card>
      </Row>
      </Container> 
    </div>       
  )
}

export default CreateAdd;