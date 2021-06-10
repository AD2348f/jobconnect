import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Link, Route, Switch } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const Singlejobadd = () => {
  //const data = Jobadds;
  //const [jobadds] = useApi();
  
const { id } = useParams();

const [jobadd, setJobAdd] = useState([]);
const [loader, setLoader] = useState(true);
const url = "https://jobconnect-try.herokuapp.com/jobadds";

useEffect(() => { fetchJobAdd();
    }, []);

const fetchJobAdd = async() => {
    setLoader(true);
    await Axios.get(`${url}/${id}`)
    .then((response) => setJobAdd(response.data.data))
    .catch((error) => console.log(error))
    .finally(()=>setLoader(false))    
}   

// const date = new Date(jobadd.addDate);

// const formattedDate = format (date, "yyyy-MM-dd");

console.log(jobadd)
  return !loader && (
    <div className="App__Singleoffer">                  
      <Card key={jobadd._id} style={{ width: '90rem' }} className="mt-5" md="auto">
          <Card.Body>
            <h1>
            <Card.Title class="font-weight-bold">{jobadd.addTitle}</Card.Title>
            </h1>
            <Card.Subtitle className="mb-2 text-muted" class="font-weight-bold">
              <Container>
                <Row className="mb-3" md="auto">
                <Col md="auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                   <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                   <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg> Location: {jobadd.addLocation}
                </Col> 
                <Col md="auto">
                <Icon.Calendar /> Posted: {moment(jobadd.addDate).format('MMMM Do YYYY, h:mm a')}   
                </Col> 
                <Col md="auto">
                  <Icon.Building /> Company: {jobadd.addComp?.name} 
                </Col>
                <Col md="auto">                 
                  <Icon.Clock /> Workingtime: {jobadd.addWrkt}
                </Col>    
                <Col md="auto">
                <Icon.Briefcase /> Contract: {jobadd.addContr}
                </Col>
                </Row>
              </Container>
            </Card.Subtitle>
            <Card.Text>
                      
            <Card.Text class="font-weight-bold">Our company:</Card.Text>            
            {jobadd.addFull[0]} 
            <br /><br />
            <Card.Text class="font-weight-bold">Your responsibilities:</Card.Text>  
            {jobadd.addFull[2]}  
            <br /><br />
            <Card.Text class="font-weight-bold">Your profile:</Card.Text>
            {jobadd.addFull[3]}  
            <br /><br />
            <Card.Text class="font-weight-bold">We offer:</Card.Text>                           
            {jobadd.addFull[1]}
            <br /><br /> 

            </Card.Text>
            <Card.Text class="font-weight-bold">
              Techstack: {jobadd.addTech}
            </Card.Text>
            <Row>            
            <Button variant="outline-primary" className="mx-3"><Link to="/search">Back</Link></Button>            
            <Button variant="outline-primary" className="mx-3">Apply</Button>            
            <Button variant="outline-primary" className="mx-3">Save <Icon.Bookmark /></Button>            
            </Row>
          </Card.Body>          
      </Card>  
    </div>
      )  
}



export default Singlejobadd;
