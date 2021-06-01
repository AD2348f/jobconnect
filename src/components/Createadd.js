import React, {useState} from 'react';
import axios from 'axios';
import useFormData from '../hooks/useForm';
import Card from 'react-bootstrap/Card'

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
      .post("http://localhost:5000/jobadds", newAd)     
      .then((res) => setStatus('successfully created'))
      .catch((err) => setStatus('something went wrong'))
  };
  // http://localhost:5000/
  // https://jobconnect-try.herokuapp.com/jobadds

  return (
    <div>
      <Card style={{ width: '90rem' }}>
          <Card.Body>
            <Card.Title>Create a jobad</Card.Title>            
            <Card.Text>
                <input
                  type="text"
                  name="addTitle"
                  onChange={handleChange}
                  placeholder="Title"
                /><br /><br />
                <input
                  type="text"
                  name="addLocation"
                  onChange={handleChange}
                  placeholder="Location"
                /><br /><br />
                <textarea
                  rows={5}
                  name="addDesc"
                  onChange={handleChange}
                  placeholder="Write a brief description for this role"
                /><br /><br />
                <textarea
                  rows={5}
                  name="benefitsDesc"
                  onChange={handleChange}
                  placeholder="Which benefits can your company offer for this role?"
                /><br /><br />
                <button onClick={submitAd}>Create Ad</button>
            </Card.Text>               
          </Card.Body>
      </Card>
    </div>    
  )
}

export default CreateAdd;