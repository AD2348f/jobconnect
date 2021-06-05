import { Link } from 'react-router-dom';
import React from "react";
import useApi from '../hooks/useApi';
import Card from 'react-bootstrap/Card'
import SidebarLeft from '../components/SidebarLeft';

const Jobadds = () => {
 
const [jobadds] = useApi();
  return (  
    <div className='App'>
      <SidebarLeft />
        {jobadds.map((jobadd) => (
            <Card key={jobadd._id} style={{ width: '90rem' }} className="m-3">
              <Card.Body className="ml-5">
                <Card.Title>{jobadd.addTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{jobadd.addLocation}</Card.Subtitle>
                <Card.Text>
                  {jobadd.addDesc}    
                </Card.Text>
                <Card.Text>
                  {jobadd.addTech}
                </Card.Text>
                <Card.Link href="#"><Link to={`/jobadd/${jobadd._id}`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>
        ))} 
    </div>
  );
 };

export default Jobadds;