import { Link } from 'react-router-dom';
import React from "react";
// import useApi from '../hooks/useApi';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Pagination from 'react-bootstrap/Pagination'


const Blog = () => {
 
// const [jobadds] = useApi();
  return (
  
    // // <div className='App'>
      
    //     {/* {jobadds.map((jobadd) => ( */}
    //       {/* key={jobadd._id} */}

          <Form style={{ width: '90rem' }} className="m-3">
            <Card  style={{ width: '90rem' }} className="m-3">
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
                <Card.Link href="#"><Link to={`/BlogSingle`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>          


            <Card  style={{ width: '90rem' }} className="m-3">
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
                <Card.Link href="#"><Link to={`/BlogSingleOne`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>  

            <Card  style={{ width: '90rem' }} className="m-3">
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
                <Card.Link href="#"><Link to={`/BlogSingleTwo`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>  

            <Card  style={{ width: '90rem' }} className="m-3">
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
                <Card.Link href="#"><Link to={`/BlogSingleThree`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>  

            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>

              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>

          </Form>

          // {/* ))}    */}
    // </div>
  );
 };

export default Blog;