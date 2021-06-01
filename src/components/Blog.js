import { Link } from 'react-router-dom';
import React from "react";
import useApi from '../hooks/useApi';
import Card from 'react-bootstrap/Card';



const Blog = () => {
 
const [jobadds] = useApi();
  return (
  
    <div className='App'>
      
        {jobadds.map((jobadd) => (
         
            
               
            <Card key={jobadd._id} style={{ width: '90rem' }}>
  <Card.Body>
    <Card.Title>Blogpost</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
    <img src="http://via.placeholder.com/640x360"></img>
      
    <Card.Text>
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