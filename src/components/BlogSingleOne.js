import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import blogTwo from '../pictures/blog_banner2.jpg'


import React from 'react'

const BlogSingleOne = () => {


    return (
        <Form>
            <Card style={{ width: '90rem' }} className="m-3">
                <Card.Body >
                    <Card.Title>What To Study For Careers In New Technologies</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted m-3">By Laura T</Card.Subtitle>
                    <img src={blogTwo} className="blog"></img>
                    
                    <Card.Text className="my-3">
                    How to prepare for a career in new technology
                    <br></br>
                    <br></br>
                    Just because you want to pursue a career in new technologies, that doesn’t mean you necessarily need to study that exact technology right from the start. 
                    <br></br>
                    As with many areas of expertise, it is essential that you first learn the basics – the fundamentals of your area of interest. Depending on your desired specialization, 
                    <br></br>
                    this basic knowledge can be provided across STEM subjects and related technology degrees, including biological science, biomedical science, chemistry, computer science, 
                    <br></br>
                    engineering (electrical, mechanical, chemical, civil, aeronautical, etc.) materials science, math, medicine, pharmacy, pharmacology, and physics.
                    <br></br>
                    <br></br>
                    These initial pathways will define the way in which you study the new technology in question, so you should take time to consider which route to take. 
                    <br></br>
                    If you’re interested in innovating medical technology, then biology, chemistry and medicine would each give you foundational knowledge of the sector. 
                    <br></br>
                    Meanwhile, if you want to go into robotics engineering, a first degree in mechanical engineering could be a wise choice.
                    <br></br>
                    <br></br>
                    Although in the first year of most technology degrees you’ll be focusing on the fundamentals, when choosing a program it’s important to consider which universities offer 
                    <br></br>
                    advanced modules in your specific area of interest. Although not all technology degrees will offer modules with a specific focus on new technologies, 
                    <br></br>
                    most will offer some sort of specialization in your second and third years of study, giving you the chance to hone your studies towards a career in new technology.
                    <br></br>
                    <br></br>
                    This modular information will often be on the website of the university in question, alongside the overall program details.
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

export default BlogSingleOne