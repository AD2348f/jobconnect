import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Link, Route, Switch } from "react-router-dom";



const Singlejobadd = () => {
  //const data = Jobadds;
  //const [jobadds] = useApi();
  
const { id } = useParams();

const [jobadd, setJobAdd] = useState([]);
const [loader, setLoader] = useState(false);
const url = "https://jobconnect-try.herokuapp.com/jobadds";

useEffect(() => { fetchJobAdd();
    }, []);

const fetchJobAdd = async() => {
    setLoader(true);
    await Axios.get(`${url}/${id}`)
    .then((response) => setJobAdd(response.data.data))
    .catch((error) => console.log(error));
    setLoader(false)
}   

console.log(jobadd)

  return (
    <div className="App__Singleoffer">                  
      <Card key={jobadd._id} style={{ width: '90rem' }} className="mt-5">
          <Card.Body>
            <Card.Title>{jobadd.addTitle}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{jobadd.addLocation}</Card.Subtitle>
            <Card.Text>
            {jobadd.addFull}    
            </Card.Text>
            <Card.Text>
            {jobadd.addTech}
            </Card.Text>
            <Link to="/">Back</Link>               
          </Card.Body>          
      </Card>  
    </div>
      )  
}



export default Singlejobadd;
