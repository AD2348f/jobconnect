import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import blogFour from '../pictures/blog_banner4.jpg'


import React from 'react'

const BlogSingleThree = () => {


    return (
        <Form>
            <Card style={{ width: '90rem' }} className="m-3">
                <Card.Body >
                    <Card.Title>How To Get Your First Job In Big Data</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted m-3">By Laura Bridgestock</Card.Subtitle>
                    <img src={blogFour} className="blog"></img>
                    
                    <Card.Text className="my-3">
                    Unlike other computer-based career paths, big data touches a wide range of sectors, from advertising to financial services and online shopping. 
                    <br></br>
                    The average salaries earned by graduates in this field are pretty eye-opening too, with computer science graduates in the US earning more than twice the median of all other jobs.
                    <br></br>
                    We spoke to the University of Johannesburg, just as they launched their new Institute for Intelligent Systems (IIS), 
                    <br></br>
                    for their insight into why big data is the go-to place for talented computer science graduates.
                    <br></br>
                    <br></br>
                    What’s big data?
                    <br></br>
                    <br></br>
                    Big data is the aggregation of datasets that are so big they are measured in exabytes (i.e. one quintillion bytes). 
                    <br></br>
                    Big data can include anything from cute animal videos on social media, to your medical history, to bad restaurant reviews on Yelp.
                    <br></br>
                    What does the job market look like in big data at the moment, and does it pay well?
                    <br></br>
                    In 2015, Forbes reported that more data had been created since 2013 than in the entire history of the human race. Why’s that? Because big data is exploding, and more than ever, 
                    <br></br>
                    we need to find new ways to store it, analyze it and use it - that is, narrow down large datasets to just usable information. So, it’s fair to say that prospects are looking good in this sector, 
                    <br></br>
                    with average salaries of US$91,000 in the US, US$46,000 in the UK and US$61,200 in Ireland, according to Payscale.
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

export default BlogSingleThree