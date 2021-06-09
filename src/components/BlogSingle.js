import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import React from 'react'

const BlogSingle = () => {


    return (
        <Form>
            <Card style={{ width: '90rem' }} className="m-3">
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

export default BlogSingle
