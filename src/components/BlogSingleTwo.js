import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import blogThree from '../pictures/blog_banner3.jpg'


import React from 'react'

const BlogSingleTwo = () => {


    return (
        <Form>
            <Card style={{ width: '90rem' }} className="m-3">
                <Card.Body >
                    <Card.Title>Top 5 Tech Careers Of The Future</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted m-3">By Stephanie L</Card.Subtitle>
                    <img src={blogThree} className="blog"></img>
                    
                    <Card.Text className="my-3">
                    Even before the coronavirus pandemic, technologies such as artificial intelligence (AI), machine learning, data analytics and cloud computing had been growing rapidly over the years (even decades). 
                    <br></br>
                    But in the short space of just seven months they have become essential in today’s society amid the current global health crisis.
                    <br></br>
                    With such a driving force behind these technological adaptions, demand has grown exponentially for both jobs and individuals with the skills and knowledge 
                    <br></br>
                    which meet the needs of digitally transformed industries and sectors.
                    <br></br>
                    In fact, in 2018 it was reported that the demand for AI skills had more than doubled since 2015, with the number of job postings up by 119 percent, according to online jobs portal Indeed.
                    <br></br>
                    Fortunately, the University of the Witwatersrand’s School of Computer Science and Applied Mathematics is getting students ‘future ready’ with its range of undergraduate and postgraduate 
                    <br></br>
                    degree programs that are designed to support students develop the skills, knowledge and personality needed to thrive in this new era of technology.
                    <br></br>
                    The university’s newly-appointed Vice-Chancellor Designate Zeblon Vilakazi has recently spoken about his dreams of transforming Wits University into an innovation hotbed and 
                    <br></br>
                    deliver the same world-changing technologies as MIT in the US.
                    <br></br>
                    “We need to continue to develop the originators, innovators and critical thinkers who can help us solve the problems of the 21st century,” he said.
                    <br></br>
                    So, if you want to pursue a career in artificial intelligence, data science or software development, what kind of jobs should you look for? What skills do you need to get hired? 
                    <br></br>
                    What type of salary can you expect? Let’s take a look at some of the top careers that are redefining the technology industry.
                    </Card.Text>    
                    <Card.Text>
                        #Hashtag
                    </Card.Text>    
                </Card.Body>
            </Card>   

            <Form.Group controlId="exampleForm.ControlTextarea1" style={{ width: '50rem' }} className="m-3">
                <Form.Label>Write a Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="m-3" as="input" type="submit" value="Submit" />{' '}
        </Form>
    )
}

export default BlogSingleTwo