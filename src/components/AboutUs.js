import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


const AboutUs = () => {
    return (
        <div>
            <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
  </Row>
</Container>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>

        </div>
    )
}

export default AboutUs;
