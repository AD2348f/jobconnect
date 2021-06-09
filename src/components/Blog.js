import { Link } from 'react-router-dom';
import React from "react";
import useApi from '../hooks/useApi';
import Card from 'react-bootstrap/Card';




const Blog = () => {
 
const [jobadds] = useApi();
  return (
  
    <div className='App'>
      
        {jobadds.map((jobadd) => (
            
            <Card key={jobadd._id} style={{ width: '90rem' }} className="m-3">
              <Card.Body >
                <Card.Title>Blogpost</Card.Title>
                <Card.Subtitle className="mb-2 text-muted m-3">Subtitle</Card.Subtitle>
                <img src="http://via.placeholder.com/640x360"></img>
                  
                <Card.Text className="my-3">
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText   
                TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </Card.Text>    
                <Card.Text>
                #Hashtag
                </Card.Text>
                <Card.Link href="#"><Link to={`/jobadd/${jobadd._id}`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>          
          ))}   
    </div>
  );
 };

export default Blog;