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
    <Card.Title>About Us</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Our Story</Card.Subtitle>
    <Card.Text>
      Founded in 2021 to bring junior jalents in jech together with companys and make the entry into tech easier.
    </Card.Text>
  </Card.Body>
</Card>

        </div>
    )
}

export default AboutUs;
