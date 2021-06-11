import { Link } from 'react-router-dom';
import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Pagination from 'react-bootstrap/Pagination'
import '../css/HeightContainer.css'
import blog from '../pictures/blog_banner1.jpg'
import blogTwo from '../pictures/blog_banner2.jpg'
import blogThree from '../pictures/blog_banner3.jpg'
import blogFour from '../pictures/blog_banner4.jpg'


const Blog = () => {
 
  return (
  
        <div className="all-height">
          <Form style={{ width: '90rem' }} className="m-3">
            <Card  style={{ width: '90rem' }} className="m-3">
              <Card.Body >
                <Card.Title>Why Everyone Should Learn To Code</Card.Title>
                <Card.Subtitle className="mb-2 text-muted m-3">By Ella Patenall</Card.Subtitle>
                <img src={blog} className="blog"></img>
                  
                <Card.Text className="my-3">
                There’s no denying that technology now dominates a huge amount of different industries. 
                Being computer illiterate just won’t cut it any more in the world of work.
                <br></br>
                And ‘learning to code’ seems to be the buzzword at the moment. 
                And everyone from Bill Gates to Obama is encouraging young people to give it a go.
                <br></br>
                But what exactly does learning to code entail? And why is it so important? Read on to find out.
                </Card.Text>    
                <Card.Text>
                #Hashtag
                </Card.Text>
                <Card.Link href="#"><Link to={`/BlogSingle`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>          


            <Card  style={{ width: '90rem' }} className="m-3">
              <Card.Body >
                <Card.Title>What To Study For Careers In New Technologies</Card.Title>
                <Card.Subtitle className="mb-2 text-muted m-3">By Laura T</Card.Subtitle>
                <img src={blogTwo} className="blog"></img>
                  
                <Card.Text className="my-3">
                STEM subjects are prime fields to study if you like the idea of building a career based around an exciting new technology, and a degree in any STEM subject 
                (science, technology, engineering and mathematics) can be the first step towards making a contribution to the next stage of technological innovation.
                <br></br>
                Perhaps you’d like to specialize in robotics engineering, nanoscience and nanotechnology, 3D printing, or maybe you want to earn a cyber security degree. 
                Whichever area of new technology you’re interested in, read on to discover what you can expect from each specialization and how studying STEM subjects can lead on to careers in each area.
                </Card.Text>    
                <Card.Text>
                #Hashtag
                </Card.Text>
                <Card.Link href="#"><Link to={`/BlogSingleOne`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>  

            <Card  style={{ width: '90rem' }} className="m-3">
              <Card.Body >
                <Card.Title>Top 5 Tech Careers Of The Future</Card.Title>
                <Card.Subtitle className="mb-2 text-muted m-3">By Stephanie L</Card.Subtitle>
                <img src={blogThree} className="blog"></img>
                  
                <Card.Text className="my-3">
                Even before the coronavirus pandemic, technologies such as artificial intelligence (AI), machine learning, data analytics and cloud computing had been growing rapidly over the years (even decades). 
                <br></br>
                But in the short space of just seven months they have become essential in today’s society amid the current global health crisis.
                </Card.Text>    
                <Card.Text>
                #Hashtag
                </Card.Text>
                <Card.Link href="#"><Link to={`/BlogSingleTwo`}>Read more</Link>{" "}</Card.Link>    
              </Card.Body>
            </Card>  

            <Card  style={{ width: '90rem' }} className="m-3">
              <Card.Body >
                <Card.Title>How To Get Your First Job In Big Data</Card.Title>
                <Card.Subtitle className="mb-2 text-muted m-3">By Laura Bridgestock</Card.Subtitle>
                <img src={blogFour} className="blog"></img>
                  
                <Card.Text className="my-3">
                Thanks to cloud computing, the rise in smartphone ownership and surge in demand for the “internet of things”,
                <br></br> 
                jobs in big data are expected to grow by 4.4 million by 2024, according to the US Bureau of Labor Statistics.
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
    </div>
  );
 };

export default Blog;