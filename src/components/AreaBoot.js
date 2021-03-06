import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const AreaBoot = () => {
    return (
        <Container style={{ width: '90rem' }}>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Holy Git! Coding School</Card.Title>
                <Card.Text>
                    Wait for it....
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="bg-dark text-white mb-5">
        <Card.Body>
        <Image src="http://via.placeholder.com/640x360"  />
        {/* <img src="http://via.placeholder.com/640x360"></img> */}
            <Card.ImgOverlay>
                <Card.Title>Learning copy and paste since 2021</Card.Title>
                    <Card.Text>
                        become one with the matrix
                    </Card.Text>
            </Card.ImgOverlay>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body>
                    <Card.Title>All Your base are belong to us!</Card.Title>
                        <Card.Text>
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText   
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText   
                        TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                        </Card.Text>
                
                <Nav.Item>
                    <Nav.Link title="Item">
                        <Link to="/createadd" style={{color:"white"}}>
                            <Button variant="primary">Create Vacancy</Button>
                        </Link>
                    </Nav.Link>
                  </Nav.Item>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default AreaBoot