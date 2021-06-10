import React, { useState, useEffect, useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
import {AuthContext} from '../AuthContext'




const AreaComp = () => {
    const {authToken} = useContext(AuthContext)
    const [me, setMe] = useState([]);

    useEffect(() => {
        axios.get('https://jobconnect-try.herokuapp.com/auth/me',{headers:{Authorization: `Bearer ${authToken}`}})
        .then(res => setMe(res.data.data)) 
    },[])

    return (
        <Container style={{ width: '90rem' }}>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Weyland Yutani</Card.Title>
                <Card.Text>
                    Building better Worlds
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className="bg-dark text-white mb-5">            
        <Card.Body>
        
        <Image src="http://via.placeholder.com/640x360"  />
        {/* <img src="http://via.placeholder.com/640x360"></img> */}
            <Card.ImgOverlay>
                <Card.Title>We design the Future</Card.Title>
                    <Card.Text>
                        Look at our awesome stuff that we build. Be a Part of it!                        
                    </Card.Text>
            </Card.ImgOverlay>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body>
            <h1>{me.username} {me.role}</h1>
                    <Card.Title> All Your base are belong to us!</Card.Title>
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

export default AreaComp
