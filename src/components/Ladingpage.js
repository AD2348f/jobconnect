import React from 'react';
import Card from 'react-bootstrap/Card';
import SearchBar from './SearchBar';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SidebarLeft from './SidebarLeft';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { Columns } from 'react-bootstrap-icons';


const LandingPage = () => {
    return (
        <div>          
      <Container className="justify-content-md-center mb-3">   
        <Row className="my-3">
          <Col></Col>
          <Col>
            <SearchBar />
          </Col>
          <Col>
            <Button variant="outline-secondary" id="button-addon2" >
              Search
            </Button>
            <Button variant="outline-secondary" id="button-addon2">
              X
            </Button>
          </Col>          
        </Row>      
        <Row className="justify-content-md-center">
        {/* <SidebarLeft />         */}          
        </Row>
        <Row className="my-3">
          <Card style={{ width: '90rem' }}>
            <Card.Body>
              <Card.Title>LandingPage</Card.Title>
              <Card.Subtitle className="mb-2 text-muted ">Welcome</Card.Subtitle>
              <Card.Text>
                Find your first coding Job
              </Card.Text>
            </Card.Body>
          </Card> 
        </Row>        
        <Row>
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
