import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';



const LandingPage = ({input:keyword, onChange:setKeyword, onKeyDown}) => {
    return (
        <div className="my-3" >          
      <Container className="justify-content-md-center mb-3">   
        <Row className="justify-content-md-center mb-3 my-3">          
          <Col md-4>
            {/* <SearchBar /> */}
            {/* <InputGroup className="mb-3">
              <Form.Control
                placeholder="search Jobs"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                key="random1"
                value={keyword}      
                // onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={onKeyDown}
              />    
            </InputGroup> */}
          </Col>
          <Col md-4>
            <Button variant="outline-secondary" id="button-addon2" style={{width: '15rem' }} >
            <Link to="/search" style={{color:"black" }}>Start your job search</Link>
            </Button>            
          </Col>          
          <Col md-4></Col>
        </Row>      
        <Row className="justify-content-md-center">
        {/* <SidebarLeft />         */}          
        </Row>
        <Row className="my-3">
          <Card style={{ width: '90rem' }}>
            <Card.Body>
              <Card.Title>BootCampers, welcome to the party!</Card.Title>
              <Card.Subtitle className="mb-2 text-muted ">Lookin' for Your first Job after surviving the BootCamp?</Card.Subtitle>
              <Card.Text>
                We provide You with everything You need as a career shifter in Your first Tech Environment.
              </Card.Text>
            </Card.Body>
          </Card> 
        </Row>   
        <Row className="justify-content-md-center mb-3">
          <Col></Col>
          <Col>
          <Card style={{ width: '15rem' }} >
            <Card.Body>
              <Card.Title className="justify-content-md-center mb-3">Recently added positions</Card.Title>
            </Card.Body>
          </Card>  
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Junior Frontend Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Philipps-Universität Marburg</Card.Subtitle>
                <Card.Text>
                  Become part of our small team in a friendly, academic environment.
                  You will work with React, CSS, HTML and JavaScript...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Junior Backend Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Miele u. Cie.KG</Card.Subtitle>
                <Card.Text>
                  We need support for our backend team immediately!
                  If you know MySQL, Python and or JavaScript: Welcome on board!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Developer in Tourist Management</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Marco Polo GmbH</Card.Subtitle>
                <Card.Text>
                  Need a new Challenge? Then this might be for You! We are looking for a tourist manager who also knows how to
                  use programming to help us out with our new project...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Something Interesting</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Something Interesting</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Something Interesting</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
  
  
        </div>
    )
}

export default LandingPage;
