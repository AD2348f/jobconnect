import React, {useState} from 'react';
import axios from 'axios';

import useFormData from '../hooks/useForm';

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

  return (
    <div>
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
    </div>
  )
}

export default CreateAdd;