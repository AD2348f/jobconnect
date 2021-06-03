import React from 'react';
import Card from 'react-bootstrap/Card'
import SidebarLeft from './SidebarLeft';
import { Link } from 'react-router-dom';
import NoResult from './Noresult';

const AdSearchList = ({adList=[]}) => {
  return (
    <>
    <SidebarLeft />
    { adList.map((data,index) => {         
        if (data) {
          return (
            <div key={index}>
              <Card key={data._id} style={{ width: '90rem' }} className="m-3">
              <Card.Body className="ml-5">
                <Card.Title>{data.addTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.addLocation}</Card.Subtitle>
                <Card.Text>
                  {data.addDesc}    
                </Card.Text>
                <Card.Text>
                  {data.addTech}
                </Card.Text>
                <Card.Link href="#"><Link to={`./jobadd/${data._id}`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>
	    </div>	
    	   )	
    	 }    	
    }) }
    </>
  );
}

export default AdSearchList